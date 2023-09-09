import React, { useEffect, useState } from "react";
import "./Footer.css";
import axios from "axios";

const Footer = () => {
  const [version, setVersion] = useState("");

  useEffect(() => {
    axios
      .get("/version")
      .then((response) => {
        console.log(response.data.CurrentVersion);
        const currentVersion = response.data.CurrentVersion;
        setVersion(currentVersion);
      })
      .catch((error) => console.error("Error fetching version:", error));
  }, []);

  return (
    <footer className="footer">
      <div>
        <h6>Daily Needs</h6>:{version}
      </div>
    </footer>
  );
};

export default Footer;
