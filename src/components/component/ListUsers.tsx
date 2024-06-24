import { getUsers } from "@/lib/getData";
import {
  TextInput,
  Button,
  Table,
  TableHead,
  TableHeadCell,
  Checkbox,
  TableBody,
  TableCell,
  TableRow,
  Avatar,
} from "flowbite-react";
import { UsersUpdateDrawer } from "./UsersUpdateDrawer";
import { UsersDeleteDrawer } from "./UsersDeleteDrawer";

export default async function ListUsers() {
  const user = await getUsers();

  return (
    <>
      <div className="flex flex-col overflow-x-scroll w-full  max-h-screen">
        <h1 className="p-3 text-xl dark:text-white">Daftar Users</h1>
        <div className="">
          <div className="flex flex-row justify-between gap-2 px-2 mb-2 max-sm:flex-col">
            <TextInput
              className="flex-grow"
              id="nama"
              type="nama"
              placeholder="Cari Berdasarkan Nama, Email, Nomor Handphone/WA dll."
              required
            />
            <Button>Tambah User</Button>
          </div>
        </div>
        <div className="overflow-x-scroll">
          <Table hoverable className="dark:text-white">
            <TableHead>
              <TableHeadCell className="p-4">
                <Checkbox />
              </TableHeadCell>
              <TableHeadCell>Nama</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Nomor Handphone</TableHeadCell>
              <TableHeadCell>Role</TableHeadCell>
              <TableHeadCell>Tanggal Daftar</TableHeadCell>
              <TableHeadCell>Total Riwayat Bookings</TableHeadCell>
              <TableHeadCell>STNK</TableHeadCell>
              <TableHeadCell>SIM</TableHeadCell>
              <TableHeadCell>Action</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              {user.map((user: any) => (
                <TableRow
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={user.id}
                >
                  <TableCell className="p-4">
                    <Checkbox />
                  </TableCell>
                  <TableCell className="font-medium text-gray-900 dark:text-white">
                    <Avatar alt="" img={user.image} rounded size="xs" stacked />
                    {user.name}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {user.nomorHandphone || "Belum Ada Nomor"}
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.createdAt.toLocaleString()}</TableCell>
                  <TableCell>
                    {user.totalRiwayatBooking || "Tidak Ada"}
                  </TableCell>
                  <TableCell>{user.stnk || "Tidak Ada"}</TableCell>
                  <TableCell>{user.sim || "Tidak Ada"}</TableCell>
                  <TableCell className="flex flex-row gap-2">
                    <UsersUpdateDrawer {...user} />
                    <UsersDeleteDrawer {...user}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </div>
      </div>
    </>
  );
}
