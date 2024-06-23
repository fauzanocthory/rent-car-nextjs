import { BreadcrumbComponent } from "@/components/component/Breadcrumbs";
import { Dashboard } from "@/components/component/Dashboard";
import { auth } from "../../../../auth";
import { SessionProvider } from "next-auth/react";
import { notFound, redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await auth();
  if (!user) return redirect("/signin");
  if (user.user.role === "user") return notFound();
  
  return (
    <>
      <div className="flex gap-1 dark:bg-gray-500">
        <Dashboard user={user} />
        {/* <BreadcrumbComponent/> */}
        <SessionProvider session={user}>{children}</SessionProvider>
      </div>
    </>
  );
}
