
import Navbar from '../Components/Navbar'
import '../styles/globals.css'
// import "../styles/Home.module.css"




import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';

const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

function MyApp({ Component, pageProps }) {
  return <>






  <WagmiConfig client={client}>

      <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </WagmiConfig>

  </>

  




    
  
  
  }


export default MyApp
