"use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import { usePrevNextButtons } from "@/hooks/usePrevNextButtons";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

type Slides = {
  img: StaticImageData;
  id: number;};

type PropType = {
  slides: Slides[];
  options?: EmblaOptionsType;
};

const ProductDetailSlider: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaMainApi);

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla p-4 items-center">
      {/* Main slider */}
      <div className="embla__viewport rounded-md relative shadow-2xl max-w-[400px] max-h-[400px]" ref={emblaMainRef}>
        <div className="embla__container flex">
          {slides.map((item, index) => (
            <div className="embla__slide flex-1" key={index}>
              <div className="embla__slide__number relative">
                <Image
                  className="object-cover w-full h-auto rounded-md"
                  alt=""
                  src={item.img}
                  priority
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="absolute top-1/2 left-2 z-10 -translate-y-1/2 p-2 disabled:opacity-50"
        >
          <IoIosArrowBack fontSize={22} />
        </button>
        <button
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="absolute top-1/2 right-2 z-10 -translate-y-1/2 p-2 disabled:opacity-50"
        >
          <IoIosArrowForward fontSize={22} />
        </button>
      </div>

      <div className="embla-thumbs mt-4">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container flex md:block md:space-y-4">
            {slides.map((item, index) => (
              <div
                key={index}
                className={`embla-thumbs__slide shadow-2xl relative h-[80px] w-[80px] ${
                  index === selectedIndex ? "border-2 border-blue-500" : ""
                }`}
              >
                <button
                  onClick={() => onThumbClick(index)}
                  type="button"
                  className="embla-thumbs__slide__number h-full w-full"
                >
                  <Image
                    className="object-cover rounded-md w-full h-auto"
                    alt=""
                    src={item.img}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSlider;
