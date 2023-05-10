import Head from "next/head"
import Image from "next/image"
import Main from "@/components/MainPage/Main"
import Nav from "@/components/NavPage/Nav"
import Info from "@/components/InfoPage/Info"

export default function Home() {
  return (
    <>
      <Nav />
      <Main />
      <Info />
    </>
  )
}
