import { Card } from "flowbite-react";
import Image from "next/image";
import image1 from "@/images/1.png";

export function OurCustomerComponent({ allUsers }: any) {
  return (
    <>
      <Card className="max-h-full w-full md:w-full md:mx-4">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h5 className="text-md font-bold leading-none text-gray-900 dark:text-white">
            Pelanggan kami
          </h5>
          <p
            className="text-sm font-medium text-gray-950 hover:underline dark:text-white"
          >
            Total Riwayat Booking
          </p>
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {allUsers.map((users: any) => {
              return (
                <>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="shrink-0">
                        <Image
                          alt="Neil image"
                          width="32"
                          height="32"
                          src={users.image}
                          className="rounded-full"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          {users.name}
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          {users.email}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {users.totalRiwayatBooking ? users.totalRiwayatBooking : "0"}
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </Card>
    </>
  );
}
