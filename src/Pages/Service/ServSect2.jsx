import React, { useState } from "react";
import { Button1, ColumnContainer } from "../../Components/ResponsiveConts";
import "./Service.scss";
import axios from "axios";

const ServSect2 = () => {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const SendMail = async (e) => {
    try {
      setSent(true);
      await axios.post("https://poa-adit-server.herokuapp.com/sendmail", {
        name,
        email,
        subject,
        message,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="service_sect2_cont">
      <ColumnContainer id="servicesect2">
        <div className="sendformcont" id="sendform">
          <span>
            <h1>
              We Build
              <br /> Everything You Need
            </h1>
            <p>
              Interested in our services or need advice? Then please <br /> get
              in touch and we’ll be glad to help.
            </p>
          </span>
          <form>
            {sent ? <span style={{ color: "#fff" }}>sent</span> : ""}
            <h1>Get A Quote</h1>
            <input
              placeholder="Your Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Your Project"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              className="message"
              placeholder="Message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              style={{
                background: "none",
                display: "flex",
                width: "fit-content",
                padding: "0px",
                margin: "30px",
                border: "none",
              }}
            >
              <Button1 onClick={SendMail} id="sendMessage">
                Send Message
              </Button1>
            </button>
          </form>
          <div id="gbd_review_box_s"></div>
          <small>
            Find us on{" "}
            <a href="https://www.businesslist.com.ng">
              Nigeria Business Directory
            </a>
          </small>
          <script
            src="//www.businesslist.com.ng/gadgets/v2/267983/s"
            async
          ></script>
        </div>
      </ColumnContainer>
    </div>
  );
};

export default ServSect2;
