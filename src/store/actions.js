import { push } from "connected-react-router";

export const signIn = () => dispatch => {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log("dispatch => signIn");
      dispatch(push("/profile"));
    }, 1000)
  );
};
