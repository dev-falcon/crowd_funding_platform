import React from 'react'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

const Navbar = () => {
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
              <li>Connect Wallet</li>

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