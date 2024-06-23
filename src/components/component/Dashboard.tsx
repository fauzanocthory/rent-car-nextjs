"use client"
import { CustomFlowbiteTheme, Flowbite, Sidebar } from "flowbite-react";
import Link from "next/link";
import {
  AiFillSetting,
  AiFillDollarCircle,
  AiOutlineUser,
  AiFillCar,
} from "react-icons/ai";
import { MdCarRental } from "react-icons/md";

const customTheme: CustomFlowbiteTheme = {
  sidebar: {
    root: {
      inner:
        "h-full overflow-y-auto overflow-x-hidden rounded-none px-3 py-4 bg-gray-200 dark:bg-gray-800",
    },
  },
};

export function Dashboard({user}: any) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className="h-[900px] w-fit overflow-y-visible"
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
    </Flowbite>
  );
}
