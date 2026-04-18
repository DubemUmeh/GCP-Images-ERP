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
import { Plus, Edit2, Trash2, Package, TrendingUp, AlertCircle, Percent } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProductCatalog() {
  return (
    <div className='flex w-full flex-col gap-6'>
      {/* Header with Action */}
      <div>
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h2 className='text-2xl font-bold'>Product Catalog</h2>
            <p className='text-sm text-muted-foreground mt-1'>Manage garment inventory, pricing, and vendor SKUs</p>
          </div>
          <Button className='gap-2'>
            <Plus className='h-4 w-4' />
            Add Garment
          </Button>
        </div>

        {/* Stats Cards */}
        <div className='grid gap-6 sm:grid-cols-4'>
          <Card className='p-6'>
            <div className='flex items-start justify-between'>
              <div>
                <p className='text-sm text-muted-foreground'>Total Styles</p>
                <p className='text-3xl font-bold mt-2'>1,284</p>
              </div>
              <Package className='h-8 w-8 text-muted-foreground' />
            </div>
          </Card>
          <Card className='p-6'>
            <div className='flex items-start justify-between'>
              <div>
                <p className='text-sm text-muted-foreground'>Active Inventory</p>
                <p className='text-3xl font-bold mt-2'>942</p>
              </div>
              <TrendingUp className='h-8 w-8 text-muted-foreground' />
            </div>
          </Card>
          <Card className='p-6'>
            <div className='flex items-start justify-between'>
              <div>
                <p className='text-sm text-muted-foreground'>Avg. Margin</p>
                <p className='text-3xl font-bold mt-2'>62.4%</p>
              </div>
              <Percent className='h-8 w-8 text-muted-foreground' />
            </div>
          </Card>
          <Card className='p-6'>
            <div className='flex items-start justify-between'>
              <div>
                <p className='text-sm text-muted-foreground'>Out of Stock</p>
                <p className='text-3xl font-bold text-orange-600 mt-2'>12</p>
              </div>
              <AlertCircle className='h-8 w-8 text-orange-600' />
            </div>
          </Card>
        </div>
      </div>

      {/* Product Table */}
      <Card>
        <div className='p-6 border-b'>
          <h3 className='font-semibold text-lg'>Product Catalog</h3>
          <p className='text-xs text-muted-foreground mt-1'>All garment inventory and pricing</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Brand</TableHead>
              <TableHead>Style Name</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead className='text-center'>Sizes</TableHead>
              <TableHead className='text-right'>Wholesale</TableHead>
              <TableHead className='text-right'>Sell Price</TableHead>
              <TableHead className='text-center'>Status</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-semibold'>GILDAN</TableCell>
              <TableCell>5000 Heavy Cotton T-Shirt</TableCell>
              <TableCell className='font-mono text-sm text-blue-600'>G5000-MAIN</TableCell>
              <TableCell className='text-center text-sm'>XS-5XL</TableCell>
              <TableCell className='text-right font-mono'>GHS 15.00</TableCell>
              <TableCell className='text-right font-mono font-semibold'>GHS 45.00</TableCell>
              <TableCell className='text-center'>
                <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800'>
                  Active
                </span>
              </TableCell>
              <TableCell className='text-right'>
                <button className='p-1 hover:text-blue-600 transition-colors inline-block'>
                  <Edit2 className='h-4 w-4' />
                </button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-semibold'>BELLA+CANVAS</TableCell>
              <TableCell>3001 Unisex Jersey Tee</TableCell>
              <TableCell className='font-mono text-sm text-blue-600'>BC-3001</TableCell>
              <TableCell className='text-center text-sm'>S-2XL</TableCell>
              <TableCell className='text-right font-mono'>GHS 28.50</TableCell>
              <TableCell className='text-right font-mono font-semibold'>GHS 75.00</TableCell>
              <TableCell className='text-center'>
                <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800'>
                  Active
                </span>
              </TableCell>
              <TableCell className='text-right'>
                <button className='p-1 hover:text-blue-600 transition-colors inline-block'>
                  <Edit2 className='h-4 w-4' />
                </button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-semibold text-muted-foreground'>NEXT LEVEL</TableCell>
              <TableCell className='text-muted-foreground'>6210 CVC Crew</TableCell>
              <TableCell className='font-mono text-sm text-muted-foreground'>NL-6210</TableCell>
              <TableCell className='text-center text-sm text-muted-foreground'>XS-3XL</TableCell>
              <TableCell className='text-right font-mono text-muted-foreground'>GHS 22.00</TableCell>
              <TableCell className='text-right font-mono font-semibold text-muted-foreground'>GHS 60.00</TableCell>
              <TableCell className='text-center'>
                <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800'>
                  Inactive
                </span>
              </TableCell>
              <TableCell className='text-right'>
                <button className='p-1 hover:text-blue-600 transition-colors inline-block'>
                  <Edit2 className='h-4 w-4' />
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}