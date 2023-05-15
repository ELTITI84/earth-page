"use client"

import React, { useState } from "react"
import styles from "../styles/login.module.css"

const Login = () => {
  const [active, setActive] = useState("")

  const handleActive = () => {
    setActive(active === "" ? `${styles.right_panel_active}` : "")
  }

  const handleRedirect = () => {
    window.location.pathname = "/"
  }

  return (
    <div className={styles.container_login_page}>
      <div
        className={[`${styles.container}`, `${active}`].join(" ")}
        id="container"
      >
        <div
          className={[
            `${styles.form_container}`,
            `${styles.register_container}`,
          ].join(" ")}
        >
          <form action="#">
            <h1>Register Here</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
            <span>or use your account</span>
            <div className={styles.social_container}>
              <a href="#" className={styles.social}>
                <i className="lni lni-facebook-fill"></i>
              </a>
              <a href="#" className={styles.social}>
                <i className="lni lni-google"></i>
              </a>
              <a href="#" className={styles.social}>
                <i className="lni lni-linkedin-original"></i>
              </a>
            </div>
          </form>
        </div>

        <div
          className={[
            `${styles.form_container}`,
            `${styles.login_container}`,
          ].join(" ")}
        >
          <form action="#">
            <h1>Login Here</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className={styles.content}>
              <div className={styles.checkbox}>
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label>Remember me</label>
              </div>
              <div className={styles.pass_link}>
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <button onClick={handleRedirect}>Login</button>
            <span>or use your account</span>
            <div className={styles.social_container}>
              <a href="#" className={styles.social}>
                <i className="lni lni-facebook-fill"></i>
              </a>
              <a href="#" className={styles.social}>
                <i className="lni lni-google"></i>
              </a>
              <a href="#" className={styles.social}>
                <i className="lni lni-linkedin-original"></i>
              </a>
            </div>
          </form>
        </div>

        <div className={styles.overlay_container}>
          <div className={styles.overlay}>
            <div
              className={[
                `${styles.overlay_panel}`,
                `${styles.overlay_left}`,
              ].join(" ")}
            >
              <h1 className={styles.title}>
                Hello <br /> friends
              </h1>
              <p>if you have an account, login here and have fun</p>
              <button
                onClick={handleActive}
                className={styles.ghost}
                id="login"
              >
                Login
                <i className="lni lni-arrow-left login"></i>
              </button>
            </div>
            <div
              className={[
                `${styles.overlay_panel}`,
                `${styles.overlay_right}`,
              ].join(" ")}
            >
              <h1 className={styles.title}>
                Start your <br /> journey now
              </h1>
              <p>
                if you dont have an account yet, join us and start your journey.
              </p>
              <button
                onClick={handleActive}
                className={styles.ghost}
                id="register"
              >
                Register
                <i className="lni lni-arrow-right register"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
