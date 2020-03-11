import React from 'react';
import classnames from 'classnames';
import Icon, { IconName } from '../icon/icon.component';

interface Props {
  icon?: IconName;
  label?: string;
  sublabel?: string;
  link?: string;
  onClick?: () => void;
  inverse?: boolean;
  light?: boolean;
  linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({
  icon,
  label,
  sublabel,
  link,
  onClick,
  inverse = false,
  light = false,
  linkProps,
  buttonProps,
}) => {
  const content = () => (
    <>
      {icon && (
        <Icon
          icon={icon}
          svgProps={{ className: classnames({ inverse: inverse }) }}
        />
      )}
      {label && (
        <span
          className={classnames('button__label', {
            inverse: inverse,
            light: light,
          })}
        >
          {sublabel && (
            <span
              className={classnames('button__sublabel', { inverse: inverse })}
            >
              {sublabel}
            </span>
          )}
          {label}
        </span>
      )}
    </>
  );

  return link ? (
    <a
      className="button"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      {...linkProps}
    >
      {content()}
    </a>
  ) : (
    <button className="button" onClick={onClick} type="button" {...buttonProps}>
      {content()}
    </button>
  );
};

export default Button;
