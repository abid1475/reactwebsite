import React from 'react'
import './Contact.css'
import { MdMessage } from "react-icons/md";
import { IoIosMailUnread } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa9d3385-1fe4-482e-ad33-7c8ce23da853");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); 
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
        <h3>Send us a message <div className="message"><MdMessage /></div></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Repudiandae nostrum blanditiis magni soluta. Nostrum.</p>
             <ul>
                <li><div className="email i1"><IoIosMailUnread /></div> abid1475@gmail.com</li>
                <li><div className="phone i1 "><MdContactPhone /></div> +1 123-456-7890</li>
                <li> <div className="address i1"><FaRegAddressCard /> </div> 77 Massachusetts Ave, Cambridge <br />MA 02139, United States</li>
             </ul>
        </div>
        <div className="contact-col"> 
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Write your messages here</label>
            <textarea name="message" id="" rows="6" placeholder='Enter your message here' required></textarea>
            <button type='submit' className='btn2 dark-btn1'>Submit Now <span><FaArrowRight /></span></button>
          </form>
          <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
