import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  console.log(data);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="WhisperWave Chat Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {data?.user ? (
          <button onClick={() => signOut()}>Sign In</button>
        ) : (
          <button onClick={() => signIn("google")}>Sign Out</button>
        )}

        {data?.user?.name}
      </main>
    </>
  );
}
