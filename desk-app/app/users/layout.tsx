import { UsersLayout } from "@/components/users/user-layout"

interface LayoutProps {
  children: React.ReactNode
}

export default function AdminRootLayout({ children }: LayoutProps) {
  return (
    <UsersLayout>
      {children}
    </UsersLayout>
  )
}
