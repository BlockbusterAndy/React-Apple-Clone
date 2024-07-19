import {highlightsSlides} from '../constants'
import { useRef, useState } from 'react'

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setvideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVidoe: false,
    isPlaying: false,
  })

  return (
    <>
      <div className='flex items-center'>
        { highlightsSlides.map((list, i) => (
          <div key={list.id} id='slider' className='sm:pr-20 pr-10' >
            <div className="video-carousel_container">
              <div className="w-full h-full rounded-xl flex-center overflow-hidden bg-black">
                <video id='video' playsInline={true} preload='auto' muted >
                  <source src={list.video} type="video/mp4"/>
                </video>
              </div>
              <div className='absolute top-12 left-[5%] z-10'>
                {list.textLists.map((text, i) => (
                  <p key={text} className='md:text-2xl text-xl font-medium' >{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default VideoCarousel
