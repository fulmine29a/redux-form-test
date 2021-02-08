import React, {ReactNode, useState} from "react";
import {Field, WrappedFieldProps} from "redux-form";
import {AmountControlProps, AmountControlValue, AmountType} from "./types";
import {SwitchField} from "../Switch/Field";
import {PriceField} from "../Price/Field";
import {AmountInfoPanel} from "./Info";
import {AmountControlMrotTooltip} from "./MrotTooltip";

type RadioInput = {
  label: ReactNode,
  value: AmountType
}

const typeRadioInputs: RadioInput[] = [
  {
    label: 'Оклад за месяц',
    value: 'salary'
  },
  {
    label: <>МРОТ<AmountControlMrotTooltip/></>,
    value: 'MROT'
  },
  {
    label: 'Оплата за день',
    value: 'daily'
  },
  {
    label: 'Оплата за час',
    value: 'hourly'
  }
]

let componentCount = 0;

export function AmountControl(props: WrappedFieldProps & AmountControlProps) {
  const [componentIndex] = useState(() => ++componentCount);
  const value = props.input.value as AmountControlValue;
  const disabled = props.disabled;

  return <fieldset disabled={disabled}>
    <legend>{props.label}</legend>
    {typeRadioInputs.map(input =>
      <div
        className="form-check"
        key={input.value}
      >
        <Field
          name={`${props.input.name}.type`}
          component="input"
          type="radio"
          value={input.value}
          className="form-check-input"
          id={`amount-control-${componentIndex}-type-${input.value}`}
        />
        <label
          className="form-check-label"
          htmlFor={`amount-control-${componentIndex}-type-${input.value}`}
        >
          {input.label}
        </label>
      </div>
    )}
    <div className={`${value.type === 'MROT' ? 'invisible' : ''}`}>
      <SwitchField
        name={`${props.input.name}.NDFL`}
        leftLabel="Указать с НДФЛ"
        rightLabel="Без НДФЛ"
        leftValue={true}
        rightValue={false}
        className="mt-3 mb-3"
        disabled={disabled}
      />
      <PriceField
        name={`${props.input.name}.amount`}
        className="w-auto d-inline me-2"
      /><b>₽
      {
        value.type === 'daily' && ' в день'
      }
      {
        value.type === 'hourly' && ' в час'
      }
    </b>
    </div>
    <AmountInfoPanel
      value={value}
      className={`mt-3${value.type === 'salary' && value.amount > 0 ? '' : ' invisible'}`}
    />
  </fieldset>
}
