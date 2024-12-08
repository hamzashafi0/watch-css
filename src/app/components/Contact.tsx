import React from 'react'
import '../style/contact.css'

const Contect = () => {
  return (
    <div id='contect' className='contact-container'>
      <section className="contact-section">
        <div className="container">
          <div className="text-center contact-heading">
            <h1 className="contact-title">Contact Us</h1>
          </div>
          <div className="form-container">
            <div className="form-content">
              <div className="form-field">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Enter your Name'
                  className="form-input"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Enter Your Email'
                  className="form-input"
                />
              </div>
              <div className="form-field full-width">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder='Enter Your Message'
                  className="form-textarea"
                  defaultValue={""}
                />
              </div>
              <div className="form-submit">
                <button className="submit-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contect
