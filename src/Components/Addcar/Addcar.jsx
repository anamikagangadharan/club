import React, { useState } from 'react';
import axios from 'axios';
import css from "./Addcar.module.css"

const Addcar = () => {

  const [registrationNumber, setRegistrationNumber] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [power, setPower] = useState('');
  const [torque, setTorque] = useState('');
  const [color, setColor] = useState('');
  

  const handleRegistrationNumberChange = async (e) => {
    const enteredRegistrationNumber = e.target.value;
    setRegistrationNumber(enteredRegistrationNumber);





    try {
      const response = await axios.get(`/api/car-details/${enteredRegistrationNumber}`);
      const { data } = response;

      if (data) {
        setMake(data.make);
        setModel(data.model);
        setPower(data.power);
        setTorque(data.torque);
      } else {
        setMake('');
        setModel('');
        setPower('');
        setTorque('');
      }
    } catch (error) {
      console.error('Error fetching car details:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/car-details', {   //dummy api
        registrationNumber, 
        make,
        model,
        power,
        torque,
        color,
      });

      console.log('Car details added:', response.data);
      setRegistrationNumber('');
      setMake('');
      setModel('');
      setPower('');
      setTorque('');
      setColor('');
    } catch (error) {
      console.error('Error adding car details:', error);
    }
  };








  return (
    <div className={css.container}>

        <div className={css.div1}>
            <span>Add Car Details</span>
            <span>Skip</span>
        </div>


        <div className={css.div2}>
            <form className={css.form1}  onSubmit={handleSubmit}>
                <div className={css.filediv}>
                <input className={css.file} type="file"   placeholder='hhfgf'/>
                </div>
                
                <input className={css.sinput} type="text"  placeholder='Vehicle Registration number'  value={registrationNumber}   onChange={handleRegistrationNumberChange}/>
                <input className={css.sinput} type="text"  placeholder='Make' value={make} readOnly />
                <input className={css.sinput} type="text"  placeholder='Model' value={model} readOnly/>
                <input className={css.sinput} type="text"  placeholder='Power (bhp@rpm)' value={power} readOnly />
                <input className={css.sinput} type="text"  placeholder='Torque (Nm@rpm' value={torque} readOnly />
                <input className={css.sinput} type="text" placeholder='color' value={color}  onChange={(e) => setColor(e.target.value)} />
                 
                 <button className={css.savebutton}type="submit">Save</button>
            </form>
        </div>




        {/* <div className={css.div3}></div> */}
      
    </div>
  )
}

export default Addcar
