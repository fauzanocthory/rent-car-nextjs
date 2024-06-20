import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { AuthButton } from "../auth/AuthButton";
import { auth } from "../../../auth";

export async function SignInFormComponent() {
  return (
    <>
      <div className="">
        <div className="mb-2 block">
          <Label value="Sign In" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Your email" />
          </div>
          <TextInput
            id="email4"
            type="email"
            rightIcon={HiMail}
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mt-2">
          <AuthButton provider="github" />
        </div>
        <div className="mt-2">
          <AuthButton provider="google" />
        </div>
      </div>
    </>
  );
}
