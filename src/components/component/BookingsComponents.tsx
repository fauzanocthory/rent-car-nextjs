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
import RencanaBookingComponent from "./RencanaBooking";

export default function BookingsComponents({ allBookings }: any) {
  return (
    <>
      <div className="flex flex-col overflow-x-scroll">
        <h1 className="p-3 text-xl dark:text-white">Riwayat Sewa</h1>
        <div className="">
          <div className="flex flex-row justify-between gap-2 px-2 mb-2 max-sm:flex-col">
            <TextInput
              className="flex-grow"
              id="nama"
              type="nama"
              placeholder="Cari Berdasarkan Kode Booking, Merk, Type, Warna, Nomor Polisi, Tarif dll."
              required
            />
            <Button>Tambah Mobil</Button>
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
              <TableHeadCell>Status Pengembalian</TableHeadCell>
              <TableHeadCell>Action</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              {allBookings &&
                allBookings.map((booking: any) => {
                  return (
                    <>
                      <RencanaBookingComponent bookings={booking} />
                    </>
                  );
                })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
