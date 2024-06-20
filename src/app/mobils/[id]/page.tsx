import { IoPeople } from "react-icons/io5";
import { GiGearStick } from "react-icons/gi";
import { BiSolidGasPump } from "react-icons/bi";
import {
  Button,
  Card,
  CustomFlowbiteTheme,
  Datepicker,
  Dropdown,
  DropdownItem,
  Flowbite,
  Label,
  Select,
} from "flowbite-react";
import { Carousel } from "flowbite-react";
import { SiGodotengine } from "react-icons/si";
import { IoSpeedometer } from "react-icons/io5";
import { MdSpeed } from "react-icons/md";
import { GiJackPlug } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { FaBluetooth } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";

const customTheme: CustomFlowbiteTheme = {
  card: {
    root: {
      base: "flex rounded-none border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    },
  },
};

export default function Mobil() {
  return (
    <>
      <div className="h-80">
        <Carousel>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
      <Flowbite theme={{ theme: customTheme }}>
        <div className="flex justify-around mb-4 font-bold text-center">
          <Card href="#" className="max-w-sm">
            <IoPeople color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">4 Penumpang</p>
          </Card>
          <Card href="#" className="max-w-sm">
            <GiGearStick color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">Manual</p>
          </Card>
          <Card href="#" className="max-w-sm">
            <BiSolidGasPump color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">Premium</p>
          </Card>
          <Card href="#" className="max-w-sm">
            <MdSpeed color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">2.5 Liter</p>
          </Card>
          <Card href="#" className="max-w-sm">
            <SiGodotengine color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">250 tenaga kuda</p>
          </Card>
          <Card href="#" className="max-w-sm">
            <IoSpeedometer color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">6000 cc</p>
          </Card>
          <Card href="#" className="max-w-sm">
            <TbAirConditioning color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">Air Conditioner</p>
          </Card>
          <Card href="#" className="max-w-sm">
            <GiJackPlug color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">Audio Jack</p>
          </Card>
          <Card href="#" className="max-w-sm">
            <FaBluetooth color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">Bluetooth</p>
          </Card>

          <Card href="#" className="max-w-sm">
            <GiCarDoor color="teal" size="50" className="self-center" />
            <p className=" text-gray-700 dark:text-gray-400">4 Pintu</p>
          </Card>
        </div>
      </Flowbite>
      <div className="my-4">
        <h1 className="text-center text-4xl font-bold">Fortuner</h1>
      </div>
      <div className="px-80 mb-40 flex flex-col justify-center">
        <h5 className="font-bold text-2xl">Isi Data Booking</h5>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="tanggal" value="Tanggal Penyewaan" />
          </div>
          <Datepicker />
        </div>
        <div className="mb-2">
          <div className="mb-2 block">
            <Label htmlFor="lama_hari" value="Pilih lama hari" />
          </div>
          <Select id="lama_hari" required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </Select>
        </div>
        <Button type="submit" className="">Booking</Button>
      </div>
    </>
  );
}
