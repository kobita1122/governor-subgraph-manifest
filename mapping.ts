import { ProposalCreated, VoteCast } from "../generated/Governor/Governor"
import { Proposal, Vote } from "../generated/schema"

export function handleProposalCreated(event: ProposalCreated): void {
  let proposal = new Proposal(event.params.proposalId.toString())
  proposal.proposer = event.params.proposer
  proposal.targets = event.params.targets.map<Bytes>((t) => t)
  proposal.values = event.params.values
  proposal.description = event.params.description
  proposal.status = "PENDING"
  proposal.save()
}

export function handleVoteCast(event: VoteCast): void {
  let vote = new Vote(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  vote.voter = event.params.voter
  vote.proposal = event.params.proposalId.toString()
  vote.support = event.params.support
  vote.weight = event.params.weight
  vote.reason = event.params.reason
  vote.save()
}
