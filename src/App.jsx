import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import Profile from './components/Profile/Profile';

const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})


function App() {

  return (
    <>
      <WagmiConfig config={config}>
        <Profile />
      </WagmiConfig>
    </>
  )
}

export default App
