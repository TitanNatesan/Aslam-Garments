"use client";
import React, { use } from "react";

export default function BuyNowPage({ params }) {
    const { slug } = use(params);
    return (
        <div>
            <h1>{slug}</h1>
        </div>
    );
}