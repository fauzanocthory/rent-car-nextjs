
import { Card } from "flowbite-react";
import Image from "next/image";
import image1 from "@/images/1.png"

export function OurCustomerComponent({customerHeading}: any) {
  return (
    <Card className="max-h-full">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Pelanggan {customerHeading} kami</h5>
        <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          Lihat Selengkapnya
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <Image
                  alt="Neil image"
                  width="32"
                  height="32"
                  src={image1}
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
}
