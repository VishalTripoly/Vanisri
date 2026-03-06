'use client'
import React from 'react'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Pagination
    pagination: {
        el: '.swiper-dots-pagination',
        clickable: true,
    },

    // Navigation
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 5,
        },
        1350: {
            slidesPerView: 6,
        },
    }
}

export default function Clients_Slider() {
    return (
        <> 

            <Swiper {...swiperOptions} className="swiper-container clients-carousel">
                <SwiperSlide>
                    <figure className="clients-block"><Link href="/index-4"><img src="assets/images/clients/clients-7.png" alt=""/></Link></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="clients-block"><Link href="/index-4"><img src="assets/images/clients/clients-8.png" alt=""/></Link></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="clients-block"><Link href="/index-4"><img src="assets/images/clients/clients-9.png" alt=""/></Link></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="clients-block"><Link href="/index-4"><img src="assets/images/clients/clients-10.png" alt=""/></Link></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="clients-block"><Link href="/index-4"><img src="assets/images/clients/clients-11.png" alt=""/></Link></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="clients-block"><Link href="/index-4"><img src="assets/images/clients/clients-12.png" alt=""/></Link></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="clients-block"><Link href="/index-4"><img src="assets/images/clients/clients-7.png" alt=""/></Link></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="clients-block"><Link href="/index-4"><img src="assets/images/clients/clients-8.png" alt=""/></Link></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="clients-block"><Link href="/index-4"><img src="assets/images/clients/clients-9.png" alt=""/></Link></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="clients-block"><Link href="/index-4"><img src="assets/images/clients/clients-10.png" alt=""/></Link></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="clients-block"><Link href="/index-4"><img src="assets/images/clients/clients-11.png" alt=""/></Link></figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className="clients-block"><Link href="/index-4"><img src="assets/images/clients/clients-12.png" alt=""/></Link></figure>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
