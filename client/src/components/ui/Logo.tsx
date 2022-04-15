import React from 'react';
import logo from '../../assets/images/logo.svg';

interface LogoPropsType {
    className?: any
}

const Logo: React.FC<LogoPropsType> = ({ className }) => {
    return (
        <img src={logo} alt='jobify' className={`block object-cover border-none ${className}`} />
    )
}

export default Logo