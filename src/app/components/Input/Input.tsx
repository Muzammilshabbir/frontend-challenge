import React from "react";

interface InputProps {
  type:string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({type, value, onChange, placeholder, className='' }) => {
  return (
    <input
      type={type ?? 'text'}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} py-2 flex-grow px-2 text-gray-800 outline-none placeholder-gray-400 bg-transparent border-0 hover:bg-transparent hover:border-0 focus:ring-0`}
      />
  );
};

export default Input;
