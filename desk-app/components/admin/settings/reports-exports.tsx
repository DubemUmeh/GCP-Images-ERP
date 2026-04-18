import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Download, FileText, Layers, Clock, ArrowRight } from 'lucide-react'

export default function ReportsExportsSettings() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reports & Export</h1>
          <p className="text-sm text-muted-foreground mt-1">Export data and review activity reports for admin operations.</p>
        </div>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Export report
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Recent exports</p>
              <p className="text-3xl font-semibold mt-2">14</p>
            </div>
            <Layers className="h-8 w-8 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground mt-4">Data exports created in the last 30 days.</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Pending reports</p>
              <p className="text-3xl font-semibold mt-2">3</p>
            </div>
            <Clock className="h-8 w-8 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground mt-4">Queued exports waiting for processing.</p>
        </Card>
      </div>

      <Card>
        <div className="p-6 border-b">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Export history</h2>
              <p className="text-sm text-muted-foreground mt-1">Track your recent exported files.</p>
            </div>
            <Button variant="outline" className="gap-2">
              <ArrowRight className="h-4 w-4" />
              View all exports
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Report</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Generated</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Customer list</TableCell>
              <TableCell>Complete</TableCell>
              <TableCell>Apr 09, 2026</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Billing export</TableCell>
              <TableCell>Complete</TableCell>
              <TableCell>Apr 05, 2026</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>System audit</TableCell>
              <TableCell>Processing</TableCell>
              <TableCell>Apr 10, 2026</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" className="gap-2">
                  <FileText className="h-4 w-4" />
                  View
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
