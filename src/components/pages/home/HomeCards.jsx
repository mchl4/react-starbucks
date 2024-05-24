import React from 'react'
import { Link } from 'react-router-dom'
import { baseImgUrl } from '../../helpers/functions-general'

const HomeCards = ({item}) => {

  return (
    <div className={`flex h-full mb-10 ${item.isImgContent ? "" : "flex-row-reverse"} ${item.bg}`}>
        <img className='w-1/2' src={`${baseImgUrl}/${item.img}`} alt="" />
        <div className="content h-full flex flex-col text-center justify-center items-center self-center p-10">
            <h2>{item.title}</h2>
            <p className='text-2xl max-w-[600px] mx-auto mb-5'>{item.content}</p>
            <Link to="/menu" className='btn btn-outline'>{item.linkLabel}</Link>
        </div>

    </div>
  )
}

export default HomeCards