import React from "react";
import Banner from "./Contact/Banner";
import Form from "./Contact/Form";
import Call from "./Contact/Call";
import { ContactPageStructuredData } from "../structured-data/index.jsx";


function Contact() {
  return (
    <>
      <ContactPageStructuredData />
      <Banner />
      <Form />
      <Call />
    </>
  );
}

export default Contact;
