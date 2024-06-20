import { TableRow, TableCell, Checkbox, Badge } from "flowbite-react";
import { DrawerDeleteMobil } from "./DrawerDeleteMobil";
import DrawerEditMobil from "./DrawerEditMobil";

export default function MobilRow({ mobils, userId }: any) {
  function currencyFormat(num: any) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <>
      <TableRow
        key={mobils.id}
        className="bg-white dark:border-gray-700 dark:bg-gray-800"
      >
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
        <TableCell>
          Rp.{" "}
          <strong className="text-teal-500">
            {currencyFormat(Number(mobils.tarif))}
          </strong>
        </TableCell>
        <TableCell>
          <Badge
            color={
              mobils.status_booking === "Sudah Dibooking"
                ? "success"
                : "warning"
            }
          >
            {mobils.status_booking}
          </Badge>
        </TableCell>
        <TableCell>
          <Badge
            color={
              mobils.status_pembayaran === "Sudah Dibayar"
                ? "success"
                : "warning"
            }
          >
            {mobils.status_pembayaran}
          </Badge>
        </TableCell>
        <TableCell>
          <Badge
            color={
              mobils.status_penyewaan === "Sudah Dikembalikan"
                ? "success"
                : "warning"
            }
          >
            {mobils.status_penyewaan}
          </Badge>
        </TableCell>
        <TableCell className="flex flex-row gap-2">
          <DrawerEditMobil mobils={mobils} userId={userId} />
          <DrawerDeleteMobil mobils={mobils} userId={userId} />
        </TableCell>
      </TableRow>
    </>
  );
}
