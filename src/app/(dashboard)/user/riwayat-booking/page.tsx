import { MobilCardComponent } from "@/components/component/MobilCardBooking";
import { getBookingSewa } from "@/lib/getData";
import { auth } from "../../../../../auth";
import SearchInput from "@/components/component/SearchInput";

export default async function RiwayatBooking({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const user = await auth();
  const id = user?.user.id
  const sewas = await getBookingSewa(id, query);

  return (
    <>
   <div className="flex flex-col text-2xl font-bold p-2 overflow-y-scroll w-full  max-h-screen mb-2">
   <h1 className="text-center md:text-start py-2">Riwayat Penyewaan</h1>
   <div>
        <SearchInput placeholders="Search Mobil Berdasarkan Merk, Type..." />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 p-1 h-screen my-2">
        {sewas &&
          sewas.map((sewa: any) => {
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
