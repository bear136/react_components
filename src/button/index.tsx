import React, { ReactElement, ReactNode, useState } from 'react';
import cs from 'classnames';
import './index.less';
import loadingIcon from '../../static/loading.svg';
enum ButtonType {
  primary = 'primary',
  text = 'text',
  defalut = 'default',
  dashed = 'dashed',
}
interface ButtonProps {
  type?: ButtonType;
  size?: 'small' | 'default' | 'large';
  loading?: boolean;
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
    className,
    icon,
    children,
    style,
    onClick,
  } = props;

  const classes = cs(
    'btn',
    {
      [`btn_${type}`]: true,
      [`btn_size_${size}`]: size !== 'default',
      btn_disable: disabled,
    },
    className,
  );
  const loadingClass = cs('btn_icon', {
    btn_rotation: loading,
  });
  return (
    <button onClick={onClick} style={style} disabled={disabled || loading} className={classes}>
      {loading && (
        <span className={loadingClass}>
          <img src={loadingIcon} />
        </span>
      )}

      {!loading && icon && <span className="btn_icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
