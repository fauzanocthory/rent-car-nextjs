import { CarCardHomepage } from "@/components/component/CarCardHomepage";
import { CarouselComponent } from "@/components/component/Carousel";
import { OurCustomerComponent } from "@/components/component/OurCutomer";
import { getMobils } from "@/lib/getData";
import { Button } from "flowbite-react";

export default async function Home() {
  const allMobils = await getMobils();
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
          <div className="flex flex-col gap-2 sm:flex-row justify-between m-2">
            {allMobils.map((mobils) => {
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
            <OurCustomerComponent customerHeading="Terbaru" />
            <OurCustomerComponent customerHeading="Langganan" />
          </div>
        </section>
      </div>
    </>
  );
}
