import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [version, setVersion] = useState("");

  useEffect(() => {
    fetch("/version")
      .then((response) => response.json())
      .then((data) => {
        const currentVersion = data.CurrentVersion;
        console.log(currentVersion);
        setVersion(currentVersion);
      })
      .catch((error) => console.error("Error fetching version:", error));
  }, []);

  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} <body>Daily Needs</body>:{version}
      </p>
    </footer>
  );
};

export default Footer;
