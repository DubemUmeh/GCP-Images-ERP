import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Activity, Cpu, Wifi, Zap, Settings } from 'lucide-react'

export default function RealTimeMonitoringSettings() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Real Time Monitoring</h1>
          <p className="text-sm text-muted-foreground mt-1">Monitor performance, uptime, and live system health.</p>
        </div>
        <Button className="gap-2">
          <Settings className="h-4 w-4" />
          View live status
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Uptime</p>
              <p className="text-3xl font-semibold mt-2">99.98%</p>
            </div>
            <Activity className="h-8 w-8 text-primary" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Load</p>
              <p className="text-3xl font-semibold mt-2">78%</p>
            </div>
            <Cpu className="h-8 w-8 text-primary" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Latency</p>
              <p className="text-3xl font-semibold mt-2">132 ms</p>
            </div>
            <Wifi className="h-8 w-8 text-primary" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Alerts</p>
              <p className="text-3xl font-semibold mt-2">2 active</p>
            </div>
            <Zap className="h-8 w-8 text-primary" />
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold">Live activity</h2>
            <p className="text-sm text-muted-foreground mt-1">Recent system events from the last minute.</p>
          </div>
          <Button variant="outline">Refresh</Button>
        </div>

        <div className="mt-6 grid gap-3">
          {[
            { label: 'API latency spike', value: '152 ms', status: 'Resolved' },
            { label: 'New backup completed', value: '15s ago', status: 'Success' },
            { label: 'Export queue healthy', value: 'All good', status: 'Normal' },
          ].map((event) => (
            <div key={event.label} className="rounded-4xl border border-border bg-muted/50 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-medium">{event.label}</p>
                  <p className="text-sm text-muted-foreground mt-1">{event.value}</p>
                </div>
                <span className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted-foreground">{event.status}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
