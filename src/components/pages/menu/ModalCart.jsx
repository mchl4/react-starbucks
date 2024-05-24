import React from 'react'
import { FaTimes, FaTrash } from "react-icons/fa";
import { baseImgUrl } from '../../helpers/functions-general';
import { IoMdCart } from "react-icons/io";
import { BsCartX } from "react-icons/bs";



const ModalCart = ({setCartShow, cartItem, setcartItem}) => {
   
const getSubTotal = cartItem.reduce(
    (a, c) => a + Number(c.price),
    0,
 );

const handleClose = () => setCartShow(false)
const handleEmptyCart = () => setcartItem([]);

const handleRemoveItem = (itemToRemove) => {
    const updatedCartItems = cartItem.filter(
      (item) => item.title !== itemToRemove.title
    );
    setcartItem(updatedCartItems);
  };


  return (
    <div>
        <div className='modal fixed inset-0 flex justify-end items-center isolate'>
            <div className="backdrop h-screen w-full bg-black/40 absolute top-0 left-0 z-[-1]"></div>
            <div className="modal__main max-w-[400px] w-full bg-white h-screen rounded-lg ">

            <div className='p-4 flex justify-between items-center border-b border-gray-200'>
                    <h4 className='flex gap-2 items-center font-bold mb-0'><IoMdCart className='text-xl' />Cart</h4>
                    <div className='flex gap-4'>
                    {cartItem.length !== 0 && (
                    <button className='' onClick={handleEmptyCart} ><FaTrash /></button>
                    )}
                    <button className='text-2xl' onClick={handleClose} ><FaTimes /></button>
                    </div>
                </div>

                <div className="px-4 max-h-[780px] h-full overflow-auto">
                    {cartItem.map((item,key) =>(
                    <div className='cartItem mt-5 flex gap-5 items-center'>
                        <img src={`${baseImgUrl}/${item.img}`} alt="" className='size-[70px] rounded-full' />
                       <div>
                       <h4 className='font-bold'>{item.title}</h4>
                        <p>₱{item.price}</p>
                       </div>
                       <button onClick={() => handleRemoveItem(item)}>remove</button>
                    </div>

                    ))}
                    {cartItem.length === 0 && (
                        <div className='empty__cart flex flex-col justify-center items-center mt-10'>
                        <BsCartX className='text-[80px] opacity-50'/>
                            <h3 className='font-bold opacity-25'>Cart Empty</h3>
                        </div>


                    )}
                    
                
                   
                </div>

                <ul className='p-4 bg-accent text-white rounded-md flex justify-between text-xl mx-2'>
                    <li className='font-bold '>Total</li>
                    <li>₱ {getSubTotal.toFixed(2)}</li>
                </ul>

            </div>
        </div>
    </div>
  )
}


export default ModalCart