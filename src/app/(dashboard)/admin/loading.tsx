"use client";

import { Spinner } from "flowbite-react";

export default function loading() {
  return (
    <div>
      <div className="grid grid-cols-1 place-items-center h-screen">
        <Spinner aria-label="Default status example" className="w-screen" size="xl" />
      </div>
    </div>
  );
}
