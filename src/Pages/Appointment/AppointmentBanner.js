import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {format} from 'date-fns';


const AppointmentBanner = ({date,setDate}) => {
   //we left the state from here to parrent appointment.js and send them as a props to every component whos need the state
    return (
        <div className="hero min-h-screen bg-base-200"
        style={
            {background :`url(${bg})`}
        }
        >
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist chair' />
    <div>
        
       <DayPicker
       mode="single"
       selected={date}
       onSelect={setDate}
       />
       <p>You picked : {format(date, 'PP')}</p>
       
    </div>
  </div>
</div>
    );
};

export default AppointmentBanner;