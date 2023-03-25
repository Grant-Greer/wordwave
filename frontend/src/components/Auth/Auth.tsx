import { Session } from "next-auth";
import google from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import React, { FunctionComponent } from "react";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

export const Auth: FunctionComponent<IAuthProps> = ({
  session,
  reloadSession,
}) => {
  const [username, setUsername] = React.useState("");

  const onsubmit = async () => {
    try {
      const res = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({ username }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        reloadSession();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-auto flex h-1/3 w-1/4 items-center justify-center self-center justify-self-center rounded-md bg-sky-400 shadow-lg ">
      {session ? (
        <div className=" flex flex-col">
          <span className="mb-6 text-center text-xl font-bold text-white">
            Create a Username
          </span>
          <input
            placeholder="Enter a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mr-1 mb-1  h-10 w-44 rounded bg-white py-2 px-4 font-bold text-sky-400 shadow-lg outline-none hover:shadow-xl focus:outline-none"
          />
          <button
            className="mr-1 mb-1 mt-4 h-10  w-44 self-center rounded bg-white py-2 px-4 font-bold text-sky-400 shadow-lg outline-none hover:shadow-xl focus:outline-none"
            onClick={onsubmit}
          >
            Save
          </button>
        </div>
      ) : (
        <button
          className="mr-1 mb-1  h-10 w-44 rounded bg-white py-2 px-4 font-bold text-sky-400 shadow-lg outline-none hover:shadow-xl focus:outline-none"
          onClick={() => signIn("google")}
        >
          Sign In
        </button>
      )}
    </div>
  );
};
