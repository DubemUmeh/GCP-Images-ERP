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
import { DollarSign, Package, TrendingUp } from 'lucide-react'

export default function CustomerDetails() {
  return (
    <div className='flex w-full flex-col gap-6'>
      {/* Customer Header Stats */}
      <div className='grid gap-6 sm:grid-cols-3'>
        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-muted-foreground'>Total Orders</p>
              <p className='text-3xl font-bold'>12</p>
            </div>
            <Package className='h-8 w-8 text-muted-foreground' />
          </div>
        </Card>
        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-muted-foreground'>Total Spent</p>
              <p className='text-3xl font-bold'>GHS 31,400</p>
            </div>
            <DollarSign className='h-8 w-8 text-muted-foreground' />
          </div>
        </Card>
        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-muted-foreground'>Avg Order Value</p>
              <p className='text-3xl font-bold'>GHS 2,616</p>
            </div>
            <TrendingUp className='h-8 w-8 text-muted-foreground' />
          </div>
        </Card>
      </div>
      {/* Customer Info */}
      <div className='grid gap-6 lg:grid-cols-3'>
        <Card className='p-6 lg:col-span-2'>
          <h3 className='font-semibold mb-4'>Customer Details</h3>
          <div className='space-y-4'>
            <div>
              <p className='text-sm text-muted-foreground'>Name</p>
              <p className='text-lg font-semibold'>Linda Asante</p>
            </div>
            <div>
              <p className='text-sm text-muted-foreground'>Company</p>
              <p className='text-lg font-semibold'>GoldCoast Apparel</p>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <p className='text-sm text-muted-foreground'>Email</p>
                <p className='text-sm'>l.asante@goldcoastapparel.com</p>
              </div>
              <div>
                <p className='text-sm text-muted-foreground'>Phone</p>
                <p className='text-sm'>+233 24 555 0192</p>
              </div>
            </div>
          </div>
        </Card>
        <Card className='p-6'>
          <h3 className='font-semibold mb-4'>Account Info</h3>
          <div className='space-y-3'>
            <div className='flex justify-between'>
              <span className='text-sm text-muted-foreground'>Status</span>
              <span className='text-sm font-semibold text-green-600'>Active</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-sm text-muted-foreground'>Tier</span>
              <span className='text-sm font-semibold'>Tier 2 Wholesale</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-sm text-muted-foreground'>Tax Exempt</span>
              <span className='text-sm font-semibold'>No</span>
            </div>
          </div>
        </Card>
      </div>
      {/* Orders Table */}
      <Card>
        <div className='p-6 border-b'>
          <h3 className='font-semibold'>Recent Orders</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Item</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className='text-right'>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-mono text-blue-600'>#JOB-2248</TableCell>
              <TableCell>Oct 24, 2023</TableCell>
              <TableCell>500x Premium Cotton Tees (3 colors)</TableCell>
              <TableCell>
                <span className='inline-block px-2 py-1 text-xs rounded bg-blue-100 text-blue-700'>
                  In Production
                </span>
              </TableCell>
              <TableCell className='text-right font-semibold'>GHS 8,450</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-mono text-blue-600'>#JOB-2212</TableCell>
              <TableCell>Oct 12, 2023</TableCell>
              <TableCell>200x Embroidered Hoodies</TableCell>
              <TableCell>
                <span className='inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-700'>
                  Shipped
                </span>
              </TableCell>
              <TableCell className='text-right font-semibold'>GHS 12,200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-mono text-blue-600'>#JOB-2189</TableCell>
              <TableCell>Sep 28, 2023</TableCell>
              <TableCell>1,000x Branded Totes (Full Color)</TableCell>
              <TableCell>
                <span className='inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-700'>
                  Completed
                </span>
              </TableCell>
              <TableCell className='text-right font-semibold'>GHS 5,750</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}