import { signOut } from "next-auth/react";
import React, { FunctionComponent } from "react";

interface IChatProps {}

export const Chat: FunctionComponent<IChatProps> = (props) => {
  return (
    <div>
      <button onClick={() => signOut()}>Logout </button>
    </div>
  );
};
