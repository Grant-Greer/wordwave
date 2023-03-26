import { CreateusernameData, CreateusernameVariables } from "@/util/types";
import { useMutation } from "@apollo/client";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import React, { FunctionComponent } from "react";
import UserOperations from "../../graphql/operations/user";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

export const Auth: FunctionComponent<IAuthProps> = ({
  session,
  reloadSession,
}) => {
  const [username, setUsername] = React.useState("");

  const [createUsername, { data, loading, error }] = useMutation<
    CreateusernameData,
    CreateusernameVariables
  >(UserOperations.Mutations.createUsername);

  const onSubmit = async () => {
    if (!username) return;
    try {
      await createUsername({ variables: { username } });
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
            onClick={onSubmit}
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
