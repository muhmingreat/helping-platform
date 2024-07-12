import React, {useContext, useState, useEffect}from 'react'
import { HelpingPlatformContext } from '../Context/HelpingPlatform'
import { Hero ,Card, PopUp} from '../components'

const DonatePage = () => {

const {titleData,getCampaign,createCampaign ,donate, 
  getUserCampaigns, getDonations
} = useContext(HelpingPlatformContext)

const [allCampaigns, setAllCampaigns] = useState()
const [userCampaign,setUserCampaign] = useState()

useEffect(()=> {
    const getCampaignData = getCampaign()
    const userCampaignData = getUserCampaigns()

    return async  () => {
      const allData = await getCampaignData
      const userData = await userCampaignData

      setAllCampaigns(allData)
      setUserCampaign(userData)
    }
},[])

// DONATE POPUP MODAL

const [openModal, setOpenModal] = useState(false)
const [donateCampaign, setDonateCampaign] = useState()
console.log(donateCampaign)
  return (
    <div>
      <Hero titleData={titleData} 
      createCampaign={createCampaign}/>

      <Card title='All Listed Campaign'
        allCampaigns={allCampaigns}
          setDonate={setDonateCampaign}
            setOpenModal={setOpenModal}
          />

        <Card 
          title='Your Create Campaign'
          allCampaign={userCampaign}
          setOpenModal={setOpenModal}
          setDonate={setDonateCampaign}
        />
         {openModal && (
          <PopUp 
            setOpenModal={setOpenModal}
            getDonations={getDonations}
            donate={donateCampaign}
            donateFunction={donate}
          />
         )}

    </div>
  )
}

export default DonatePage