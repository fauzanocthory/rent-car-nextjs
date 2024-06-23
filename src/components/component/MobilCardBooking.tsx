
import { Card } from "flowbite-react";

export function MobilCardComponent({sewa}: any) {
  return (
    <Card className="max-w-sm" imgSrc={sewa.mobil.fotoMobil[0].image} horizontal>
      <h6 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {sewa.mobil.merk}
      </h6>
      <div className="text-sm">
      <p className="font-bold text-gray-700 dark:text-gray-400">
        <span className="font-bold">Kode Booking :</span> {sewa.id}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-bold">Tanggal Sewa :</span> {new Date(sewa.tanggal_mulai_sewa).toLocaleDateString('id-ID', { dateStyle: 'full' })} s/d {new Date(sewa.tglSelesaiSewa).toLocaleDateString('id-ID', { dateStyle: 'full' })}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      <span className="font-bold">Total Hari :</span> {sewa.lama_hari} Hari
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-bold">Total Biaya :</span> Rp. {(sewa.mobil.tarif*sewa.lama_hari).toLocaleString()}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-bold">Status Penyewaan :</span> {sewa.status_pengembalian}
      </p>
      </div>
    </Card>
  );
}
