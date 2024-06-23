"use client";

import { editBooking, updateMobil } from "@/lib/getData";
import {
  Avatar,
  Button,
  Drawer,
  FileInput,
  Label,
  Select,
  TextInput,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { FaCar, FaRegEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { ButtonPending } from "./ButtonPending";
import { useRouter } from "next/navigation";

export default function BookingDrawerEdit({bookings}: any) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClose = () => setIsOpen(false);

  const [state, formAction] = useFormState(editBooking, null)

  useEffect(() => {
    if (state?.message === "ok") {
      toast.success("Berhasil Mengupdate Booking!");
      router.refresh();
      setIsOpen(false);
      // supaya nilai state.message nya jadi tidak ok untuk mentrigger seIsOpen jadi nilai awal
      state.message = "selesai"
    }
  }, [state?.message]);

  return (
    <>
      <div className="">
        <Button color="yellow" onClick={() => setIsOpen(true)}>
          <FaRegEdit />
        </Button>
      </div>
      {/* MODAL UNTUK EDIT MOBIL */}
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="EDIT BOOKING" titleIcon={FaCar} />
        <Drawer.Items>
            {/* FORM UPDATE MOBIL */}
            <form action={formAction} className="flex flex-col gap-1">
              <div className="flex flex-col gap-1">
                <div>
                  <TextInput id="mobilId" name="mobilId" defaultValue={bookings.mobil.id} className="" />
                  <TextInput id="bookingId" name="bookingId" defaultValue={bookings.id} className="hidden" />
                  <div className="mb-2 block">
                    <Label htmlFor="status_pembayaran" value="Status Pembayaran" />
                  </div>
                  <Select
                    id="status_pembayaran"
                    name="status_pembayaran"
                    defaultValue={bookings.status_pembayaran}
                  >
                    <option>Belum Dibayar</option>
                    <option>Sudah Dibayar</option>
                  </Select>
                  {state?.error?.status_pembayaran}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="status_pengembalian" value="Status Pengembalian" />
                  </div>
                  <Select
                    id="status_pengembalian"
                    name="status_pengembalian"
                    defaultValue={bookings.status_pengembalian}
                  >
                    <option>Belum Dikembalikan</option>
                    <option>Sudah Dikembalikan</option>
                  </Select>
                  {state?.error?.status_pengembalian}
                </div>
              </div>
              <ButtonPending
                titlePending="Mengubah..."
                title="Edit Booking"
                warnaButton="success"
              />
            </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
