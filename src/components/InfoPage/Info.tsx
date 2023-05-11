import React from "react"
import styles from "./info.module.css"
import Space from "../../../public/espacio.jpg"
import Earth from "../../../public/tierra.jpg"
import Mountain from "../../../public/montaña.jpg"
import Beach from "../../../public/playa.jpg"
import Card from "./Card"

const Info = () => {
  return (
    <>
      <div className={styles.container_info}>
        <div className={styles.info}>
          <h1 id="info">INFO</h1>
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
