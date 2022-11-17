import React from 'react'
import styles from "../styles/Campaign_Page.module.css"
const Campaign_Page = () => {
    return (
        <>


            <div className={styles.main_campaign_section}>

                <div className={styles.campaign_left}>

                    <div className={styles.campaign_left_upper_section}
                    >

                        <p className={styles.upper_section_title}  >
                            Campaign Title
                        </p>

                        <p className={styles.upper_section_desc}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, aliquid eveniet sequi libero earum suscipit aspernatur nihil voluptatibus repudiandae atque nemo exercitationem odio itaque dolore possimus voluptate accusantium dolor quibusdam, ex aperiam? Iste eius omnis suscipit magnam explicabo ad nisi excepturi totam illo harum, molestiae non numquam impedit, ab provident!
                        </p>


                    </div>


                    <div className={styles.campaign_left_Lower_section}>

                        <div className={styles.lower_group}>


                            <label for="Wallet Address of Campaign Creater">
                                Wallet Address of Campaign Creater
                            </label>

                            <input type="text" />


                        </div>

                        <div className={styles.lower_group}>


                            <label for=" Campaign Running Dates " >
                                Campaign Running Dates <br />
                            </label>

                            <div className={styles.dates_section}>

                            <label for=" Campaign Running Dates">
                                From
                            </label>

                            <input type="text" readOnly value="01/11/2022" />

                            <label for=" Campaign Running Dates">
                                To
                            </label>

                            <input type="text" readOnly value="10/11/2022" />
                            </div>


                        </div>


                        <div className={styles.lower_group}>

                        <div className={styles.milestones}>



                            <label for="Campaign milestones ">
                                Campaign Milestones
                            </label>

                            <select name="milestones">
                                <option value="Milestone-1">1/11/2022</option>
                                <option value="Milestone-2">5/11/2022</option>
                                <option value="Milestone-3">10/11/2022</option>

                            </select>

                        </div>

                        </div>





                    </div>

                </div>



                <div className={styles.campaign_right}>


                    <div className={styles.right_group}>


                        <label for="Total Amount Raised">
                            Total Amount Raised
                        </label>

                        <input type="text" readOnly value="4 ETH" />


                    </div>


                    <div className={styles.right_group}>


                        <label for="Amount To Be Raised">
                            Amount To Be Raised
                        </label>

                        <input type="text" readOnly value="12 ETH" />


                    </div>


                    <div className={styles.right_group}>


                        <label for="Invest">
                            Invest
                        </label>

                        <input type="text" />
                        <input type="button" className={styles.payment_btn} value="Payment" />


                    </div>




                </div>


            </div>




        </>
    )
}

export default Campaign_Page