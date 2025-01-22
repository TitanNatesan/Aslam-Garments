"use client"
import FootBar from "@/app/Components/footer";
import Navbar from "@/app/Components/Navbar";
import product11 from "@/app/assets/img/product-1-1.jpg"
import product12 from "@/app/assets/img/product-1-2.jpg"
import avatar1 from "@/app/assets/img/avatar-1.jpg"
import avatar2 from "@/app/assets/img/avatar-2.jpg"
import avatar3 from "@/app/assets/img/avatar-3.jpg"
import React, { useState, useEffect } from "react";
import NewsLetter from "@/app/Components/NewsLetterSH";
import Link from "next/link";
import axios from "axios";
import "./style.css"
import { baseurl } from "@/app/utils/Url";
import { ToastContainer } from "react-toastify";
import ReviewForm from "./reviewForm";
import Reviwes from "./reviews";
import SizeChart from "./sizechart";
import AddInfoTab from "./AItab";
import DisplaySec from "./displaySec";
import Image from 'next/image';


export default function ProductPage({ params: paramsPromise }) {

    const params = React.use(paramsPromise);

    const [products, setProduct] = useState({
        name: "",
        brand: "",
        newPrice: "",
        oldPrice: "",
        savePrice: "",
        discription: ``,
        warranty: "1 Year Al Jazeera Brand Warranty",
        returnPolicy: "30 Days Return Policy",
        paymentOption: "Cash on Delivery available",
        colors: [
            { name: "Cyan", className: "bg-cyan-400" },
        ],
        sizes: [""],
        SKU: "",
        tags: [""],
        availability: "",
        images: [
            product11,
            product12,
        ],
        reviews: [
            {
                name: "Jacky Chan",
                image: avatar1,
                rating: 5,
                description: "Thank you, very fast shipping from Poland only 3 days.",
                date: "December 4, 2022 at 3:12 pm",
            },
            {
                name: "Meriem Js",
                image: avatar2,
                rating: 5,
                description: "Great low price and works well",
                date: "August 23, 2022 at 19:45 pm",
            },
            {
                name: "Moh Benz",
                image: avatar3,
                rating: 5,
                description: "Authentic and beautiful, Love these ways more than ever expected, They are great earphones.",
                date: "March 2, 2021 at 10:01 am",
            },
        ]
    });
    const [variants, setVariants] = useState({product:[]});
    const [tr, setTr] = useState(null);

    useEffect(() => {
        axios.get(`${baseurl}/getProduct/${params.slug}/`)
            .then((res) => {
                setProduct(res.data.product);
                setVariants(res.data.variants);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [params.slug]);

    const [xtra, setXtra] = useState("RV");

    return (
        <>
            <Navbar page={"Shop"} />
            <ToastContainer />
            <main className="main">
                <section className="breadcrumb">
                    <ul className="breadcrumb__list flex container">
                        <li><Link href="/" className="breadcrumb__link">Home</Link></li>
                        <li><span className="breadcrumb__link"></span>  〉</li>
                        <li><Link href={"/shop/"} className="breadcrumb__link">Shop</Link></li>
                        <li><span className="breadcrumb__link"></span>  〉</li>
                        <li><span className="breadcrumb__link">{products.name}</span></li>
                    </ul>
                </section>

                <DisplaySec product={products} variants={variants} />

                <section className="details__tab container">
                    <SizeChart product={products} />

                    <div className="detail__tabs">
                        <span onClick={() => setXtra("RV")} className={xtra === "RV" ? `detail__tab active-tab rativ` : "detail__tab"} data-target="#reviews">
                            Reviews {tr?<b className="rc">{tr}</b>:<></>}
                        </span>
                        <span onClick={() => setXtra("AI")} className={xtra === "AI" ? `detail__tab active-tab rativ` : "detail__tab"} data-target="#info">
                            Additional Info
                        </span>
                    </div>
                    <div className="details__tabs-content">
                        {xtra === "AI" &&
                            <div className={xtra === "AI" ? `detail__tab-content active-tab` : "detail__tab-content"} id="info">
                                <AddInfoTab product={products} />
                            </div>
                        }
                        {xtra === "RV" &&
                            <div className={xtra === "RV" ? `detail__tab-content active-tab` : "detail__tab-content"} id="reviews">
                                <Reviwes pid={products.id} setTR={setTr} />
                            </div>
                        }
                        <ReviewForm pid={params.slug}/>
                    </div>
                </section>
                <section className="products container section--lg">
                    <h3 className="section__title"><span>Related</span> Products</h3>
                    <div className="products__container grid">
                        {/* {products.map((product, index) => (
                            <ProductCard product={product} key={index} />
                        ))} */}
                    </div>
                </section>
                <NewsLetter />
            </main>
            <FootBar />
        </>
    );
}