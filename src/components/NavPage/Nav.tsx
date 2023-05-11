"use client"

import React, { use, useEffect, useState } from "react"
import styles from "./nav.module.css"
import Link from "next/link"
import "remixicon/fonts/remixicon.css"
import { useRouter } from "next/router"

const Nav = () => {
  const navlist = [
    {
      id: 1,
      title: "HOME",
      link: "#home",
    },
    {
      id: 2,
      title: "INFO",
      link: "#info",
    },
    {
      id: 3,
      title: "LEARN",
      link: "#learn",
    },
    {
      id: 4,
      title: "ABOUT",
      link: "#about",
    },
  ]

  const menulist = [
    {
      id: 1,
      title: "Link 1",
      link: "#",
    },
    {
      id: 2,
      title: "Link 2",
      link: "#",
    },
    {
      id: 3,
      title: "Link 3",
      link: "#",
    },
    {
      id: 4,
      title: "Link 4",
      link: "#",
    },
  ]

  const [active, setActive] = useState("")
  const [isScroll, setScroll] = useState("")

  const changeNav = () => {
    if (window.scrollY >= 90) {
      setScroll(styles.scroll)
    } else {
      setScroll("")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const handleActive = () => {
    setActive(active === "" ? `${styles.open}` : "")
  }

  return (
    <>
      <header
        id="home"
        className={[`${styles.container_header}`, `${isScroll}`].join(" ")}
      >
        <nav className={styles.container_nav}>
          <ul className={styles.container_list}>
            {navlist.map(({ id, title, link }) => {
              return (
                <li className={styles.item_list} key={id}>
                  <Link href={link}>{title}</Link>
                  <div className={styles.line}></div>
                </li>
              )
            })}
          </ul>
          <div className={styles.icon}>
            <i
              onClick={handleActive}
              className={["ri-menu-line", active].join(" ")}
            ></i>
          </div>
        </nav>
      </header>
      <aside className={[`${styles.container_aside}`, `${active}`].join(" ")}>
        <div className={styles.container_menu_aside}>
          <ul className={styles.container_list_aside}>
            {menulist.map(({ id, title, link }) => {
              return (
                <li className={styles.menu_items} key={id}>
                  <Link href={link}>{title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Nav
