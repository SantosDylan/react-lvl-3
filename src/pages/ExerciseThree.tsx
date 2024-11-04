import { useState } from 'react';
import { useFetchUsers, User } from '../hooks/users-hook';
import Dropdown from '../components/Dropdown';

export default function ExerciseThree() {
  const { users, loading, error } = useFetchUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className='h-full w-full flex flex-col gap-4 items-center'>
      <h1 className='text-xl font-bold'>Generic auto-filter dropdown</h1>
      <div className='p-4'>
        <Dropdown data={users} labelKey='name' valueChange={setSelectedUser} />
        {selectedUser && (
          <div className='mt-4'>
            <h2 className='font-semibold'>Selected User:</h2>
            <p>Name: {selectedUser.name}</p>
            <p>Email: {selectedUser.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}
