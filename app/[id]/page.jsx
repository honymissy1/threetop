"use client"
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig"; 



import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const User = () =>{
  const param = useParams();
  const [data, setData] = useState();

    useEffect(() =>{
      const fetchData = async () => {
        const docRef = doc(db, "users", param.id);

        const docSnap = await getDoc(docRef);

       if (docSnap.exists()) {
          const data = docSnap.data();
          setData(data);
      }
    }
      fetchData()

    }, [param.id])
    return(
        <>
            <div className="hidden md:block flex-1 h-auto w-2/3 shadow p-6 overflow-x-hidden">
                <h3 className="text-slate-800 font-semibold text-center text-3xl">{data?.fullName}</h3>
               
                <div className="info mb-3 text-slate-800 bg-slate-200 p-2">
                  <h3 className="text-center font-bold text-green-950">PERSONAL INFO</h3>
                  <p>Passport Number: <span className="font-bold">{data?.passportNumber}</span></p>
                  <p>Issue Date: <span className="font-bold">{data?.issueDate}</span></p> 
                  <p>Expiry Date: <span className="font-bold">{data?.expiryDate}</span></p>
                  <p>Phone: <span className="font-bold">{data?.phone}</span></p>
                  <p>Date of Birth: <span className="font-bold">{data?.dob}</span></p> 
                  <p>City of Birth: <span className="font-bold">{data?.cityOfBirth}</span></p>
                  <p>Address: <span className="font-bold">{data?.address}</span></p>
                </div>

                <div className="info text-slate-800 text-sm mb-5 bg-slate-100 p-3 min-h-[100px]">
                  <h3 className="text-center font-bold text-green-950">APPLICATION HISTORY</h3>
                  {
                    data?.applicationHistory?.applications.length > 0 ? (
                      <div className="flex justify-between gap-5">
                        {
                          data?.applicationHistory?.applications.map((ele, index) =>(
                            <div className="mb-3 w-1/2 bg-slate-50" key={ele.id}>
                               <p className="bg-green-200 w-max p-1 text-xs">Application {index+1}</p>
                               <div className="p-3">
                                  <p>Country: <span className="font-bold">{ele?.country}</span></p> 
                                  <p>Application Date: <span className="font-bold">{ele?.dateOfApplication}</span></p> 
                                  <p>Status {ele?.status == "Denied" ? (<span className="w-max rounded p-0.5 bg-red-600">{ele?.status}</span>): (<span className="w-max rounded p-0.5 bg-green-600">{ele?.status}</span>)}</p>
                                  {
                                    ele?.issueDate ? (<p>Issue Date: <span className="font-bold">{ele?.issueDate}</span></p>):
                                    (<></>)
                                  }
                                  {
                                    ele?.expiryDate ? (<p>Expiry Date: <span className="font-bold">{ele?.expiryDate}</span></p>):
                                    (<></>)
                                  }
                                
                                  {
                                    ele?.denialDate ? (<p>Denial Date: <span className="font-bold">{ele?.denialDate}</span></p>):
                                    (<></>)
                                  }

                                {
                                    ele?.reason ? (<p>Reason: <span className="font-bold">{ele?.reason}</span></p>):
                                    (<></>)
                                  }


                               </div>

                            </div>
                          ))
                        }

                      </div>
                    ):(
                      <h1 className="text-center">No Previous Applications</h1>
                    )
                  }
                  
                </div>

                <div className="info text-sm text-slate-800 bg-slate-100 p-3 min-h-[100px]">
                  <h3 className="text-center font-bold text-green-950">TRAVEL HISTORY</h3>
                  {
                    data?.travelDetails.length > 0 ? (
                      <div className="flex justify-between gap-5">
                        {
                          data?.travelDetails.map((ele, index) =>(
                            <div className="mb-3 w-1/2 bg-slate-50" key={ele.id}>
                               <p className="bg-green-200 w-max p-1 text-xs">Travel {index+1}</p>
                               <div className="p-2">
                                <p>Country: <span className="font-bold">{ele?.country}</span></p> 
                                <p>Purpose: <span className="font-bold">{ele?.purpose}</span></p> 
                                <p>From: <span className="font-bold">{ele?.from}</span></p> 
                                <p>To: <span className="font-bold">{ele?.to}</span></p> 

                               </div>

                            </div>
                          ))
                        }

                      </div>
                    ):(
                      <h1 className="text-center">No Previous Travel</h1>
                    )
                  }
                  
                </div>

                <div className="info text-sm mt-4 text-slate-800 bg-slate-100 p-3 min-h-[100px]">
                  <h3 className="text-center font-bold text-green-950">WORK HISTORY</h3>
                  {
                    data?.jobs.length > 0 ? (
                      <div className="flex justify-between gap-5">
                        {
                          data?.jobs.map((ele, index) =>(
                            <div className="mb-3 w-1/2 bg-slate-50" key={ele.id}>
                               <p className="bg-green-200 w-max p-1 text-xs">WORK {index+1}</p>
                               <div className="p-2">
                                <p>Company: <span className="font-bold">{ele?.company}</span></p> 
                                <p>Job Title: <span className="font-bold">{ele?.jobTitle}</span></p> 
                                <p>Position: <span className="font-bold">{ele?.position}</span></p> 
                                <p>From: <span className="font-bold">{ele?.from}</span></p> 
                                <p>To: <span className="font-bold">{ele?.to}</span></p> 
                                <p>Address: <span className="font-bold">{ele?.address}</span></p> 
                               </div>
                            </div>
                          ))
                        }

                      </div>
                    ):(
                      <h1 className="text-center">No Previous Work Data</h1>
                    )
                  }
                  
                </div>


                <div className="info text-sm mt-4 text-slate-800 bg-slate-100 p-3 min-h-[100px]">
                  <h3 className="text-center font-bold text-green-950">FAMILY</h3>
                  
                  <p>Marital Status: <span className="font-bold">{data?.family?.maritalStatus}</span></p> 
                  {
                    data?.family.marriageDate ? (<p>Marriage Date: <span className="font-bold">{data?.family?.marriageDate}</span></p>):(<></>)
                  }
                  {
                    data?.family.spouseName ? (<p>Spouse Name: <span className="font-bold">{data?.family?.spouseName}</span></p>):(<></>)
                  }
                                    {
                    data?.family.spouseDob ? (<p>Spouse Dob: <span className="font-bold">{data?.family?.spouseDob}</span></p>):(<></>)
                  }

                  {
                    data?.family.spouseOccupation ? (<p>Spouse Occupation: <span className="font-bold">{data?.family?.spouseOccupation}</span></p>):(<></>)
                  }
                  <div className="">
                  <hr />
                   <h1 className="font-bold text-center p-3 text-lg">Children</h1>

                    {data?.childDetail.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {data?.childDetail.map((ele, index) =>(
                          <div key={index} className="min-w-[250px] rounded w-[300px] bg-gray-800 text-white p-2"> 
                            <p className="text-xs text-red-500 ">Child {index+1}</p>
                            <p>Name: {ele.childName}</p>
                            <p>Gender: {ele.childGender}</p>
                            <p>Dob: {ele.childDob}</p>

                            
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between gap-5">
                  <div className="w-1/2 info text-sm mt-4 text-slate-800 bg-slate-100 p-3 min-h-[100px]">
                    <h3 className="text-center font-bold text-green-950">FATHER</h3>
                    
                    <p>Name: <span className="font-bold">{data?.family?.father.name}</span></p> 
                    <p>Date of Birth: <span className="font-bold">{data?.family?.father.dateOfBirth}</span></p> 
                    <p>Occupation: <span className="font-bold">{data?.family?.father.occupation}</span></p> 
                    <p>Address: <span className="font-bold">{data?.family?.father.address}</span></p> 
                  </div>

                  <div className="w-[50%] info text-sm mt-4 text-slate-800 bg-slate-100 p-3 min-h-[100px]">
                    <h3 className="text-center font-bold text-green-950">MOTHER</h3>
                    
                    <p>Name: <span className="font-bold">{data?.family?.mother.name}</span></p> 
                    <p>Date of Birth: <span className="font-bold">{data?.family?.mother.dateOfBirth}</span></p> 
                    <p>Occupation: <span className="font-bold">{data?.family?.mother.occupation}</span></p> 
                    <p>Address: <span className="font-bold">{data?.family?.mother.address}</span></p> 
                  </div>

                </div>


                <div className="flex justify-between gap-5">
                  <div className="info text-sm mt-4 text-slate-800 bg-slate-100 p-3 min-h-[100px]">
                    <h3 className="text-center font-bold text-green-950">FILES</h3>
                    
                    <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>             
                  {
                    data?.files?.map((ele, index) =>{
                        if(ele.ext === 'png' || ele.ext === 'jpg' || ele.ext === 'jpeg' || ele.ext === 'webp') {
                            return (
                                    <a key={index} href={ele.url} style={{width: "100%"}} download>
                                      <Image style={{width:"100%"}} src={ele.url} alt="This is an image from the server"/>
                                    </a>
                                  )
                        }else if(ele.ext === 'pdf'){
                            return (
                                    <a key={index} style={{width: "100%", border: '1px solid'}} className="flex-1" href={ele.url} download>
                                       <embed 
                                           style={{width: "100%"}}
                                           src={ele.url} 
                                           height={300} type='application/pdf'
                                       />
                                    </a>
                                  )
                        }else{
                          return (
                            <a key={index} className="flex-1" href={ele.url} download style={{width: "100%", border: '1px solid'}}>Click to Download File
                               <iframe src={ele.url}></iframe>
                            </a>
                          )
                        }

                    })
                  }
                
              </div>
                  </div>

                </div>




                
                
                
                



            </div>
        </>
    )
}

export default User;