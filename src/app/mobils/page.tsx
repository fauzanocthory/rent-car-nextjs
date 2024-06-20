import { CarCardComponent } from "@/components/component/CarCardHomepage";
import { Label, RangeSlider, TextInput } from "flowbite-react";

export default function Mobils() {
  return (
    <>
      <div className="p-4">
        <h1 className="text-4xl font-extrabold text-center pt-6">
          Daftar Mobil
        </h1>
        <div>
          <div className="my-4">
            <div className="mb-2">
              <Label htmlFor="searchMobil" value="Cari Mobil" />
            </div>
            <TextInput
              id="searchMobil"
              type="text"
              placeholder="Merk, Type, Bahan Bakar dll"
              required
              shadow
            />
          </div>
          <div className="">
            <div className="block">
              <Label
                htmlFor="lg-range"
                value="Silde me for search by price : Rp. 100.000"
              />
            </div>
            <RangeSlider id="lg-range" sizing="md" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 ">
          <CarCardComponent />
          <CarCardComponent />
          <CarCardComponent />
          <CarCardComponent />
          <CarCardComponent />
          <CarCardComponent />
          <CarCardComponent />
          <CarCardComponent />
          <CarCardComponent />
          <CarCardComponent />
          <CarCardComponent />
          <CarCardComponent />
          <CarCardComponent />
        </div>
      </div>
    </>
  );
}
