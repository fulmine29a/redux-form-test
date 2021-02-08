import React from "react";
import {Field} from "redux-form";
import {SwitchProps} from "./types";
import {SwitchControl} from "./Control";

export const SwitchField = (props: { name: string } & SwitchProps) =>
  <Field {...props} component={SwitchControl}
         format={null}
  />
