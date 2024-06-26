import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TextInput,
} from "flowbite-react";
import Link from "next/link";

import { getBookingUser } from "@/lib/getData";
import RencanaBookingComponent from "@/components/component/RencanaBooking";
import { auth } from "../../../../../auth";
import SearchInput from "@/components/component/SearchInput";

export default async function RencanaBooking({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const user = await auth();
  const id = user?.user.id;
  const bookings = await getBookingUser(id, query);

  return (
    <>
      <div className="flex flex-col overflow-x-scroll max-h-screen">
        <h1 className="p-3 text-xl dark:text-white">
          Daftar Booking Saya, {user?.user.name} As User
        </h1>
        <div className="">
          <div className="flex flex-row justify-between gap-2 px-2 mb-2 max-sm:flex-col">
            {/* <TextInput
              className="flex-grow"
              id="nama"
              type="nama"
              placeholder="Cari Berdasarkan Merk, Type, Warna, Nomor Polisi, Tarif, Persneling dll."
              required
            /> */}
            <SearchInput placeholders="Search Booking Berdasarkan Merk, Type, Warna, Nomor Polisi, Lama Sewa atau Status..." />

            <Button as={Link} href="/mobils">
              Tambah Booking
            </Button>
          </div>
        </div>

        <div className="overflow-x-scroll">
          <Table hoverable className="dark:text-white">
            <TableHead>
              <TableHeadCell className="p-4">
                <Checkbox />
              </TableHeadCell>
              <TableHeadCell>Kode Booking</TableHeadCell>
              <TableHeadCell>Merk</TableHeadCell>
              <TableHeadCell>Type</TableHeadCell>
              <TableHeadCell>Warna</TableHeadCell>
              <TableHeadCell>Nomor Polisi</TableHeadCell>
              <TableHeadCell>Tanggal Rencana Pengambilan</TableHeadCell>
              <TableHeadCell>Harus Dikembalikan Sebelum</TableHeadCell>
              <TableHeadCell>Lama Sewa</TableHeadCell>
              <TableHeadCell>Tarif Per Hari</TableHeadCell>
              <TableHeadCell>Total Biaya</TableHeadCell>
              <TableHeadCell>Status Booking</TableHeadCell>
              <TableHeadCell>Status Pembayaran</TableHeadCell>
              <TableHeadCell>Status Penyewaan</TableHeadCell>
              <TableHeadCell>Action</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              {bookings &&
                bookings.map((booking: any, index) => {
                  return (
                      <RencanaBookingComponent user={user} bookings={booking} index={index} />
                  );
                })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
