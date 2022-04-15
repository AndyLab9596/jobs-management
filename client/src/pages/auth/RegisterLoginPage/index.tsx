import React, { useState } from 'react'
import Form from '../../../components/ui/Form';
import * as yup from 'yup';
import FormInputField from '../../../components/ui/FormInputField';
import Logo from '../../../components/ui/Logo';

interface FormValueType {
    name: string,
    email: string,
    password: string,
    isMember: boolean
}

const RegisterLoginPage = () => {
    const [isMember, setIsMember] = useState<boolean>(true);
    const initialValues: FormValueType = {
        name: '',
        email: '',
        password: '',
        isMember: !isMember
    }

    const validationSchema = yup.object().shape({
        name: yup.string().nullable(true).when(['isMember'], {
            is: true,
            then: yup.string().required('Please provide name')
        }),
        email: yup.string().email('Please provide proper email').required('Email must be provided'),
        password: yup.string().required('Password must be provided')
    })

    const handleSubmit = (values: FormValueType) => {
        console.log(values)
    }

    return (
        <div className='flex justify-center items-center min-height'>

            <Form
                defaultValues={initialValues}
                validationSchema={validationSchema}
                className='max-w-[400px] w-[90vw] mx-auto my-12 border-t-[5px] border-sky-500 bg-white px-8 py-10 rounded-sm shadow-md '
                onSubmit={handleSubmit}
            >
                <Logo className="mt-0 mx-auto mb-[1.38rem] " />
                <h3 className='text-center font-bold'>{isMember ? 'Login' : 'Register'}</h3>
                {!isMember && (
                    <FormInputField type="text" label='Name' name='name' />
                )}
                <FormInputField type="email" label='Email' name='email' />
                <FormInputField type="password" label='Password' name='password' />
                <button type='submit' className='btn-full mt-2'>
                    Submit
                </button>
                <p className='text-center mt-4 mb-0'>
                    {isMember ? `Not a member yet?${' '}` : `Already a member?${' '}`}
                    <button type='button' className='text-sky-500' onClick={() => setIsMember(prevState => !prevState)} >
                        {isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </Form>
        </div>
    )
}

export default RegisterLoginPage