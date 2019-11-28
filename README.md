
# UDEX-APP-WEB

### Decentralized Exchange App

We believe that private property is untouchable and market access is unconditional.

That is why we engineered a crypto exchange that is equally open to all, lives online forever and unconditionally protects your assets.

It is fully peer-to-peer and works without any centrally managed servers. It can't be stopped, blocked or taken down.

Such approach enables the wallet to operate anywhere and remain censorship-resistant. Only the user is in control of the money.

Wallet to wallet token trading is the most secure way to trade ERC20 tokens directly from your Ethereum wallet.

Trading cryptocurrencies doesn't have to mean losing custody. Use UDEX to maintain control of your ERC20 tokens while trading directly from your wallet. Trade when you want, where you want, without a middleman.

More information - [Software-Design-Specifications](https://github.com/5daytech/dex-app-android/wiki/Software-Design-Specifications)

Join to [builds Telegram channel](https://t.me/udexbuilds).

## Advantages

* <b>No deposits</b> - Save time, avoid fees, and maintain custody of your tokens.

* <b>Quick access</b> – No need to register or verify an account.

* <b>Peer-to-peer</b> – No one can stop or control the trading.

* <b>Cheap and faster transactions</b> – Operations are direct, you don’t have to wait for exchanges or pay any fees.

* <b>Security</b> – The exchange does not hold your funds.

* <b>Privacy</b> – No one except traders can see your personal data, which is kept locally.

* <b>No manipulations</b> – No one can create fake orders or market volume to activate the trades.

  

## Usage

  

Clone this repository and install its dependencies:

  

```

git clone git@github.com:5daytech/udex-app-web.git

cd udex-app-web

yarn

```

  

### Using an existing relayer

  

If you have the URL of an existing relayer, you can use this frontend against it. After installing the dependencies, start the application with this command, replacing `RELAYER_URL` with the proper value:

  

```

REACT_APP_RELAYER_URL='https://RELAYER_URL/v3' REACT_APP_RELAYER_WS_URL='wss://RELAYER_URL/' yarn start

```



## Environment variables

  

You can create a `.env` file to set environment variables and configure the behavior of the dApp. Start by copying the example file (`cp .env.example .env`) and modify the ones you want. Some things you can configure are:

  

-  `REACT_APP_RELAYER_URL`: The URL of the relayer used by the dApp. Defaults to `http://localhost:3000/v3`

-  `REACT_APP_RELAYER_WS_URL`: The Websocket URL of the relayer used by the dApp. Defaults to `http://localhost:3000/`

-  `REACT_APP_FEE_PERCENTAGE`: The fee percentage amount charged on 0x orders filled via the Forwarder. Note this is limited to `*/WETH` orders for the taker.

-  `REACT_APP_FEE_RECIPIENT`: The address which receives the fees from the Forwarder.

-  `REACT_APP_NETWORK_ID`: The network id to build the front end for. E.g `42` for Kovan, `50` for Ganache

-  `REACT_APP_CHAIN_ID`: The chain id to build the front end for. E.g `42` for Kovan, `1337` for Ganache

  

Check `.env.example` for the full list.

  

### Using custom themes

  

If you want to add your own theme for the app, please read the [THEMES.md](THEMES.md) file