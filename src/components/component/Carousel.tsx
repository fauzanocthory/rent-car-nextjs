import { GiPoliceOfficerHead } from "react-icons/gi";
import { GiCapitol } from "react-icons/gi";
import { FaPaypal } from "react-icons/fa";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";

export function CarouselComponent() {
  return (
    <>
      <div className="dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Kamu senang kami pun kenyang.
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Jadikan mobilitas anda lebih singkat dengan memanfaatkan jasa sewa
            kendaraan di tempat kami dan memberikan pengalaman yang berbeda dari
            tempat penyewaan yang lain.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            {/* <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Lihat Selengkapnya
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> */}
            <Button as={Link} href="/mobils" color="success">
              Pilih Mobil
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">
              Bekerja sama dengan
            </span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between font-bold">
              <GiPoliceOfficerHead size={50} values="" />
              <h1> POLICE DEPARTEMENT</h1>
              <GiCapitol size={50} />
              <h1>JASA RAHARJA</h1>
              <FaPaypal size={50} />
              <h1>PAYPAL</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
