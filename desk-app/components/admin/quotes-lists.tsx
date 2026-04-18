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
import { Plus, Mail, Download, Archive, Eye, Edit2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function QuotesLists() {
  return (
    <div className='flex w-full flex-col gap-6'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-2xl font-bold'>Quotes Management</h2>
          <p className='text-sm text-muted-foreground mt-1'>Manage and track client estimates across the production pipeline</p>
        </div>
        <Button className='gap-2'>
          <Plus className='h-4 w-4' />
          New Quote
        </Button>
      </div>

      {/* Filters */}
      <Card className='p-4'>
        <div className='flex flex-wrap items-end gap-4'>
          <div className='flex flex-col gap-1'>
            <label className='text-xs font-medium text-muted-foreground'>Status Filter</label>
            <select className='border border-input rounded px-3 py-2 bg-background text-sm'>
              <option>All Statuses</option>
              <option>Draft</option>
              <option>Sent</option>
              <option>Viewed</option>
              <option>Approved</option>
              <option>Rejected</option>
              <option>Expired</option>
            </select>
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-xs font-medium text-muted-foreground'>Date Range</label>
            <div className='flex items-center gap-2'>
              <input className='border border-input rounded px-3 py-2 text-sm' type='date' />
              <span className='text-xs text-muted-foreground'>to</span>
              <input className='border border-input rounded px-3 py-2 text-sm' type='date' />
            </div>
          </div>
          <div className='ml-auto flex gap-2'>
            <Button variant='outline' size='sm'>Clear</Button>
            <Button size='sm'>Apply</Button>
          </div>
        </div>
      </Card>

      {/* Bulk Actions Bar */}
      <div className='bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <input type='checkbox' className='rounded w-4 h-4' />
          <span className='font-semibold text-sm'>3 Quotes Selected</span>
        </div>
        <div className='flex items-center gap-4'>
          <Button variant='ghost' size='sm' className='text-white hover:bg-white/20 gap-2'>
            <Mail className='h-4 w-4' />
            Bulk Send
          </Button>
          <Button variant='ghost' size='sm' className='text-white hover:bg-white/20 gap-2'>
            <Download className='h-4 w-4' />
            Export PDF
          </Button>
          <Button variant='ghost' size='sm' className='text-white hover:bg-white/20 gap-2'>
            <Archive className='h-4 w-4' />
            Archive
          </Button>
        </div>
      </div>

      {/* Quotes Table */}
      <Card>
        <div className='p-6 border-b'>
          <h3 className='font-semibold text-lg'>All Quotes</h3>
          <p className='text-xs text-muted-foreground mt-1'>Active and archived quotes list</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-12'>
                <input type='checkbox' className='rounded' />
              </TableHead>
              <TableHead>Quote #</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Expires</TableHead>
              <TableHead className='text-right'>Total Value</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell><input type='checkbox' className='rounded' defaultChecked /></TableCell>
              <TableCell className='font-mono font-semibold'>QT-2024-0156</TableCell>
              <TableCell>Acme Industries Inc.</TableCell>
              <TableCell className='text-sm'>2024-01-15</TableCell>
              <TableCell className='text-sm'>2024-02-14</TableCell>
              <TableCell className='text-right font-mono font-semibold'>GHS 15,847.50</TableCell>
              <TableCell>
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800'>
                  Sent
                </span>
              </TableCell>
              <TableCell className='text-right'>
                <div className='flex justify-end gap-2'>
                  <button className='p-1 hover:text-blue-600 transition-colors'>
                    <Eye className='h-4 w-4' />
                  </button>
                  <button className='p-1 hover:text-blue-600 transition-colors'>
                    <Edit2 className='h-4 w-4' />
                  </button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell><input type='checkbox' className='rounded' defaultChecked /></TableCell>
              <TableCell className='font-mono font-semibold'>QT-2024-0155</TableCell>
              <TableCell>Global Print Solutions LLC</TableCell>
              <TableCell className='text-sm'>2024-01-10</TableCell>
              <TableCell className='text-sm'>2024-02-09</TableCell>
              <TableCell className='text-right font-mono font-semibold'>GHS 8,920.00</TableCell>
              <TableCell>
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800'>
                  Approved
                </span>
              </TableCell>
              <TableCell className='text-right'>
                <div className='flex justify-end gap-2'>
                  <button className='p-1 hover:text-blue-600 transition-colors'>
                    <Eye className='h-4 w-4' />
                  </button>
                  <button className='p-1 hover:text-blue-600 transition-colors'>
                    <Edit2 className='h-4 w-4' />
                  </button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell><input type='checkbox' className='rounded' defaultChecked /></TableCell>
              <TableCell className='font-mono font-semibold'>QT-2024-0154</TableCell>
              <TableCell>Premium Textile Group</TableCell>
              <TableCell className='text-sm'>2024-01-08</TableCell>
              <TableCell className='text-sm'>2024-02-07</TableCell>
              <TableCell className='text-right font-mono font-semibold'>GHS 22,350.75</TableCell>
              <TableCell>
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800'>
                  Viewed
                </span>
              </TableCell>
              <TableCell className='text-right'>
                <div className='flex justify-end gap-2'>
                  <button className='p-1 hover:text-blue-600 transition-colors'>
                    <Eye className='h-4 w-4' />
                  </button>
                  <button className='p-1 hover:text-blue-600 transition-colors'>
                    <Edit2 className='h-4 w-4' />
                  </button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell><input type='checkbox' className='rounded' /></TableCell>
              <TableCell className='font-mono font-semibold'>QT-2024-0153</TableCell>
              <TableCell>Urban Fashion Co.</TableCell>
              <TableCell className='text-sm'>2024-01-05</TableCell>
              <TableCell className='text-sm'>2024-02-04</TableCell>
              <TableCell className='text-right font-mono font-semibold'>GHS 5,600.00</TableCell>
              <TableCell>
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800'>
                  Draft
                </span>
              </TableCell>
              <TableCell className='text-right'>
                <div className='flex justify-end gap-2'>
                  <button className='p-1 hover:text-blue-600 transition-colors'>
                    <Eye className='h-4 w-4' />
                  </button>
                  <button className='p-1 hover:text-blue-600 transition-colors'>
                    <Edit2 className='h-4 w-4' />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className='p-4 border-t flex justify-between items-center'>
          <p className='text-xs text-muted-foreground'>Showing 4 of 47 quotes</p>
          <div className='flex gap-2'>
            <Button variant='outline' size='sm'>Previous</Button>
            <Button variant='outline' size='sm'>Next</Button>
          </div>
        </div>
      </Card>

      {/* Summary Footer */}
      <div className='grid gap-4 sm:grid-cols-3'>
        <Card className='p-4 bg-green-50'>
          <p className='text-xs text-green-700 font-medium'>Total Approved Value</p>
          <p className='text-2xl font-bold text-green-700 mt-2'>GHS 97,250.25</p>
        </Card>
        <Card className='p-4 bg-yellow-50'>
          <p className='text-xs text-yellow-700 font-medium'>Pending Review</p>
          <p className='text-2xl font-bold text-yellow-700 mt-2'>12 Quotes</p>
        </Card>
        <Card className='p-4 bg-blue-50'>
          <p className='text-xs text-blue-700 font-medium'>This Month Sales</p>
          <p className='text-2xl font-bold text-blue-700 mt-2'>GHS 145,800.00</p>
        </Card>
      </div>
    </div>
  )
}