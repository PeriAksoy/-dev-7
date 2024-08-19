import React from 'react'
import useStyle from "./stylesheet";
import { useTheme } from '../../context/ThemeContext';

const Button = ({

    children,
    variant,
    title,
    ...props

}) => {
    const { theme } = useTheme();
    const classes = useStyle({theme});
  return (
    <div className={classes.container}>
      <button className={classes[variant]}><span>{title}</span>{children}</button>
    </div>
  )
}

export default Button;
