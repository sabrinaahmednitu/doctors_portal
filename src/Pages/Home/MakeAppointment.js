import React from 'react';
import appointment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor.png'
import ButtonPrimary from '../Shared/ButtonPrimary';


const MakeAppointment = () => {
    return (
        <section style={{
            background :`url(${appointment})`
        }} className='flex  justify-center items-center'  >
            <div className='flex-1 hidden lg:block'>
                <img className='lg:mt-[-161px]' src={doctor} alt="" />
            </div>
            <div className='flex-1  mx-5 my-5 '>
                  <h3 className='text-xl text-primary font-bold'  >Appointment</h3>
                  <h4 className='text-3xl text-white'  >Make an appointment Today</h4>
                  <p className='text-white ' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <ButtonPrimary className='mt-1' ></ButtonPrimary>
            </div>
        </section>
    );
};

export default MakeAppointment;