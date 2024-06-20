import { Button, Card } from "flowbite-react";
import { IoPeople } from "react-icons/io5";
import { GiGearStick } from "react-icons/gi";
import Image from "next/image";
import { BiSolidGasPump } from "react-icons/bi";
import Link from "next/link";

export function CarCardComponent() {
  return (
    <Card
      className="max-w-screen m-2"
      renderImage={() => (
        <Image
        src="https://shutterstock.com/shutterstock/photos/2265832113/display_1500/stock-photo-modern-subcompact-crossover-suv-beautiful-wheels-large-chrome-grille-2265832113.jpg"
          width={500}
          height={500}
          alt="image 1"
          priority
        />
      )}
    >
      <div>
        <dd className="font-medium text-gray-400">Toyota</dd>
        <dd className="font-medium text-gray-900">Fortuner</dd>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-900 dark:text-white">
          Rp. 100.000/hari
        </span>
        <Button color="teal" as={Link} href="/mobils/1">Booking</Button>
      </div>
      <div className="flex justify-around gap-4">
        <div className="flex">
          <IoPeople color="teal" size="30" />
          <h1>4</h1>
        </div>
        <div className="flex">
          <GiGearStick color="teal" size="30" />
          <h1>Manual</h1>
        </div>
        <div className="flex">
          <BiSolidGasPump color="teal" size="30" />
          <h1>Premium</h1>
        </div>
      </div>
    </Card>
  );
}
