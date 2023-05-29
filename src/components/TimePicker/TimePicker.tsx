import React from 'react';

interface TimePickerProps extends React.ComponentPropsWithoutRef<'input'> {
  id?: string;
  label?: string;
  error?: boolean;
  message?: string;
  success?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

// eslint-disable-next-line max-len
export default function TimePicker({id, name, onChange, ...props}: TimePickerProps) {
  return (
    <>
      {props.label &&
        <label aria-label={props.label} htmlFor={name}>
          {props.label}
        </label>}

      <input
        id={id}
        className=''
        type="time"
        name={name}
        onChange={onChange}
        {...props} />


      {props.error && <p>{props.message}</p>}
    </>
  );
}

