import LocalStorageGetter from './components/LocalStorageGetter';
import LocalStorageSetter from './components/LocalStorageSetter';

export const EXAMPLE_STORAGE_KEY = 'exampleKey';

function App() {
  return (
    <>
      <div className='h-[100vh] w-[100vw] flex flex-col pt-40 gap-4 items-center'>
        <h1 className='text-xl font-bold'>LocalStorage Handler Example</h1>
        <span>Key : {EXAMPLE_STORAGE_KEY}</span>
        <LocalStorageSetter />
        <LocalStorageGetter />
      </div>
    </>
  );
}

export default App;
