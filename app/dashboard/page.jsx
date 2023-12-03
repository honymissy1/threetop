"use client"

import Image from "next/image";
import DashboardContent from "../components/dashboardContent";
import Modal from "../components/modal";
import ApplicationPics from '../assets/images/applications.png';
import usersPics from '../assets/images/users.png';
import malePics from '../assets/images/male.png';
import femalePics from '../assets/images/female.png';

const Dashboard = () =>{
    const handleQuery = () =>{
      const modal = document.querySelector('#modal');
      modal.classList.add('flex')
      modal.classList.remove('hidden')
    }

    const hideModal = () =>{
        const modal = document.querySelector('#modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex')
      }
    return(
        <>
            <div id="modal" onClick={hideModal} className="hidden z-20 w-full md:hidden fixed bg-[#ffffffd0] top-0 h-[100%] shadow justify-center items-center">
               <Modal />
             </div>
            <div className="p-4 shadow w-[full]">
                <h2 className="text-[#af05ff]">Dashboard</h2>
            </div>

            <div className="flex">
           
                <div className="sticky top-0 h-[100vh] flex flex-col items-center shadow p-2">
                    <div className="text-[#af05ff] mt-5">
                        <Image src={ApplicationPics} alt="application" width={25} className="mb-3" />
                        <Image src={usersPics} alt="application" width={25} className="mb-3" />
                    </div>
                </div>

                <div className="p-2 md:p-5 w-[90vw] flex-1">
                    <DashboardContent />
  
                    <div id="dashboard-data" className="w-full gap-5 mt-10 flex md:w-full h-[500px] sm:w-[70vw] m-auto">
                       <div  className="md:w-[250px] w-full gap-2 h-full bg-[#ebf3fe] shadow p-4 flex flex-col">
                        <div onClick={handleQuery} draggable className="w-full shadow-sm p-2 rounded bg-[#2e7fec] flex justify-between">
                            <div className="truncate">
                                <h2 className="w-[80%] truncate text-sm text-white">Olanrewaju Ayodeji ffjbjfff j fp djf fjfodgp</h2>
                                <p className="text-xs font-semibold text-blue-200">B12903843</p>
                            </div>
                            <span>
                              <Image src={malePics} alt="application" width={25} />
                            </span>
                        </div>
                        <div className="w-full shadow-sm p-2 rounded bg-[#2e7fec] flex justify-between">
                            <div className="truncate">
                                <h2 className=" w-[80%] truncate text-sm text-white">ABoderin Ayegbami Matthew fedeliss Micheal</h2>
                                <p className="text-xs font-semibold text-blue-200">B12903843</p>
                            </div>
                            <span>
                              <Image src={femalePics} alt="application" width={25} />
                            </span>
                        </div>
                       </div>

                       <div className="hidden md:block flex-1 h-full shadow p-6">
                         <h3 className="text-slate-800 font-semibold ">USER INFORMATION</h3>

                         <div className="info">

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam debitis repellat id, molestias velit autem incidunt
                                 rem amet voluptates blanditiis reprehenderit. Eum deleniti aperiam voluptatibus velit dignissimos. 
                                Voluptas est saepe totam accusamus aliquam enim omnis iste, id dolorum cum. Quaerat assumenda adipisci voluptatem!</p>
                         </div>
                       </div>
                    </div>

                    <div id="status" className="justify-around flex gap-5 mt-10 flex-wrap md:p-5 rounded md:py-10 bg-slate-200">
                    <div className="mb-10 flex-1 max-w-[250px]">
                            <div className="bg-red-600 p-3 rounded shadow text-white">
                                <h1>Todo</h1>
                            </div>
                            <div className="w-full rounded gap-2 h-full bg-[#ebf3fe] shadow p-2 flex flex-col">
                                <div draggable className="w-full shadow-sm p-2 rounded bg-[#222b36] flex justify-between">
                                    <div className="truncate">
                                        <h2 className="w-[80%] truncate text-sm text-white">Olanrewaju Ayodeji ffjbjfff j fp djf fjfodgp</h2>
                                        <p className="text-xs font-semibold text-blue-200">B12903843</p>
                                    </div>
                                    <span>
                                      <Image src={malePics} alt="application" width={25} className="mb-3" />
                                    </span>
                                </div>
                                <div className="w-full shadow-sm p-2 rounded bg-[#222b36] flex justify-between">
                                    <div className="truncate">
                                        <h2 className=" w-[80%] truncate text-sm text-white">ABoderin Ayegbami Matthew fedeliss Micheal</h2>
                                        <p className="text-xs font-semibold text-blue-200">B12903843</p>
                                    </div>
                                    <span className="text-white">O</span>
                                </div>
                            </div>

                        </div>
                    
                        <div className="mb-10 flex-1 max-w-[250px]">
                            <div className="bg-blue-400 p-3 shadow rounded text-white">
                                <h1>In Progress</h1>
                            </div>
                            <div className="w-full rounded gap-2 h-full bg-[#ebf3fe] shadow p-4 flex flex-col">
                                <div draggable className="w-full shadow-sm p-2 rounded bg-[#222b36] flex justify-between">
                                    <div className="truncate">
                                        <h2 className="w-[80%] truncate text-sm text-white">Olanrewaju Ayodeji ffjbjfff j fp djf fjfodgp</h2>
                                        <p className="text-xs font-semibold text-blue-200">B12903843</p>
                                    </div>
                                    <span>O</span>
                                </div>
                                <div className="w-full shadow-sm p-2 rounded bg-[#222b36] flex justify-between">
                                    <div className="truncate">
                                        <h2 className=" w-[80%] truncate text-sm text-white">ABoderin Ayegbami Matthew fedeliss Micheal</h2>
                                        <p className="text-xs font-semibold text-blue-200">B12903843</p>
                                    </div>
                                    <span className="text-white">O</span>
                                </div>
                            </div>

                        </div>

                        <div className="mb-10 flex-1 max-w-[250px]">
                            <div className="bg-green-400 text-white p-3 rounded shadow">
                                <h1>Completed</h1>
                            </div>
                            <div className="w-full rounded gap-2 h-full bg-[#ebf3fe] shadow p-4 flex flex-col">
                                <div draggable className="w-full shadow-sm p-2 rounded bg-[#222b36] flex justify-between">
                                    <div className="truncate">
                                        <h2 className="w-[80%] truncate text-sm text-white">Olanrewaju Ayodeji ffjbjfff j fp djf fjfodgp</h2>
                                        <p className="text-xs font-semibold text-blue-200">B12903843</p>
                                    </div>
                                    <span>O</span>
                                </div>
                                <div className="w-full shadow-sm p-2 rounded bg-[#222b36] flex justify-between">
                                    <div className="truncate">
                                        <h2 className=" w-[80%] truncate text-sm text-white">ABoderin Ayegbami Matthew fedeliss Micheal</h2>
                                        <p className="text-xs font-semibold text-blue-200">B12903843</p>
                                    </div>
                                    <span className="text-white">O</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Dashboard;