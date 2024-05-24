import React from 'react'
import { FaTimes } from "react-icons/fa";
import { baseImgUrl } from '../../helpers/functions-general';
import { GiCoffeeBeans } from "react-icons/gi";
import { drinks } from './data';

const ModalViewItem = ({setModalShow, subItem,setcartItem, cartItem, setSuccess}) => {

const handleClose = () => setModalShow(false)

const handleAddToCart = (item) => {
setcartItem([...cartItem,item])
setSuccess(true);
}

  return (
    <div>
        <div className='modal fixed inset-0 flex justify-center items-center isolate'>
            <div className="backdrop h-screen w-full bg-black/40 absolute top-0 left-0 z-[-1]"></div>
            <div className="modal__main max-w-[900px] w-full bg-white rounded-lg ">

            <div className='p-4 flex justify-between items-center border-b border-gray-200'>
                    <h4 className='flex gap-2 items-center font-bold mb-0'><GiCoffeeBeans className='text-xl' />{subItem.title}</h4>
                    <button className='text-2xl' onClick={handleClose}><FaTimes /></button>
                </div>
                <div className="grid grid-cols-4 gap-5 p-4 max-h-[580px] h-full overflow-auto">

                {subItem.subItem.map((item,key)=> (
                    <button onClick={() => handleAddToCart(item)} key={key}>
                        <div className='item__card flex flex-col items-center' key={key}>
                            <img src={`${baseImgUrl}/${item.img}`} alt="" className='size-[110px] rounded-full'/>
                            <h4 className='font-bold text-center'>{item.title}</h4>
                            <small>{item.category}</small>
                        </div>
                    </button>
                ))}
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalViewItem