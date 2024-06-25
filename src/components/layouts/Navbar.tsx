import {
  Avatar,
  Button,
  DarkThemeToggle,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Flowbite,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { auth } from "../../../auth";
import { AuthButtonSignOut } from "../auth/AuthButton";

export default async function NavbarComponents() {
  const user = await auth();

  return (
    <Navbar fluid className="bg-gray-200">
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="../favicon.ico"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Car Rental App
        </span>
      </NavbarBrand>
      <div className="flex gap-4 md:order-2">
        {user && user ? (
          <>
            <div className="md:flex md:justify-center">
              <Dropdown
                arrowIcon={true}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img={user?.user?.image || ""}
                    rounded
                    bordered
                  />
                }
              >
                <DropdownHeader>
                  <span className="block text-sm font-bold">
                    {user?.user?.name}
                  </span>
                  <span className="block truncate text-sm font-bold text-teal-600">
                    {user?.user?.email}
                  </span>
                </DropdownHeader>
                <DropdownItem
                  as={Link}
                  href={
                    user && user?.user?.role === "admin" ? "/admin" : "/user/rencana-booking"
                  }
                >
                  Dashboard
                </DropdownItem>
                <DropdownItem
                  as={Link}
                  href={
                    user && user?.user?.role === "admin"
                      ? "/admin/settings"
                      : "/user/settings"
                  }
                >
                  Settings
                </DropdownItem>
              </Dropdown>
            </div>

            {/* Toggle Navbar */}
            <NavbarToggle />

            {/* TOMBOL SIGN OUT */}
            <div className="hidden md:block">
              <AuthButtonSignOut />
            </div>
          </>
        ) : (
          <>
            <Button
              color="success"
              pill
              className="w-full"
              as={Link}
              href="/signin"
            >
              Sign In
            </Button>
          </>
        )}
      </div>

      <NavbarCollapse className="text-center">
        <NavbarLink as={Link} href="/">
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
        <NavbarLink as={Link} href="/mobils">
          List Mobil
        </NavbarLink>
        <NavbarLink href="#">
          <DarkThemeToggle className="py-0" />
        </NavbarLink>
        <NavbarLink>
          {/* TOMBOL SIGN OUT */}
          <div className="block md:hidden">
            <AuthButtonSignOut />
          </div>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
