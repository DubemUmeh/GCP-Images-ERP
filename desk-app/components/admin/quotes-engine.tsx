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

export default function QuotesEngine() {
  const steps = [
    { number: 1, label: 'Customer', completed: true },
    { number: 2, label: 'Garments', completed: true },
    { number: 3, label: 'Print Specs', completed: true },
    { number: 4, label: 'Pricing', completed: true, current: true },
    { number: 5, label: 'Review', completed: false },
  ]

  return (
    <div className='flex w-full flex-col gap-6'>
      {/* Step Indicator */}
      <div className='flex items-center justify-center gap-4 py-6'>
        {steps.map((step, idx) => (
          <div key={step.number} className='flex items-center'>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                step.completed
                  ? 'bg-green-100 text-green-700'
                  : step.current
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {step.completed ? '✓' : step.number}
            </div>
            <span
              className={`text-xs font-semibold ml-2 ${
                step.current ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              {step.label}
            </span>
            {idx < steps.length - 1 && (
              <div className='w-8 h-0.5 bg-gray-300 mx-2' />
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className='grid gap-6 lg:grid-cols-3'>
        {/* Pricing Engine */}
        <div className='lg:col-span-2 space-y-6'>
          {/* Cost Matrix */}
          <Card>
            <div className='p-6 border-b'>
              <div className='flex items-center justify-between'>
                <h3 className='font-semibold text-lg'>Line Item Cost Matrix</h3>
                <span className='text-xs font-mono bg-muted px-2 py-1 rounded'>UNIT: GHS</span>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cost Component</TableHead>
                  <TableHead>Base Value</TableHead>
                  <TableHead>Qty Factor</TableHead>
                  <TableHead className='text-right'>Extended</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div>
                      <p className='font-semibold'>GARMENT BASE</p>
                      <p className='text-xs text-muted-foreground'>Gildan Heavy Cotton (Black)</p>
                    </div>
                  </TableCell>
                  <TableCell className='font-mono'>GHS 45.00</TableCell>
                  <TableCell>250 pcs</TableCell>
                  <TableCell className='text-right font-bold font-mono'>GHS 11,250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div>
                      <p className='font-semibold'>SCREEN SETUP</p>
                      <p className='text-xs text-muted-foreground'>4 Screens (Front/Back)</p>
                    </div>
                  </TableCell>
                  <TableCell className='font-mono'>GHS 120.00</TableCell>
                  <TableCell>4 Units</TableCell>
                  <TableCell className='text-right font-bold font-mono'>GHS 480.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div>
                      <p className='font-semibold'>INK CONSUMPTION</p>
                      <p className='text-xs text-muted-foreground'>Plastisol High-Opacity</p>
                    </div>
                  </TableCell>
                  <TableCell className='font-mono'>GHS 4.20</TableCell>
                  <TableCell>250 pcs</TableCell>
                  <TableCell className='text-right font-bold font-mono'>GHS 1,050.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div>
                      <p className='font-semibold'>SIZE UPCHARGES</p>
                      <p className='text-xs text-muted-foreground'>XXL (+GHS 12.00)</p>
                    </div>
                  </TableCell>
                  <TableCell className='font-mono'>GHS 12.00</TableCell>
                  <TableCell>15 pcs</TableCell>
                  <TableCell className='text-right font-bold font-mono'>GHS 180.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>

          {/* Adjustments */}
          <div className='grid gap-6 sm:grid-cols-2'>
            <Card className='p-6'>
              <h4 className='text-sm font-semibold mb-4'>Commercial Adjustments</h4>
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <span className='text-sm'>Markup Percentage</span>
                  <div className='flex items-center gap-2'>
                    <input
                      className='w-16 border border-input rounded px-2 py-1 text-right text-sm font-mono'
                      type='number'
                      value='25'
                      readOnly
                    />
                    <span className='text-sm'>%</span>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm'>Bulk Discount</span>
                  <div className='flex items-center gap-2'>
                    <input
                      className='w-16 border border-input rounded px-2 py-1 text-right text-sm font-mono'
                      type='number'
                      value='5'
                      readOnly
                    />
                    <span className='text-sm'>%</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className='p-6'>
              <h4 className='text-sm font-semibold mb-4'>Speed Modifiers</h4>
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <span className='text-sm'>Standard Lead Time</span>
                  <span className='text-sm font-mono'>5 days</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm'>Rush Surcharge</span>
                  <span className='text-sm font-bold text-orange-600'>+20%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Summary Sidebar */}
        <div className='space-y-6'>
          <Card className='p-6 bg-blue-50'>
            <h4 className='text-sm font-semibold text-blue-900 mb-4'>Quote Summary</h4>
            <div className='space-y-3'>
              <div className='flex justify-between text-sm'>
                <span className='text-gray-600'>Subtotal</span>
                <span className='font-semibold'>GHS 12,960.00</span>
              </div>
              <div className='flex justify-between text-sm'>
                <span className='text-gray-600'>Markup (25%)</span>
                <span className='font-semibold'>GHS 3,240.00</span>
              </div>
              <div className='flex justify-between text-sm'>
                <span className='text-gray-600'>Discount (5%)</span>
                <span className='font-semibold text-red-600'>-GHS 648.00</span>
              </div>
              <div className='border-t border-blue-200 pt-3 flex justify-between'>
                <span className='text-sm font-semibold'>Total Per Unit</span>
                <span className='text-2xl font-bold text-blue-600'>GHS 14.28</span>
              </div>
              <div className='bg-blue-100 rounded p-3 mt-4'>
                <p className='text-xs font-mono text-blue-900'>
                  <span className='block'>Quote #QT-2024-0156</span>
                  <span className='block text-[10px] opacity-70'>Valid for 30 days</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}