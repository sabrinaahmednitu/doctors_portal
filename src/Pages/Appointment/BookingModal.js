import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast} from 'react-toastify';
import {format} from 'date-fns';




const BookingModal = ({ date , treatment , setTreatment ,refetch }) => {
    const {_id,name,slots}=treatment;
    const [user] = useAuthState(auth);
    const formattedDate=format(date, 'PP') ;
         //console.log(_id,name,slot);
    const handleBooking=(event)=>{
      event.preventDefault();
      const slot=event.target.slot.value;

     const booking={
                treatmentId :_id,
                treatment: name,
                 date :formattedDate,
                 slot,
                 patient:user.email,
                 patientName:user.displayName,
                 phone: event.target.phone.value
      }
      fetch('http://localhost:5000/booking' ,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body : JSON.stringify(booking)
      })
      .then(res=>res.json())
      .then(data=>{
        //console.log(data);
        if(data.success){
          toast(`Appointment is set ,${formattedDate} at ${slot}`)
        }
       else{
        toast.error(`Already have an appoitment on ${data.booking?.date} at ${data.booking?.slot}`)
       }
       refetch();
         setTreatment(null);
      });
    }
    return (
        <div> 
          
          <input type="checkbox" id="booking-modal" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="font-bold text-lg text-secondary">Booking for : {name}</h3>

             <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-4' >
               {/* date input */}
             <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
             {/* for slots */}
             <select name="slot" className="select select-bordered w-full max-w-xs">
               {
                 slots.map((slot,index)=> <option 
                  key={index}
                  value={slot}  
                  >{slot}</option> )
               }
              </select>
               {/* name input */}
             <input type="text" name="name" disabled value={user?.displayName || '' }  className="input input-bordered w-full max-w-xs" />
              {/* email input */}
             <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
              {/* phone input */}
             <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
             <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
             </form>

            </div>
          </div>
        </div>
    );
};

export default BookingModal;