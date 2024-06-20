"use client";

import { updateUser } from "@/lib/getData";
import {
  Avatar,
  Button,
  Datepicker,
  Drawer,
  FileInput,
  Label,
  Textarea,
  TextInput,
  theme,
} from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { HiCalendar } from "react-icons/hi";

export function UsersUpdateDrawer(user: any) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const router = useRouter();

  const [state, formAction] = useFormState(updateUser, null);

  useEffect(() => {
    if (state?.message === "ok") {
      toast.success("Berhasil Mengubah User!");
      setIsOpen(false)
      router.refresh();
    } else if (state?.error) {
      toast.error("Gagal Mengubah User!");
    } else if (state?.message === null) {
      return;
    }
    console.log(state)
  }, [state?.message]);

  return (
    <>
      <div className="">
        <Button onClick={() => setIsOpen(true)}>Edit</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="EDIT USER" titleIcon={HiCalendar} />
        <Drawer.Items>
          <form action={formAction}>
            <TextInput
              id="name"
              name="userId"
              type="hidden"
              defaultValue={user.id}
            />
            <div className="mb-6 mt-3">
{/*                 
                <TextInput name="imageAwal" defaultValue={user.image} />
                <TextInput name="simAwal" defaultValue={user.sim} />
                <TextInput name="stnkAwal" defaultValue={user.stnk} /> */}
              <Label htmlFor="name" className="mb-2 block">
                Nama
              </Label>
              <TextInput
                id="name"
                name="name"
                placeholder="Apple Keynote"
                defaultValue={user.name}
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="email" className="mb-2 block">
                Email
              </Label>
              <TextInput
                id="email"
                name="email"
                placeholder="email@gmail.com"
                disabled
                defaultValue={user.email}
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="nomorHandphone" className="mb-2 block">
                Nomor Handphone
              </Label>
              <TextInput
                id="nomorHandphone"
                name="nomorHandphone"
                defaultValue={user.nomorHandphone}
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="totalRiwayatBooking" className="mb-2 block">
                Total Riwayat Booking
              </Label>
              <TextInput
                id="totalRiwayatBooking"
                name="totalRiwayatBooking"
                defaultValue={user.totalRiwayatBooking}
              />
            </div>
            <div className="flex flex-col mb-2">
              <Label htmlFor="image" className="">
                Pilih Foto Profil
              </Label>
              <FileInput
                id="file"
                helperText="Maximal ukuran 1 MB."
                name="image"
                className={state?.error?.image ? "border-red-500" : ""}
              />
              <Label htmlFor="stnk" className="">
                Pilih Foto STNK
              </Label>
              <FileInput
                id="file"
                helperText="Maximal ukuran 1 MB."
                name="stnk"
                className={state?.error?.stnk ? "border-red-500" : ""}
              />
              {state?.error?.stnk}
              {state?.error?.sim}
              {state?.error?.image}
              <Label htmlFor="sim" className="">
                Pilih Foto SIM
              </Label>
              <FileInput
                id="file"
                helperText="Maximal ukuran 1 MB."
                name="sim"
                className={state?.error?.sim ? "border-red-500" : ""}
              />
            </div>
            <Avatar.Group className="flex mb-6 justify-center">
              <Avatar alt="" img={user.image} rounded size="lg" stacked />
              <Avatar alt="" img={user.stnk} rounded size="lg" stacked />
              <Avatar alt="" img={user.sim} rounded size="lg" stacked />
            </Avatar.Group>
            <Button className="w-full" type="submit">
              <HiCalendar className="mr-2" />
              Update User
            </Button>
            {/* <ButtonPending titlePending="Mengubah User..." title="Edit User" warnaButton="success"/> */}
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
