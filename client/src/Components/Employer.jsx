import { useNavigate } from 'react-router-dom';
import Cleaner from '../Landing Page/assets/images/services/cleaner1.jpg';
import Cooking from '../Landing Page/assets/images/services/cook 1.avif';
import LawnMowing from '../Landing Page/assets/images/services/loan $ flower.jpg';
import Carcleaning from '../Landing Page/assets/images/services/car wash 1.avif';
import Maid from '../Landing Page/assets/images/services/maid 2.jpg';
import Laundry from '../Landing Page/assets/images/services/loungry1.jpg';
import Plumbing from '../Landing Page/assets/images/services/plumber 1.jpg';
import Shambaboy from '../Landing Page/assets/images/services/shamba 1.jpg'

function Employer() {
 const navigate=useNavigate()


    return (
        <div className="relative">
   <main class="container mx-w-6xl mx-auto py-4">
            <main class="container mx-w-6xl mx-auto py-4">
        {/* <div class="flex flex-col space-y-8">
            
            <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6">
                <div class="md:col-span-2 xl:col-span-3 bg-white p-6 rounded-2xl border border-gray-50">
…                    
                </div>
            </div>
           
        </div> */}
    </main><div class="flex flex-col space-y-8">
            
            <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6">
                <div class="md:col-span-2 xl:col-span-3 bg-white p-6 rounded-2xl border border-gray-50">
                    <div class="flex flex-col space-y-6 md:h-full md:justify-between">
                        <div class="flex justify-between">
                            <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                                    Wings Employer Account
                            </span>
                            {/* <span class="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                                Acount Status
                            </span> */}
                        </div>
                        <div class="flex gap-2 md:gap-4 justify-between items-center">
                            <div class="flex flex-col space-y-4">
                                <h2 class="text-gray-800 font-bold tracking-widest leading-tight">welcome mr Sam Olole </h2>
                            </div>
                            {/* <h2 class="text-lg md:text-xl xl:text-3xl text-gray-700 font-black tracking-wider">
                                <span class="md:text-xl">#</span>
                                Active
                            </h2> */}
                        </div>
                        <div class="flex gap-2 md:gap-4">
                        </div>
                    </div>
                </div>
                <div
                    class="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-800 flex flex-col justify-between">
                    <div class="flex flex-col">
                        <p class="text-white font-bold">Quality workers with the best experiences here in Kenya hire us and get good services</p>
                        <p class="mt-1 text-xs md:text-sm text-gray-50 font-light leading-tight max-w-sm">

                        </p>
                    </div>
                    <div class="flex justify-between items-end">
                        <button
                            class="bg-blue-800 px-4 py-3 rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-600 hover:text-white">
                            Learn More
                        </button>
                        {/* <img src="https://atom.dzulfarizan.com/assets/calendar.png" alt="calendar" class="w-auto h-24 object-cover"/> */}
                    </div>
                </div>

            </div>
            <div class="">
            <h2 class="text-xs md:text-sm text-gray-800 font-bold tracking-wide">Available Services</h2>
                </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 xl:p-0 gap-4 xl:gap-6">

            <div className=" bg-white p-6 rounded-xl border border-gray-50" >
                
                        <div className="single-feature">
                           <img src={Cleaner} alt=""/>
                           <div className="bn-dgt">
                            <i className="fas fa-hospital-alt"></i>
                            <h5>House Cleaning</h5>
                            {/* <p>The workers provide quality work to the employees with the best cleaning skills they can clean Offices , Homes , Hospitals and all work places.</p> */}
                            </div>
                        </div>
                    </div>
    
                    <div className=" bg-white p-6 rounded-xl border border-gray-50" onClick={() => navigate('/cooks')}>
                        <div className="single-feature">
                           <img src={Cooking} alt=""/>
                           <div className="bn-dgt">
                            <i className="fas fa-user-md"></i>
                            <h5>Cooking</h5>
                            {/* <p>Our Cooks makes the best meals in homes ,events ,hotels  or anywhere they can be required to Cook.</p> */}
                            </div>
                        </div>
                    </div>
    
                    <div className=" bg-white p-6 rounded-xl border border-gray-50">
                        <div className="single-feature">
                           <img src={LawnMowing} alt=""/>
                           <div className="bn-dgt">
                            <i className="fas fa-briefcase-medical"></i>
                            <h5>Lawn Mowing</h5>
                            {/* <p> Our Workers provide good servicess of Loan Mowing with good machines and grass disposing if necessary in your compound.</p> */}
                            </div>
                            
                        </div>
                    </div>
                      <div className=" bg-white p-6 rounded-xl border border-gray-50">
                        <div className="single-feature"> <div
                            class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-blue-700">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <span class="ml-1 text-sm text-slate-400">2</span>

                        </div>
                           <img src={Carcleaning} alt=""/>
                           <div className="bn-dgt">
                                <i className="fas fa-briefcase-medical"></i>
                                <h5>Car Cleaning</h5>
                                {/* <p> Our car cleaners give you services at the comfort of your home or you can take your car to their car washes.</p> */}
                             </div>
                        </div>
                    </div>
                    <div className=" bg-white p-6 rounded-xl border border-gray-50">
                        <div className="single-feature">
                           <img src={Maid} alt=""/>
                           <div className="bn-dgt">
                                <i className="fas fa-briefcase-medical"></i>
                                <h5>Maid</h5>
                                {/* <p> our workers provide good maid services cooking ,laundry and cleaning with high quality and descipline.</p> */}
                             </div>
                        </div>
                    </div>
                    <div className=" bg-white p-6 rounded-xl border border-gray-50">
                        <div className="single-feature">
                           <img src={Laundry} alt=""/>
                           <div className="bn-dgt">
                                <i className="fas fa-briefcase-medical"></i>
                                <h5>Laundry</h5>
                                {/* <p> You will be provided with the best laundry services from our workers from washing ,drying and ironing if needed.</p> */}
                             </div>
                        </div>
                    </div>
                    <div className=" bg-white p-6 rounded-xl border border-gray-50">
                        <div className="single-feature">
                           <img src={Plumbing} alt=""/>
                           <div className="bn-dgt">
                                <i className="fas fa-briefcase-medical"></i>
                                <h5>Plumbing</h5>
                                {/* <p> We have the best plumbers you can ever want in kenya you will be given the best services.</p> */}
                             </div>
                        </div>
                    </div>
                    <div className=" bg-white p-6 rounded-xl border border-gray-50">
                        <div className="single-feature">
                           <img src={Shambaboy} alt=""/>
                           <div className="bn-dgt">
                                <i className="fas fa-briefcase-medical"></i>
                                <h5>Farm Worker /Shamba Boy</h5>
                                {/* <p>We have very skilled farm workers who will give you very good services .</p> */}
                             </div>
                        </div>
                    </div>
            </div>
            {/* <div className="bg-white p-6 rounded-xl border border-gray-50"></div> */}
            <div class="grid grid-cols-1 md:grid-cols-5 items-start px-4 xl:p-0 gap-y-4 md:gap-6">
                <div class="col-start-1 col-end-5">
                    <h2 class="text-xs md:text-sm text-gray-800 font-bold tracking-wide">Booked Services</h2>
                </div>
                <div class="col-span-6 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                    <div class="flex justify-between items-center">
                        <h2 class="text-sm text-gray-600 font-bold tracking-wide">Latest Bookings</h2>
                        <button
                            class="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300">More</button>
                    </div>
                    <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full">
                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                            <p class="px-4 d:text-base text-gray-800">Date</p>
                            <p class="px-4 d:text-base text-gray-800">Name</p>
                            <p class="px-4 d:text-base tracking-wider text-gray-800">Service</p>
                            <p class="px-4 d:text-base text-gray-800">Time booked</p>
                            <p class="md:text-base text-gray-800 flex items-center gap-2">
                             Comment
                            </p>
                        </li>
                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                            <p class="px-4 font-semibold">Today</p>
                            <p class="px-4 text-gray-600">McDonald</p>
                            <p class="px-4 tracking-wider">Cash</p>
                            <p class="px-4 text-blue-600">Food</p>
                            <p class="md:text-base text-gray-800 flex items-center gap-2">
                                16.90
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </p>
                        </li>
                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                            <p class="px-4 font-semibold">Today</p>
                            <p class="px-4 text-gray-600">McDonald</p>
                            <p class="px-4 tracking-wider">Cash</p>
                            <p class="px-4 text-blue-600">Food</p>
                            <p class="md:text-base text-gray-800 flex items-center gap-2">
                                16.90
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </p>
                        </li>
                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                            <p class="px-4 font-semibold">Today</p>
                            <p class="px-4 text-gray-600">McDonald</p>
                            <p class="px-4 tracking-wider">Cash</p>
                            <p class="px-4 text-blue-600">Food</p>
                            <p class="md:text-base text-gray-800 flex items-center gap-2">
                                16.90
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </p>
                        </li>
                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                            <p class="px-4 font-semibold">Today</p>
                            <p class="px-4 text-gray-600">McDonald</p>
                            <p class="px-4 tracking-wider">Cash</p>
                            <p class="px-4 text-blue-600">Food</p>
                            <p class="md:text-base text-gray-800 flex items-center gap-2">
                                16.90
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </p>
                        </li>
                        <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                            <p class="px-4 font-semibold">Today</p>
                            <p class="px-4 text-gray-600">McDonald</p>
                            <p class="px-4 tracking-wider">Cash</p>
                            <p class="px-4 text-blue-600">Food</p>
                            <p class="md:text-base text-gray-800 flex items-center gap-2">
                                16.90
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </main>
        </div>
    );
}

export default Employer;
