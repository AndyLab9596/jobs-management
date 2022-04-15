import React from 'react'
import { useFormContext } from 'react-hook-form';

interface FormInputFieldProps {
    label: string,
    name: string,
    type: 'text' | 'email' | 'password'
}

const FormInputField: React.FC<FormInputFieldProps> = ({ label, name, type }) => {
    const { register, formState: { errors } } = useFormContext();
    return (
        <div className='mb-4'>
            <label htmlFor={name} className="block text-sm capitalize tracking-wider mb-2" >{label}</label>
            <input type={type} {...register(`${name}` as const)} className="w-full h-9 px-[0.375rem] py-3 rounded-sm border-[1px] border-gray-500 bg-gray-200 " />
            <p className='text-sm text-red-400'>{!!errors[name] && `*${errors[name].message}`}</p>
        </div>
    )
}

export default FormInputField