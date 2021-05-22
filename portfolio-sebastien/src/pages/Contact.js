import React from "react";
import { Navigation } from "./Navigation";

export const Contact = () => {
  return (
    <div>
      <Navigation />
      <h1>Contact</h1>

      <div className="container">
        <div className="row col-xs col-sm col-md col-lg">
          <form id="contactBlock">
            <div class="input-group mb-3 col-xs col-sm col-md col-lg">
              <span class="input-group-text" id="inputGroup-sizing-default">First name </span>
              <input
                type="text"
                className="form-control"
                aria-label="form-control-sm"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            
            <div class="input-group mb-3 col-xs col-sm col-md col-lg">
              <span class="input-group-text" id="inputGroup-sizing-default">Last name </span>
              <input
                type="text"
                className="form-control"
                aria-label="form-control-sm"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>

            <div class="input-group mb-3 col-xs col-sm col-md col-lg">
              <span class="input-group-text" id="inputGroup-sizing-default">Name company </span>
              <input
                type="text"
                className="form-control"
              />
            </div>

            <div class="input-group mb-3 col-xs col-sm col-md col-lg">
              <span class="input-group-text" id="inputGroup-sizing-default">Email address </span>
              <input
                type="text"
                className="form-control"
              />
            </div>

            <button type="button" class="btn btn-primary">Send</button>

          </form>
        </div>
      </div>
    </div>
  );
};
