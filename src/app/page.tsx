'use client'

import Image from 'next/image';

import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';
import { Github, Linkedin } from 'lucide-react'

import good from '@/assets/good.png'
import bad from '@/assets/bad.png'

export default function Home() {
    return (
      <div className='flex flex-col items-center justify-between py-16 min-h-screen overflow-hidden' style={{background: 'linear-gradient(90deg, #09090A 0%, #181719 37.50%, #36343B 100%, #39363D 100%)'}}>
        <h1 className='text-lg sm:text-3xl text-white font-bold'>Image Comparison</h1>
        <div className='mx-2 rounded-2xl overflow-hidden border-[4px] border-white'>
          <ReactCompareSlider
            itemOne={<Image src={bad} alt='low resolution image of a smiling girl'/>}
            itemTwo={<Image src={good} alt='high resolution image of a smiling girl'/>}
            handle={<ReactCompareSliderHandle buttonStyle={{WebkitBackdropFilter: undefined, backdropFilter: undefined, backgroundColor: 'white', border: 0, boxShadow: undefined, color: '#444'}} linesStyle={{ color: 'white', width: '4px'}} />}
            position={50}
          />
        </div>
        <div className='flex items-center gap-3'>
          <p className='text-white text-xs select-none'>Made by <span className='text-sm underline underline-offset-2'> Sérgio Sanchez</span></p>
          <a href="https://github.com/SergioRSanchez" target='_blank'><Github color='white' className='w-4 h-4 sm:w-6 sm:h-6 hover:scale-110 transition-all duration-300 hover:' /></a>
          <a href="https://www.linkedin.com/in/sergio-roberto-sanchez-filho/" target='_blank'><Linkedin color='white' className='w-4 h-4 sm:w-6 sm:h-6 hover:scale-x-110 transition-all duration-300' /></a>
        </div>
      </div>
    )
 
}