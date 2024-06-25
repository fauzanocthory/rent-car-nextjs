"use client";
import { Badge, Button, Checkbox, TableCell, TableRow } from "flowbite-react";
import BayarDrawer from "./BayarDrawer";

export default function RencanaBookingComponent({ bookings }: any) {
  return (
    <>
      <TableRow
        key={bookings.id}
        className="bg-white dark:border-gray-700 dark:bg-gray-800"
      >
        <TableCell className="p-4">
          <Checkbox />
        </TableCell>
        <TableCell className="font-medium text-gray-900 dark:text-white">
          {bookings.id}
        </TableCell>
        <TableCell className="font-medium text-gray-900 dark:text-white">
          {bookings.mobil.merk}
        </TableCell>
        <TableCell>{bookings.mobil.type}</TableCell>
        <TableCell>{bookings.mobil.warna}</TableCell>
        <TableCell>{bookings.mobil.nomor_polisi}</TableCell>
        <TableCell>{bookings.tanggal_mulai_sewa}</TableCell>
        <TableCell>{bookings.tglSelesaiSewa}</TableCell>
        <TableCell>{bookings.lama_hari} hari</TableCell>
        <TableCell>Rp. {bookings.mobil.tarif}</TableCell>
        <TableCell>
          Rp. {(bookings.mobil.tarif * bookings.lama_hari).toLocaleString()}
        </TableCell>
        <TableCell>
          <Badge
            color={
              bookings.mobil.status_booking === "Sudah Dibooking"
                ? "success"
                : "warning"
            }
          >
              {bookings.mobil.status_booking}
          </Badge>
        </TableCell>
        <TableCell>
          <Badge
            color={
              bookings.status_pembayaran === "Sudah Dibayar"
                ? "success"
                : "warning"
            }
          >
            {bookings.status_pembayaran}
          </Badge>
        </TableCell>
        <TableCell>
          <Badge
            color={
              bookings.status_pengembalian === "Sudah Dikembalikan"
                ? "success"
                : "warning"
            }
          >
            {bookings.status_pengembalian}
          </Badge>
        </TableCell>
        <TableCell>
          {bookings.status_pembayaran === "Belum Dibayar" ? (
            <>
              <BayarDrawer />
            </>
          ) : (
            <>
              <Badge color="success">Pembayaran Berhasil</Badge>
            </>
          )}
        </TableCell>
      </TableRow>
    </>
  );
}
