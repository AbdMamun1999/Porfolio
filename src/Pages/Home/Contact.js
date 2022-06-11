import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser'
import {  toast } from 'react-toastify';


const Contact = data => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        emailjs.send("service_tk0clce", "template_pb8bnhk", data, "EAxc4fis_fPa6mMPb")
            .then(
                (result) => {
                    console.log(result);
                    if(result?.status === 200){
                        toast.success('Your message is sent')
                    }
                },
                (error) => {
                    if(error?.status !== 200){
                        toast.error(error?.text)
                    }
                }
            );
        reset();
    }
    return (
        <div className='w-4/6 mx-auto my-10'>
            <h2 className='text-3xl mb-5 mt-5 lg:mt-0 text-center text-white font-bold '>Get In Touch </h2>
            <div className='mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 justify-items-center text-white'>
                    <div className='flex flex-col lg:flex-row gap-10'>
                        <div className="form-control  w-96 ">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-100% bg-[#2d343e]"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Require'
                                    }
                                })} />
                            <label className="label">
                                {errors?.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.name.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-96 ">
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered w-100% bg-[#2d343e]"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Require'
                                    },
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Provide a valid email'
                                    }
                                })} />
                            <label className="label">
                                {errors?.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.email.message}</span>}
                                {errors?.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors?.email.message}</span>}
                            </label>
                        </div>
                    </div>
                    <div className="form-control mx-auto w-full">
                        <textarea className="textarea textarea-bordered w-[80%] h-[250px] mx-auto bg-[#2d343e]"
                            placeholder="Your message"
                            {...register("comments", {
                                required: {
                                    value: true,
                                    message: 'Comments is required'
                                }
                            })}></textarea>
                        <label className="label">
                            {errors?.comments?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.comments.message}</span>}
                        </label>
                        <div>
                            <input type="submit" className="btn btn-primary bg-green-600 hover:bg-green-600  w-full max-w-xs text-white block mx-auto" value='Submit' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;