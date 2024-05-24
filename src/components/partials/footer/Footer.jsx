import React from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from './links'
import { footerCredits } from './credits'

const Footer = () => {
    return(
        <footer className='container ml-auto'>
            <div className='grid grid-cols-5 w-[80%]'>

                {footerLinks.map((item, key)=> {
                    return(
                    <div className= 'footer-link' key={key}>
                    <h3 className='mb-12 text-lg'>{item.title}</h3>
                    <ul className='opacity-70 space-y-6'>
                        {item.links.map((link, key)=> <li key={key}>
                            <Link to={`${link}`}>{link.label}</Link> 
                        </li>)} 
                    </ul>
                </div>
                    )

                })}
                
            </div>

            <div className='flex flex-col gap-2'>

            
            <div className='flex'>
                <ul>
                    <li></li>
                </ul>
            </div>

            <div>

            {footerCredits.map((item, key)=> {
                    return(
                    <div className= 'footer-credit mt-5 border-t-2' key={key}>
                    <ul className='mt-3  text-black'>
                    <h3 className='mb-12 text-lg'>{item.title}</h3>
                        {item.links.map((link, key)=> <li key={key}><p className='text-[1rem]'>
                            <Link to={`${link}`}>{link.title}</Link> 
                            </p></li>)} 
                    </ul>
                </div>
                    )

                })}
    </div>

            <p className='opacity-70'>© 2024 Starbucks Coffee Company. All rights reserved.</p>

            </div>    
            

        </footer>
    )
}

export default Footer;