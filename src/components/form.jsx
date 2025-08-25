import { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()

         emailjs.send('service_dhcw70g', 'template_w6tmrpd', formData, 'D1VsjuBqxcqQdk9NO')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log('FAILED...', error);
            alert('Failed to send the message. Please try again.');
        });
    }

    return(
        <div className="flex justify-center">
                <form onSubmit = {handleSubmit} className="flex flex-col gap-3 bg-blue-700 w-1/2 rounded text-neutral-300 m-5 p-5 border-2 border-white shadow-md shadow-orange-400 font-bold text-shadow-sm text-shadow-orange-400">

                    <label htmlFor="name" className="items-start">Name:</label>
                    <input type = "text" name = "name" value={formData.name} onChange={handleChange} className="bg-neutral-300 rounded text-blue-700 w-3/4 border-2 border-orange-400 shadow-lg shadow-white focus:outline-blue-700 focus:shadow-orange-400 p-1"></input>
                
                    <label htmlFor="email" className="items-start">Email:</label>
                    <input type = "email" name = "email"value={formData.email} onChange={handleChange}  className="bg-neutral-300 rounded text-blue-700 w-3/4 border-2 border-orange-400 shadow-lg shadow-white focus:outline-blue-700 focus:shadow-orange-400 p-1"></input>
                
                    <label htmlFor = "message" className="items-start">Message:</label>
                    <textarea name = "message" value={formData.message} onChange={handleChange} className="bg-neutral-300 rounded text-blue-700 w-full min-h-20 border-2 border-orange-400 shadow-lg shadow-white focus:outline-blue-700 focus:shadow-orange-400 p-1"></textarea>
                    
                    <button type="submit" className=" border-2 border-white bg-linear-60 from-orange-400 to-blue-700 m-2 rounded w-1/2 hover:from-blue-700 hover:to-orange-400 hover:font-bold shadow-md shadow-orange-400 self-center focus:outline-blue-700">Send</button>

                </form>
            </div>
    )
}

export default ContactForm