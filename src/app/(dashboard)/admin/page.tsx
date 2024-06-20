import HomeAdminComponent from "@/components/component/HomeAdminComponent.tsx";
import { getMobils } from "@/lib/getData";

export default async function Page() {
  const mobils = await getMobils()
  return(<>
  <HomeAdminComponent mobils={mobils}/>
  </>)
}