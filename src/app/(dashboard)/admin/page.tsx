import HomeAdminComponent from "@/components/component/HomeAdminComponent.tsx";
import { getMobils } from "@/lib/getData";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    tarifLte?: string;
    tarifGte?: string;
  };
}) {
  const query = searchParams?.query || "";
  const tarifLte = searchParams?.tarifLte || "";
  const tarifGte = searchParams?.tarifGte || "";
  const mobils = await getMobils(query, tarifLte, tarifGte);

  return (
    <>
      <HomeAdminComponent mobils={mobils} />
    </>
  );
}
