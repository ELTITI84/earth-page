"use client"

import React from "react"
import styles from "./main.module.css"
import { motion } from "framer-motion"

const Main = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.container_text}>
          <h1>LEARN ABOUT THE EARTH</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quo
            atque exercitationem odio nisi laboriosam soluta ratione omnis animi
            porro, fugit repellat? Magnam explicabo accusantium laudantium
            exercitationem, obcaecati in deleniti.
          </p>
          <button className={styles.learn_more}>
            <span className={styles.circle} aria-hidden="true">
              <span className={styles.icon_arrow}></span>
            </span>
            <span className={styles.button_text}>Learn More</span>
          </button>
        </div>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          className={styles.square1}
        ></motion.div>
      </main>
    </>
  )
}

export default Main
