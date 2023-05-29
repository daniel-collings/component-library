import { describe, it, expect, beforeEach } from 'vitest';
import { screen, render } from '@testing-library/react';
import TimePicker from './TimePicker';

/**
 * Add test to check the component renders.
 * Add tests for testing behaviour changes. For example when error prop is true, the component timer has a red border etc.
 * As above with passing in min and max props.
 * Test that label or message props from component do not appear.
 */

describe('TimePicker components test', () => {
    beforeEach(() => {
        render(<TimePicker id="test-picker" name="time-test" label="Appointment: " onChange={() => console.log('state updated')} value="23:25" />);
    })

    it('should have appointment label on screen', () => {
        expect(screen.getByText(/Appointment/i)).toBeDefined()
    })

});


