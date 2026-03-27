# Governor Subgraph

This repository contains the configuration and mapping logic to index a DAO on **The Graph**. It transforms raw blockchain events into a relational database that can be queried via GraphQL.

## Schema Entities
* **Proposal**: Tracks ID, proposer, targets, values, and current state.
* **Vote**: Records every individual vote cast, including the weight and reason.
* **Delegate**: Tracks voting power shifts as users delegate their tokens.

## How to Deploy
1. Install Graph CLI: `npm install -g @graphprotocol/graph-cli`.
2. Authenticate: `graph auth --product hosted-service <ACCESS_TOKEN>`.
3. Deploy: `graph deploy --product hosted-service <USER>/<SUBGRAPH_NAME>`.
