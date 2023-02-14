import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const naviagte = useNavigate();

  return (
    <>
      <div className='flex justify-center mt-[15vh]'>
        <button onClick={() => naviagte(-1)} className='font-bold text-4xl'>
          404 NotFound 🦹
        </button>
      </div>
    </>
  );
};

export default NotFound;
