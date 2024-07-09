import { Dashboard as Dashboardlayout} from "@/components/component/dashboard";
import React from "react";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dashboardlayout>
      <section>{children}</section>
    </Dashboardlayout>
  );
}
