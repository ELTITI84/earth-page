import React from "react"
import Image from "next/image"
import styles from "./info.module.css"
import { StaticImageData } from "next/image"

type CardProps = {
  props: {
    id: number
    className: string
  }
}

const Card = ({ props }: CardProps) => {
  return (
    <div className={[`${styles.cards}`, props.className].join(" ")}>
      <div></div>
    </div>
  )
}

export default Card
