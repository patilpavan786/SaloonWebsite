import React, { useRef,useState } from "react";
import style from "./Contact.module.css";
import { useSpring, animated } from "react-spring";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
function ContactUs() {
  const[email,setEmail]=useState('')
  const[name,setName]=useState('')
  const[message,setMessage]=useState('')
  const introAnimation = useSpring({
    from: { opacity: 0, transform: "translatey(-50px)" },
    to: { opacity: 1, transform: "translatex(0)" },
    config: { duration: 1500 },
  });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_q9wr0fa",
        "template_sy9knwa",
        form.current,
        "JvlQMQ8X4Mdpbz5V5"
      )
      .then(
        (result) => {
          console.log(result.text);
        
        },
        (error) => {
          console.log(error.text);
        }
       
      );

      swal({
        title: "Email Sent Successfully!",
        text: "We Will Get In Touch With You.",
        icon: "success",
        buttons: {
          confirm: {
            text: "Okay",
            value: true,
            visible: true,
            className: style["SweetAlertButton"],
            closeModal: true,
          },
        },
        dangerMode: false,
      }).then((value) => {
        if (value) {
        }
      }); 
      setName('')
      setEmail('')
      setMessage('')
  };
  return (
    <>
      <div id="contact" className={style.ContactContainer}>
        <div className={style.Contact}>
          <animated.div className="intro" style={introAnimation}>
            <h1>Get In touch</h1>
            <p>Leave us a message</p>
            <form ref={form} onSubmit={sendEmail}>
              <input required
                placeholder=" Enter Your Name"
                className={style.input}
                type="text"
                name="user_name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
              <input
              required
                placeholder="Enter Your Email"
                className={style.input}
                type="email"
                name="user_email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <textarea
              required
                placeholder="Write your Message here"
                className={style.input}
                name="message"
                col='6'
                row='6'
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
              />
              <button type="submit" value="Send" className={style.btn} >Send</button>
            </form>
          </animated.div>
        </div>
        <div className={style.MapContainer}>
         
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119285.02375298664!2d74.69381983571307!3d20.885871329664305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec5f2c571bb47%3A0x5827ae11b9d7cb1c!2sDhule%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1679417248437!5m2!1sen!2sus" 
          className={style.Map}
          style={{ border: "0" }}
          title="location"
           loading="lazy" 
          ></iframe>
        </div>
      </div>
     
    </>
  );
}

export default ContactUs;
