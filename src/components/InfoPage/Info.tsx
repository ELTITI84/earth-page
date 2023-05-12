"use client"

import React from "react"
import styles from "./info.module.css"
import Space from "../../../public/espacio.jpg"
import Earth from "../../../public/tierra.jpg"
import Mountain from "../../../public/montaña.jpg"
import Beach from "../../../public/playa.jpg"
import Moon from "../../../public/moon.jpg"
import Sun from "../../../public/sun.jpg"
import Card from "./Card"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { EffectCoverflow, Pagination } from "swiper"
import { identifierToKeywordKind } from "typescript"

const Info = () => {
  const imgs = [
    {
      id: 1,
      imagenes: Moon,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, minima fuga explicabo magni eum odit, voluptate beatae voluptas a numquam itaque dolore quos, ea ipsum eius ullam deleniti harum quod!",
    },
    {
      id: 2,
      imagenes: Sun,
    },
  ]

  return (
    <>
      <div className={styles.container_info}>
        <div className={styles.info}>
          <h1 id="info">INFO</h1>
        </div>
        <div className={styles.container_swiper}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {imgs.map(({ id, imagenes, text }) => {
              return (
                <SwiperSlide key={id}>
                  <div className={styles.slide}>
                    <Image
                      className={styles.container_img}
                      src={imagenes}
                      alt=""
                    ></Image>
                  </div>
                  <div className={styles.text}>{text}</div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Info

// const data = [
//   {
//     id: 1,
//     className: `${styles.cards1}`,
//   },
//   {
//     id: 2,
//     className: `${styles.cards2}`,
//   },
//   {
//     id: 3,
//     className: `${styles.cards3}`,
//   },
//   {
//     id: 4,
//     className: `${styles.cards4}`,
//   },
// ]

// <div className={styles.container_cards}>
//   {data.map((card, index) => {
//     return <Card key={index} props={card} />
//   })}
// </div>
