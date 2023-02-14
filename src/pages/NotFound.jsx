import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className='flex justify-center mt-[15vh]'>
        <button className='font-bold text-4xl'>
          <Link to={'/'}>404 NotFound 🦹</Link>
        </button>
      </div>
    </>
  );
};

export default NotFound;
