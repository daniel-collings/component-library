import React from 'react'
import {Meta, StoryObj} from '@storybook/react'
import TimePicker from './TimePicker'

const meta: Meta<typeof TimePicker> = {
  component: TimePicker,
  title: 'Component/TimePicker',
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof TimePicker>;

export const Primary: Story = (args) => (
  <TimePicker data-testId="TimePicker-id" {...args} />
)
Primary.args = {
  error: false,
  disabled: false,
  label: 'Primary',
}

export const PrimaryWithoutLabel: Story = (args) => (
  <TimePicker data-testId="TimePicker-id" {...args} />
)
PrimaryWithoutLabel.args = {
  error: false,
  disabled: false
}


export const Error: Story = (args) => (
  <TimePicker data-testId="TimePicker-id" {...args} />
)
Error.args = {
  error: true,
  disabled: false,
  message: 'Error',
}

export const Disabled: Story = (args) => (
  <TimePicker data-testId="TimePicker-id" {...args} />
)
Disabled.args = {
  disabled: true,
  label: 'Disabled',
}
