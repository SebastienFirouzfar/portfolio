import React, { useState, useEffect, useContext } from "react";
import { Navigation } from "./Navigation";
import { UserProfileContext } from "../lib/UserProfileContext";
import validator from "validator";
// import { Link } from 'react-router-dom'; 
import emailjs from 'emailjs-com';

import {animationOne, transition} from "../animation/index"
import {motion} from 'framer-motion'

export const Contact = () => {
  const [isValid, setValid] = useState(false);
  const value = useContext(UserProfileContext);
  const {
    firstName,
    lastName,
    company,
    email,
    message,
    setUserProfileContext
  } = value;

  const validate = () => {
    let errors = [];
    //récuperer tout les inputs
    const inputs = document.querySelectorAll(".form-control");

    inputs.forEach((input) => {
      // s'il n'y pas de valeur, le programme doit contenir tout les inputs qui ne sont pas valide
      !input.value ? errors.push(input) : errors.length && errors.pop();
    });

    //s'il ya aucune erreur
    console.log(errors);
    setValid(!errors.length);
  };

  useEffect(() => {
    validate();
  });



  const [emailError, setEmailError] = useState("");
  const [emailValid, setEmailValid] = useState()
  const validateEmail = (e) => {
    var email = e.target.value;


    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
      setEmailValid(true)
    } else {
      setEmailError("Enter valid Email!");
      setEmailValid(false)
    }
  };



  const sendEmail = (e) =>{
    e.preventDefault(); 

    emailjs.sendForm('service_jta0j6q', 'template_3neo3f6', e.target, 'user_HuKqlk3QYteJHDRgFB4El')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      //clears the form after sending the email
      e.target.reset()
  }

  return (

    <motion.div initial="out"
    animate="in" 
    exit="out" 
    variants={animationOne}
    transition={transition}>


    <div>
      <Navigation />
      <h1>Contact</h1>

      <div className="containerContact">
        <div className="row col-xs col-sm col-md col-lg">
          <form onSubmit={sendEmail} >
            <label htmlFor="first name">
              <h4 className="title">First name </h4>
            </label>

            <div className="input-group mb-3 col-xs col-sm col-md col-lg">
              <input
                type="text"
                class="form-control"
                placeholder="firstName"
                name="firstName"
                aria-label="form-control-sm"
                defaultValue={firstName}
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => {
                  setUserProfileContext({ [e.target.name]: e.target.value });
                }}
              />
            </div>

            <label htmlFor="last name">
              <h4 className="title">Last name </h4>
            </label>
            <div className="input-group mb-3 col-xs col-sm col-md col-lg">
              <input
                type="text"
                class="form-control"
                placeholder="lastName"
                name="lastName"
                defaultValue={lastName}
                aria-label="form-control-sm"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => {
                  setUserProfileContext({[e.target.name]: e.target.value });
                }}
              />
            </div>

            <label htmlFor="company">
              <h4 className="title">Company name</h4>
            </label>

            <div className="input-group mb-3 col-xs col-sm col-md col-lg">
              <input
                type="text"
                placeholder="company"
                name="company"
                defaultValue={company}
                class="form-control"
                onChange={(e) => {
                  setUserProfileContext({[e.target.name]: e.target.value })}}
              />
            </div>

            <label htmlFor="email">
              <h4 className="title">Email address </h4>
            </label>
            <div className="input-group mb-3 col-xs col-sm col-md col-lg">
              <input
                type="text"
                placeholder="email"
                name="email"
                defaultValue={email}
                class="form-control"
                onChange={((e) => validateEmail(e))}
              />
            </div>

            <label htmlFor="message">
              <h4 className="title">Message </h4>
            </label>
            <div className="input-group  mb-3 col-xs col-sm col-md col-lg">
              <textarea
                class="form-control"
                aria-label="With textarea"
                placeholder="message"
                defaultValue={message}
                name="message"
                onChange={e => { 
                  setUserProfileContext({[e.target.name]: e.target.value})
              }}
              ></textarea>
            </div>
            <h3>{emailError}</h3>
            
           {/* {emailValid ? <Link to="/contact"  className={`${!isValid && 'disabled'} btn btn-primary checkout`} >
              Send message
            </Link> : <p>'fill in the fields of the form and the email address must be valid to have the button' </p>}  */}
            
            {emailValid ? 
            <button
                type="submit"
                placeholder="email"
                className={`${!isValid && 'disabled'} btn btn-primary checkout`}
              >Send message</button>
              : <p>'fill in the fields of the form and the email address must be valid to have the button' </p>} 
          </form>
        </div>
      </div>
    </div>
    </motion.div>
  );
};
