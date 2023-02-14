import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const ACCESS_TOKEN = localStorage.getItem('access_token');

    if (!ACCESS_TOKEN) navigate('/signin');
  }, [navigate]);

  return (
    <>
      <div className='w-full justify-center flex gap-12 mt-[8vh] pb-7'>
        <button className='h-[55px] text-5xl font-semibold'>Sign Out</button>
      </div>

      <div className='w-[15rem] mx-auto mt-[6rem]'>
        <div className='flex mb-5'>
          <input
            className='w-full rounded-sm border-[1.5px] border-slate-500 p-1.5 drop-shadow-md'
            data-testid='new-todo-input'
          />
          <button
            className='rounded-sm w-[5rem]'
            data-testid='new-todo-add-button'>
            추가
          </button>
        </div>

        <ul>
          <li>
            <label>
              <input type='checkbox' />
              <span>TODO 1</span>
            </label>
          </li>
          <li>
            <label>
              <input type='checkbox' />
              <span>TODO 1</span>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Todo;
