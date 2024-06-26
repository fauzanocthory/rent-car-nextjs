import rupiahFormat from "@/lib/currencyRupiah";
import dateToString from "@/lib/dateToString";
import { Card } from "flowbite-react";

export function MobilCardComponent({ sewa }: any) {
  return (
    <>
      <div key={sewa.id}>
        <Card
          className="max-w-sm"
          imgSrc={sewa.mobil.fotoMobil[0].image}
          horizontal
        >
          <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
            {sewa.mobil.merk}
          </h5>
          <h6 className="font-bold tracking-tight text-gray-900 dark:text-white">
            {sewa.mobil.type}
          </h6>
          <div className="text-sm">
            <p className="font-bold text-gray-700 dark:text-gray-400">
              <span className="font-bold">Kode Booking :</span> {sewa.id}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="font-bold">Tanggal Sewa :</span>{" "}
              {dateToString(sewa.tanggal_mulai_sewa)}{" "}
              s/d{" "}
              {dateToString(sewa.tglSelesaiSewa)}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="font-bold">Total Hari :</span> {sewa.lama_hari}{" "}
              Hari
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="font-bold">Total Biaya :</span> {" "}
              {rupiahFormat(sewa.mobil.tarif * sewa.lama_hari)}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="font-bold">Status Penyewaan :</span>{" "}
              {sewa.status_pengembalian}
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}
