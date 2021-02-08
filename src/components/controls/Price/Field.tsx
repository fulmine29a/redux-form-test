import {priceFormatter} from "../../../utils/formaters";
import {priceNormalizer} from "../../../utils/normalizers";
import {Field} from "redux-form";
import React from "react";

export const PriceField = (props: { name: string, className?: string }) =>
  <Field
    name={props.name}
    className={`form-control${props.className ? ` ${props.className}` : ''}`}
    component="input"
    format={priceFormatter}
    normalize={priceNormalizer}
    maxLength={17}
  />
