import { useState } from 'react';
import Dialog from '../components/Dialog';

export default function ExerciseTwo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-4'>Dialog Component Demo</h1>

      <div className='flex gap-4'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>

        <button className='bg-green-500 text-white px-4 py-2 rounded-md' onClick={() => setIsDialogOpen(true)}>
          Open Regular Dialog
        </button>
      </div>

      <Dialog isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isModal={true}>
        <Dialog.Header>
          <h2 className='text-xl font-semibold'>Modal</h2>
        </Dialog.Header>
        <Dialog.Body>
          <p>The user has to close it before being able to interact with the rest of the webpage</p>
        </Dialog.Body>
        <Dialog.Footer>
          <button className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={() => setIsModalOpen(false)}>
            Close
          </button>
        </Dialog.Footer>
      </Dialog>

      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} isModal={false}>
        <Dialog.Header>
          <h2 className='text-xl font-semibold'>Dialog</h2>
        </Dialog.Header>
        <Dialog.Body>
          <p>the user can still interact with the rest of the page.</p>
        </Dialog.Body>
        <Dialog.Footer>
          <button className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={() => setIsDialogOpen(false)}>
            Close
          </button>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}
