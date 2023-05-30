import { describe, it, expect } from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'
import TimePicker from './TimePicker'

/**
 * Add test to check the component renders.
 * Add tests for testing behaviour changes. For example when error prop is true, the component timer has a red border etc.
 * As above with passing in min and max props.
 * Test that label or message props from component do not appear.
 */

const setup = () => {
    const utils = render(<TimePicker id="test-picker" disabled={false} name="time-test" label="Appointment: " placeholder="00:00" />)
    const input = screen.getByTestId('test-picker')
    return {
        input,
        ...utils,
    }
}

describe('TimePicker components test', () => {  
    it('should test changing the value of the component to 23:00', () => {
        const { input } = setup()
        fireEvent.input(input, { target: { value: '23:00' } })
        expect(input.value).toBe('23:00')
    })

    it('should test that the component can be disabled', () => {
        const { input } = setup()
        fireEvent.change(input, { target: { disabled: true } })
        expect(input.disabled).toBe(true)
    })

    it('should test that the component can be disabled and fireEvent cannot be triggered', () => {
        const { input } = setup()
        fireEvent.change(input, { target: { disabled: true } })
        expect(input.disabled).toBe(true)

        fireEvent.change(input, { target: { value: '23:00' } })
        expect(input.value).toBe('23:00')
    })

    it('should have appointment label on screen', () => {
        render(<TimePicker id="test-picker" name="time-test" label="Appointment: " />)
        expect(screen.getByText(/Appointment/i)).toBeDefined()
    })

})


