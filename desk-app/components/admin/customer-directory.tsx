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
import { Users, TrendingUp, Activity } from 'lucide-react'

export default function CustomerDirectory() {
  return (
    <div className='flex w-full flex-col gap-6'>
      {/* Directory Stats */}
      <div className='grid gap-6 sm:grid-cols-3'>
        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-muted-foreground'>Total Customers</p>
              <p className='text-3xl font-bold'>1,248</p>
            </div>
            <Users className='h-8 w-8 text-muted-foreground' />
          </div>
        </Card>
        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-muted-foreground'>Active</p>
              <p className='text-3xl font-bold'>1,156</p>
            </div>
            <Activity className='h-8 w-8 text-muted-foreground' />
          </div>
        </Card>
        <Card className='p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-muted-foreground'>Avg LTV</p>
              <p className='text-3xl font-bold'>GHS 24,500</p>
            </div>
            <TrendingUp className='h-8 w-8 text-muted-foreground' />
          </div>
        </Card>
      </div>
      {/* Customers Table */}
      <Card>
        <div className='p-6 border-b flex justify-between items-center'>
          <h3 className='font-semibold'>Customer List</h3>
          <select className='text-sm px-2 py-1 border rounded'>
            <option>LTV (Descending)</option>
            <option>Alphabetical</option>
            <option>Recent Order</option>
          </select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>LTV (GHS)</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-semibold'>Kofi Mensah</TableCell>
              <TableCell className='text-muted-foreground'>GoldCoast Apparel</TableCell>
              <TableCell className='text-muted-foreground text-xs'>k.mensah@goldcoast.gh</TableCell>
              <TableCell>142</TableCell>
              <TableCell className='font-semibold'>GHS 31,400</TableCell>
              <TableCell>
                <span className='inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-700'>Active</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-semibold'>Ama Serwaa</TableCell>
              <TableCell className='text-muted-foreground'>Bright Star Events</TableCell>
              <TableCell className='text-muted-foreground text-xs'>info@brightstar.com.gh</TableCell>
              <TableCell>86</TableCell>
              <TableCell className='font-semibold'>GHS 14,200</TableCell>
              <TableCell>
                <span className='inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-700'>Active</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-semibold'>Yaw Boateng</TableCell>
              <TableCell className='text-muted-foreground'>Accra Logistics</TableCell>
              <TableCell className='text-muted-foreground text-xs'>logistics@accra.gh</TableCell>
              <TableCell>12</TableCell>
              <TableCell className='font-semibold'>GHS 3,150</TableCell>
              <TableCell>
                <span className='inline-block px-2 py-1 text-xs rounded bg-gray-100 text-gray-700'>Inactive</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-semibold'>Efua Dankwa</TableCell>
              <TableCell className='text-muted-foreground'>Nkyinkyim Media</TableCell>
              <TableCell className='text-muted-foreground text-xs'>efua@nkyinkyim.com</TableCell>
              <TableCell>218</TableCell>
              <TableCell className='font-semibold'>GHS 52,800</TableCell>
              <TableCell>
                <span className='inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-700'>Active</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-semibold'>Abena Osei</TableCell>
              <TableCell className='text-muted-foreground'>Osu Heritage</TableCell>
              <TableCell className='text-muted-foreground text-xs'>abena@osuheritage.gh</TableCell>
              <TableCell>45</TableCell>
              <TableCell className='font-semibold'>GHS 9,850</TableCell>
              <TableCell>
                <span className='inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-700'>Active</span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      {/* Insights Cards */}
      <div className='grid gap-6 lg:grid-cols-2'>
        <Card className='p-6'>
          <h3 className='font-semibold mb-4'>Regional Distribution</h3>
          <p className='text-sm text-muted-foreground mb-4'>Greater Accra Growth Trend</p>
          <div className='h-32 bg-muted rounded flex items-center justify-center'>
            <p className='text-sm text-muted-foreground'>Chart visualization</p>
          </div>
        </Card>
        <Card className='p-6 bg-slate-900 text-white'>
          <h3 className='font-semibold mb-4'>Critical Insight</h3>
          <p className='text-sm opacity-90 mb-4'>Top performing accounts represent 42% of overall revenue</p>
          <button className='text-sm font-semibold text-primary hover:underline'>Generate Report →</button>
        </Card>
      </div>
    </div>
  )
}