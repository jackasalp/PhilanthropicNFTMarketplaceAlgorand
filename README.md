<!--suppress HtmlDeprecatedAttribute -->
<div align="center">

Example project for minting and listing NFTs using [algosdk](https://www.npmjs.com/package/algosdk).

</div>

---

**Table of content**s

- [Introduction](#introduction)
- [Setup](#setup)

---

## Introduction

This repo serves as a reference implementation for minting and selling/purchasing NFTs using [algosdk](https://www.npmjs.com/package/algosdk). It consists of:

> A **NextJS** app that allows you to mint and list NFTs

> An **Express** api to handle authentication and syncing listings with the blockchain

---

## Setup

This repository uses workspaces and has only been tested with [Yarn 3](https://yarnpkg.com/). Other package managers may work but are not officially supported.

#### Preqrequisites

- [Node.js](https://nodejs.org/en/) (v16+)
- [Yarn](https://yarnpkg.com/) (v3+)
- [Postgres](https://www.postgresql.org/) (v13+)

---

## Getting started

Create an `.env.development` file in the root of the repository and add values for the following:

| Name                       | Description                           | Example                                                      |
| -------------------------- | ------------------------------------- | ------------------------------------------------------------ |
| **Shared**                 |                                       |
| `ALGO_NETWORK`             | Which network to use                  | `MainNet \| TestNet`                                         |
| `IPFS_GATEWAY`             | IPFS gateway                          | `https://ipfs.io/ipfs/`                                      |
| **API**                    |                                       |
| `JWT_TOKEN`                | JWT token used for authentication     | `****`                                                       |
| `MASTER_MNEMONIC`          | Mnemonic for the master account       | `****`                                                       |
| `PURESTAKE_KEY`            | Used to configure the AlgoSDK Indexer | `****`                                                       |
| `PLATFORM_ADDRESS`         | Address to use for the platform       | `BY5QJM5JBUXWAIXCAHBAGWCNPF3TVEXSUWMTIJ2J7GQ7VTHLCECAXJNROM` |
| `PLATFORM_PERCENTAGE`      | Platform percentage                   | `20`                                                         |
| `ROYALTY_PERCENTAGE`       | Royalty percentage                    | `20`                                                         |
| **Webapp Configuration**   |                                       |
| `WEB3_STORAGE_API_TOKEN`   | Storage token for uploads             | `****`                                                       |
| `API_ROOT_URL`             | Root URL for the API                  | `http://localhost:5002`                                      |
| **Database Configuration** |                                       |
| `POSTGRES_HOST`            | Postgres host                         | `localhost`                                                  |
| `POSTGRES_PORT`            | Postgres port                         | `5432`                                                       |
| `POSTGRES_USER`            | Postgres user                         | `postgres`                                                   |
| `POSTGRES_PASSWORD`        | Postgres password                     | `postgres`                                                   |
| `SSL_REQUIRED`             | SSL required for Postgres             | `true \| false`                                              |

Now you can start the project using the following commands:

```sh
# Install all dependencies
yarn

# Build packages
yarn build

# Run the NextJS app and Express API in parallel
yarn develop
```
