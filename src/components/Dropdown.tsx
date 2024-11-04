import React, { useEffect, useState } from 'react';

interface DropdownProps<T> {
  data: T[];
  labelKey: keyof T;
  valueChange: (selectedItem: T | null) => void;
}

export default function Dropdown<T>({ data, labelKey, valueChange }: DropdownProps<T>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredData, setFilteredData] = useState<T[]>([]);

  useEffect(() => {
    const filtered = data.filter((item) => String(item[labelKey]).toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(filtered);
  }, [data, searchTerm, labelKey]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleItemClick = (item: T) => {
    valueChange(item);
    setSearchTerm('');
    setIsOpen(false);
  };

  const highlightText = (text: string) => {
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return parts.map((part, index) => (part.toLowerCase() === searchTerm.toLowerCase() ? <b key={index}>{part}</b> : part));
  };

  return (
    <div className='relative'>
      <input
        type='text'
        className='border-slate-400 border rounded-md px-2'
        placeholder={`enter ${String(labelKey)}`}
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      />
      {isOpen && filteredData.length > 0 && (
        <ul className='absolute z-10 w-full border border-gray-300 bg-white rounded-md shadow-lg'>
          {filteredData.map((item, index) => (
            <li key={index} className='p-2 hover:bg-gray-100 cursor-pointer' onClick={() => handleItemClick(item)}>
              {highlightText(String(item[labelKey]))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
