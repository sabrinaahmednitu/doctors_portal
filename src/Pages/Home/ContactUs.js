import React from 'react';
import background from '../../assets/images/appointment.png'
import ButtonPrimary from '../../Pages/Shared/ButtonPrimary'

const ContactUs = () => {
    return (
        <div  style={{
            background:`URL(${background})`
        }}>
            {/* first part */}
            <div className='text-center ' >
           <p className='  text-xl text-secondary font-bold'  >Contact Us</p>
            <h2 className='text-3xl text-white' >Stay connected with us</h2>
           </div>
           {/* second part */}
           <div className='m-[100px] flex justify-center' >
                         <div className='' >
                            <input className='p-2 rounded bg-#FFFFFF lg:w-[450px]' type='email' placeholder='Email' ></input> <br /> <br />
                            <input  className='p-2 rounded bg-#FFFFFF lg:w-[450px] ' type='text' placeholder='Subject' ></input> <br /> <br />
                            <textarea className='p-3 bg-white lg:w-[450px] rounded ' placeholder='Your message' ></textarea> <br /> <br />
                            <ButtonPrimary></ButtonPrimary>
                         </div>
              </div>                                                               
            <div>
              
            </div>                                                                         
          
        </div>
    );
};

export default ContactUs;