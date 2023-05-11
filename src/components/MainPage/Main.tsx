import React from "react"
import styles from "./main.module.css"

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
      </main>
    </>
  )
}

export default Main
