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
            <Dropdown
              arrowIcon={false}
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
                <span className="block text-sm font-bold">{user?.user?.name}</span>
                <span className="block truncate text-sm font-bold text-teal-600">
                  {user?.user?.email}
                </span>
              </DropdownHeader>
              <DropdownItem
                as={Link}
                href={user && user?.user?.role === "admin" ? "/admin" : "/user"}
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
            <NavbarToggle />

            {/* TOMBOL SIGN OUT */}
            <AuthButtonSignOut />

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

      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
      <Flowbite>
        <DarkThemeToggle />
      </Flowbite>
    </Navbar>
  );
}
