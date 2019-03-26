import React from 'react';
import { TeamLogo } from '../ui/icons';

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <TeamLogo 
          width="70px"
          height="70px"
          link={true}
          linkTo="/"
        />  
      </div>
      <div className="footer_discl">
        Manchester City 2019. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
