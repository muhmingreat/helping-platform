import {useState, useEffect}from 'react'

const PopUp = ({setOpenModal,donate,
  donateFunction, getDonations}) => {

     const [amount, setAmount] = useState('')
     const[allDonationData, setAllDonationData] = useState()

const createDonation = async () => {
  try{
      const data = await donateFunction(donate.pId ,amount)
  console.log(data)
    }catch(error){
console.log(error)
  }
}

useEffect(()=> {
 const donationListData = getDonations(donate.pId)

 return async () => {
  const donationData = await donationListData;
  setAllDonationData(donationData)
 }
},[])
  return (
    <>
      {" "}
      <div
        className="flex  justify-center items-center flex-start 
        overflow-x-hidden fixed
    overflow-y-aoto inset-0 z-50 outline-none focus:outline-none-"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* content */}
          <div
            className="border-0 rounded-lg shadow-lg relative flex flex-col
        w-full bg-white outline-none focus:outline-none"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between
            p-3 border-b border-solid border-slate-200 rounded-t"
            >
              <h3 className="text-3xl font-semibold">{donate.title}</h3>
              <button
                className="p-1 ml-auto
                  bg-transparent border-0 text-black opacity-5
                  float-right text-3xl leading-none outline-none
                  focus-outline-none font-semibold  "
                onClick={() => setOpenModal(false)}
              >
                <span
                  className="bg-transparent text-black opacity-5 h-6
                    text-3xl
                    block outline-none focus:outline-none "
                >
                  X
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 leading-relaxed">
                {donate.description}
              </p>
              <input
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                required
                type="text"
                className="flex-grow w-full h-12 py-4 mb-2
              transition duration-200 bg-white border border-gray-399 rounded shadow-sm
              appearance-none focus:border-deep-purple-accent-400  focu:outline-none
              focus:shadow-outline"
                id="firstNmae"
                name="firstName"
              />
              {allDonationData?.map((donate, i) => (
                <p key={i}
                  className="my-4 text-slate-200 text-lg leading-relaxed
                "
                >
                  {i + 1}: {donate.donations}
                  {donate.donator.slice(0, 35)}
                </p>
              ))}
            </div>
            {/* footer */}
            <div
              className="flex- items-center justify-end p-6 border-t
            border-solid border-slate-200 rounded-t"
            >
              <button
                className="text-red-500 background-transparent font-bold uppercase
             px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear
             transtion-all duration-150 "
                type="button"
                onClick={() => setOpenModal(false)}
              >
                Close
              </button>

              <button
                className="background text-white active:bg-emerald-400
             font-bold text-sm px-6 my-1 rounded shadow hover:shadow-lg
             outline-none focus:outline-none mr-1 linear transition-all duration-150 "
                type="button"
                onClick={() => createDonation()}
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default PopUp