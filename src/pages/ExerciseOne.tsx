import LocalStorageGetter from "../components/LocalStorageGetter";
import LocalStorageSetter from "../components/LocalStorageSetter";


export const EXAMPLE_STORAGE_KEY = 'exampleKey';

export default function ExerciseOne() {
  return (

      <div className='h-full w-full flex flex-col gap-4 items-center'>
        <h1 className='text-xl font-bold'>LocalStorage Handler Example</h1>
        <span>Key : {EXAMPLE_STORAGE_KEY}</span>
        <LocalStorageSetter />
        <LocalStorageGetter />
      </div>

  );
}

