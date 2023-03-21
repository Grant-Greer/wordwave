import { signIn } from "next-auth/react";
import React, { FunctionComponent } from "react";

type Props = {};

export const Auth: FunctionComponent = (props: Props) => {
  return (
    <div>
      <button onClick={() => signIn()}>Logout </button>
    </div>
  );
};
