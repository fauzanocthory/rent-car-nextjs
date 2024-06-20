import { BreadcrumbComponent } from "@/components/component/Breadcrumbs";
import { Dashboard } from "@/components/component/Dashboard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex gap-1 dark:bg-gray-500">
        <Dashboard />
        {/* <BreadcrumbComponent/> */}
        {children}
      </div>
    </>
  );
}
