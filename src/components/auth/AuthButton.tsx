import { signIn, signOut } from "../../../auth";
import { Button } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";

export function AuthButton({provider}: any) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider, {redirectTo: "/mobils"});
      }}
    >
      <Button type="submit" color={provider === "github" ? "dark" : "gray"} pill className="w-full">
        {provider && provider === "github" ? (<FaGithub className="mr-2 text-lg" />):(<AiFillGoogleCircle className="mr-2 text-xl" />)}
        {provider}
      </Button>
    </form>
  );
}

export function AuthButtonSignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" color="failure" pill className="w-full">
        Sign Out
      </Button>
    </form>
  );
}
