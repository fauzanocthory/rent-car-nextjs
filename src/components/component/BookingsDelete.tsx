"use client";

import { deleteBookings, deleteUser } from "@/lib/getData";
import { Button, Modal, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

export function BookingsDelete({bookings}: any) {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter()

  const handleDelete = async (formData: FormData) => {
    const bookingId = formData.get("id");
    await deleteBookings(bookingId);
    setOpenModal(false)
    toast.success("Berhasil Menghapus Booking")
    router.refresh()
  };
  return (
    <>
      <Button color="red" onClick={() => setOpenModal(true)}>
        <MdDelete />
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Apakah kamu yakin ingin menghapus booking dengan kode booking {bookings.id} ?
            </h3>
            <div className="flex justify-center gap-4">
              <form action={handleDelete}>
                <TextInput id="id" name="id" defaultValue={bookings.id} className="hidden" />
                <Button color="failure" type="submit">
                  {"Yes, I'm sure"}
                </Button>
              </form>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Tidak
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
