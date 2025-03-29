/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";


const TELEGRAM_LINK = "https://t.me/+enPvS9rs4uhiOGU0";

export default function RedirectToTelegram() {
    const router = useRouter();
    useEffect(()=>{
        (()=>{
            router.replace(TELEGRAM_LINK, {});
        })()
    },[])
    return (
        <h2>Redirecting....</h2>
    )
}
