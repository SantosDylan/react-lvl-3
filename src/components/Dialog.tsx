import { ReactNode } from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  isModal?: boolean;
  children: ReactNode;
}

export default function Dialog({ isOpen, onClose, isModal = true, children }: DialogProps) {
  if (!isOpen) return null;  

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isModal ? 'bg-black bg-opacity-50' : 'bg-transparent pointer-events-none'}`}>
      <div className='bg-white p-6 rounded-lg shadow-lg relative pointer-events-auto'>
        <button className='absolute top-2 right-2 text-gray-500 hover:text-gray-700' onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

Dialog.Header = ({ children }: {children: ReactNode}) => <div className='border-b pb-2 mb-4'>{children}</div>;
Dialog.Body = ({ children }: {children: ReactNode}) => <div className='mb-4'>{children}</div>;
Dialog.Footer = ({ children }: {children: ReactNode}) => <div className='border-t pt-2 mt-4'>{children}</div>;
