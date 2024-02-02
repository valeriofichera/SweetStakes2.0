import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import MainPage from "./MainPage"
import HackPage from "./HackPage"
import NoHackPage from "./NoHackPage"

import "./polyfills"
import "@rainbow-me/rainbowkit/styles.css"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { Chain, configureChains, createClient, WagmiConfig } from "wagmi"
import { mainnet, goerli, hardhat } from "wagmi/chains"
import { infuraProvider } from "wagmi/providers/infura"
import { publicProvider } from "wagmi/providers/public"

function App() {
	const mantleTestnet: Chain = {
		id: 31337,
		name: "Mantle Testnet",
		network: "hardhat",
		iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/27075.png",
		iconBackground: "#000000",
		nativeCurrency: {
			decimals: 18,
			name: "Mantle Testnet Token",
			symbol: "MNT-T",
		},
		rpcUrls: {
			default: {
				http: ["http://127.0.0.1:8545"],
			},
			public: {
				http: [],
				webSocket: undefined,
			},
		},
		blockExplorers: {
			default: { name: "Testnet Explorer", url: "https://explorer.testnet.mantle.xyz/" },
			etherscan: { name: "SnowTrace", url: "https://snowtrace.io" },
		},
		testnet: true,
	}

	const { chains, provider } = configureChains(
		[mainnet, goerli, mantleTestnet, hardhat],
		[infuraProvider({ apiKey: "51282d8221e64ba0a0b0e9dd604ea35a" }), publicProvider()]
	)

	const { connectors } = getDefaultWallets({
		appName: "Firewall Demo",
		chains,
	})

	const wagmiClient = createClient({
		autoConnect: true,
		connectors,
		provider,
	})

	const router = createBrowserRouter([
		{
			path: "/",
			element: <MainPage />,
		},
		{
			path: "/hack",
			element: <HackPage />,
		},
		{
			path: "/no-hack",
			element: <NoHackPage />,
		},
	])

	return (
		<WagmiConfig client={wagmiClient}>
			<RainbowKitProvider chains={chains}>
				<div className="selection:bg-red-500/100 selection:text-slate-100/100">
					<RouterProvider router={router} />
				</div>
			</RainbowKitProvider>
		</WagmiConfig>
	)
}

export default App
