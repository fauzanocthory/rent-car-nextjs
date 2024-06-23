import {
  Badge,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TextInput,
} from "flowbite-react";
import DrawerEditMobil from "./DrawerEditMobil";
import { DrawerDeleteMobil } from "./DrawerDeleteMobil";
import DrawerTambahMobil from "./DrawerTambahMobil";
export default function MobilComponent({
  mobils,
  user
}: any) {
  const userId = user.data?.user.id || user.user.id

  return (
    <>
      <div className="flex flex-col overflow-x-hidden">
        <h1 className="p-3 text-xl dark:text-white">
          Daftar Mobil Saya,{" "}
          {user.data?.user.name || user.user.name} As {user?.data?.user?.role || user.user.role}
        </h1>

        <div className="">
          <div className="flex flex-row justify-between gap-2 px-2 mb-2 max-sm:flex-col">
            <TextInput
              className="flex-grow"
              id="nama"
              type="nama"
              placeholder="Cari Berdasarkan Merk, Type, Warna, Nomor Polisi, Tarif, Persneling dll."
              required
            />
            <DrawerTambahMobil user={user} />
          </div>
        </div>

        <div className="overflow-x-scroll">
          <Table hoverable className="dark:text-white">
            <TableHead>
              <TableHeadCell className="p-4">
                <Checkbox />
              </TableHeadCell>
              <TableHeadCell>Merk</TableHeadCell>
              <TableHeadCell>Type</TableHeadCell>
              <TableHeadCell>Warna</TableHeadCell>
              <TableHeadCell>Nomor Polisi</TableHeadCell>
              <TableHeadCell>Air Conditioner</TableHeadCell>
              <TableHeadCell>Persneling</TableHeadCell>
              <TableHeadCell>Bahan Bakar</TableHeadCell>
              <TableHeadCell>Bluetooth Music</TableHeadCell>
              <TableHeadCell>Audio Jack</TableHeadCell>
              <TableHeadCell>Jumlah Tempat Duduk</TableHeadCell>
              <TableHeadCell>Tarif Per Hari</TableHeadCell>
              <TableHeadCell>Status Booking</TableHeadCell>
              <TableHeadCell>Action</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              {mobils && mobils.map((mobils: any) => {
                return (
                    <TableRow key={mobils.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <TableCell className="p-4">
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium text-gray-900 dark:text-white">
                      {mobils.merk}
                    </TableCell>
                    <TableCell>{mobils.type}</TableCell>
                    <TableCell>{mobils.warna}</TableCell>
                    <TableCell>{mobils.nomor_polisi}</TableCell>
                    <TableCell>{mobils.air_conditioner}</TableCell>
                    <TableCell>{mobils.persneling}</TableCell>
                    <TableCell>{mobils.bahan_bakar}</TableCell>
                    <TableCell>{mobils.bluetooth}</TableCell>
                    <TableCell>{mobils.audio_jack}</TableCell>
                    <TableCell>{mobils.max_penumpang}</TableCell>
                    <TableCell>Rp. <strong className="text-teal-500">{(Number(mobils.tarif)).toLocaleString()}</strong></TableCell>
                    <TableCell>
                      <Badge color={mobils.status_booking === "Sudah Dibooking" ? "success" : "warning"}>{mobils.status_booking}</Badge>
                    </TableCell>
                    <TableCell className="flex flex-row gap-2">
                      <DrawerEditMobil mobils={mobils} userId={userId}/>
                      <DrawerDeleteMobil mobils={mobils} userId={userId}/>
                    </TableCell>
                  </TableRow>
                );
                })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
