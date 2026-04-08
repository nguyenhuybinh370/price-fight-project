import React, { useEffect, useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import {projectsData} from '../assets/assets'
const LiveAuction = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  useEffect(() => {
    const updateCardsToShow = () => {
      if(window.innerWidth >= 1024){
        setCardsToShow(projectsData.length);
      }else {
        setCardsToShow(1);
      }
};
      updateCardsToShow();

      window.addEventListener('resize', updateCardsToShow);
      return () => window.removeEventListener('resize', updateCardsToShow);
    
  },[])
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
  }
  const prevProject = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
  } 
  return (
    <div>
        {/* Begin Live Auction Section */}
        <div className='container mx-auto py-4 pt-20 px-6 my-20 w-full overflow-hidden' id='Live Auction'>
          <h1 className='text-2xl font-bold mb-2 text-center'>Phiên Đấu Giá <span className='underline underline-offset-4 decoration-1 under font-light'>Đang Diễn Ra</span></h1>
          <p className='text-center text-gray-500 mb-8 max-w-120 mx-auto'>Phiên đấu giá giới hạn sắp đóng. Đang đợi lượt trả giá của bạn.</p>
        </div>

        {/* slider button */}

        <div className='flex justify-end items-center mb-8'>
          <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2'>
            <ChevronLeft/>
          </button>

          <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2'>
            <ChevronRight/>
          </button>
        </div>
        {/* End Live Auction Section */}


        <div className='overflow-hidden'>
          <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
            {projectsData.map((project, index)=>(
              <div className='relative shrink-0 w-full sm:w-1/4' key={index}>
                <img src={project.image} alt={project.title} className='w-full h-auto mb-14'/>
                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                  <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                    <h2 className='text-xl font-semibold text-gray-800'>
                      {project.title}
                    </h2>
                    <p className='text-gray-500 text-sm'>
                      {project.price} <span> | </span> {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

    </div>
  )
}

export default LiveAuction