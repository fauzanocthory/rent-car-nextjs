"use client";
import { postBooking } from "@/lib/getData";
import { Label, Datepicker, Select, Button, TextInput } from "flowbite-react";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { ButtonPending } from "./ButtonPending";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function FormBooking({ mobilId, userId }: any) {
  const [state, formAction] = useFormState(postBooking, null);
  const router = useRouter();

  useEffect(() => {
    if (state?.message === "ok") {
      router.push("/user/rencana-booking");
      toast.success("Berhasil Booking Mobil!");
      // supaya nilai state.message nya jadi tidak ok untuk mentrigger seIsOpen jadi nilai awal
      state.message = "selesai";
    } else if (state?.error) {
      toast.error("Gagal Menambahkan Mobil!");
    }
  }, [state?.message]);

  return (
    <>
      <form action={formAction}>
        <div>
          <TextInput name="mobilId" defaultValue={mobilId} className="hidden" />
          <TextInput name="userId" defaultValue={userId} className="hidden" />
          <div className="mb-2 block">
            <Label htmlFor="tanggal" value="Tanggal Penyewaan" />
          </div>
          <Datepicker id="tanggal" name="tanggal_sewa" />
          {state?.error?.tanggal_sewa}
        </div>
        <div className="mb-2">
          <div className="mb-2 block">
            <Label value="Pilih lama hari" />
          </div>
          <Select name="lama_hari" required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </Select>
        </div>
        {state?.error?.lama_hari}
        <ButtonPending
          titlePending="Memproses..."
          title="Booking"
          warnaButton="success"
        />
      </form>
    </>
  );
}
