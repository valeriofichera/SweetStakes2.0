import "./App.css"
import '@rainbow-me/rainbowkit/styles.css';
import MainPage from "./MainPage"

import "./polyfills"
import "@rainbow-me/rainbowkit/styles.css"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { Chain, configureChains, createClient, WagmiConfig } from "wagmi"
import { mainnet, goerli, hardhat } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"

function App() {

	const pegasus: Chain = {
		id: 1891,
		name: 'Lightlink Pegasus',
		network: 'pegasus',
		iconUrl: 'https://faucet.pegasus.lightlink.io/faucet.png',
		iconBackground: '#fff',
		nativeCurrency: {
		  decimals: 18,
		  name: 'ether',
		  symbol: 'ETH',
		},
		rpcUrls: {
		  public: { http: ['https://replicator.pegasus.lightlink.io/rpc/v1'] },
		  default: { http: ['https://replicator.pegasus.lightlink.io/rpc/v1'] },
		},
		blockExplorers: {
		  default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
		  etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
		},
		contracts: {
		  multicall3: {
			address: '0xca11bde05977b3631167028862be2a173976ca11',
			blockCreated: 11_907_934,
		  },
		},
		testnet: false,
	  };

	const { chains, provider } = configureChains(
		[mainnet, goerli, hardhat, pegasus],
		[publicProvider()]
	)

	const { connectors } = getDefaultWallets({
		appName: "SweetStakes 2.0",
		chains,
	})

	const wagmiClient = createClient({
		autoConnect: true,
		connectors,
		provider,
	})

	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>
				<div className="selection:bg-violet-500/100 selection:text-slate-100/100">
					<MainPage />
				</div>
			</RainbowKitProvider>
		</WagmiConfig>
	)
}

export default App
