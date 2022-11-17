import React from 'react'
import Link from 'next/link'

import { useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import axios from 'axios';


import styles from '../styles/Home.module.css'

const Navbar = () => {


  const { connectAsync } = useConnect();

    const handleAuth = async () => {
        const { account, chain } = await connectAsync({ connector: new InjectedConnector() });

        const userData = { address: account, chain: chain.id, network: 'evm' };

        console.log(userData)
    };





  return (
    <>
        
        <div className={styles.header_section}>
          <div className="left_header">
            <p>INVESTin</p>
          </div>

          <div className={styles.mid_header}>
            <ul className={styles.mid_ul}>
              <li>
              <Link href="/">Home</Link>
              </li>
              <li>About Us</li>
              <li  onClick={() => handleAuth()}>Connect Wallet</li>

            </ul>


          </div>

          <div className={styles.right_header}>
            <p>
            <Link href="/CreateCampaign" >
            Start Campaign </Link>
           </p>
          </div>
        </div>
    </>
  )
}

export default Navbar