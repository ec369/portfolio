import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
//import { useCart } from '../../hooks/useCart';
import '../checkoutform/CheckoutForm.css';
//import { useNavigate } from 'react-router-dom'; //useNavigate desde 'react-router-dom' para acceder al objeto Navigate y poder redirigir al usuario 
//import ReCAPTCHA from "react-google-recaptcha"

function CheckoutForm() {
  const form = useRef();
 // const { cart } = useCart();
  //const navigate = useNavigate(); // Obtiene el objeto Navigate

  const [submitted, setSubmitted] = useState(false); // Estado para mostrar el mensaje de agradecimiento
  const [error, setError] = useState(null); // Estado para el mensaje de error
  const [capVal, setcapVal]=useState(null); //estado captura recaptcha

 //       await emailjs.send('service_ce5n4xq', 'template_x6fy78m', pedido, 'E2NT2jqKP_mnY6XUA');

 const sendEmail = (e) => {
  e.preventDefault();

    // Obtén los valores de los campos de email
    const userEmail = form.current['user_email'].value;
    const repeatEmail = form.current['user_repeat_email'].value;

    // Valida si los campos de email coinciden
    if (userEmail !== repeatEmail) {
      setError('Los campos de email no coinciden. Por favor, revísalos.');
      return;
    }


  emailjs.sendForm('service_ce5n4xq', 'template_x6fy78m', form.current, 'E2NT2jqKP_mnY6XUA')
    .then((result) => {
        console.log(result.text);
        setSubmitted(true); // Establece submitted a true después de enviar el formulario

        // Redirige al usuario al home después de 2 segundos
        setTimeout(() => {
      // navigate('/');
        }, 6000);
      }, (error) => {
        console.log(error.text);
      });
  };


return (
  <div className='z-20'>
    {submitted ? (
        <div className="form-group text-white">
          <p className='text-white text-center'>Gracias por su mensaje, me pondre en contacto con usted!.</p>
        </div>
      ) : (

    <form ref={form} onSubmit={sendEmail}>
      {/* Campos del formulario (nombre, email, etc.) */}
      <div className="form-group " >
  
        <input className="bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all text-white" placeholder='Name' type="text" name="user_name" />
      </div>

      <div className="form-group">
    
        <input className=" bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all text-white" 
            placeholder='Last Name' type="text" name="user_lastname" />
      </div>

      <div className="form-group">
  
        <input className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all text-white' 
            placeholder='Email' type="email" name="user_email" />
      </div>

      <div className="form-group">
        <input className="bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all text-white" 
            placeholder="Repite Email" type="email" name="user_repeat_email" />
      </div>

      <div className="form-group">
     
        <input className="bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all text-white" 
            placeholder="Phone" type="text" name="user_phone" />
      </div>

      {/* Campos para los detalles del pedido (productos del carrito) */}
      {/* <input
        type="text"
        name="user_name"
        value={cart.map((product) => `${product.title} - Cantidad: ${product.quantity}`).join('\n')}
        style={{ display: 'none' }}
      /> */}

      <div className="form-group ">
   
        <textarea className="bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all text-white" placeholder="Message" name="message" />
      </div>
    
      {error && <p className="error-message">{error}</p>}
      {/* <ReCAPTCHA  sitekey="6LeQYUgpAAAAAPFCB_sbGH98Eq-wqt4z3ffGz7V3"
          onChange={(val) => setcapVal(val)}>
          disabled={!capVal}  va en button atras de clasname
        </ReCAPTCHA> */}
        
      <button  className="flex flex-col mx-auto gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-12 py-2.5 text-center  mb-2 btn btn-lg " type="submit">Enviar</button>
{/* btn btn-lg   //estilo anterior */}
    </form>
          )}
  </div>
);
}

export default CheckoutForm;