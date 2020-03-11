import React from 'react';
import classnames from 'classnames';
import Icon, { IconName } from '../../components/icon/icon.component';
import Button from '../../components/button/button.component';
import { useScrollTop } from '../../utils/useScrollTop';

const Header = () => {
  const scrollTop = useScrollTop();

  console.log(scrollTop);

  return (
    <header className="header">
      <div className="container">
        <nav className="header__container">
          <div
            className={classnames('header__logo', {
              small: scrollTop > 15,
            })}
          >
            <Icon icon={IconName.Logo} />
          </div>
          <Button
            icon={IconName.Phone}
            label="+44 7918 236600"
            sublabel="Contact us"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
