import { useState, useEffect } from 'react';

/**
 * Custom debounce hook for delaying value updates
 * @param {string} value - The value to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {string} - The debounced value
 */
export default function useDebounceUsers(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: Clear the timer if value changes before delay completes
    // This ensures only the final value (after user stops typing) gets through
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
