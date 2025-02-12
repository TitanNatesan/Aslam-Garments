"use client"
import FootBar from "@/app/Components/footer";
import { ToastContainer } from 'react-toastify';
import Navbar from "@/app/Components/Navbar";
import NewsLetter from "@/app/Components/NewsLetterSH";
import Link from "next/link";
import LoginSection from "./login";
import SignupSection from "./signup";
import { useState, useEffect } from "react";

export default function LoginSignup() {
    const [isFlip, setIsFlip] = useState(false);

    const toggleFlip = () => {
        setIsFlip(!isFlip);
    };

    useEffect(() => {
        if (window.location.hash === "#signup") {
            setIsFlip(true);
        }
    }, []);

    return (
        <>
            <Navbar />
            <ToastContainer />

            <main className="main">
                <section className="breadcrumb">
                    <ul className="breadcrumb__list flex container">
                        <li><Link href="/" className="breadcrumb__link">Home</Link></li>
                        <li><span className="breadcrumb__link"></span>  〉</li>
                        <li><Link href={"/shop"} className="breadcrumb__link">Login</Link></li>
                    </ul>
                </section>
                <section className="login-register section--lg ">
                    <div className={`login-register__container container grid ${isFlip ? 'flipped' : ''}`}>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front m-auto relative">
                                    <LoginSection onToggleFlip={toggleFlip} />
                                </div>
                                <div className="flip-card-back m-auto relative">
                                    <SignupSection onToggleFlip={toggleFlip} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <NewsLetter />
            </main>
            <FootBar />
        </>
    )
}
