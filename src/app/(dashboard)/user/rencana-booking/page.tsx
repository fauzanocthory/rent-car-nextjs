"use client";
import {
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Checkbox,
  Drawer,
  FileInput,
  Label,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TextInput,
} from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { FaCar } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoCloudUpload } from "react-icons/io5";
import { BiSolidDollarCircle } from "react-icons/bi";

export default function RencanaBooking() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="flex flex-col overflow-x-scroll">
        <h1 className="p-3 text-xl dark:text-white">
          Daftar Booking Saya, Fauzan Octhory As User
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
              <TableHeadCell>Tarif Per Hari</TableHeadCell>
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
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="p-4">
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium text-gray-900 dark:text-white">
                  {"BK123"}
                </TableCell>
                <TableCell className="font-medium text-gray-900 dark:text-white">
                  {"Hyundai"}
                </TableCell>
                <TableCell>Ioniq 5</TableCell>
                <TableCell>Hitam</TableCell>
                <TableCell>BM 1234 UI</TableCell>
                <TableCell>Rp. 100.000</TableCell>
                <TableCell>20 Oktober 2024</TableCell>
                <TableCell>22 Oktober 2024</TableCell>
                <TableCell>Rp. 100.000</TableCell>
                <TableCell>2 hari</TableCell>
                <TableCell>Rp. 200.000</TableCell>
                <TableCell>
                  <Badge color="success">Sudah Dibooking</Badge>
                </TableCell>
                <TableCell>
                  <Badge color="warning">Belum Dibayar</Badge>
                </TableCell>
                <TableCell>
                  <Badge color="warning">Belum Dikembalikan</Badge>
                </TableCell>
                <TableCell className="flex flex-col gap-2">
                  <Button
                    color="success"
                    onClick={handleClick}
                  >
                    <BiSolidDollarCircle size={20} className="text-center mr-1" />
                    Bayar
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Drawer untuk menampilkan modal upload bukti bayar */}
          <div>
            <Drawer open={isOpen} onClose={handleClose} position="right">
              <Drawer.Header title="UPLOAD BUKTI BAYAR" titleIcon={FaMoneyCheckDollar} />
              <Drawer.Items>
                <form action="#" className="flex flex-col gap-1">
                  <div id="fileUpload" className="my-4">
                    <div className="mb-2 block">
                      <Label htmlFor="file" value="Upload Foto Bukti Transfer" />
                    </div>
                    <FileInput id="file" helperText="Maximal ukuran 1 MB." />
                    <Avatar.Group className="justify-center">
                      <Avatar
                        alt=""
                        img="/images/people/profile-picture-5.jpg"
                        rounded
                        size="xl"
                        stacked
                      />
                    </Avatar.Group>
                  </div>

                  <Button className="w-full">
                    <IoCloudUpload size={20} className="mr-2" />
                    Upload Bukti Bayar
                  </Button>
                </form>
              </Drawer.Items>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
}
