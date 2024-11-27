'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";


interface RedirectToPageProps {
    route: string;
    permanent?: boolean;
}

export default function RedirectToPage(props: RedirectToPageProps) {
    const router = useRouter();

    const redirect = () => {
        if (props.permanent) {
            router.replace(props.route);
        } else {
            router.push(props.route)
        }
    }

    useEffect(()=>{
        redirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return null;
}