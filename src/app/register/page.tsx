"use client";
import * as React from "react";

interface IRegisterProps {}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  const [register, setRegister] = React.useState({
    email: "",
    name: "",
    password: "",
    confirmPass: "",
    referralCode: "",
    role: "",
  });
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>Event Management Platform</div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign Up</h1>
          </div>
          <div className="w-full flex-1 mt-8">
            <div className="mx-auto max-w-xs">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setRegister({ ...register, email: newValue });
                }}
              />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setRegister({ ...register, name: newValue });
                }}
              />
              <input
                type="password"
                placeholder="Your Password"
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setRegister({ ...register, password: newValue });
                }}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setRegister({ ...register, confirmPass: newValue });
                }}
              />
              <input
                type="text"
                placeholder="Your Referral Code (Optional)"
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setRegister({ ...register, referralCode: newValue });
                }}
              />
              <div className="flex mt-5 justify-center">
                <div className="flex items-center me-4">
                  <input
                    type="radio"
                    name="userType"
                    value="customer"
                    checked={register.role === "customer"}
                  />
                  <label
                    htmlFor=""
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                  >
                    Customer
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    type="radio"
                    name="userType"
                    value="customer"
                    checked={register.role === "organizer"}
                  />
                  <label
                    htmlFor=""
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                  >
                    Organizer
                  </label>
                </div>
              </div>
              <div className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                Sign Up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
