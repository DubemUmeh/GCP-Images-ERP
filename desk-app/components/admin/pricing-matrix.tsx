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
import { Download, Palette, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PricingMatrix() {
  return (
    <div className='flex w-full flex-col gap-6 pb-20'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-2xl font-bold'>Pricing Matrix Configuration</h2>
          <p className='text-sm text-muted-foreground mt-1'>Manage screen setup fees, ink costs, and margin ranges</p>
        </div>
        <Button variant='outline' className='gap-2'>
          <Download className='h-4 w-4' />
          Export JSON
        </Button>
      </div>

      {/* Screen Setup Fees */}
      <Card>
        <div className='p-6 border-b'>
          <h3 className='font-semibold text-lg flex items-center gap-2'>
            Screen Setup Fees
          </h3>
          <p className='text-xs text-muted-foreground mt-1'>Standard and rush rate pricing</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Setup Item</TableHead>
              <TableHead className='text-right'>Standard Rate</TableHead>
              <TableHead className='text-right'>Rush Rate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-medium'>Standard Screen (20x24)</TableCell>
              <TableCell className='text-right font-mono'>$25.00</TableCell>
              <TableCell className='text-right font-mono'>$45.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Oversized Screen (25x36)</TableCell>
              <TableCell className='text-right font-mono'>$45.00</TableCell>
              <TableCell className='text-right font-mono'>$75.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-medium'>Flash Cure Setup</TableCell>
              <TableCell className='text-right font-mono'>$15.00</TableCell>
              <TableCell className='text-right font-mono'>$25.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      {/* Per-Piece Ink Cost Grid */}
      <Card>
        <div className='p-6 border-b'>
          <h3 className='font-semibold text-lg flex items-center gap-2'>
            <Palette className='h-5 w-5' />
            Per-Piece Ink Cost
          </h3>
          <p className='text-xs text-muted-foreground mt-1'>Cost per color based on garment type</p>
        </div>
        <div className='grid gap-4 p-6 sm:grid-cols-5'>
          <div className='bg-muted p-4 rounded-lg'>
            <p className='text-xs font-medium text-muted-foreground mb-2'>Standard Cotton</p>
            <p className='text-lg font-bold'>$0.12</p>
          </div>
          <div className='bg-muted p-4 rounded-lg'>
            <p className='text-xs font-medium text-muted-foreground mb-2'>Poly Blend</p>
            <p className='text-lg font-bold'>$0.18</p>
          </div>
          <div className='bg-muted p-4 rounded-lg'>
            <p className='text-xs font-medium text-muted-foreground mb-2'>100% Polyester</p>
            <p className='text-lg font-bold'>$0.25</p>
          </div>
          <div className='bg-muted p-4 rounded-lg'>
            <p className='text-xs font-medium text-muted-foreground mb-2'>Heavy Fleece</p>
            <p className='text-lg font-bold'>$0.32</p>
          </div>
          <div className='bg-blue-100 p-4 rounded-lg'>
            <p className='text-xs font-medium text-blue-700 mb-2'>Specialty Ink</p>
            <p className='text-lg font-bold text-blue-700'>$0.85</p>
          </div>
        </div>
      </Card>

      {/* Markup & Margin Quantity Ranges */}
      <Card>
        <div className='p-6 border-b'>
          <h3 className='font-semibold text-lg flex items-center gap-2'>
            <TrendingUp className='h-5 w-5' />
            Markup & Margin Quantity Ranges
          </h3>
        </div>
        <div className='grid gap-3 p-6 sm:grid-cols-5'>
          <div className='bg-muted p-4 rounded-lg text-center'>
            <p className='text-xs font-medium text-muted-foreground mb-2'>12 - 24 units</p>
            <p className='text-2xl font-bold'>45%</p>
            <p className='text-xs text-muted-foreground mt-1'>1.82x</p>
          </div>
          <div className='bg-muted p-4 rounded-lg text-center'>
            <p className='text-xs font-medium text-muted-foreground mb-2'>25 - 49 units</p>
            <p className='text-2xl font-bold'>38%</p>
            <p className='text-xs text-muted-foreground mt-1'>1.61x</p>
          </div>
          <div className='bg-blue-600 text-white p-4 rounded-lg text-center'>
            <p className='text-xs font-medium mb-2 opacity-90'>50 - 99 units</p>
            <p className='text-2xl font-bold'>32%</p>
            <p className='text-xs opacity-75 mt-1'>1.47x</p>
          </div>
          <div className='bg-muted p-4 rounded-lg text-center'>
            <p className='text-xs font-medium text-muted-foreground mb-2'>100 - 249 units</p>
            <p className='text-2xl font-bold'>28%</p>
            <p className='text-xs text-muted-foreground mt-1'>1.39x</p>
          </div>
          <div className='bg-muted p-4 rounded-lg text-center'>
            <p className='text-xs font-medium text-muted-foreground mb-2'>250+ units</p>
            <p className='text-2xl font-bold'>22%</p>
            <p className='text-xs text-muted-foreground mt-1'>1.28x</p>
          </div>
        </div>
      </Card>

      {/* Surcharges and Tax Settings */}
      <div className='grid gap-6 sm:grid-cols-2'>
        <Card>
          <div className='p-6 border-b'>
            <h3 className='font-semibold'>Production Surcharges</h3>
          </div>
          <div className='p-6 space-y-4'>
            <div>
              <label className='text-xs font-medium text-muted-foreground block mb-2'>Less-Than-Minimum (LTM)</label>
              <div className='flex items-center gap-2'>
                <span className='text-sm font-mono bg-muted px-3 py-2 rounded-l'>$</span>
                <input className='flex-1 border border-input rounded-r px-3 py-2 text-sm' type='text'  value='35.00' />
              </div>
            </div>
            <div>
              <label className='text-xs font-medium text-muted-foreground block mb-2'>Size Upcharge (2XL+)</label>
              <div className='flex items-center gap-2'>
                <span className='text-sm font-mono bg-muted px-3 py-2 rounded-l'>$</span>
                <input className='flex-1 border border-input rounded-r px-3 py-2 text-sm' type='text' value='2.50' />
              </div>
            </div>
            <label className='flex items-center gap-2'>
              <input className='rounded' type='checkbox' defaultChecked />
              <span className='text-sm'>Apply Rush Fee (20% Premium)</span>
            </label>
          </div>
        </Card>

        <Card>
          <div className='p-6 border-b'>
            <h3 className='font-semibold'>Tax & Compliance</h3>
          </div>
          <div className='p-6'>
            <label className='text-xs font-medium text-muted-foreground block mb-2'>Value Added Tax (VAT)</label>
            <div className='flex items-center gap-2'>
              <input className='w-20 border border-input rounded px-3 py-2 text-lg font-bold text-blue-600' type='text' value='15' />
              <span className='text-lg font-bold text-muted-foreground'>%</span>
            </div>
            <p className='text-xs text-muted-foreground mt-4 leading-relaxed'>Global VAT applied to all calculated net price results before shipping fees.</p>
          </div>
        </Card>
      </div>
    </div>
  )
}