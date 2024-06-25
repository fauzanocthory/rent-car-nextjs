import { CarCardHomepage } from "@/components/component/CarCardHomepage";
import { getMobils } from "@/lib/getData";
import { Label, RangeSlider, Spinner, TextInput } from "flowbite-react";
import { auth } from "../../../auth";
import SearchInput from "@/components/component/SearchInput";
import { Suspense } from "react";

export default async function Mobils({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    tarifLte?: string;
    tarifGte?: string;
  };
}) {
  const query = searchParams?.query || "";
  const tarifLte = searchParams?.tarifLte || (500000).toString();
  const tarifGte = searchParams?.tarifGte || (100000).toString();
  const mobils = await getMobils(query, tarifLte, tarifGte);
  const user = await auth();

  return (
    <>
      <div className="p-4 dark:bg-slate-600">
        <h1 className="text-4xl font-extrabold text-center pt-6 dark:text-white">
          Daftar Mobil
        </h1>
        <div>
          <div className="my-4">
            <div className="mb-2">
              <Label htmlFor="searchMobil" value="Cari Mobil" />
            </div>
            {/* <TextInput
              id="searchMobil"
              type="text"
              placeholder="Merk, Type, Bahan Bakar dll"
              required
              shadow
            /> */}
            <SearchInput placeholders="Search Mobil Berdasarkan Merk, Type, Persneling, Max Penumpang, Bahan Bakar atau Status Booking..." />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 ">
          {
            mobils.map((mobil) => {
              return (
                <>
                  <div key={mobil.id} className="dark:text-white">
          
                      <CarCardHomepage mobils={mobil} user={user} />
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
