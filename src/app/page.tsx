'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';

import good from '@/assets/good.png'
import goodMobile from '@/assets/good-mobile.png'
import bad from '@/assets/bad.png'
import badMobile from '@/assets/bad-mobile.png'


function isWindowDefined() {
  return typeof window !== 'undefined'
}

function useMediaQuery(query: string) {
  
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => setMatches(mediaQuery.matches);

    setMatches(mediaQuery.matches)

    mediaQuery.addListener(updateMatches);
    return () => mediaQuery.removeListener(updateMatches);
  }, [query]);

  return matches;
}


export default function Home() {

  const matches = useMediaQuery('(min-width: 769px)');

  if (matches) {
    return (
      <div>
        <ReactCompareSlider
          itemOne={<Image src={bad} alt='' style={{width: '100%', height: '100vh'}}/>}
          itemTwo={<Image src={good} alt='' style={{width: '100%', height: '100vh'}}/>}
          handle={<ReactCompareSliderHandle style={{ }} buttonStyle={{WebkitBackdropFilter: undefined, backdropFilter: undefined, backgroundColor: 'white', border: 0, boxShadow: undefined, color: '#444'}} linesStyle={{ color: 'white', width: '4px'}} />}
          position={50}
          style={{width: '100%', height: '100vh'}}
        />
      </div>
    )
  } else {
    return (
      <div className='flex items-center justify-center '>
        <ReactCompareSlider
          itemOne={<Image src={badMobile} alt='' style={{width: '100%', height: '100vh'}}/>}
          itemTwo={<Image src={goodMobile} alt='' style={{width: '100%', height: '100vh'}}/>}
          handle={<ReactCompareSliderHandle portrait buttonStyle={{WebkitBackdropFilter: undefined, backdropFilter: undefined, backgroundColor: 'white', border: 0, boxShadow: undefined, color: '#444'}} linesStyle={{ color: 'white', width: '4px'}} />}
          portrait
          position={50}
          style={{width: '100%', height: '100vh'}}
        />
      </div>
    )
  }
}