import React from "react";
import {reduxForm} from "redux-form";
import {TestFormData} from "./types";
import {InjectedFormProps} from "redux-form/lib/reduxForm";
import {AmountField} from "../../controls/Amount/Field";

const FORM_ID = 'TEST_FORM';

const initialValues: TestFormData = {
  amount: {
    amount: 0,
    NDFL: true,
    type: 'salary'
  },
  amount2: {
    amount: 0,
    NDFL: true,
    type: 'salary'
  },
}

function TestFormComponent({handleSubmit}: InjectedFormProps<TestFormData>) {
  return <form onSubmit={handleSubmit}>
    <AmountField
      name="amount"
      label="сумма"
    />
    <AmountField
      name="amount2"
      label="сумма"
      disabled={true}
    />
  </form>
}

export const TestForm = reduxForm<TestFormData>({form: FORM_ID, initialValues})(TestFormComponent)


