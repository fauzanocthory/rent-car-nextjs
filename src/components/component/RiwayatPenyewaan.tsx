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
  
  export default function RiwayatPenyewaanComponent() {
    return (
      <>
        <div className="flex flex-col overflow-x-scroll">
        <h1 className="p-3 text-xl dark:text-white">
          Riwayat Sewa
        </h1>
        <div className="">
          <div className="flex flex-row justify-between gap-2 px-2 mb-2 max-sm:flex-col">
            <TextInput className="flex-grow" id="nama" type="nama" placeholder="Cari Berdasarkan Kode Booking, Merk, Type, Warna, Nomor Polisi, Tarif dll." required />
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
              <TableHeadCell>Tarif Per Hari</TableHeadCell>
              <TableHeadCell>Total Biaya</TableHeadCell>
              <TableHeadCell>Status Penyewaan</TableHeadCell>
              <TableHeadCell>User</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="p-4">
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium text-gray-900 dark:text-white">
                  {"BK1234"}
                </TableCell>
                <TableCell className="font-medium text-gray-900 dark:text-white">
                  {"Hyundai"}
                </TableCell>
                <TableCell>Ioniq 5</TableCell>
                <TableCell>Hitam</TableCell>
                <TableCell>BM 1234 UI</TableCell>
                <TableCell>Rp. 200.000</TableCell>
                <TableCell>Rp. 2.000.000</TableCell>
                <TableCell>
                  <Badge color="success">Sudah Dikembalikan</Badge>
                </TableCell>
                <TableCell>fauzan@gmail.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        </div>
      </>
    );
  }
  