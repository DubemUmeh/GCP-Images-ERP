import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, CreditCard, FileText, ShieldCheck, Settings2, Sparkles } from 'lucide-react'

export default function SettingsOverview() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage account controls, billing, exports, and real-time monitoring.</p>
          </div>
          <Button className="w-full sm:w-auto gap-2">
            <ArrowRight className="h-4 w-4" />
            Go to settings
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Account</p>
              <h2 className="text-2xl font-semibold mt-2">Profile & security</h2>
            </div>
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground mt-4">Update your profile, manage team access, and keep your account secure.</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Billing</p>
              <h2 className="text-2xl font-semibold mt-2">Payment details</h2>
            </div>
            <CreditCard className="h-8 w-8 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground mt-4">View invoices, manage payment methods, and track billing activity.</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Monitoring</p>
              <h2 className="text-2xl font-semibold mt-2">Live status</h2>
            </div>
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground mt-4">Check current uptime, performance, and export health in real time.</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Quick actions</h3>
            <p className="text-sm text-muted-foreground mt-1">Jump to the most used admin settings below.</p>
          </div>
          <Button variant="outline">Manage all settings</Button>
        </div>

        <Separator className="my-6" />

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="p-4 border border-border shadow-none">
            <div className="flex items-center gap-3">
              <Settings2 className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">General settings</p>
                <p className="text-xs text-muted-foreground mt-1">Update core admin preferences.</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 border border-border shadow-none">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Exports</p>
                <p className="text-xs text-muted-foreground mt-1">Run reports and export activity logs.</p>
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  )
}
