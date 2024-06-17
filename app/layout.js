"use client";
import { Inter } from 'next/font/google'
import './globals.css';
import DashboardContent from "./components/dashboardContent";
import ApplicationPics from './assets/images/applications.png';
import usersPics from './assets/images/users.png';
import Image from "next/image";
import { Suspense } from 'react';
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig"; 
import malePics from './assets/images/male.png';
import femalePics from './assets/images/female.png';
import Modal from "./components/modal";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: '3Top Ecclesia',
  description: 'Threetop Travels Site',
  manifest: '/manifest.json',
  icons: {apple: '/icon512_maskable.png'},
  link: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
}

export const getUserData = async () => {
  const querySnapshot = await getDocs(collection(db, 'users'));
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    fullName: doc.data().fullName,
    passportNumber: doc.data().passportNumber,
    gender: doc.data().gender,
  }));

  return data
};

export default async function RootLayout({ children }) {
  let userdata = await getUserData();
  const hideModal = () =>{
    const modal = document.querySelector('#modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex')
  }

  const handleQuery = () =>{
    const modal = document.querySelector('#modal');
    modal.classList.add('flex');
    modal.classList.remove('hidden');
  }
  return (
    <html lang="en">
      <body className={inter.className}>
      <div id="modal" onClick={hideModal} className="hidden z-20 w-full md:hidden bg-[#ffffffd0] top-0 h-[100%] shadow justify-center items-center">
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
                   
                   <div style={{overflowY: "scroll"}} className="md:w-[250px] w-full gap-2 h-full bg-[#ebf3fe] shadow p-4 flex flex-col">
                   <Suspense fallback={<div>Loading...</div>}>
                      {userdata?.map(ele => (
                        <Link key={ele.id} href={`/${ele.id}`}>
                          <div onClick={handleQuery} draggable className="w-full shadow-sm p-2 rounded bg-[#2e7fec] flex justify-between">
                          <div className="truncate">
                              <h2 className="w-[100%] truncate text-sm text-white">{ele.fullName}</h2>
                              <p className="text-xs font-semibold text-blue-200">{ele?.passportNumber}</p>
                          </div>
                          <span>
                              {
                                  ele.gender === "Male" ? (<Image src={malePics} alt="application" width={25} />):(<Image src={femalePics} alt="application" width={25} />)
                              }
                          </span>
                          </div>
                        </Link>
                      ))}
                   </Suspense>

                   </div>

             {children}
             </div>

        </div>

         </div>
      </body>

    </html>
  )
}
