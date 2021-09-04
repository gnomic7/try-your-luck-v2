import React from 'react';
import './FooterBar.css';
const FooterBar = () => (
  <footer className="footerNav">
    <div className="footerBar">
      <div>&copy; gnomic7 @ {new Date().getFullYear()}</div>
    </div>
  </footer>
);
export default FooterBar;
