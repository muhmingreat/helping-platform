import React, {useState, useEffect} from 'react'
import Web3Modal from  'web3modal'
import {ethers } from 'ethers'


// internal import
import {address, HelpingPlatformAbi} from './contant'

// fetching smart contract

const fetchContract = (signerOrProvider) => 
 new ethers.Contract (address, HelpingPlatformAbi, signerOrProvider)
    

export const HelpingPlatformContext = React.createContext()

export const HelpingPlatformProvider = ({children}) => {
    const  titleData = 'HelpingPlatform Contract'
    const  [currentAccount, setCurrentAccount] = useState('')

    const createCampaign =  async (campaign) => {

    const  {title,description, amount, deadline} = campaign
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = fetchContract(signer)
    console.log(currentAccount)
    try{
        const  transaction = await contract.createCampaign(
            currentAccount, //owner
            title, // title
            description, // description
            ethers.utils.parseUnits(amount, 18),
            new Date(deadline).getTime() // deadline
        )
        await transaction.wait()
        console.log('Contract call successfully', transaction)

    }catch(error) {
        console.log('Contract call failed', error)
    }
}

    const getCampaign= async () => {
        const provider = new ethers.providers.JsonRpcProvider()
        const contract = fetchContract(provider)
        const campaigns = await contract.getCampaign()
        
        const parsedCampaigns = campaigns.map((campaign, i) => ({
          owner: campaign.owner,
          title: campaign.title,
          description: campaign.description,
          target: ethers.utils.formatEther(campaign.target.toString()),
          deadline: campaign.deadline.toNumber(),
          amountCollected: ethers.utils.formatEther(
            campaign.amountCollected.toString()
          ),
          pId: i,
        }));
        return parsedCampaigns
        
    }
    const getUserCampaigns = async () => {
    const provider = new ethers.providers.JsonRpcProvider()

    const contract = fetchContract(provider)
    const allCampaigns = await contract.getCampaign()

    const accounts =  await window.ethereum.request({
        method: 'eth_accounts'
        
    })
     const  currentUser = accounts[0] 

    const filterCampaign = allCampaigns.filter(
      (campaign) =>
        campaign.owner === "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    );
    const userData = filterCampaign.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      pId: i,
    }));
    return userData
}

 const donate =  async (pId, amount) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = fetchContract(signer)
    
    const  campaignData = await contract.donateCampaign(pId,{
        value : ethers.utils.parseEther(amount)
    })
    await campaignData.wait();
    location.reload()
    return campaignData
}

const getDonations = async(pId) =>{
    const provider = new ethers.providers.JsonRpcProvider()
    const contract = fetchContract(provider)

    const donations =  await contract.getDonators(pId)
    const numberOfDonation = donations[0].length
    
    const parsedDonation = []
    for (let i = 0; i< numberOfDonation; i ++) {
        parsedDonation.push({
            donator: donations[0][i],
            donation: ethers.utils.formatEther(donations[1][i].toString())
        })
    }
    return parsedDonation
}

//   checkif wallet is connected

const checkIfWalletIsConnect = async () => {
    try{

        if(!window.ethereum) {
            return settOpenError(true), setError('Intall metamask')
        } 
        const accounts = await window.ethereum.request({
            method:'eth_accounts'
        }) 
        if(accounts.length ) {
            setCurrentAccount(accounts[0]);
        }else{
            console.log('account not found')
        }
        }catch(error){
          console.log('somethin wrong while connecting to wallet')  
        }
    }
    useEffect(() => {
   checkIfWalletIsConnect()
},[])

const connectWallet = async() => {
    try{
        if(!window.ethereum) return console.log('Install Metamask ')
        
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'})
                
              setCurrentAccount(accounts[0]); 
    
        }catch(error) {
            console.log('Error while connecting to wallect',error)
        }
    }
return  (
    <HelpingPlatformContext.Provider
    value={{
        titleData,
        currentAccount,
        createCampaign,
        getUserCampaigns,
        donate,
        getDonations,
        connectWallet,
        getCampaign
    }}>{children}</HelpingPlatformContext.Provider>
)
}