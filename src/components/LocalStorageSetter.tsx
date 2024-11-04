import React, { useState } from 'react';
import useLocalStorage from '../hooks/local-storage.hook';

export default function LocalStorageSetter() {
  const [inputValue, setInputValue] = useState('');
  const { setValue } = useLocalStorage<string>('exampleKey', '');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as string;
    setInputValue(value);
  };

  const handleButtonClick = () => {
    setValue(inputValue);
    setInputValue('');
  };

  return (
    <div className='flex gap-4'>
      <input type='text' className='border-slate-400 border rounded-md px-2' value={inputValue} onChange={handleInputChange} placeholder='Enter a value' />
      <button type='submit' className='bg-slate-400 rounded-md text-white px-2 py-1 hover:opacity-75' onClick={handleButtonClick}>
        Save
      </button>
    </div>
  );
}
