import React, {useState} from "react";
import { Navigation } from "./Navigation";
import validator from 'validator'

export const Contact = () => {
  
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  
  return (
    <div>
      <Navigation />
      <h1>Contact</h1>

      <div className="containerContact">
        <div className="row col-xs col-sm col-md col-lg">
          <form id="contactBlock">
            
            <label htmlFor="first name">
            <h4 className="title">First name </h4>
            </label>

            <div className="input-group mb-3 col-xs col-sm col-md col-lg">
              <input
                type="text"
                className="form-control"
                aria-label="form-control-sm"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            
            <label htmlFor="last name">
            <h4 className="title">Last name </h4>
            </label>
            <div className="input-group mb-3 col-xs col-sm col-md col-lg">
              
              <input
                type="text"
                className="form-control"
                aria-label="form-control-sm"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>

            <label htmlFor="company">
            <h4 className="title">Company name</h4>
            </label>

            <div className="input-group mb-3 col-xs col-sm col-md col-lg">
              
              <input
                type="text"
                className="form-control"
              />
            </div>

            <label htmlFor="email">
            <h4 className="title">Email address </h4>
            </label>
            <div className="input-group mb-3 col-xs col-sm col-md col-lg">
      
              <input
                type="text"
                className="form-control"
                onChange={(e) => validateEmail(e)}
              />
            </div>

            <label htmlFor="message">
            <h4 className="title">Message </h4>
            </label>
            <div className="input-group  mb-3 col-xs col-sm col-md col-lg">
              <textarea  className="form-control" aria-label="With textarea"></textarea>
            </div>
            <h3>{emailError}</h3>
            <button type="button" className="btn btn-primary">Send</button>

          </form>
        </div>
      </div>
    </div>
  );
};
