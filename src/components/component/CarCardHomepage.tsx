import { Badge, Button, Card } from "flowbite-react";
import { IoPeople } from "react-icons/io5";
import { GiGearStick } from "react-icons/gi";
import Image from "next/image";
import { BiSolidGasPump } from "react-icons/bi";
import Link from "next/link";

export function CarCardComponent({ mobils }: any) {
  return (
    <Card
      className="m-2"
      renderImage={() => (
        <Image
          src={mobils.fotoMobil[0].image}
          width={500}
          height={500}
          alt={mobils.merk}
          priority
          className="max-h-32 max-w-32"
        />
      )}
    >
      <div>
        <dd className="font-medium text-gray-400">{mobils.merk}</dd>
        <dd className="font-medium text-gray-900">{mobils.type}</dd>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-900 dark:text-white">
          Rp. {mobils.tarif}/hari
        </span>
        {mobils.status_booking === "Sudah Dibooking" ? (
          <>
            <Badge color="failure">Mobil Sudah Dibooking</Badge>
          </>
        ) : (
          <>
            <Button color="teal" as={Link} href={`/mobils/${mobils.id}`}>
              Booking
            </Button>
          </>
        )}
      </div>
      <div className="flex justify-around gap-4">
        <div className="flex">
          <IoPeople color="teal" size="30" />
          <h1>{mobils.max_penumpang}</h1>
        </div>
        <div className="flex">
          <GiGearStick color="teal" size="30" />
          <h1>{mobils.persneling}</h1>
        </div>
        <div className="flex">
          <BiSolidGasPump color="teal" size="30" />
          <h1>{mobils.bahan_bakar}</h1>
        </div>
      </div>
    </Card>
  );
}
