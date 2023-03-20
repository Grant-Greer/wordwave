import Head from "next/head";
import { signIn, useSession } from "next-auth/react";

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
      <main>
        <h1>WhisperWave</h1>
        <button onClick={() => signIn("google")}>Sign In</button>
      </main>
    </>
  );
}
