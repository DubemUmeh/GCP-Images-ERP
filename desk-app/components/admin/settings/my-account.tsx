import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { User, Lock, ShieldCheck, Mail } from 'lucide-react'

export default function MyAccountSettings() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Account</h1>
          <p className="text-sm text-muted-foreground mt-1">Update your profile information and security settings.</p>
        </div>
        <Button>Save Changes</Button>
      </div>

      <Card className="p-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Full name</p>
                <Input defaultValue="Amina Matthews" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Email address</p>
                <Input defaultValue="amina@example.com" type="email" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Lock className="h-4 w-4" />
              <span>Security</span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Password</p>
                <Input defaultValue="••••••••" type="password" />
              </div>
              <div className="flex items-center justify-between gap-4 rounded-4xl border border-border bg-muted/40 p-4">
                <div>
                  <p className="text-sm font-medium">Two-factor authentication</p>
                  <p className="text-xs text-muted-foreground">Protect your account with an extra layer of security.</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
          <ShieldCheck className="h-4 w-4" />
          <span>Connected accounts</span>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Card className="p-4 border border-border shadow-none">
            <p className="text-sm font-semibold">Email notifications</p>
            <p className="text-sm text-muted-foreground mt-2">Receive important updates and alerts by email.</p>
          </Card>
          <Card className="p-4 border border-border shadow-none">
            <p className="text-sm font-semibold">Profile visibility</p>
            <p className="text-sm text-muted-foreground mt-2">Choose what information is visible to your team.</p>
          </Card>
        </div>
      </Card>
    </div>
  )
}
