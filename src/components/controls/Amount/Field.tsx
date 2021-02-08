import {Field} from "redux-form";
import React from "react";
import {AmountControl} from "./Control";
import {AmountControlProps} from "./types";

export const AmountField = (props: { name: string } & AmountControlProps) =>
  <Field
    {...props}
    component={AmountControl}
    format={null}
  />
