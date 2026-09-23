"use client";

import React from "react";
import Link from "next/link";
import CustomImage from "./common/CustomImage";




export function CopyRight() {
    return (
        <footer>
            <div className="container copyright-flex">
                <p>
                    © 2024/2025 Redeemed Christian Fellowship, FUTA. All rights
                    reserved.
                </p>
                <span>|</span>
                <p>Powered by RCF FUTA ICT Team.</p>
            </div>
        </footer>
    );
}


export function Service() {
    return (
        <div>
            <div className="best-service-we-provide pt--60 tmp-section-gapBottom">
                <div className="container">
                    <h2 className="fs-1 fw-bold lh-1">Join us every:</h2>
                    <br />
                    <div className="row g-5">
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="service-inner financial-service-inner agency-service feature-service">
                                <div className="icon">
                                    <CustomImage
                                        src="/images/services/ymritual.svg"
                                        alt="sunday_service"
                                    />
                                </div>
                                <div className="content">
                                    <h2 className="title">Sunday Service</h2>
                                    <p className="description">
                                        Every Sunday by 9:00am <br />
                                        starts with sunday school by 7:50am.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="service-inner financial-service-inner agency-service feature-service">
                                <div className="icon">
                                    <CustomImage
                                        src="/images/services/scripture.svg"
                                        alt="bible_study"
                                    />
                                </div>
                                <div className="content">
                                    <h2 className="title">Bible Study</h2>
                                    <p className="description">
                                        Every Monday by 6:30pm <br />
                                        Brothers and Sisters meeting by 6:00pm
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="service-inner financial-service-inner agency-service feature-service">
                                <div className="icon">
                                    <CustomImage
                                        src="/images/services/candles.svg"
                                        alt="prayer_meeting"
                                    />
                                </div>
                                <div className="content">
                                    <h2 className="title">Prayer Meeting</h2>
                                    <p className="description">
                                        Every Wednesday by 6:30pm
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default function ComingSoon() {
    return (
        <section className="section-banner-area-start tmp-section-gapTop pt_sm--10 pb--40">
            <div className="container">
                <div className="row align-items-center justify-between hero--banner">
                    <div className="col-lg-6 order-xl-1 order-md-2 order-sm-2 order-2 pl_md--30 pl_sm--30">
                        <div className="banner-company-area-main__wrapper">
                            <span
                                className="pre-title"
                                data-aos="move-right"
                                data-aos-delay="100"
                            >
                                A place for faith, fellowship, and growth.
                            </span>
                            <h1
                                className="title"
                                data-aos="move-right"
                                data-aos-delay="300"
                            >
                                Our New Home is Coming Soon!
                            </h1>
                            <p data-aos="move-right" data-aos-delay="500">
                                We are excited to announce that our website is
                                under construction and will be launching soon!
                                Stay tuned for updates, event schedules, Bible
                                study resources, and so much more.
                            </p>
                            <div
                                className="button-area-wrapper"
                                data-aos="move-right"
                                data-aos-delay="700"
                            >
                                <span
                                    className="pre-title"
                                    data-aos="move-right"
                                    data-aos-delay="100"
                                >
                                    Stay in touch with us:
                                </span>

                                <div>
                                    <Link
                                        href={
                                            "https://web.facebook.com/rcffuta/"
                                        }
                                        target="_blank"
                                        title="Follow us on facebook"
                                        // className="tmp-btn btn-primary"
                                    >
                                        <CustomImage
                                            src="/icons/facebook.svg"
                                            alt="facebook_account"
                                            width={50}
                                            height={50}
                                        />
                                    </Link>
                                    <Link
                                        href={
                                            "https://www.instagram.com/rcffuta"
                                        }
                                        title="Follow us on Instagram"
                                    >
                                        <CustomImage
                                            src="/icons/instagram.svg"
                                            alt="instagram_account"
                                            width={50}
                                            height={50}
                                        />
                                    </Link>
                                    <Link
                                        href={"https://t.me/rcffuta"}
                                        title="Follow our messages on telegram"
                                    >
                                        <CustomImage
                                            src="/icons/telegram.svg"
                                            alt="telegram_account"
                                            width={50}
                                            height={50}
                                        />
                                    </Link>
                                    <Link
                                        href={"mailto:rcffuta@gmail.com"}
                                        title="Send us a mail"
                                    >
                                        <CustomImage
                                            src="/icons/mail.svg"
                                            alt="fellowship_mail"
                                            width={50}
                                            height={50}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 order-xl-2 order-md-1 order-sm-1 order-1 mb_md--30 mb_sm--30 mt_sm--30">
                        <div className="logo-flex">
                            <CustomImage
                                src="/images/common/crm.png"
                                alt="CRM"
                                width={140}
                                height={140}
                            />
                            <CustomImage
                                src="/images/common/rcf.png"
                                alt="redeemed_christian_fellowship_futa"
                                width={500}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
