import React from 'react'

const Card = ({allCampaigns,setOpenModal, setDonate, title}) => {
 console.log(allCampaigns)

 const dayLeft = (deadline) => {
  const different = new Date(deadline).getTime() -  Date.now();
  const remainingDays = different / (1000 * 3600 * 24)
  return remainingDays.toFixed(0) 
 }
  return (
    <div
      className="px-4 py-18 mx-auto 
    sm:max-w-lg md:w-full lg:max-w-screen-xl
    md:px=24 lg:px-8 lg:py-20"
    >
      <div
        className="py-16 text-2xl font
      -bold leading-3"
      >
        {title}
      </div>
      <div
        className="grid gap-5 lg:grid-cols-3 
      sm:max-sm sm:mx-auto lg:maxw-lg-full"
      >
        {allCampaigns?.map((campaign, i) => (
          <div
            onClick={() => (setDonate(campaign), setOpenModal(true))}
            key={i + 1}
            className="cursor-poniter border overflow-hidden 
          transition-shadow duration-300 bg-white rounded"
          >
            <img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
              className="object-cover w-full h-64 rounded"
            />
            <div className="py-3 pl-2">
              <p
                className="mb-2 text-sm font-semibold
              text-gray-900 uppercase "
              >
                Days Left: {dayLeft(campaign.deadline)}
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-block transition-color
              duration-200 hover:bg-purple-700"
              >
                <p className="text-2xl font-bold leading-3">{campaign.title}</p>
              </a>
              <p className="mb-4 text-gray-700">{campaign.description}</p>
              <div className="flex space-x-4">
                <p className="font-semibold">Target: {campaign.target} ETH</p>
                <p className="font-semibold">
                  Raised:{campaign.amountCollected} ETH
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card