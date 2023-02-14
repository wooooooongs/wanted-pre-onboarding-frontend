import { Outlet, Link } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <div className='w-full justify-center flex gap-12 mt-[8vh]'>
        <span className='text-5xl font-semibold cursor-pointer'>
          <Link to={'signup'}>Sign Up</Link>
        </span>
        <span className='text-5xl font-semibold'>/</span>
        <span className='text-5xl font-semibold cursor-pointer'>
          <Link to={'signin'}>Sign In</Link>
        </span>
      </div>
      <Outlet />
    </>
  );
};

export default Root;
