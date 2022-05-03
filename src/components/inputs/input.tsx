import React from "react";
import { Box, BoxStyles } from "components/wrappers/Box";
import { Theme } from "styles/theme";

export type InputTypes =
  | "checkbox"
  | "email"
  | "number"
  | "password"
  | "submit"
  | "text";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  minValue?: number;
  maxValue?: number;
  message?: string;
  label?: string;
  value?: string | number;
  placeholder?: string;
  type?: InputTypes;
  onChange?: () => void;
}

export const InputField: React.FC<InputProps & BoxStyles<Theme>> = ({
  error,
  minValue,
  maxValue,
  label,
  type,
  value,
  placeholder,
  onChange,
  ...props
}) => (
  <Box>
    {label && <label htmlFor="input">{label}</label>}
    <input
      id={label}
      type={type}
      value={value}
      placeholder={placeholder}
      min={minValue}
      max={maxValue}
      onChange={onChange}
      {...props}
    />
    {error && <>{console.log(alert(error))}</>}
  </Box>
);
