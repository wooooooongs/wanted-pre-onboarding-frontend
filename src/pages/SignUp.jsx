import React from 'react';

const SignUp = () => {
  return (
    <>
      <div className='flex flex-col w-[400px] h-[450px] border-[1.5px] rounded-sm border-slate-700 mx-auto my-[5rem] px-11 py-7'>
        <p className='font-semibold mx-auto text-5xl mb-[4rem]'>Sign Up</p>
        <div className='mb-8'>
          <div className='mb-1'>
            <span className='font-semibold mr-2'>Email</span>
          </div>
          <input
            type='email'
            className='w-full rounded-sm border-[1.5px] border-slate-500 p-2.5 drop-shadow-md'
            placeholder='test@testemail.com'
          />
        </div>
        <div className='mb-8'>
          <div className='mb-1'>
            <span className='font-semibold mr-2'>Password</span>
          </div>
          <input
            type='password'
            className='w-full rounded-sm border-[1.5px] border-slate-500 p-2.5 drop-shadow-md'
            placeholder='12345678'
          />
        </div>
        <button className='ml-auto border-[1.5px] border-slate-500 rounded-sm w-[4rem] h-[2.5rem] drop-shadow-md'>
          <span>Done</span>
        </button>
      </div>
    </>
  );
};

export default SignUp;
