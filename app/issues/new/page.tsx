'use client'

import React, { useEffect, useState } from 'react'
import { TextField , TextArea ,Button, Callout} from '@radix-ui/themes'
import { useForm } from 'react-hook-form';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const page = () => {
    const [error , seterror] = useState('');
    const { register, handleSubmit, setValue ,reset } = useForm();


    useEffect(()=>{
        if(error){
            const timer = setTimeout(() => {
                seterror('');
            }, 4000);
            return () => clearTimeout(timer);
        }
    },[error])



     const onsubmit = async(data)=>{       
       if (!data.name || !data.description) {
            seterror('All fields are required.');
            return;
        }

        try{
            const response = await fetch('/api/issuecreation' , {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            {result ? alert('Issue created Successfully !') : seterror('Error creating Issue ! PLZ try again')};
            reset(); 
        }catch(error){
           seterror (error);
        }
     }

     const handleCloseError =()=>{
        seterror('');
     }

    return (
     <>
        <div>
        <h1 className='mb-7 font-bold'>ENTER NEW ISSUE</h1>
        {error && <Callout.Root color='red' className='mb-5'>
          <div className='flex flex-row '> 
            <Callout.Text>{error}</Callout.Text>
            <button onClick={handleCloseError}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </button>
        </div>   
        </Callout.Root>}
        <form onSubmit = {handleSubmit(onsubmit)}>
         <TextField.Root className = "max-w-lg  border-2 text-black"  placeholder="Enter the issue name.."
          {...register('name' )}
         >
                {/* <TextField.Slot>
                </TextField.Slot> */}
        </TextField.Root>
        <SimpleMDE className='max-w-2xl mt-5 mb-2 border-2 ' placeholder="Enter the description.." 
         onChange={(value)=> setValue('description' , value)}
        />
        <input type='hidden' {...register('description')} />
        <Button className='mt-5' type='submit'>Submit Issue</Button>
    </form>
       
        </div>
        </>
    )
}

export default page