import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';


const Contact = data => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        emailjs.send("service_tk0clce", "template_pb8bnhk", data, "EAxc4fis_fPa6mMPb")
            .then(
                (result) => {
                    console.log(result);
                    if (result?.status === 200) {
                        toast.success('Your message is sent')
                    }
                },
                (error) => {
                    if (error?.status !== 200) {
                        toast.error(error?.text)
                    }
                }
            );
        reset();
    }
    return (
        <div className='w-[90%] lg:w-[55%] mx-auto lg:mt-20' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <h2 className='text-5xl mb-5 mt-10 lg:mt-0 text-center text-white font-bold '>Get In Touch </h2>
            <div className='mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className=''>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-1 md:gap-x-5'>
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className='block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                        <div>
                            <input
                                type="email"
                                placeholder="email"
                                className='block w-full  p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                    <div>
                        <textarea
                            placeholder="Your message"
                            className='block p-2.5 w-full h-[120px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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