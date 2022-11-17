import React from 'react';
import Service from './Service';
import fluride from '../../assets///images/fluoride.png'
import cavity from '../../assets///images/cavity.png'
import whitening from '../../assets///images/whitening.png'
import treatement from '../../assets/images/treatment.png'
import ButtonPrimary from '../Shared/ButtonPrimary';

const Services = () => {
    const services=[
        {
            _id:1,
            name:'Floried Treatement',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluride
        },
        {
            _id:2,
            name:'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id:3,
            name:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]
    return (
        <div className='my-28'  >
            <div className='text-center  '>
            <h4 className='text-primary text-xl uppercase font-bold '>Our service</h4>
            <h2 className='text-4xl' > Services We Provide</h2>
            </div>
            <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gp-10 '  >
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}>
                    </Service>)
                }
            </div>
            <div>
            <div className="hero min-h-screen">
           <div className="hero-content flex-col lg:flex-row">
              <img src={treatement} className='image-service' style={{
                    height: '500px'
              }} />
            <div className='mx-10' >
             <h1 className="text-5xl font-bold ">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
       <ButtonPrimary></ButtonPrimary>
       </div>
     </div>
   </div>
            </div>
        </div>
    );
};

export default Services;