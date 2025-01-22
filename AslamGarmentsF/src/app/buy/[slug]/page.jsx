"use client"
import Link from "next/link";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

export default function ProfilePage() {
  useEffect(() => {
    document.title = "Profile | Renz Trending"
  })
  return (
    <>
      <ToastContainer />
      <main className="main">
        <section className="breadcrumb">
          <ul className="breadcrumb__list flex container">
            <li><Link href="/" className="breadcrumb__link">Home</Link></li>
            <li><span className="breadcrumb__link">  〉</span></li>
            <li><span className="breadcrumb__link">Profile</span></li>
          </ul>
        </section>
      </main>
      </>
  )
}