import React, { FC } from 'react';
interface FooterProps {}
const Footer: FC<FooterProps> = () => (
  <footer className="footer">
  <div className="container">
    <div className="row align-items-center flex-row-reverse">
      <div className="col-md-12 col-sm-12 text-center">
        Copyright © 2023 <a 
        >Wizotrip</a>.
        All rights reserved.
      </div>
    </div>
  </div>
</footer>
);

export default Footer;
