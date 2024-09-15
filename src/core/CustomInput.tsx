/* eslint-disable @next/next/no-img-element */

/**
 * Supported and usable input types:
 *
 * - text
 * - email
 * - phone
 * - password
 * - custom-view-password
 * - slider
 * - radio
 * - checkbox
 * - radio-group
 * - checkbox-group
 * - select
 * - multi-select
 * - multiple-autocomplete
 * - autocomplete
 * - country-selector
 * - file-with-preview
 * - file-no-preview
 *
 * Please ensure to use these types appropriately when configuring the component.
 */

/****
 * IMPORTANT: Please comply to the following rules to ensure proper functionality of this component:
 *
 * 1. If you have utilized components such as checkbox, radio, checkbox-group, radio-group, slider, range-slider,
 *    multi-select, autocomplete, multiple-autocomplete, or country-selector, it is mandatory to pass the 'formik'
 *    prop to this component.
 *
 * 2. You can customize the color of certain types. Ensure that only hexadecimal color codes are used for customization.
 *
 * 3. Additionally, customize different fields using the 'InputProps' property.
 *
 * Note: Failure to comply with these guidelines may result in unexpected behavior.
 *
 * Created by Rudra
 ****/

import { InputProps, TextField } from "@mui/material";
import { FormikProps } from "formik";
import React, {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  HTMLInputTypeAttribute,
  SetStateAction,
} from "react";

interface Props {
  type?: HTMLInputTypeAttribute;
  value?: string | number | string[] | File;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void;
  error?: boolean;
  key?: string | number;
  helperText?: string | false;
  fullWidth?: boolean;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  options?: { label?: string | number; value: string | number }[];
  id?: string | number;
  variant?: "filled" | "outlined" | "standard";
  InputProps?: InputProps;
  multiline?: boolean;
  rows?: number;
  defaultValue?: string | number | [] | object;
  label?: string;
  size?: "small" | "medium";
  formik?: FormikProps<{
    [key: string]: string;
  }>;
  labelPlacement?: "bottom" | "top" | "start" | "end" | undefined;
  checkedIcon?: React.ReactNode;
  checkboxIcon?: React.ReactNode;
  marks?: boolean | { value: number; label: number }[];
  step?: number;
  valueLabelDisplay?: "auto" | "on" | "off";
  orientation?: "horizontal" | "vertical";
  min?: number;
  max?: number;
  loading?: boolean;
  fileSize?: number;
  setAutoCompleteValue?: Dispatch<SetStateAction<string>>;
}

const CustomInput = ({
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  helperText,
  fullWidth,
  placeholder,
  name,
  disabled,
  InputProps,
  id,
  variant,

  defaultValue,
  size,
}: Props) => {
  switch (type) {
    case "text":
    case "email":
      return (
        <TextField
          fullWidth={fullWidth}
          placeholder={placeholder}
          name={name}
          size={size}
          id={String(id)}
          type={type}
          disabled={disabled}
          variant={variant}
          InputProps={InputProps}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          helperText={helperText}
          defaultValue={defaultValue}
        />
      );

    default:
      return (
        <TextField
          fullWidth={fullWidth}
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          size={size}
          type={type}
          id={String(id)}
          variant={variant}
          InputProps={InputProps}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          helperText={helperText}
          defaultValue={defaultValue}
        />
      );
  }
};

export default CustomInput;
