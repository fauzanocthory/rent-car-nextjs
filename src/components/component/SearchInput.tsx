"use client";

import { Label, RangeSlider, TextInput } from "flowbite-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchInput({
  placeholders,
}: {
  placeholders: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleSearchByTarifLte = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("tarifLte", term);
    } else {
      params.delete("tarifLte");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleSearchByTarifGte = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("tarifGte", term);
    } else {
      params.delete("tarifGte");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-col flex-shrink-0">
      <div className="w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <TextInput
        className="w-full"
        placeholder={placeholders}
        onChange={(e) => {
          handleSearch(e.target.value || "");
        }}
        defaultValue={searchParams.get("query")?.toString() || ""}
      />
      </div>

      <div className={pathname !== "/mobils" ? "hidden" : ""}>
        <div className="block">
          <Label
            className="font-bold"
            htmlFor="lg-range"
            value={`Slide untuk memfilter harga mobil Lebih Besar Dari: Rp. ${searchParams
              .get("tarifGte")
              ?.toString()}`}
          />
        </div>

        <RangeSlider
          id="lg-range"
          sizing="md"
          min={100000}
          max={500000}
          onChange={(e) => {
            handleSearchByTarifGte(e.target.value);
          }}
          defaultValue={searchParams.get("tarifGte")?.toString() || 100000}
        />
      </div>

      <div className={pathname !== "/mobils" ? "hidden" : ""}>
        <div className="block">
          <Label
            className="font-bold"
            htmlFor="lg-range"
            value={`Slide untuk memfilter harga mobil Lebih Kecil Dari : Rp. ${searchParams
              .get("tarifLte")
              ?.toString()}`}
          />
        </div>

        <RangeSlider
          id="lg-range"
          sizing="md"
          min={100000}
          max={500000}
          onChange={(e) => {
            handleSearchByTarifLte(e.target.value);
          }}
          defaultValue={searchParams.get("tarifLte")?.toString() || 500000}
        />
      </div>
    </div>
  );
}
