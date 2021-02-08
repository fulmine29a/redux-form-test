import React, {MouseEventHandler, useCallback, useEffect, useRef, useState} from "react";
import './mrotToottip.sass';


export const AmountControlMrotTooltip = () => {
  const trigger = useRef<HTMLSpanElement>(null);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const onClick = useCallback<MouseEventHandler>(
    e => {
      e.stopPropagation();
      e.preventDefault();
      setClicked(clicked => !clicked)
    },
    []
  )

  const onMouseOver = useCallback(
    () => {
      setHovered(true)
    },
    [],
  );

  const onMouseOut = useCallback(
    () => {
      setHovered(false)
    },
    [],
  );


  useEffect(
    () => {
      const {$} = window;

      // @ts-ignore
      $(trigger.current).tooltip({placement: 'bottom', trigger: 'manual'})
    },
    []
  )

  useEffect(
    () => {
      // @ts-ignore
      $(trigger.current).tooltip((clicked || hovered) ? 'show' : 'hide')
    },
    [clicked, hovered]
  )

  return <>
    <span
      ref={trigger}
      className="rounded-circle border d-inline-block align-middle text-center ms-1 amount-control-mrot-trigger"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      title="МРОТ — минимальный размер оплаты труда. Разный для разных регионов."
    >{clicked ? <>&times;</> : 'i'}</span>
  </>;
}
