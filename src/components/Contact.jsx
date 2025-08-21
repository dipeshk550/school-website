import React,{useState} from "react";
import './Contact.css';

const Contact = ()=>{
    const[formData, setFormData]= useState({
        name:'',
        email:'',
        message:''
    });
    const handleChange =(e)=> {
        setFormData({
            ...formData,[e.target.name]:e.target.value
        });
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        alert(`Thank You,${formData.name}! Your message have sent`);
        setFormData({name:'',email:'',message:''});
    };

    return(
        <section className="contact" id="contact">
            <h2>Contact Us</h2>
            <div className="contact-container">
                <form onClick={handleSubmit}>
                    <input type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                      <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p><strong>Address:</strong> 123 School Street, City, Country</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Email:</strong> info@school.com</p>
            </div>
            </div>
        </section>
    );
};

export default Contact;