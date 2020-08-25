import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <div className="github">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <a
          href="https://github.com/mngmay"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </div>
      <a href="https://mayng.dev" rel="noopener noreferrer" target="_blank">
        mayng.dev
      </a>
    </div>
  );
};

export default Contact;
