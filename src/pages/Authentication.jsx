import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Authentication = (props) => {
  const { authType } = props;
  const titleType = {
    signUp: 'Sign Up',
    signIn: 'Sign In',
  };

  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState('');
  const [emailValidation, setEmailValidation] = useState(false);
  const [pwdValue, setPwdValue] = useState('');
  const [PwdValidation, setPwdValidation] = useState(false);
  const [validationStatus, setValidationStatus] = useState(false);

  useEffect(() => {
    emailValue.split('').includes('@')
      ? setEmailValidation(true)
      : setEmailValidation(false);

    pwdValue.length >= 8 ? setPwdValidation(true) : setPwdValidation(false);
  }, [emailValue, pwdValue]);

  useEffect(() => {
    emailValidation && PwdValidation
      ? setValidationStatus(true)
      : setValidationStatus(false);
  }, [emailValidation, PwdValidation]);

  const testHandleSubmit = () => {
    navigate('/');
  };

  return (
    <>
      <div className='flex flex-col w-[400px] h-[450px] border-[1.5px] rounded-sm border-slate-700 mx-auto my-[5rem] px-11 py-7'>
        <p className='font-semibold mx-auto text-5xl mb-[4rem]'>
          {titleType[authType]}
        </p>
        <div className='mb-8'>
          <div className='mb-1'>
            <span className='font-semibold mr-2'>Email</span>
          </div>
          <input
            type='email'
            onChange={(e) => setEmailValue(e.target.value)}
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
            onChange={(e) => setPwdValue(e.target.value)}
            className='w-full rounded-sm border-[1.5px] border-slate-500 p-2.5 drop-shadow-md'
            placeholder='12345678'
          />
        </div>
        <button
          disabled={!validationStatus}
          onClick={testHandleSubmit}
          className='ml-auto border-[1.5px] border-slate-500 rounded-sm w-[4rem] h-[2.5rem] drop-shadow-md'>
          <span className={!validationStatus ? 'opacity-50' : ''}>Done</span>
        </button>
      </div>
    </>
  );
};

export default Authentication;
