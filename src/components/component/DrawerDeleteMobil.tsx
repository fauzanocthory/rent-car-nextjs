"use client";

import { deleteMobil } from "@/lib/getData";
import { Button, Modal, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { ButtonPending } from "./ButtonPending";
import toast from "react-hot-toast";

export function DrawerDeleteMobil({ mobils, userId }: any) {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const [state, formAction] = useFormState(deleteMobil, null);

  useEffect(() => {
    if (state?.message === "ok") {
      router.refresh();
      setOpenModal(false);
      toast.success("Berhasil Menghapus Mobil!");
    }
  }, [state?.message]);

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
              Apakah kamu yakin ingin menghapus {mobils.type} ?
            </h3>
            <div className="flex justify-center gap-4">
              <form action={formAction}>
                <TextInput
                  id="id"
                  name="mobilsId"
                  type="hidden"
                  defaultValue={mobils.id}
                ></TextInput>
                <TextInput
                  id="id"
                  name="userId"
                  type="hidden"
                  defaultValue={userId}
                ></TextInput>
                {mobils.fotoMobil.map((fotoMobil: any, index: number) => {
                  return (
                    <div key={fotoMobil.id}>
                      <TextInput
                        id="id"
                        name="fotoMobil"
                        type="text"
                        defaultValue={fotoMobil.image}
                      ></TextInput>
                    </div>
                  );
                })}

                <ButtonPending
                  titlePending="Deleting..."
                  title="Ya, Saya Yakin"
                  warnaButton="failure"
                />
              </form>
              <Button
                color="gray"
                type="submit"
                onClick={() => setOpenModal(true)}
              >
                Tidak
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
