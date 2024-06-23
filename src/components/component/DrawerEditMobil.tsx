"use client";

import { updateMobil } from "@/lib/getData";
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
import FotoMobilListForm from "./FotoMobilListForm";
import toast from "react-hot-toast";
import { ButtonPending } from "./ButtonPending";
import { useRouter } from "next/navigation";

export default function DrawerEditMobil({ mobils, userId }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClose = () => setIsOpen(false);

  const [state, formAction] = useFormState(updateMobil, null);

  useEffect(() => {
    if (state?.message === "ok") {
      toast.success("Berhasil Mengubah Mobil!");
      router.refresh();
    } else if (state?.error) {
      toast.error("Gagal Mengubah Mobil!");
    } else if (state?.message === null) {
      return;
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
        <Drawer.Header title="EDIT MOBIL" titleIcon={FaCar} />
        <Drawer.Items>
          {/* FORM UNTUK DELETE FOTO MOBIL DARI DB DAN VERCEL BLOB */}
          <div id="fileUpload" className="my-4">
            <div className="flex w-full overflow-x-scroll gap-2">
              {mobils.fotoMobil.map((fotoMobil: any) => {
                return (
                  <FotoMobilListForm key={fotoMobil.id} mobilId={fotoMobil.id} fotoMobil={fotoMobil.image} />
                );
              })}
            </div>

            {/* FORM UPDATE MOBIL */}
            <form action={formAction} className="flex flex-col gap-1">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Upload Foto Mobil" />
              </div>
              <FileInput
                id="file"
                helperText="Maximal ukuran 1 MB."
                name="foto_mobil"
              />

              {state?.error?.foto_mobil}
              <div className="flex gap-1">
                <TextInput
                  id="userId"
                  name="userId"
                  defaultValue={userId}
                  type="hidden"
                />
                <TextInput
                  id="mobilId"
                  name="mobilId"
                  defaultValue={mobils.id}
                  type="hidden"
                />
                <div>
                  <Label htmlFor="merk" className="mb-2 block">
                    Merk
                  </Label>
                  <TextInput
                    id="merk"
                    name="merk"
                    placeholder="Toyota"
                    defaultValue={mobils.merk}
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
                    defaultValue={mobils.type}
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
                    defaultValue={mobils.warna}
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
                    defaultValue={mobils.bahan_bakar}
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
                    <Label htmlFor="persneling" value="Persneling" />
                  </div>
                  <Select
                    id="persneling"
                    name="persneling"
                    defaultValue={mobils.persneling}
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
                    defaultValue={mobils.max_penumpang}
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
                    defaultValue={mobils.air_conditioner}
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
                    defaultValue={mobils.bluetooth}
                  >
                    <option>Ada</option>
                    <option>Tidak Ada</option>
                  </Select>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="audio_jack" value="Audio Jack" />
                  </div>
                  <Select
                    id="audio_jack"
                    name="audio_jack"
                    defaultValue={mobils.audio_jack}
                  >
                    <option>Ada</option>
                    <option>Tidak Ada</option>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <div>
                  <Label htmlFor="nomor_polisi" className="mb-2">
                    Nomor Polisi/Plat
                  </Label>
                  <TextInput
                    id="nomor_polisi"
                    name="nomor_polisi"
                    placeholder="BM 1234 MB"
                    className="w-full"
                    defaultValue={mobils.nomor_polisi}
                  />
                  {state?.error?.nomor_polisi}
                </div>
                <div>
                  <Label htmlFor="tarif" className="mb-2">
                    Tarif Per Hari
                  </Label>
                  <TextInput
                    id="tarif"
                    name="tarif"
                    placeholder="Rp. 100.000"
                    className="w-full"
                    type="number"
                    defaultValue={mobils.tarif}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="status_booking" value="Status Booking" />
                  </div>
                  <Select
                    id="status_booking"
                    name="status_booking"
                    defaultValue={mobils.status_booking}
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
                    defaultValue={mobils.status_pembayaran}
                  >
                    <option>Belum Dibayar</option>
                    <option>Sudah Dibayar</option>
                  </Select>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="status_penyewaan"
                      value="Status Penyewaan"
                    />
                  </div>
                  <Select
                    id="status_penyewaan"
                    name="status_penyewaan"
                    defaultValue={mobils.status_penyewaan}
                  >
                    <option>Belum Dikembalikan</option>
                    <option>Sudah Dikembalikan</option>
                  </Select>
                </div>
              </div>
              <ButtonPending
                titlePending="Mengubah..."
                title="Edit Mobil"
                warnaButton="success"
              />
            </form>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
