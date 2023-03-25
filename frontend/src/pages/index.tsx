import Head from "next/head";
import { Chat } from "../components/Chat/Chat";
import { Auth } from "../components/Auth/Auth";
import { getSession, useSession } from "next-auth/react";
import { NextPageContext } from "next";

export default function Home() {
  const { data: session } = useSession();

  console.log(session);

  const reloadSession = async () => {};

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="WordWave Chat Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex h-screen w-screen border border-solid border-green-500">
        {session?.user.username ? (
          <Chat />
        ) : (
          <Auth session={session} reloadSession={reloadSession} />
        )}
      </main>
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
