"use client"

import React from "react"
import styles from "./info.module.css"
import Moon from "../../../public/Moon-PNG.png"
import Sun from "../../../public/Sun-PNG.png"
import Saturn from "../../../public/Saturno.png"
import Mercury from "../../../public/Mercury-PNG.png"
import Mars from "../../../public/Mars-PNG.png"
import Earth from "../../../public/Earth-PNG.png"
import Jupiter from "../../../public/Jupiter-PNG.png"
import Venus from "../../../public/Venus-PNG.png"
import Uranus from "../../../public/Urano.png"
import Neptune from "../../../public/Neptune-PNG.png"
import Card from "./Card"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { EffectCoverflow, Pagination } from "swiper"
import { identifierToKeywordKind } from "typescript"
import { title } from "process"

const Info = () => {
  const imgs = [
    {
      id: 1,
      imagenes: Sun,
      title: "Sun",
    },
    {
      id: 2,
      imagenes: Mercury,
      title: "Mercury",
    },
    {
      id: 3,
      imagenes: Venus,
      title: "Venus",
    },
    {
      id: 5,
      imagenes: Earth,
      title: "Earth",
    },
    {
      id: 6,
      imagenes: Mars,
      title: "Mars",
    },
    {
      id: 7,
      imagenes: Jupiter,
      title: "Jupiter",
    },
    {
      id: 9,
      imagenes: Uranus,
      title: "Uranus",
    },
    {
      id: 10,
      imagenes: Neptune,
      title: "Neptune",
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
            {imgs.map(({ id, imagenes, title }) => {
              return (
                <SwiperSlide key={id}>
                  <div className={styles.slide}>
                    <Image
                      className={styles.container_img}
                      src={imagenes}
                      alt=""
                    ></Image>
                  </div>
                  <div className={styles.text}>{title}</div>
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
