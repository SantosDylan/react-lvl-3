import { useEffect, useState } from 'react';

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialValue;
  });

  const setValue = (newValue: T) => {
    setStoredValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
    window.dispatchEvent(new Event('local-storage-changed'));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedValue = localStorage.getItem(key);
      setStoredValue(updatedValue ? JSON.parse(updatedValue) : null);
    };

    window.addEventListener('local-storage-changed', handleStorageChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('local-storage-changed', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return { value: storedValue, setValue };
}
