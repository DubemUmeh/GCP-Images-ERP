'use client'

import { Card } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { DollarSign, TrendingUp, AlertCircle } from 'lucide-react'

export default function Invoices_and_Payments() {
  return (
    <div className='flex w-full flex-col gap-6'>
      {/* Invoice Stats */}
      <div className='grid gap-6 sm:grid-cols-3'>
        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-muted-foreground'>Total Outstanding</p>
              <p className='text-3xl font-bold'>GHS 124,500</p>
            </div>
            <AlertCircle className='h-8 w-8 text-red-500' />
          </div>
        </Card>
        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-muted-foreground'>Collected This Month</p>
              <p className='text-3xl font-bold'>GHS 89,400</p>
            </div>
            <DollarSign className='h-8 w-8 text-green-600' />
          </div>
        </Card>
        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-muted-foreground'>Collection Rate</p>
              <p className='text-3xl font-bold'>87%</p>
            </div>
            <TrendingUp className='h-8 w-8 text-muted-foreground' />
          </div>
        </Card>
      </div>
      {/* Filter Tabs */}
      <div className='flex gap-2'>
        <button className='px-4 py-1.5 text-xs font-semibold rounded bg-primary text-white'>All</button>
        <button className='px-4 py-1.5 text-xs font-semibold rounded border hover:bg-muted'>Unpaid</button>
        <button className='px-4 py-1.5 text-xs font-semibold rounded border hover:bg-muted'>Overdue</button>
        <button className='px-4 py-1.5 text-xs font-semibold rounded border hover:bg-muted'>Paid</button>
      </div>

      {/* Invoices Table */}
      <Card>
        <div className='p-6 border-b'>
          <h3 className='font-semibold'>Invoice List</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice #</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Issue Date</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead className='text-right'>Total</TableHead>
              <TableHead className='text-right'>Paid</TableHead>
              <TableHead className='text-right'>Balance</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-mono font-semibold text-blue-600'>INV-2023-0842</TableCell>
              <TableCell>Acme Industrial Solutions</TableCell>
              <TableCell>Oct 12, 2023</TableCell>
              <TableCell>Oct 26, 2023</TableCell>
              <TableCell className='text-right font-semibold'>GHS 12,450</TableCell>
              <TableCell className='text-right'>GHS 0</TableCell>
              <TableCell className='text-right font-semibold text-red-600'>GHS 12,450</TableCell>
              <TableCell>
                <span className='inline-block px-2 py-1 text-xs rounded bg-red-100 text-red-700 font-semibold'>Overdue</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-mono font-semibold text-blue-600'>INV-2023-0845</TableCell>
              <TableCell>Global Logistics Ltd.</TableCell>
              <TableCell>Oct 14, 2023</TableCell>
              <TableCell>Oct 28, 2023</TableCell>
              <TableCell className='text-right font-semibold'>GHS 45,800</TableCell>
              <TableCell className='text-right'>GHS 20,000</TableCell>
              <TableCell className='text-right font-semibold text-orange-600'>GHS 25,800</TableCell>
              <TableCell>
                <span className='inline-block px-2 py-1 text-xs rounded bg-orange-100 text-orange-700 font-semibold'>Partial</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-mono font-semibold text-blue-600'>INV-2023-0847</TableCell>
              <TableCell>Starlight Media Agency</TableCell>
              <TableCell>Oct 15, 2023</TableCell>
              <TableCell>Oct 29, 2023</TableCell>
              <TableCell className='text-right font-semibold'>GHS 8,200</TableCell>
              <TableCell className='text-right'>GHS 8,200</TableCell>
              <TableCell className='text-right font-semibold text-gray-600'>GHS 0</TableCell>
              <TableCell>
                <span className='inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-700 font-semibold'>Paid</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-mono font-semibold text-blue-600'>INV-2023-0850</TableCell>
              <TableCell>Nexus Tech Hub</TableCell>
              <TableCell>Oct 18, 2023</TableCell>
              <TableCell>Nov 01, 2023</TableCell>
              <TableCell className='text-right font-semibold'>GHS 15,600</TableCell>
              <TableCell className='text-right'>GHS 0</TableCell>
              <TableCell className='text-right font-semibold'>GHS 15,600</TableCell>
              <TableCell>
                <span className='inline-block px-2 py-1 text-xs rounded bg-gray-100 text-gray-700 font-semibold'>Unpaid</span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}