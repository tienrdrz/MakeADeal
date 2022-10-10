import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="">
        <h4>Thanks for Trading with us!</h4>
        &copy;{new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
