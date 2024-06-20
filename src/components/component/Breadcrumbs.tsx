
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export function BreadcrumbComponent() {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <BreadcrumbItem href="#" icon={HiHome}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Projects</BreadcrumbItem>
      <BreadcrumbItem>Flowbite React</BreadcrumbItem>
    </Breadcrumb>
  );
}
