import React, {useCallback, useState} from "react";
import {WrappedFieldProps} from "redux-form";
import {SwitchProps} from "./types";

let componentCount = 0

export const SwitchControl = (
  {
    leftLabel,
    leftValue,
    rightLabel,
    rightValue,
    className,
    disabled,
    input: {value, onBlur, onFocus, onChange},
  }: WrappedFieldProps & SwitchProps) => {

  const [componentIndex] = useState(() => ++componentCount);

  const onCheckChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.checked ? rightValue : leftValue)
    },
    [onChange, rightValue, leftValue],
  );

  const onCheckBlur = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onBlur(e.target.checked ? rightValue : leftValue)
    },
    [onBlur, rightValue, leftValue],
  );

  return <div
    className={`form-check form-switch ps-0${className ? ` ${className}` : ''}`}
    data-disabled={disabled ? '' : undefined}
  >
    <label
      className="form-check-label"
      htmlFor={`switch-${componentIndex}`}
      data-active={value !== rightValue ? '' : undefined}
    >{leftLabel}</label>
    <input
      className="form-check-input"
      id={`switch-${componentIndex}`}
      type="checkbox"
      checked={value === rightValue}
      onChange={onCheckChange}
      onBlur={onCheckBlur}
      {...{onFocus, disabled}}
    />
    <label
      className="form-check-label"
      htmlFor={`switch-${componentIndex}`}
      data-active={value === rightValue ? '' : undefined}
    >{rightLabel}</label>
  </div>;
}

