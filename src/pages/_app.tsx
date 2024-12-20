import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/app";
import { useRouter } from "next/router";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

import { api } from "@/utils/api";

import "@/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
    const router = useRouter();

    useEffect(() => {
        const route = async () => {
            await router.push("https://career-portfolio-lemon.vercel.app");
        };

        void route();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;

    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
            <Analytics />
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);
