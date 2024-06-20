"use client";

import { deleteUser } from "@/lib/getData";
import { Button, Modal } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export function UsersDeleteDrawer(user: any) {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter()

  const handleDelete = async (formData: FormData) => {
    const userID = formData.get("id");
    await deleteUser(userID);
    setOpenModal(false)
   
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Hapus</Button>
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
              Apakah kamu yakin ingin menghapus {user.email} ?
            </h3>
            <div className="flex justify-center gap-4">
              <form action={handleDelete}>
                <input id="id" name="id" defaultValue={user.id}></input>
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
