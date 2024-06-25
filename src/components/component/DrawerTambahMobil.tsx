"use client";

import {
  Avatar,
  Button,
  Drawer,
  FileInput,
  Label,
  Select,
  TextInput,
} from "flowbite-react";
import { tambahMobil } from "@/lib/getData";
import { FaCar } from "react-icons/fa";
import { useFormState } from "react-dom";
import React, { useEffect, useState } from "react";
import { ButtonPending } from "./ButtonPending";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function DrawerTambahMobil({ user }: any) {
  const ref = React.useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(tambahMobil, null);
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (state?.message === "ok") {
      toast.success('Berhasil Menambahkan Mobil!')
      router.refresh()
      setIsOpen(false);
    } else if(state?.error) {
      toast.error('Gagal Menambahkan Mobil!')
    }
  }, [state?.message, state?.error]);

  return (
    <>
      <div className="">
        <Button color="teal" onClick={() => setIsOpen(true)}>
          Tambah
        </Button>
      </div>
      {/* MODAL UNTUK TAMBAH MOBIL */}
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="TAMBAH MOBIL" titleIcon={FaCar} />
        <Drawer.Items>
          <form ref={ref} action={formAction} className="flex flex-col gap-1">
            <TextInput
              id="userId"
              name="userId"
              defaultValue={user?.data?.user.id}
              type="hidden"
            />
            <div className="flex gap-1">
              <div>
                <Label htmlFor="merk" className="mb-2 block">
                  Merk
                </Label>
                <TextInput
                  id="merk"
                  name="merk"
                  placeholder="Toyota"
                  color={state?.error?.merk ? "failure" : ""}
                />
              </div>
              <div>
                <Label htmlFor="type" className="mb-2 block">
                  Type
                </Label>
                <TextInput
                  id="type"
                  name="type"
                  placeholder="Fortuner"
                  color={state?.error?.type ? "failure" : ""}
                />
              </div>
              <div>
                <Label htmlFor="warna" className="mb-2 block">
                  Warna
                </Label>
                <TextInput
                  id="warna"
                  name="warna"
                  placeholder="Merah"
                  color={state?.error?.warna ? "failure" : ""}
                />
              </div>
            </div>

            <div className="flex gap-1">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="bahan_bakar" value="Bahan Bakar" />
                </div>
                <Select
                  id="bahan_bakar"
                  name="bahan_bakar"
                  color={state?.error?.bahan_bakar ? "failure" : ""}
                >
                  <option>Pertamax Racing</option>
                  <option>Pertamax Turbo</option>
                  <option>Pertamax</option>
                  <option>Pertalite</option>
                  <option>Premium</option>
                  <option>Pertamina Dex</option>
                  <option>Dexlite</option>
                  <option>Solar</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="persneling" value="Persneling " />
                </div>
                <Select
                  id="persneling"
                  name="persneling"
                  color={state?.error?.persneling ? "failure" : ""}
                >
                  <option>Manual</option>
                  <option>Automatic</option>
                  <option>Manual dan Automatic</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="max_penumpang" value="Kursi" />
                </div>
                <Select
                  id="max_penumpang"
                  name="max_penumpang"
                  color={state?.error?.max_penumpang ? "failure" : ""}
                >
                  <option>2</option>
                  <option>4</option>
                  <option>6</option>
                  <option>8</option>
                  <option>12</option>
                </Select>
              </div>
            </div>

            <div className="flex gap-1">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="air_conditioner" value="AC" />
                </div>
                <Select
                  id="air_conditioner"
                  name="air_conditioner"
                  color={state?.error?.air_conditioner ? "failure" : ""}
                >
                  <option>Ada</option>
                  <option>Tidak Ada</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="bluetooth" value="Bluetooth" />
                </div>
                <Select
                  id="bluetooth"
                  name="bluetooth"
                  color={state?.error?.bluetooth ? "failure" : ""}
                >
                  <option>Tidak Ada</option>
                  <option>Ada</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="audio_jack" value="Audio Jack" />
                </div>
                <Select
                  id="audio_jack"
                  name="audio_jack"
                  color={state?.error?.audio_jack ? "failure" : ""}
                >
                  <option>Tidak Ada</option>
                  <option>Ada</option>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="nomor_polisi" className="mb-2 block">
                Nomor Polisi/Plat
              </Label>
              <TextInput
                id="nomor_polisi"
                name="nomor_polisi"
                placeholder="BM 1234 MB"
                color={state?.error?.nomor_polisi ? "failure" : ""}
              />
            </div>
            <div id="fileUpload" className="my-4">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Upload Foto Mobil" />
              </div>
              <FileInput
                id="file"
                name="foto_mobil"
                helperText="Maximal ukuran 1 MB."
                color={state?.error?.foto_mobil ? "failure" : ""}
              />
              <Avatar.Group>
                <Avatar alt="" img="" rounded size="lg" stacked />
              </Avatar.Group>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <div>
                <Label htmlFor="tarif" className="mb-2">
                  Tarif Per Hari
                </Label>
                <TextInput
                  id="tarif"
                  name="tarif"
                  placeholder="Rp. 100.000"
                  className="w-full"
                  color={state?.error?.tarif ? "failure" : ""}
                />
                {state?.error?.tarif}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="status_booking" value="Status Booking" />
                </div>
                <Select
                  id="status_booking"
                  name="status_booking"
                  color={state?.error?.status_booking ? "failure" : ""}
                >
                  <option>Belum Dibooking</option>
                  <option>Sudah Dibooking</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="status_pembayaran"
                    value="Status Pembayaran"
                  />
                </div>
                <Select
                  id="status_pembayaran"
                  name="status_pembayaran"
                  color={state?.error?.status_pembayaran ? "failure" : ""}
                >
                  <option>Belum Dibayar</option>
                  <option>Sudah Dibayar</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="status_penyewaan" value="Status Penyewaan" />
                </div>
                <Select
                  id="status_penyewaan"
                  name="status_penyewaan"
                  color={state?.error?.status_penyewaan ? "failure" : ""}
                >
                  <option>Belum Dikembalikan</option>
                  <option>Sudah Dikembalikan</option>
                </Select>
              </div>
            </div>

            <ButtonPending titlePending="Menambahkan..." title="Tambah" warnaButton="success"/>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
