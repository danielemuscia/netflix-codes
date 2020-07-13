import React from 'react'
import { Link } from 'react-scroll'


export default function Hero({title, subtitle, buttonText,image}) {
    return (
        <div className='hero'>
        <div className='hero__text-box'>
        <h1 className='hero__title'>{title}</h1>
        <p className='hero__subtitle'>{subtitle}</p>
        <Link activeClass='active' to='1365' spy={true} smooth={true} duration={500}><button>{buttonText}</button></Link>
        </div>
        <div className='hero__image'>
        <img src={image} alt='Man watching Netflix with popcorn' />
        </div>
        </div>
    )
}
