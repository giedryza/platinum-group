import React from 'react';
import classnames from 'classnames';

interface Props {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  inverse?: boolean;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const ButtonFlat: React.FC<Props> = ({
  label,
  onClick,
  inverse = false,
  type = 'button',
  buttonProps,
}) => (
  <button
    className={classnames('button-flat', { inverse: inverse })}
    onClick={onClick}
    type={type}
    {...buttonProps}
  >
    {label}
  </button>
);

export default ButtonFlat;
