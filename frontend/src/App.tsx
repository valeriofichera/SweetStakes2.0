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
	// const mantleTestnet: Chain = {
	// 	id: 31337,
	// 	name: "Mantle Testnet",
	// 	network: "hardhat",
	// 	iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/27075.png",
	// 	iconBackground: "#000000",
	// 	nativeCurrency: {
	// 		decimals: 18,
	// 		name: "Mantle Testnet Token",
	// 		symbol: "MNT-T",
	// 	},
	// 	rpcUrls: {
	// 		default: {
	// 			http: ["http://127.0.0.1:8545"],
	// 		},
	// 		public: {
	// 			http: [],
	// 			webSocket: undefined,
	// 		},
	// 	},
	// 	blockExplorers: {
	// 		default: { name: "Testnet Explorer", url: "https://explorer.testnet.mantle.xyz/" },
	// 		etherscan: { name: "SnowTrace", url: "https://snowtrace.io" },
	// 	},
	// 	testnet: true,
	// }

	const { chains, provider } = configureChains(
		[mainnet, goerli, hardhat],
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
