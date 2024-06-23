import { Badge, Button, Card } from "flowbite-react";
import { IoPeople } from "react-icons/io5";
import { GiGearStick } from "react-icons/gi";
import { BiSolidGasPump } from "react-icons/bi";
import Link from "next/link";

export function CarCardHomepage({ mobils, user }: any) {
  return (
    <Card
      className="max-w-md"
      imgAlt={mobils.fotoMobil[0].id}
      imgSrc={mobils.fotoMobil[0].image}
    >
      <div>
        <dd className="font-medium text-gray-400">{mobils?.merk}</dd>
        <dd className="font-medium text-gray-900">{mobils?.type}</dd>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-900 dark:text-white">
          Rp. {mobils?.tarif}/hari
        </span>
        {mobils?.status_booking === "Sudah Dibooking" ? (
          <>
            <Badge color="failure">Mobil Sudah Dibooking</Badge>
          </>
        ) : (
          <>
            <Button color="teal" as={Link} href={user ? `/mobils/${mobils?.id}` : "/signin"}>
              Booking
            </Button>
          </>
        )}
      </div>
      <div className="flex justify-around gap-4">
        <div className="flex">
          <IoPeople color="teal" size="30" />
          <h1>{mobils?.max_penumpang}</h1>
        </div>
        <div className="flex">
          <GiGearStick color="teal" size="30" />
          <h1>{mobils?.persneling}</h1>
        </div>
        <div className="flex">
          <BiSolidGasPump color="teal" size="30" />
          <h1>{mobils?.bahan_bakar}</h1>
        </div>
      </div>
    </Card>
  );
}
