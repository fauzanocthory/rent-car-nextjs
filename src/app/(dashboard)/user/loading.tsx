"use client";

import { Spinner } from "flowbite-react";

export default function loading() {
  return (
      <div className="grid grid-cols-1 place-items-center h-screen overflow-hidden">
        <Spinner aria-label="Default status example" className="w-screen" size="xl" />
      </div>
  );
}
