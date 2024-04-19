'use client'
import { BASE_URL } from '@/utils/helper';
import axios from 'axios';
import * as React from 'react';
import toast from 'react-hot-toast';

interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
    const [active, setActive] = React.useState<Boolean>(false)
    const generateRefferalCode = (length: number) => {
        const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let referralCode = ''
        for (let i = 0; i < length; i++) {
            referralCode += character.charAt(Math.floor(Math.random() * character.length))
        }
        return referralCode
    }
    const [register, setRegister] = React.useState({
        email: "",
        name: "",
        password: "",
        confirmPass: "",
        referralCode: generateRefferalCode(8),
        role: ""
    })
    const onHandleSignUp = async () => {
        try {
            console.log(register);
            if (Object.values(register).includes("")) {
                toast.error('Data Harap diisi')
                throw new Error("Data Harap Diisi");

            }
            if (register.password !== register.confirmPass) {
                toast.error('Password and Confirm Password are not equal')
                throw new Error("Password and Confirm Password are not equal");
            }
            const checkEmail = await axios.get(`${BASE_URL}/auth/check-email?email=${register.email}`)
            console.log(checkEmail);


            if (checkEmail) {
                toast.error('email already exist')
                throw new Error("email already exist");
            }


            const response = await axios.post(BASE_URL + `/auth/register`, {
                name: register.name,
                email: register.email,
                password: register.password,
                role: register.role,
                referralCode: register.referralCode
            })
            // console.log(response.data);
            toast.success('Register Success')
        } catch (error) {
            console.log(error);
        }
    }
    return <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
        <div className='max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
            <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                <div>
                    Event Management Platform
                </div>
                <div className='mt-12 flex flex-col items-center'>
                    <h1 className='text-2xl xl:text-3xl font-extrabold'>Sign Up</h1>
                </div>
                <div className='w-full flex-1 mt-8'>
                    <div className="mx-auto max-w-xs">
                        <input type="email" placeholder='Your Email' className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white' onChange={(e) => {
                            const newValue = e.target.value;
                            setRegister({ ...register, email: newValue })
                        }} />
                        <input type="text" placeholder='Your Name' className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5' onChange={(e) => {
                            const newValue = e.target.value;
                            setRegister({ ...register, name: newValue })
                        }} />
                        <input type="password" placeholder='Your Password' className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5' onChange={(e) => {
                            const newValue = e.target.value;
                            setRegister({ ...register, password: newValue })
                        }} />
                        <input type="password" placeholder='Confirm Password' className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5' onChange={(e) => {
                            const newValue = e.target.value;
                            setRegister({ ...register, confirmPass: newValue })
                        }} />
                        {active ?
                            <input type="text" placeholder='Your Referral Code (Optional)' className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5' onChange={(e) => {
                                const newValue = e.target.value;
                                setRegister({ ...register, referralCode: newValue })
                            }} /> : <></>
                        }
                        <div className="flex mt-5 justify-center">
                            <div className="flex items-center me-4">
                                <input type="radio" name="userType"
                                    value="customers"
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        setRegister({ ...register, role: newValue })
                                        setActive(true)
                                    }} />
                                <label htmlFor="" className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-900'>Customer</label>
                            </div>
                            <div className="flex items-center me-4">
                                <input type="radio" name="eo"
                                    value="eo"
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        setRegister({ ...register, role: newValue })
                                        // console.log(newValue);

                                        setActive(false)
                                    }} />
                                <label htmlFor="" className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-900'>EO</label>
                            </div>
                        </div>
                        <div className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none cursor-pointer' onClick={onHandleSignUp}>Sign Up</div>
                    </div>
                </div>
            </div>
        </div>
    </div >;
};

export default Register;
