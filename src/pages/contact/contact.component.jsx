import React, { useState } from "react";
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {Redirect } from 'react-router-dom';
import './contact.styles.scss';



const ContactPage = () => {

	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");


	return(

	<div>
		 <h1 className = 'title'>Contact with us</h1>
		
		<form className= 'contact'  onsubmit= "return false">
                    <FormInput
                      name = 'name'
                      type = 'text' 
                      label = 'Name'
					  onChange = {e => setName({name: e.target.value})}
                      required
                      />
					   <FormInput
                      name = 'email'
                      type = 'email' 
                      label = 'email'
					  onChange ={e => setEmail({email: e.target.value})}
                      required
                      />
					   <FormInput
                      name = 'text'
                      type = 'text' 
                      label = 'write your message'
					  onChange  ={e => setMessage({message: e.target.value})}
                      required
                      />
		<div className='button'>		  
        <CustomButton type= 'submit' onClick = {
       
             <Redirect to = '/' />
        }
        
         >Submit</CustomButton>
		</div>	
   </form>
	</div>
	)
}


export default ContactPage;
