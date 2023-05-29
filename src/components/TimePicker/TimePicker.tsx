import React from 'react';

interface TimePickerProps extends React.ComponentPropsWithoutRef<'input'> {
  id?: string;
  label?: string;
  error?: boolean;
  message?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TimePicker({id, name, onChange, ...props}: TimePickerProps) {
  return (
    <div>
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
    </div>
  );
}

