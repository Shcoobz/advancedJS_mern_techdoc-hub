import { useState, useEffect } from 'react';
import { CONFIG } from '../config/constants';

function usePersist() {
  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem(CONFIG.LOCAL_STORAGE.persistKey)) || false
  );

  useEffect(() => {
    localStorage.setItem(CONFIG.LOCAL_STORAGE.persistKey, JSON.stringify(persist));
  }, [persist]);

  return [persist, setPersist];
}

export default usePersist;
