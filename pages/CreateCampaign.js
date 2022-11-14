import React from 'react'
import  styles from "../styles/CreateCampaign.module.css"

const CreateCampaign = () => {
  return (
    <>

    <div className={styles.main_campaign}>

        <div className={styles.campaign_head}>
            <p>
                Start a New Campaign
            </p>
        </div>


        <div className={styles.campaign_form}>

        <form action="#" className={styles.form}>

        <div className={styles.group}>

            <label for={styles.campaignName}> Campaign Name : </label>

            <input type="text" className={styles.input} />

            </div>

            <div className={styles.group}>

            <label for={styles.campaignDesc}> Campaign Description : </label>

            <textarea className={styles.input} name="" id="" cols="30" rows="4"></textarea>

            </div>


            <div className={styles.group}>

            <label for="campaignImage"> Campaign Image : </label>

            <input type="file" className={styles.input_file} />

            </div>


            <div className={styles.group}>

            <label for="campaignName"> Amount To Be Raised : </label>

            <input type="text" className={styles.input} />

            </div>

            <div className={styles.group_last}>

<input type="button" value="Add Milestones" className={styles.milestones} />
<input type="submit" value="Publish" className={styles.publish} />


            </div>


            


        </form>


        </div>
    </div>


    

    </>
  )
}

export default CreateCampaign