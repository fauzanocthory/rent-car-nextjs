"use client";
import { Button, CustomFlowbiteTheme, Flowbite, Sidebar } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import {
  AiFillSetting,
  AiFillDollarCircle,
  AiOutlineUser,
  AiFillCar,
} from "react-icons/ai";
import { MdCarRental } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export function Dashboard({ user }: any) {
  const [open, isOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          isOpen(!open);
        }}
        title="Buka Sidebar"
        color="gray"
        className="font-bold text-center focus:text-black hover:text-black md:hidden"
      ><span>Sidebar</span> {!open ? (<IoIosArrowDown size={20} />) : (<IoIosArrowUp size={20} />)}</Button>

      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className={
          !open
            ? "hidden md:h-screen md:block"
            : "h-fit w-screen text-center relative md:h-screen md:block"
        }
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {/* ADMIN DASHBOARD */}
            {user && user?.user?.role === "admin" ? (
              <>
                <h1 className="text-xl dark:text-white font-bold pb-6">
                  Dashboard Admin
                </h1>
                <Sidebar.Item as={Link} href="/admin" icon={AiFillCar}>
                  Mobil Saya
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  href="/admin/users"
                  icon={AiOutlineUser}
                >
                  Users
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  href="/admin/bookings"
                  icon={AiFillDollarCircle}
                >
                  Bookings
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  href="/admin/settings"
                  icon={AiFillSetting}
                >
                  Settings
                </Sidebar.Item>
              </>
            ) : (
              <>
                {/* USER DASHBOARD */}
                <h1 className="text-xl dark:text-white font-bold">
                  User Dashboard
                </h1>
                <Sidebar.Item
                  as={Link}
                  href="/user/rencana-booking"
                  icon={MdCarRental}
                >
                  Rencana Booking
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  href="/user/riwayat-booking"
                  icon={AiFillDollarCircle}
                >
                  Riwayat Penyewaan
                </Sidebar.Item>
                <Sidebar.Item
                  as={Link}
                  href="/user/settings"
                  icon={AiFillSetting}
                >
                  Settings
                </Sidebar.Item>
              </>
            )}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
