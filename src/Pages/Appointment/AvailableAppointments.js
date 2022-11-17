import React, { useEffect, useState } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';
import {format} from 'date-fns';



const AvailableAppointments = ({date}) => {

    const [services,setServices]=useState([]);
    const [treatment,setTreatment]=useState(null);
    

    const formattedDate = format(date ,'pp');
    useEffect(()=>{
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[formattedDate])

    
    // const {data :services ,isLoading , refetch} = useQuery(['available' ,formattedDate], () =>
    // fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res=>res.json())
    //     )
    //     if (isLoading){
    //         return <Loading></Loading>
    //     }

    return (
        <div>
            <h2 className='text-2xl  text-secondary text-center my-12'  >Available Appointments On :  {format(date, 'PP')} </h2>
           <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
               {
                   services?.map(service=><Service 
                   key={service._id}
                   service={service}
                   setTreatment={setTreatment}
                    ></Service>)
               }
           </div>
           {treatment && <BookingModal
            date={date}
            treatment={treatment} 
            setTreatment={setTreatment}
            //refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;