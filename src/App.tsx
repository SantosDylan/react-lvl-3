import { Link, Route, Routes } from 'react-router-dom';
import ExerciseOne from './pages/ExerciseOne';
import ExerciseTwo from './pages/ExerciseTwo';

export const EXAMPLE_STORAGE_KEY = 'exampleKey';

function App() {
  return (
    <div className='h-[100vh] w-[100vw] flex flex-col  pt-40 gap-4 items-center bg-slate-200'>
      <div className='flex gap-4'>
        <Link to={'/exercise-one'}>
          <button className='bg-slate-400 rounded-md text-white px-2 py-1 hover:opacity-75'>
            Exercise 1
          </button>
        </Link>
        <Link to={'/exercise-two'}>
          <button className='bg-slate-400 rounded-md text-white px-2 py-1 hover:opacity-75'>
            Exercise 2
          </button>
        </Link>
       
      </div>
      <Routes>
        <Route path='/' element={<ExerciseOne />}></Route>
        <Route path='/exercise-one' element={<ExerciseOne />}></Route>
        <Route path='/exercise-two' element={<ExerciseTwo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
