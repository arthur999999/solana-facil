'use client'
import Header from "@/components/Header";
import style from "./page.module.css";
import Image from "next/image";
import InputText from "@/components/home/InputText";


export default function Home() {
  return (
    <>
      <Header/>
      <div className={style.home}>
        <InputText/>
      </div>
    </>
  );
}
