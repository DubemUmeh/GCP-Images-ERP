import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { CreditCard, DollarSign, CalendarCheck, Receipt } from 'lucide-react'

export default function BillingSettings() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Billing</h1>
          <p className="text-sm text-muted-foreground mt-1">Review invoices, payment methods, and billing status.</p>
        </div>
        <Button className="gap-2">
          <CreditCard className="h-4 w-4" />
          Update payment
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Next invoice</p>
              <p className="text-3xl font-semibold mt-2">GHS 1,420.00</p>
            </div>
            <CalendarCheck className="h-8 w-8 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground mt-4">Due in 5 days.</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Billing plan</p>
              <p className="text-3xl font-semibold mt-2">Premium</p>
            </div>
            <DollarSign className="h-8 w-8 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground mt-4">Includes advanced admin analytics.</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Payment method</p>
              <p className="text-3xl font-semibold mt-2">Visa •••• 4242</p>
            </div>
            <Receipt className="h-8 w-8 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground mt-4">Expires 09/26.</p>
        </Card>
      </div>

      <Card>
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Recent invoices</h2>
          <p className="text-sm text-muted-foreground mt-1">Track your latest billing activity.</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-semibold">INV-2026-001</TableCell>
              <TableCell>Apr 08, 2026</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right font-mono">GHS 820.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">INV-2026-002</TableCell>
              <TableCell>Mar 25, 2026</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right font-mono">GHS 1,120.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">INV-2026-003</TableCell>
              <TableCell>Mar 10, 2026</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell className="text-right font-mono">GHS 520.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
