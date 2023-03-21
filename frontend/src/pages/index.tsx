import Head from "next/head";
import { Chat } from "../components/Chat/Chat";
import { Auth } from "../components/Auth/Auth";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { NextPageContext, NextPage } from "next";

export default function Home() {
  const { data } = useSession();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="WhisperWave Chat Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{data?.user.username ? <Chat /> : <Auth />}</main>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
