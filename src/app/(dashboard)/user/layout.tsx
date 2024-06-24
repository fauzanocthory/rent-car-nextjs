import { BreadcrumbComponent } from "@/components/component/Breadcrumbs";
import { Dashboard } from "@/components/component/Dashboard";
import { auth } from "../../../../auth";
import { notFound, redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await auth()
  if(!user) return redirect('/signin')
  return (
    <>
      <div className="flex flex-col md:flex-row gap-1 dark:bg-gray-500">
        <Dashboard user={user} />
        {/* <BreadcrumbComponent/> */}
        {children}
      </div>
    </>
  );
}
