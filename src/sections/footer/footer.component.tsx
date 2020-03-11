import React from 'react';
import Button from '../../components/button/button.component';
import { IconName } from '../../components/icon/icon.component';
import { today } from '../../utils/today';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <article className="footer__contacts">
        <div className="footer__contacts-block">
          <h6 className="footer__label">Contacts:</h6>
          <div className="footer__links-left">
            <Button
              icon={IconName.Phone}
              label="+44 7918 236600"
              inverse
              light
            />
            <Button
              icon={IconName.Email}
              label="eda237@gmail.com"
              inverse
              light
            />
          </div>
        </div>

        <div className="footer__contacts-block">
          <h6 className="footer__label">Social:</h6>
          <div className="footer__links-right">
            <Button icon={IconName.Facebook} inverse light />
            <Button icon={IconName.Instagram} inverse light />
          </div>
        </div>
      </article>
      <article className="footer__legal">
        <div className="footer__legal-block">
          &copy; {today()} Platinum Group | Metals Recycling Ltd.
        </div>
        <div className="footer__legal-block">
          Crafted by:{' '}
          <a
            href="https://giedrius.io/"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            giedrius.io
          </a>
        </div>
      </article>
    </div>
  </footer>
);

export default Footer;
