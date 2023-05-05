import React, { ReactElement, ReactNode } from 'react';

interface ButtonProps {
  type?: 'primary' | 'text' | 'link' | 'dashed' | 'default';
  size?: 'small' | 'default' | 'large';
  loading?: boolean;
  href?: string;
  disabled?: boolean;
  classname?: string;
  icon?: ReactNode;
  style?: {};
}

function Button(props: ButtonProps): ReactElement {
  return <button></button>;
}

export default Button;
