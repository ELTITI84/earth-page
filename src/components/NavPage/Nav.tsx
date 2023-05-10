"use client"

import React, { useState } from "react"
import styles from "./nav.module.css"
import Link from "next/link"
import "remixicon/fonts/remixicon.css"

const Nav = () => {
  const navlist = [
    {
      id: 1,
      title: "HOME",
      link: "#",
    },
    {
      id: 2,
      title: "INFO",
      link: "#",
    },
    {
      id: 3,
      title: "LEARN",
      link: "#",
    },
    {
      id: 4,
      title: "ABOUT",
      link: "#",
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
  const [navbar, setNavbar] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 90) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const handleActive = () => {
    setActive(active === "" ? `${styles.open}` : "")
  }

  return (
    <>
      <header className={styles.container_header}>
        <nav className={styles.container_nav}>
          <ul className={styles.container_list}>
            {navlist.map(({ id, title, link }) => {
              return (
                <li className={styles.item_list} key={id}>
                  <Link href="">{title}</Link>
                  <div className={styles.line}></div>
                </li>
              )
            })}
          </ul>
          <div className={styles.icon}>
            <i onClick={handleActive} className="ri-menu-line"></i>
          </div>
        </nav>
      </header>
      <aside className={[`${styles.container_aside}`, `${active}`].join(" ")}>
        <div className={styles.container_menu_aside}>
          <ul className={styles.container_list_aside}>
            {menulist.map(({ id, title, link }) => {
              return (
                <li className={styles.menu_items} key={id}>
                  <Link href="">{title}</Link>
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
