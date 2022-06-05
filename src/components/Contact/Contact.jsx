import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FaPhoneAlt } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
   
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    toast.success("Email sent successfully!", {theme: "dark"});
    emailjs.sendForm('service_w5d77ad', 'template_9jfpgvj', form.current, 'cGVpcKI-EpNcDW6cr')
    
    e.target.reset()
  };
  return (
    <section id = "contact">
      <h5>Reach out</h5>
      <h2>Contact me</h2>

      <div className = "container contact_container">
        <div className="contact_options">
          <article className="contact_option">
          <HiOutlineMail className="contact-icon"/>
          <h4>Email</h4>
          <h5>williambusinessinq@gmail.com</h5>
          <a href="mailto:williambusinessinq@gmail.com">Send me an email</a>
        </article>
        <article className="contact_option">
          <FaPhoneAlt className="contact-icon"/>
          <h4>Phone Number</h4>
          <h5>775 092 645</h5>
          <a href="tel:775092645">Call Me</a>
        </article>
      </div>
      <form ref = {form} onSubmit = {sendEmail}>
        <input type="text" name="name" placeholder="Enter Your Name" required />
        <input type="text" name="email" placeholder="Enter Your Email" required />
        <textarea name="message" rows="7"placeholder="Enter Your Message" required></textarea>
        <button  type="submit" className="btn btn-transparent">Send Message</button>
        <ToastContainer className = "toast-container"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      </form>
    </div>
      

    </section>
  )
}

export default Contact