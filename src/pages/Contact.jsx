import React from "react";
import Title from "../components/Title";
import ContactSection from "../components/ContactSection";
const Contact = () => {
  return (
    <>
      <Title
        para1={""}
        title={"Contact Us"}
        para2={
          "Book a private tour or message the team. Most messages are answered within an hour."
        }
      />
      <ContactSection/>
    </>
  );
};

export default Contact;
