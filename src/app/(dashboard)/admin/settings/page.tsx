import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { auth } from "../../../../../auth";

export default async function AdminSettings({user}: any) {
  return (
    <form className="flex max-w-md flex-col gap-4 mt-4 ml-4  max-h-screen">
        <h1 className="font-bold text-xl">Setting</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" disabled 
        defaultValue={user?.user?.email || ""}/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Password Baru" />
        </div>
        <TextInput id="password1" type="password" required 
        defaultValue={user?.user?.name || ""}/>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
