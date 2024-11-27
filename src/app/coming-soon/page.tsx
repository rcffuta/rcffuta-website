import ComingSoon, { CopyRight, Service } from "@/components/ComingSoon";
import { Fragment } from "react";
// import Header from "@/components/common/Header";

export default function Home() {
    return (
        <Fragment>

            <main className="index-eight">
                {/* <Header /> */}
                <ComingSoon />
                <Service />
            </main>
            <CopyRight/>
        </Fragment>
    );
}
