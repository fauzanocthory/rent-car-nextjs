import { MobilCardComponent } from "@/components/component/MobilCardBooking";
import { Card } from "flowbite-react";
import Image from "next/image";

export default function RiwayatBooking() {
  return (
    <>
      <div className="grid grid-cols-2 grid-flow-row gap-4 p-2 h-screen overflow-y-scroll">
        <MobilCardComponent />
        <MobilCardComponent />
        <MobilCardComponent />
        <MobilCardComponent />
        <MobilCardComponent />
        <MobilCardComponent />
      </div>
    </>
  );
}
