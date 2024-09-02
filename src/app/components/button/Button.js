import React from 'react';
import useStyle from "./stylesheet";
import { useTheme } from '../../context/ThemeContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Button = ({
  children,
  variant,
  title,
  icon,
  type = "button",
  ...props
}) => {
  const { theme } = useTheme();
  const classes = useStyle({theme});

  return (
    <div className={classes.container}>
    <button type={type}className={classes[variant]}>
    {icon && <FontAwesomeIcon icon={faStar} className={classes.icon} /> }
    <span>{title}</span>{children}
    </button>
    </div>
  );
  
}

export default Button;
