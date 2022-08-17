import Link from "next/link";
import React, { FC } from 'react';


const Header:FC = () =>{  
    return( 
        <div className="flex justify-between m-0 pb-6 pt-6 bg-black-500/50 backdrop-blur"> 
            <h1 className="text-3xl">OddJobs</h1>
            <div className="flex"> 
                <div className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg p-2 mr-3 h-fit'> 
                    <Link href = "/jobs">Find Jobs</Link>

                </div>
                <div className="rounded-lg p-2 mr-3 h-fit"> 
                    <Link href = "/signin">Post Jobs</Link>
                </div>
            </div>
        </div>
    )

}

export default Header