"use client";

import MobilComponent from "@/components/component/Mobil";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function HomeAdminComponent({mobils}: any) {

  const user = useSession()

  const [isOpen, setIsOpen] = useState(false);

  const handleClickEdit = () => {
    setIsOpen(true);
  };

  const handleClickTambah = () => {
    setIsOpen(false);
  };
  return (
    <>
      <MobilComponent onClickEdit={handleClickEdit} onClickTambah={handleClickTambah} isOpen={setIsOpen} mobils={mobils} user={user} />
      {/* <DrawerTambahMobil handleClose={handleClose} isOpen={isOpenn} setIsOpenn={setIsOpenn} user={user}/> */}
    </>
  );
}
