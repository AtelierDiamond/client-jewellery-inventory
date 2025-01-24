"use client"
import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image, { StaticImageData } from 'next/image'
// import { Thumb } from './EmblaCarouselThumbsButton'

type Slides = {
    img: StaticImageData,
    id:number
}

type PropType = {
  slides: Slides[]
  options?: EmblaOptionsType
}

const ProductDetailSlider: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="embla p-4 items-center">
      <div className="embla__viewport rounded-md shadow-2xl" ref={emblaMainRef}>
        <div className="embla__container h-[400] w-[400]">
          {slides.map((item,index) => (
            <div className="embla__slide p-10 relative" key={index}>
              <div className="embla__slide__number ">
                <Image fill className='object-cover' alt='' src={item.img} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {slides.map((item,index) => (
              <div
              key={index}
              className={'embla-thumbs__slide shadow-2xl relative h-[100] w-[100]'.concat(
                index === selectedIndex ? ' embla-thumbs__slide--selected' : ''
              )}
            >
              <button
                onClick={() => onThumbClick(index)}
                type="button"
                className="embla-thumbs__slide__number"
              >
                <Image fill className='object-contain rounded-md' alt='' src={item.img} />
              </button>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailSlider
