import React from 'react';
import footerLogo from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className='bg-[#121F5E]'>
            <div className='max-w-[1200px] mx-auto mt-22'>
                <div>
                    <img className='mx-auto pt-22' src={footerLogo} alt="" />
                </div>
                <div className='flex justify-between mt-10 pb-20'>
                    <div>
                        <h4 className='font-bold text-white mb-2'>About Us</h4>
                        <p className='text-white'>We are a passionate team</p>
                        <p className='text-white'>dedicated to providing the best</p> 
                        <p className='text-white'>services to our customers.</p>
                    </div>
                    <div>
                        <h4 className='font-bold text-white mb-2'>Quick Links</h4>
                        <ul className='text-white'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='font-bold text-white mb-2'>Subscribe</h4>
                        <p className='text-white'>Subscribe to our newsletter for the <br /> latest updates.</p>
                        <div className='mt-3 border border-gray-300 p-2 rounded-xl text-white flex placeholder-gray-400'>
                            <input className='' type="email" placeholder='Enter Your email' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;