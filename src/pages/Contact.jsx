import axios from "axios";
import React from "react";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sms, setSms] = useState("");

  var data = new FormData();
  data.append("message", message);
  data.append("email", email);
  data.append("name", name);
  data.append("subject", subject);

  var config = {
    method: "post",
    url: "https://asalari.pythonanywhere.com/contact",
    data: data,
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios(config).then((res) => {
        if (res.status === 200) {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          console.log(res);
          setSms("User created successfully");
        } else {
          setSms("Some error occured");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4  detail_nomi">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label for="name" className="">
                      Your name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label for="email" className="">
                      Your email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label for="subject" className="">
                      Subject
                    </label>
                    <input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label for="message">Your message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="text-center text-md-left">
                <button className="btn btn-primary w-50 my-5" type="submit">
                  Send
                </button>
              </div>
              <div className="sms">{sms ? <p>{sms}</p> : null}</div>
            </form>

            <div className="status"></div>
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Andijon,Asaka 102,Uzbekistan</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+998 91 494 68 42</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>asalarichilik@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
