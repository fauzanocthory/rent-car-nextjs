import { CarCardHomepage } from "@/components/component/CarCardHomepage";
import { CarouselComponent } from "@/components/component/Carousel";
import { OurCustomerComponent } from "@/components/component/OurCutomer";
import { getMobils, getUsers } from "@/lib/getData";
import { Button } from "flowbite-react";

export default async function Home() {
  const query = "";
  const limit = 3;
  const tarifLte = "500000" 
  const tarifGte = "100000"
  const allMobils = await getMobils(query, tarifLte, tarifGte, limit)
  const allUsers = await getUsers(query)
  return (
    <>
      <div className="">
        <section className="dark:bg-gray-900 h-screen">
          <CarouselComponent />
        </section>

        <section className="bg-gray-200 py-4">
          <h1 className="text-center text-4xl font-extrabold py-4">
            Mobil kami
          </h1>
          <Button className="ml-2">Lihat lebih banyak</Button>
          <div className="flex flex-col gap-2 sm:flex-row justify-between m-2 overflow-x-hidden">
            {allMobils && allMobils.map((mobils) => {
              return (
                <>
                  <div key={mobils.id}>
                    <CarCardHomepage mobils={mobils} />
                  </div>
                </>
              );
            })}
          </div>
        </section>

        <section className="mb-10 mt-6">
          <h1 className="text-center text-4xl font-extrabold py-4">
            Pelanggan kami
          </h1>
          <div className="flex flex-col gap-2 sm:flex-row justify-center">
            <OurCustomerComponent allUsers={allUsers} />
          </div>
        </section>
      </div>
    </>
  );
}
