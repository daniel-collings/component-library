import React from 'react'
import moduleStyles from './time-picker.module.css'

interface TimePickerProps extends React.ComponentPropsWithoutRef<'input'> {
  id?: string;
  label: string;
  error?: boolean;
  message?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TimePicker({ id, name, onChange, disabled, ...props }: TimePickerProps) {
  return (
    <div className={moduleStyles.container}>
      <label aria-label={props.label} htmlFor={name}>
        {props.label}

        <input
          id={id}
          data-testid={id}
          style={props.error ? { border: "rgb(213, 25, 25) 2px solid" } : {}}
          type="time"
          name={name}
          aria-label={name}
          disabled={disabled}
          placeholder='00:00'
          onChange={onChange}
          {...props} />

      </label>

      {props.error && <p className={moduleStyles.errorMessage}>{props.message}</p>}
    </div>
  )
}

