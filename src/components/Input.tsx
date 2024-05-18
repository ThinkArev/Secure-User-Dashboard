import React from 'react';
import { InputProps } from '../interfaces';

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, className, type = 'text', required }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className ? className : "block w-full p-2 border border-gray-300 rounded mb-2"}
            required={required}
        />
    );
};

export default Input;
