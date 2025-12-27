import React from "react";

interface CommonInputProps {
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  name?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

const CommonInput: React.FC<CommonInputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder = "Enter text...",
  className = "",
  name,
  required = false,
  disabled = false,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={className}
      />
    </div>
  );
};

export default CommonInput;
