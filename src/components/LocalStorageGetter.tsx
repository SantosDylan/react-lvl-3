import { EXAMPLE_STORAGE_KEY } from '../App';
import useLocalStorage from '../hooks/local-storage.hook';

export default function LocalStorageGetter() {
  const { value } = useLocalStorage<string>('exampleKey', '');

  return (
    <div>
      <h2>
        Current Value for <i>{EXAMPLE_STORAGE_KEY}</i>: {value || 'No value set'}
      </h2>
    </div>
  );
}
