import { MobilCardComponent } from "@/components/component/MobilCardBooking";
import { getBookingSewa } from "@/lib/getData";
import { auth } from "../../../../../auth";

export default async function RiwayatBooking() {
  const user = await auth();
  const sewas = await getBookingSewa(user?.user.id);
  return (
    <>
   <div className="flex flex-col text-2xl font-bold p-2 overflow-y-scroll w-full">
   <h1 className="py-2">Riwayat Penyewaan</h1>
      <div className="grid grid-cols-2 grid-flow-row gap-4 p-1 h-screen">
        {sewas &&
          sewas.map((sewa) => {
            return (
              <>
                <div key={sewa.id}>
                  <MobilCardComponent sewa={sewa} />
                </div>
              </>
            );
          })}
      </div>
   </div>
    </>
  );
}
