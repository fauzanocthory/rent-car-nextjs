import { IoPeople } from "react-icons/io5";
import { GiGearStick } from "react-icons/gi";
import { BiSolidGasPump } from "react-icons/bi";
import {
  Card,
  CustomFlowbiteTheme,
  Flowbite,
} from "flowbite-react";
import { Carousel } from "flowbite-react";
import { SiGodotengine } from "react-icons/si";
import { IoSpeedometer } from "react-icons/io5";
import { MdSpeed } from "react-icons/md";
import { GiJackPlug } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { FaBluetooth } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";
import { getOneMobil } from "@/lib/getData";
import Image from "next/image";
import FormBooking from "@/components/component/FormBooking";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

const customTheme: CustomFlowbiteTheme = {
  card: {
    root: {
      base: "flex rounded-none border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    },
  },
};

type Mobil = {
  id: string;
  merk: string ;
  type: string ;
  warna: string ;
  bahan_bakar: string ;
  persneling: string ;
  max_penumpang: string ;
  air_conditioner: string ;
  bluetooth: string ;
  audio_jack: string ;
  tarif: number ;
  status_booking: string ;
  status_pembayaran: string ;
  status_penyewaan: string ;
  nomor_polisi: string ;
  tenaga_kuda: string ;
  kecepatan_cc: string ;
  kapasitas_tangki: string ;
  fotoMobil: { id: string; image: string; mobilId: string }[];
  updatedAt: Date;
}

export default async function Mobil(mobilId: { params: { id: string; }; }) {
  const { id } = mobilId.params;

  const mobilOne = await getOneMobil(id) as Mobil | null;
  const user = await auth()

  if(!user) return redirect('/signin')

  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          {mobilOne?.fotoMobil.map((foto_mobil, index: number) => {
              return (
                <div
                  key={index}
                  className="flex h-full items-center justify-center bg-white dark:bg-gray-700 dark:text-white"
                >
                  <Image
                    src={foto_mobil.image || ''}
                    width={5000}
                    height={5000}
                    alt={foto_mobil.id}
                    className="w-fit h-fit"
                  />
                </div>
              );
            })}
        </Carousel>
      </div>
      <Flowbite theme={{ theme: customTheme }}>
        <div className="flex justify-around mb-4 font-bold text-center overflow-x-scroll">
          <Card href="#" className="max-w-sm">
            <IoPeople color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">
              {mobilOne?.max_penumpang} Penumpang
            </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <GiGearStick color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">
              {mobilOne?.persneling}
            </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <BiSolidGasPump color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">
              {mobilOne?.bahan_bakar}
            </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <MdSpeed color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">
              {mobilOne?.kapasitas_tangki} Liter
            </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <SiGodotengine color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">
              {mobilOne?.kecepatan_cc} tenaga kuda
            </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <IoSpeedometer color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">
              {mobilOne?.tenaga_kuda} cc
            </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <IoIosColorPalette color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">
              {mobilOne?.warna}
            </p>
          </Card>
          {mobilOne && mobilOne.air_conditioner ? (
            <>
              <Card href="#" className="max-w-sm">
                <TbAirConditioning
                  color="teal"
                  size="50"
                  className="self-center"
                />
                <p className=" text-gray-700 dark:text-gray-400">
                  Air Conditioner
                </p>
              </Card>
            </>
          ) : (
            <></>
          )}
          {mobilOne && mobilOne?.audio_jack ? (
            <>
              <Card href="#" className="max-w-sm">
                <GiJackPlug color="teal" size="50" className="self-center" />
                <p className=" text-gray-700 dark:text-gray-400">Audio Jack</p>
              </Card>
            </>
          ) : (
            <></>
          )}
          {mobilOne && mobilOne.bluetooth ? (
            <>
              <Card href="#" className="max-w-sm">
                <FaBluetooth color="teal" size="50" className="self-center" />
                <p className=" text-gray-700 dark:text-gray-400">Bluetooth</p>
              </Card>
            </>
          ) : (
            <></>
          )}

          <Card href="#" className="max-w-sm">
            <GiCarDoor color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">
              {mobilOne?.warna} Pintu
            </p>
          </Card>
        </div>
      </Flowbite>
      <div className="my-4">
        <h1 className="text-center text-4xl font-bold">{mobilOne?.merk}</h1>
      </div>
      <div className="mx-5 mb-40 flex flex-col justify-center">
        <h5 className="font-bold text-2xl">Isi Data Booking</h5>
        <FormBooking mobilId={id} userId={user?.user.id}/>
      </div>
    </>
  );
}
