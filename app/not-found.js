'use client'
import React from 'react'
import Link from "next/link"
export default function error() {

    return (
        <>

            <section className="error-section centred p_relative">
                <div className="auto-container">
                    <div className="inner-box">
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <p>The page you are looking for does not exist.</p>
                        <Link href="/" className="theme-btn btn-one">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
