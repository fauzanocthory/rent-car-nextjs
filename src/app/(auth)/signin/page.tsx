import { SignInFormComponent } from "@/components/component/SignInForm";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const user = await auth();
  if (user) return redirect("/");
  
  return (
    <>
      <div className=" flex justify-center min-h-screen">
        <SignInFormComponent />
      </div>
    </>
  );
}
