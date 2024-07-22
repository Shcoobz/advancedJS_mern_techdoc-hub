import { useState, useEffect } from 'react';
import { CONFIG } from '../config/constants';

/**
 * @function usePersist
 * @desc Manages a boolean state that determines if data should be persisted in local storage.
 */
function usePersist() {
  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem(CONFIG.LOCAL_STORAGE.persistKey)) || false
  );

  /**
   * @function useEffect
   * @desc Updates the local storage with the current value of the `persist` state whenever it changes.
   */
  useEffect(() => {
    localStorage.setItem(CONFIG.LOCAL_STORAGE.persistKey, JSON.stringify(persist));
  }, [persist]);

  return [persist, setPersist];
}

export default usePersist;
