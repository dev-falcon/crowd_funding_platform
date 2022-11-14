
import Navbar from '../Components/Navbar'
import '../styles/globals.css'
// import "../styles/Home.module.css"

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar />
  <Component {...pageProps} />

  </>

  




    
  
  
  }


export default MyApp
