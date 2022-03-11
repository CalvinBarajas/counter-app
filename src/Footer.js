// import
import React from "react";

// component
const Footer = () => {
  const year = new Date().getFullYear();
  return(
    <div>
      <p>&copy; Calvin Barajas {year} </p>
    </div>
  )
}

// export
export default Footer;
