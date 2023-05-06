import React, { ReactElement, ReactNode } from 'react';

interface ButtonProps {
  type?: 'primary' | 'text' | 'link' | 'dashed' | 'default';
  size?: 'small' | 'default' | 'large';
  loading?: boolean;
  href?: string;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  children?: ReactNode;
  style?: object;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default (props: ButtonProps): ReactElement => {
  const {
    type = 'default',
    disabled = false,
    size = 'default',
    loading = false,
    href,
    className,
    icon,
    children,
    style,
    onClick = () => {},
  } = props;

  return (
    <button onClick={onClick} style={style} disabled={disabled}>
      {icon}
      {children}
    </button>
  );
};
