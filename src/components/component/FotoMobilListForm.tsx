"use client";
import { deletePhotoMobil } from "@/lib/getData";
import { Toast, TextInput, Avatar } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

export default function FotoMobilListForm({ fotoMobil }: any) {
  const router = useRouter();
  const [state, formAction] = useFormState(deletePhotoMobil, null);

  useEffect(() => {
    if (state?.message === "ok") {
      toast.success("Berhasil Menghapus Mobil!");
    } else if (state?.error) {
      toast.error("Gagal Menghapus Mobil!");
    } else if (state?.message === null) {
      return;
    }
  }, [state?.message]);

  return (
    <>
      <Toast>
        <form className="my-2 flex" action={formAction}>
          <TextInput type="hidden" name="fotoMobil" defaultValue={fotoMobil} />
          <Avatar className="w-20" img={fotoMobil} size="lg" />
          <Toast.Toggle
            type="submit"
            className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
          />
        </form>
      </Toast>
    </>
  );
}
