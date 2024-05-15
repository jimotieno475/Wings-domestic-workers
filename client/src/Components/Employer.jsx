import { useNavigate } from 'react-router-dom';
import Cleaner from '../Landing Page/assets/images/services/cleaner1.jpg';
import Cooking from '../Landing Page/assets/images/services/cook 1.avif';
import LawnMowing from '../Landing Page/assets/images/services/loan $ flower.jpg';
import Carcleaning from '../Landing Page/assets/images/services/car wash 1.avif';
import Maid from '../Landing Page/assets/images/services/maid 2.jpg';
import Laundry from '../Landing Page/assets/images/services/loungry1.jpg';
import Plumbing from '../Landing Page/assets/images/services/plumber 1.jpg';
import Shambaboy from '../Landing Page/assets/images/services/shamba 1.jpg'
import Logo from'../Landing Page/assets/images/logo.png'
import { FaBell } from 'react-icons/fa';


function Employer() {
 const navigate=useNavigate()


    return (
        <div className="relative bg-slate-100">
<div class="relative flex  flex-col justify-center overflow-hidden">
  <div class="min-h-28 ">
    <div class="max-w-screen-lg mx-auto py-4">

      <div class="rounded-lg overflow-hidden  relative before:absolute before:z-20 before:bg-black before:h-full before:w-full before:bg-gradient-to-tr before:from-black before:to-emerald-600 before:opacity-80">
        <img src={Logo} class="absolute z-10 object-cover h-80 w-full h-full" alt=""/>
        <a href="" class="absolute z-20  top-1/2  right-20 text-white -translate-y-1/2">
        <div class="flex gap-3 items-center">
  <FaBell />

    <div class="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')]">
    </div>
    <div class="sm:hidden cursor-pointer" id="mobile-toggle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path class="dark:stroke-white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
  </div>
        </a>
        <div class="relative z-20 p-10 h-full w-1/2">
          <h2 class="text-white text-3xl font-semibold">Wings Domestic Workers</h2>
          <h3 class="text-white text-xl">Mr Kimi Jerunamon</h3>

          <div class="flex gap-4 items-center pt-4 border-t border-slate-300 text-slate-300 mt-6">
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                35
              </span>
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-sky-400 w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>

                20
              </span>
              <span class="flex gap-1 items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-lime-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>


                15
              </span>
            </div>
        </div>
      </div>
      <div class="sm:flex sm:items-center sm:justify-between">
        <div>
            <div class="flex items-center">
                <h2 class="text-lg font-medium text-gray-800 dark:text-white">Available services</h2>
            </div>
        </div>
    </div>

    <div class=" md:flex md:items-center md:justify-between">
        <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
            <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                Popular
            </button>

            <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                Recomended
            </button>

            <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                Newest
            </button>
        </div>

        <div class="relative flex items-center  md:mt-0">
            <span class="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>

            <input type="text" placeholder="Search" class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 
            pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
        </div>
    </div>

    <div class="flex flex-col mt-6">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">

                </div>
            </div>
        </div>
    </div>
      <div class="flex flex-wrap gap-2 mt-6 ml-2">
        <div class="bg-white w-full sm:w-1/2 md:w-1/3 shadow rounded-lg overflow-hidden flex flex-col">
          <img  src={Cleaner}  class="object-cover h-52 w-full" alt=""/>
          <div className="single-feature">
                           <div className="bn-dgt border-t border-slate-300 tetx-bold">
                            <h5>Cleaner</h5>
                            </div>
                        </div>
        </div>
        <div  onClick={() => navigate('/employerdash')} class="bg-white w-full sm:w-1/2 md:w-1/3 shadow rounded-lg overflow-hidden flex flex-col" >
          <img  src={Cooking}  class="object-cover h-52 w-full" alt=""/>
          <div className="single-feature">
                           <div className="bn-dgt border-t border-slate-300 tetx-bold">
                            <h5>Cooking</h5>
                            </div>
                        </div>
        </div>
        <div class="bg-white w-full sm:w-1/2 md:w-1/3 shadow rounded-lg overflow-hidden flex flex-col">
          <img  src={LawnMowing}  class="object-cover h-52 w-full" alt=""/>
          <div className="single-feature">
                           <div className="bn-dgt border-t border-slate-300 tetx-bold">
                            <h5>Lawn Mowing</h5>
                            </div>
                        </div>
        </div>
        <div class="bg-white w-full sm:w-1/2 md:w-1/3 shadow rounded-lg overflow-hidden flex flex-col">
          <img  src={Carcleaning}  class="object-cover h-52 w-full" alt=""/>
          <div className="single-feature">
                           <div className=" border-t border-slate-300 tetx-bold">
                            <h5>Car Cleaning</h5>
                            </div>
                        </div>
        </div>
        <div class="bg-white w-full sm:w-1/2 md:w-1/3 shadow rounded-lg overflow-hidden flex flex-col">
          <img  src={Maid}  class="object-cover h-52 w-full" alt=""/>
          <div className="single-feature">
                           <div className="bn-dgt">
                            <h5>Maid</h5>
                            </div>
                        </div>
        </div>
        <div class="bg-white w-full sm:w-1/2 md:w-1/3 shadow rounded-lg overflow-hidden flex flex-col">
          <img  src={Laundry}  class="object-cover h-52 w-full" alt=""/>
          <div className="single-feature">
                           <div className="bn-dgt">
                            <h5>Laundry</h5>
                            </div>
                        </div>
        </div>
        <div class="bg-white w-full sm:w-1/2 md:w-1/3 shadow rounded-lg overflow-hidden flex flex-col">
          <img  src={Plumbing}  class="object-cover h-52 w-full" alt=""/>
          <div className="single-feature">
                           <div className="bn-dgt">
                            <h5>Plumbing</h5>
                            </div>
                        </div>
        </div>
        <div class="bg-white w-full sm:w-1/2 md:w-1/3 shadow rounded-lg overflow-hidden flex flex-col">
          <img  src={Shambaboy}  class="object-cover h-52 w-full" alt=""/>
          <div className="single-feature">
                           <div className="bn-dgt">
                            <h5>Farm Worker /Shamba Boy</h5>
                            </div>
                        </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default Employer;
