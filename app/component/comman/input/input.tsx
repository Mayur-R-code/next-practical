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
  type = "text",        // Default input type
  value,                //  value
  onChange,             // Change handler
  placeholder = "",     // Default empty placeholder
  className = "",       // Default empty class
  name,                 // Input name
  required = false,     // Required flag
  disabled = false,     // Disabled flag
}) => {
  return (
    <div>
      {/* Input field */}
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
