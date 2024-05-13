import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Landing Page/assets/images/logo.png'
 // Import the Tailwind CSS file

export default function WorkerLogin() {
    const navigate=useNavigate()
  return (
    <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-blue-900 via-gray-900 to-blue-800 bottom-0 leading-5 h-full w-full overflow-hidden">
      <div className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
        <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
          <div className="self-start hidden lg:flex flex-col text-gray-300">
          <img src={Logo} alt=""/>
            <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
            <p className="pr-3 text-sm opacity-75">Always continue working with us and getting quality jobs here .</p>
          </div>
        </div>
        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-white mx-auto rounded-3xl w-96">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
            </div>
            <div className="space-y-6">
              <div>
                <input className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400" type="email" placeholder="Email"/>
              </div>
              <div className="relative" x-data="{ show: true }">
                <input placeholder="Password" type={'password'} className="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"/>
                <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
                  <svg onClick="show = !show" className={'h-4 text-purple-700'} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"/>
                  </svg>
                  <svg onClick="show = !show" className={'hidden'} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"/>
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm ml-auto">
                  <a href="#" className="text-purple-700 hover:text-purple-600">Forgot your password?</a>
                </div>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center bg-blue-900 hover:bg-blue-1000 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500">
                  Sign in
                </button>
              </div>
              <p className="text-gray-400">Don't have an account? <button onClick={() => navigate('/workersignup')} className="text-sm text-blue-700 hover:text-blue-700">Sign Up</button></p>
              <div className="flex items-center justify-center space-x-2 my-5">
                <span className="h-px w-16 bg-gray-100"></span>
                <p className="text-sm text-gray-400 font-normal">Or continue with</p>
                <span className="h-px w-16 bg-gray-100"></span>
              </div>
              <div className="flex justify-center">
                <button type="button" className="w-full flex justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500">
                  <div className="flex items-center justify-center">
                    <svg className="h-6 w-6 text-gray-800" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M462.72 262.55c.33 2.88.53 5.79.53 8.73 0 85.94-55.46 147.36-131.3 147.36-68.58 0-101.53-45.49-118.79-69.36h-4.31c-17.25 23.9-50.28 69.36-118.85 69.36-75.84 0-131.29-61.42-131.29-147.36 0-84.44 56.2-147.36 132.11-147.36 19.7 0 37.86 3.54 54.3 10.07 4.59 1.76 9.63-.93 11.12-5.24C76.82 83.05 96.8 48 131.07 32c19.48-9.14 42.23-13.8 68.11-13.8 23.48 0 44.88 4.45 63.83 13.22 9.08 4.25 20.19 1.4 26.14-6.7 5.95-8.09 1.47-19.47-7.98-22.25C261.02 2.39 226.47 0 190.18 0 107.63 0 48 57.69 48 147.26c0 85.94 54.37 142.76 131.33 142.76 66.1 0 97.91-42.46 114.67-66.07h4.31c16.76 23.61 48.57 66.07 114.65 66.07 76.87 0 131.28-57.87 131.28-142.76-.01-2.94-.18-5.86-.52-8.73-1.1-9.62-9.92-16.86-19.58-16.86h-77.23c-14.66 0-26.58-12.29-25.85-26.89 1.14-20.16 4.74-41.63 10.57-63.88 1.83-7.66-4.04-15.2-11.63-15.2h-56.42c-8.91 0-17.27 5.95-19.73 15.15-9.3 33.23-14.03 67.81-14.03 101.51-.01 2.89.2 5.79.54 8.64 1.12 9.62 9.99 16.85 19.66 16.85h90.87c8.86 0 16.78 7.13 17.44 16.93 1.47 20.65 5.1 42.08 11.11 64.19.82 3.61 4.11 6.23 7.81 6.23h90.42c9.67 0 18.56-7.23 19.68-16.86zM367.85 332.74c-25.15 0-45.57-20.33-45.57-45.38 0-25.05 20.42-45.38 45.57-45.38 25.16 0 45.57 20.33 45.57 45.38-.01 25.05-20.41 45.38-45.57 45.38zm94.8-45.38c0 52.43-29.23 80.48-94.8 80.48-65.57 0-94.8-28.05-94.8-80.48 0-52.43 29.23-80.48 94.8-80.48 65.57 0 94.8 28.05 94.8 80.48z"/>
                    </svg>
                  </div>
                  <span className="ml-4">
                    Continue with Google
                  </span>
                </button>
              </div>
              <p className="text-sm text-center text-gray-400">By signing in you agree to our <a href="#" className="text-purple-700 hover:text-purple-700">terms and conditions</a></p>
            </div>
          </div>
        </div>
      </div>
      <svg className="absolute bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fff" fillOpacity="1" d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
      <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"></script>
    </div>
  );
}
