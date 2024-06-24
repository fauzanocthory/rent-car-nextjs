import { MobilCardComponent } from "@/components/component/MobilCardBooking";
import { getBookingSewa } from "@/lib/getData";
import { auth } from "../../../../../auth";

export default async function RiwayatBooking() {
  const user = await auth();
  const sewas = await getBookingSewa(user?.user.id);
  return (
    <>
   <div className="flex flex-col text-2xl font-bold p-2 overflow-y-scroll w-full  max-h-screen mb-2">
   <h1 className="text-center md:text-start py-2">Riwayat Penyewaan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 p-1 h-screen my-2">
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
