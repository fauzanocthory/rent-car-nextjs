"use client";
import { Drawer, Label, FileInput, Avatar, Button } from "flowbite-react";
import { useState } from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoCloudUpload } from "react-icons/io5";
import { BiSolidDollarCircle } from "react-icons/bi";

export default function BayarDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Drawer untuk menampilkan modal upload bukti bayar */}
      <Button color="success" onClick={()=> setIsOpen(true)}>
        <BiSolidDollarCircle size={20} className="text-center mr-1" />
        Bayar
      </Button>
      <div>
        <Drawer open={isOpen} onClose={handleClose} position="right">
          <Drawer.Header
            title="UPLOAD BUKTI BAYAR"
            titleIcon={FaMoneyCheckDollar}
          />
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
    </>
  );
}
