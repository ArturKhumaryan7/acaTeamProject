import React from 'react';
import image from '../../assets/img/svgexport-6.svg'
import "./Header.css"

const Header = () => {
    return (
        <div className='head'>
            <section className='header'>
                <div className='header1'>
                    <div className='header2'>
                        <picture className='header3'>
                            <img className='img' src="https://eventbrite-s3.s3.amazonaws.com/marketing/NIYT_home_headers/7316_NIYT+home+header_4K_1920x544.jpg"/>
                        </picture>
                    </div>
                    <div className='header4'>
                        <div className='header5'>
                            <div className='header6'>
                                <h1 className='header7'>
                                    <img className='svg' src={image}/>
                                    <p className='pi'> Now is your time</p>
                                    <div className='btn'>
                                        <a className='btn1' href='http://localhost:3000/likedEvents'>
                                            <div className='btn2'>
                                                Find your next event
                                            </div>
                                        </a>
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Header;
