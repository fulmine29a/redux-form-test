import React from "react";
import {AmountControlValue} from "./types";
import {priceFormatter} from "../../../utils/formaters";

export const AmountInfoPanel = ({
                                  value: {amount, NDFL},
                                  className
                                }: { value: AmountControlValue, className?: string }) => {
  const salary = NDFL ? amount / 1.13 : amount;
  const _ndfl = salary * .13;
  const summary = NDFL ? amount : amount * 1.13

  return <div
    className={`alert alert-warning${className ? ` ${className}` : ''}`}
    role="alert"
  >
    <p><span className="fw-bold">{priceFormatter(salary)}&nbsp;₽</span> сотрудник будет получать на руки</p>
    <p><span className="fw-bold">{priceFormatter(_ndfl)}&nbsp;₽</span> НДФЛ, 13% от оклада</p>
    <p><span className="fw-bold">{priceFormatter(summary)}&nbsp;₽</span> за сотрудника в месяц</p>
  </div>;
}
