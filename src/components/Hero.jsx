import {useState}from 'react'

const Hero = ({titleData, createCampaign}) => {
  const [campaign, setCampaign] = useState({
    title:'',
    description:"",
    amount:"",
    deadline:''
  })

  const  createNewCampaign = async (e) => {
    e.preventDefault();
    try{
    const data  = await createCampaign(campaign); 
    console.log(data)
    }catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="relative">
      <span className=""></span>
      <img
        src=""
        alt=""
        className="absolute inset-0 object-cover w-full
      h-full"
      />
      <div
        className="relative bg-opacity-75
     bg-black "
      >
        <img src="dall.svg" alt="" />
        <div
          className=" relative px-4
            py-16 mx-auto overflow-hidden sm:max-w-xl
            md:max-w-full lg:max-w-screen-xl md:px-24
             lg:px-8 lg:py-20"
        >
          <div
            className="flex flex-col items-center
               justify-between xl:flex-row"
          >
            <div
              className="w-full max-w-xl mb-12
                xl:mb-0 xl:pr-16 xl:w-7/12"
            >
              <h2
                className="max-w-lg mb-6 font-sans text-xl
                  font-bold tracking-tight text-white sm:text-5xl
                  sm:leading-none "
              >
                Cripto King <br className="hidden md:block leadind-[10px]"  />
                Helping Platform Ok.
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Here you are This platform is main for less prevlegde people not
                a scam we will verify your data to make sure you  are not a scammer
              </p>
              <a
                href="/"
                className="inline-flex items-center font-semibold
              tracking-wider transition-colors duration-200
              text-red-200 hover:text-red-100 "
              >
                Learn More
                <img src="sla.jpg" alt="" />
              </a>
            </div>
            <div>
              <div
                className="w-full max-w-xl
                  xl:px-0 xl:w-11/12 "
              >
                <div
                  className="bg-white rounded shadow-2xl
                       p-1 sm:p-10 "
                >
                  <h3
                    className="mb-4 text-xl text-semibold 
                        sm:text-center sm:mb-4 sm:text-2xl"
                  >
                    Campaign
                  </h3>
                  <form className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block 
                    bm-1 font-medium"
                    >
                      Title
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          title: e.target.value,
                        })
                      }
                      placeholder="Title"
                      requiredtype="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transtion
                  duration-200 bg-green-200 border-green-900
                  rounded shadow:sm appearance-none focus:border-black
                  focus:shadow-outline focue:otline-none"
                      id="firstName"
                      name="firstName"
                    />
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="lastName"
                        className="inline-block 
                  mb-1 font-medium"
                      >
                        Description
                      </label>
                      <input
                        onChange={(e) =>
                          setCampaign({
                            ...campaign,
                            description: e.target.value,
                          })
                        }
                        placeholder="Description"
                        requiredtype="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transtion
                  duration-200 bg-green-200 border-green-900
                  rounded shadow:sm appearance-none focus:border-black
                  focus:shadow-outline focue:otline-none"
                        id="lastName"
                        name="lastName"
                      />
                    </div>

                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="target"
                        className="inline-block 
                  mb-1 font-medium"
                      >
                         Amount
                      </label>
                      <input
                        onChange={(e) =>
                          setCampaign({
                            ...campaign,
                            amount: e.target.value,
                          })
                        }
                        placeholder="Amount"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transtion
                  duration-200 bg-green-200 border-green-900
                  rounded shadow:sm appearance-none focus:border-black
                  focus:shadow-outline focue:otline-none"
                        id="amount"
                        name="amount"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block 
                  mb-1 font-medium"
                      >
                        Target Date
                      </label>
                      <input
                        onChange={(e) =>
                          setCampaign({
                            ...campaign,
                            deadline: e.target.value,
                          })
                        }
                        placeholder=" Target Date "
                        required
                        type="date"
                        className="flex-grow w-full h-12 px-4 mb-2 transtion
                  duration-200 bg-green-200 border-green-900
                  rounded shadow:sm appearance-none focus:border-black
                  focus:shadow-outline focue:otline-none"
                        id="target"
                        name="target"
                      />
                    </div>
                    <div className='mt-4 mb-2 sm;mb-4'>
                      <button className='ínline-flex items-center
                      justify-center w-full h-12 px-6 font-medium
                      tracking-wide text-white transition duration-200
                      rounded shadow:md bg-red-500 hover:bg-red-400
                      focus:outline-none focus:shadow -outline '
                      type='submit' onClick={(e) => createNewCampaign(e)}>
                        Create Campaign
                      </button>
                    </div>
                    <p className='text-xl text-gray-400 sm:text-sm'>
                    Create your Campaign and raise funds
                     </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero