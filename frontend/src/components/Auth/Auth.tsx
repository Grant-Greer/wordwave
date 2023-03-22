import { Session } from "inspector";
import { signIn } from "next-auth/react";
import React, { FunctionComponent } from "react";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => Promise<void>;
}

export const Auth: FunctionComponent<IAuthProps> = ({
  session,
  reloadSession,
}) => {
  return (
    <div className="m-auto flex h-1/3 w-1/4 items-center justify-center self-center justify-self-center rounded-md bg-sky-400 shadow-lg ">
      {session ? (
        <span>Create a Username</span>
      ) : (
        <button
          className="h-10 w-40  rounded bg-white py-2 px-4 font-bold text-sky-400 shadow-lg hover:shadow-xl outline-none focus:outline-none mr-1 mb-1"
          onClick={() => signIn()}
        >
          Sign In{" "}
        </button>
      )}
    </div>
  );
};
