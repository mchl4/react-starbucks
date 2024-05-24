import React from 'react'
import { CiCircleCheck } from "react-icons/ci";

const Toast = ({setSuccess}) => {

    React.useEffect(() => {
        setTimeout(() => {
            setSuccess(false)
        }, 500)
    },[])

  return (
    <div className="toast fixed top-1 left-1/2 -translate-x-1/2 w-[400px] p-2 rounded-md bg-green-100 border-l-2 border-green-800  flex justify-between items-center shadow-md">
            <div className='flex gap-4 items-center'>
                <CiCircleCheck className = 'text-accent text-xl'/>
                <ul>
                    <li><h5 className='font-bold'>Success</h5></li>
                    <li className='text-sm'>Successfully Added to Cart!</li>
                </ul>
            </div>
        </div>
  )
}

export default Toast