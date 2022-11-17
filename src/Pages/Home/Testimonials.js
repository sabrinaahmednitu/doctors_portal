import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews=[
        {
            _id:1,
            name:'Winson Herry',
            country:'Washington',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            _id:2,
            name:'Adam Smith',
            country:'Florida',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            _id:3,
            name:'Willeam Carry',
            country:'Alaska',
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3
        },
    ]
    return (
        <section className=' my-20'  >

            {/* header part */}
            <div className='flex  justify-between ' >
                <div>
                    <h4 className="text-xl text-primary font-bold ">Testimonial</h4>
                    <h4 className="text-3xl">What Our Patients Says</h4>
                </div>
                <div>
                    <img className='w-[98px]  lg:w-[200px]' src={quote} alt="" />
                </div>
            </div>

            {/* card part */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 '  >
                {
                    reviews.map(review=> <Review
                    key={review._id}
                    review={review}
                    ></Review>  )
                }
            </div>

        </section>
    );
};

export default Testimonials;