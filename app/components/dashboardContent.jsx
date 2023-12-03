import AllPics from '../assets/images/all.png';
import newPics from '../assets/images/new.png';
import okPics from '../assets/images/ok.png';
import constructionPics from '../assets/images/construction.png'
import Image from "next/image";
import Link from 'next/link';

const DashboardContent = () =>{
    return(
      <div id="main-dashbord" className="w-[100%] m-auto md:w-full flex-auto h-[auto]">
        <div className="flex gap-5 flex-wrap font-semibold justify-center md:justify-start">
          <Link href="/dashboard/#">
           <div className="flex-1 px-2 min-w-[150px] max-w-[max-content] h-[max-content] py-5 rounded shadow">
             <div className="bg-[#2e7fec] w-7 h-7 rounded flex justify-center p-1.5">
               <Image src={AllPics} alt="application" width={20} />
             </div>
             <h1 className="text-blue-400 text-sm mt-3">All Applications</h1>
           </div>
          </Link>

          <Link href="/dashboard">
           <div className="flex-1 px-2 min-w-[150px] max-w-[max-content] h-[max-content] py-5 rounded shadow">
             <div className="bg-[#2e7fec] w-7 h-7 rounded flex justify-center p-1.5">
              <Image src={constructionPics} alt="application" width={20} />
             </div>
             <h1 className="text-blue-400 text-sm mt-3">In Progress</h1>
           </div>
          </Link>

           <div className="flex-1 px-2 min-w-[150px] max-w-[max-content] h-[max-content] py-5 rounded shadow">
             <div className="bg-[#2e7fec]  w-7 h-7 rounded flex justify-center p-1.5">
               <Image src={newPics} alt="application" width={20} />

             </div>
             <h1 className="text-blue-400 text-sm mt-3">New Application</h1>
           </div>

           <div className="flex-1 px-2 min-w-[150px] max-w-[max-content] h-[max-content] py-5 rounded shadow">
             <div className="bg-[#2e7fec]  w-7 h-7 rounded flex justify-center p-1.5">
              <Image src={okPics} alt="application" width={20} />

             </div>
             <h1 className="text-blue-400 text-sm mt-3">Completed</h1>
           </div>
        </div>
      </div>
    )
}

export default DashboardContent;