import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const ACCESS_TOKEN = localStorage.getItem('access_token');

    if (!ACCESS_TOKEN) navigate('/signin');
  }, [navigate]);

  const [todoValue, setTodoValue] = useState('');
  const [todos, setTodos] = useState([
    {
      todo: '카구리 사기',
      completed: false,
    },
    {
      todo: '카구리 먹기',
      completed: false,
    },
  ]);

  const handleInputChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();

    if (todoValue) {
      setTodos([...todos, { todo: todoValue, completed: false }]);
      setTodoValue('');
    }
  };

  return (
    <>
      <div className='w-full justify-center flex gap-12 mt-[8vh] pb-7'>
        <button className='h-[55px] text-5xl font-semibold'>Sign Out</button>
      </div>

      <div className='w-[15rem] mx-auto mt-[6rem]'>
        <div className='flex mb-5'>
          <input
            value={todoValue}
            onChange={handleInputChange}
            placeholder='카구리 사기'
            className='w-full rounded-sm border-[1.5px] border-slate-500 p-1.5 drop-shadow-md'
            data-testid='new-todo-input'
          />
          <button
            onClick={handleInputSubmit}
            className='rounded-sm w-[5rem]'
            data-testid='new-todo-add-button'>
            추가
          </button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <label className='mr-4'>
                <input className='mr-2' type='checkbox' />
                <span>{todo.todo}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
