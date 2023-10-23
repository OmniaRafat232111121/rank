'use client'
import React from 'react';
import { useForm} from "react-hook-form"
import Container from './Container';
import Title from './Title';


const RankForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any)=> {
    console.log(data);
  } 

  return (
   <Container className='mt-[80px]'>
      <form onSubmit={handleSubmit(onSubmit)}  >
   <div className='flex lg:flex-row flex-col  mt-5 p-4
   justify-between items-center gap-x-4  2xl:w-[550px]  w-full mx-auto
'>
   <div>
        <input
          type="text"
          placeholder="Query"
          className="w-full p-3 border
           border-gray-300 rounded focus:outline-none focus:border-blue-500"

          {...register('query', { required: 'Query is required' })}
        />
           {errors.query?.message && <p className="text-red-500">{errors.query.message.toString()}</p>}

      </div>
      <div>
        <input
          type="text"
          placeholder="URL"
          className="w-full p-3 border
           border-gray-300 rounded lg:mt-0 mt-10 focus:outline-none focus:border-blue-500"

          {...register('url', { required: 'URL is required' })}
        />
   {errors.url?.message && <p className="text-red-500">{errors.url.message.toString()}</p>}

      </div>
   </div>

      <div className='text-center mx-auto mt-[20px]'>
        <button type="submit" className="bg-blue-500
         text-white p-2 rounded-md 
         
         hover:translate-x-5
         transition-all duration-200 ease-out">
          Submit
        </button>
      </div>
    </form>
    <Title title={'Ranks'} />

    </Container>

  );
};

export default RankForm;








