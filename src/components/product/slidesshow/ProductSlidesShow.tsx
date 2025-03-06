'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperObject } from 'swiper'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { useState } from 'react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';


interface Props {
    images: string[];
    title: string;
    className?: string;
}
export const ProductSlidesShow = ({ images, title, className }: Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

    return (
        <div className={className}>
            <Swiper
                spaceBetween={10}
                navigation={false}
                autoplay={
                    {
                        delay: 2500
                    }
                }
                thumbs={{
                    swiper: thumbsSwiper && !thumbsSwiper.destroy ? thumbsSwiper : null
                }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="cursor-pointer">
                        <Image
                            width={550}
                            height={350}
                            src={image}
                            alt={title}
                            className='rounded-lg object-fill'
                        />
                    </SwiperSlide>
                ))}

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="cursor-pointer">
                        <Image
                            width={100}
                            height={100}
                            src={image}
                            alt={title}
                            className="rounded-lg border-2 border-transparent hover:border-primary transition-all duration-300"
                        />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>

    );
}
