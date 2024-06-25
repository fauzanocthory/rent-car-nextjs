import MobilComponent from "@/components/component/Mobil";
import { auth } from "../../../../auth";

export default async function Page() {
  const user = await auth();
  return (
    <>
      {/* <MobilComponent user={user} /> */}
    </>
  );
}
