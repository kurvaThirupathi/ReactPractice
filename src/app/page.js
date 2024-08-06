"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [cnt,setCnt]=useState(0)
  const fnClick=()=>{
    setCnt(cnt+1);
  }
  return (
    <div>
      <h2>Hello World</h2>
      <h3>{cnt}</h3>
      <button onClick={fnClick}>Click</button>
    </div>
  );
}
