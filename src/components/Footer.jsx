import React from 'react'

const Footer = () => {
  const productList = ['Market', 'ERC20', 'Token', 'Donation']
  const contactList = ['ayatullah@gmail.com','soliu@gail.com','Contact Us' ]
 const usefulLink = ['Home', 'About Us', 'Company Bid']

 const date = new Date().getFullYear()
  return (
    <footer
      className="text-center bg-black text-white
    lg:text-left "
    >
      <div className="mx-6 py-10 text-center md:text-left">
        <div
          className="grid-1 grid gap-8 md:grid-cols-2
      lg:grid-cols-4 "
        >
          <div className="">
            <h6 className='mb-4 flex items-center justify-center
            font-semibold uppercase'>
                Crpto King
            </h6>
              <p >
                 Here you can use row fhfhgbvn fhfgry vnvbhfgd hfgdg
                 gfhdhdvxhchcfhfjdh hfgbnvg kzmc bsggd cjjsgds lclkcnc 
              </p>
          </div>
          <div className=''>
            <h6 className='mb-4 flex justify-center font-semibold
                          uppercase md:justify-start'>
                    Product
            </h6>
            {productList.map((product, i)=> (
              <p key={i +1}>
                <a href='#'>{product}</a>
              </p>
            ))}
        </div>
        <div className=''>
          <h6 className='mb-4 flex justify-center font-semibold uppercase
          md:justify-start'> Useful Links</h6>
          {usefulLink.map((link, i) => (
            <p key={ i + 1}>
              <a href='#'>{link}</a>
            </p>
          ))}
        </div>
          <div className=''>
            <h6 className='mb-4 flex justify-center
            font-semibold uppercase md:justify-start'>
                        Contact
            </h6>
            {contactList.map((list, i) => (
              <p className='mb-4' key={i +1}>
                <a href='#'>{list}</a>
              </p>
            ))}
          </div>
        </div>
      </div>  
      <p className='p-4 text-center bg-blue-500'>
        <span> c {date} Copyright</span>
      </p>
    </footer>
  );
}

export default Footer