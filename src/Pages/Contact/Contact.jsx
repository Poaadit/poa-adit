import React from "react";
import AppLayoutLayer from "../../Components/AppLayoutLayer";
import { ColumnContainer } from "../../Components/ResponsiveConts";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="homecont">
      <AppLayoutLayer>
        <div className="contactmaincont">
          <ColumnContainer id="contactcont">
            <div className="mapcont">
              <iframe className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7039805491704!2d3.4367520147702453!3d6.432059095346421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5226ce2e0f5%3A0xc92f79d27c3ef0c9!2sPOA%20ADIT%20Nigeria%20Limited!5e0!3m2!1sen!2sng!4v1645156200564!5m2!1sen!2sng"
                width="100%"
                title="poa-adit"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="contactcard">
              <h1>Get In Touch</h1>
              <span> Address</span>
              <h4>14b Muri Okunola Street, Victoria Island , Lagos.</h4>
              <span> Phone Number</span>
              <h4>+234 812 7139 390</h4>
              <span> Email</span>
              <h4>info@poaadit.com</h4>
            </div>
          </ColumnContainer>
        </div>
      </AppLayoutLayer>
    </div>
  );
};

export default Contact;
