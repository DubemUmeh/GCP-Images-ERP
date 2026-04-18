import { AdminLayout } from "@/components/admin/admin-layout"

interface LayoutProps {
  children: React.ReactNode
}

export default function AdminRootLayout({ children }: LayoutProps) {
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  )
}
