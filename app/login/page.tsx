'use client'
import Image from 'next/image'
import char_login from '../../assets/background/char_login.png'
import cactus from '../../assets/background/cactus.png'
import React from 'react'
import { Logo, CustomInput, CustomButton } from '@/components'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useForm } from 'react-hook-form'
import useLogin from '@/api/login'

interface FormData {
  username: string;
  password: string;
}

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const {login, loading, error} = useLogin();

  const onSubmit = (data: FormData) => {
    if(data){
      login(data.username, data.password)
    }
  };


  return (
    <div className='login_container flex justify-center items-center text-black'>
      <div className='bg-white w-2/3 h-2/3 rounded-xl flex relative'>
          <form className='w-2/3 h-full p-10 gap-4 flex flex-col' onSubmit={handleSubmit(onSubmit)} >
              <Logo />
              <span className='font-medium'>Welcome back !!!</span>
              <h1 className='text-4xl font-bold'>Log In</h1>
              <CustomInput 
                placeholder='username or email' 
                type='text' bgColor='waterBlue' 
                width='full' className='z-20  py-2' 
                {...register('username', { required: 'Username is required' })} 
                />
                {(errors.username || error) && (
                  <p className='text-red-600'>
                    {errors.username?.message || error}
                  </p>
                )}
              <CustomInput 
                placeholder='password'
                type='password' 
                bgColor='waterBlue' 
                width='full' 
                className='z-20  py-2' 
                {...register('password', { required: 'Password is required' })}
                />
                {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
              <div className='my-2'>
                <CustomButton 
                  text='Login' 
                  width='1/4' 
                  type='submit'
                  IconComponent={FaLongArrowAltRight} 
                  className='border-none bg-softPink text-white'
                  />
              </div>
              <div>
                <span className='text-gray-400 text-sm'>Don't have an account yet? </span>
                <span className='text-softPink font-semibold text-sm'>Sign up for free</span>
              </div>
          </form>
          <div className='bg-waterBlue flex-1 rounded-xl'>
          </div>
          <Image src={char_login} alt='char_login'  className='absolute right-7 z-10' />
          <Image src={cactus} alt='cactus'  className='absolute right-0 bottom-5' />
          
      </div>
    </div>
  )
}

export default Login