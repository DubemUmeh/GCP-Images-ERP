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
import { Database, HardDrive, Lock, CheckCircle, Download } from 'lucide-react'

export default function DatabaseBackup() {
  return (
    <div className='flex w-full flex-col gap-6'>
      {/* Status Overview */}
      <div className='grid gap-6 sm:grid-cols-2'>
        <Card className='p-6'>
          <div className='flex items-start justify-between'>
            <div>
              <p className='text-sm text-muted-foreground'>System Status</p>
              <p className='text-2xl font-bold text-green-600 mt-2'>Operational</p>
              <p className='text-xs text-muted-foreground mt-2'>Last sync 2 hours ago</p>
            </div>
            <CheckCircle className='h-8 w-8 text-green-600' />
          </div>
        </Card>
        <Card className='p-6'>
          <div className='flex items-start justify-between'>
            <div>
              <p className='text-sm text-muted-foreground'>Storage Used</p>
              <p className='text-2xl font-bold mt-2'>2.3 GB / 10.0 GB</p>
              <div className='w-full h-2 bg-muted rounded mt-2'>
                <div className='h-full bg-red-500 w-[23%] rounded'></div>
              </div>
            </div>
            <HardDrive className='h-8 w-8 text-muted-foreground' />
          </div>
        </Card>
      </div>

      {/* Backup Configuration */}
      <Card>
        <div className='p-6 border-b'>
          <h3 className='font-semibold text-lg'>Backup Configuration</h3>
          <p className='text-xs text-muted-foreground mt-1'>Latest backup: 2024-01-15 14:32 UTC</p>
        </div>
        <div className='grid gap-4 p-6 sm:grid-cols-2'>
          <div>
            <p className='text-sm font-medium'>Backup Type</p>
            <p className='text-sm text-muted-foreground mt-1'>Incremental Daily</p>
          </div>
          <div>
            <p className='text-sm font-medium'>Retention Policy</p>
            <p className='text-sm text-muted-foreground mt-1'>30 days rolling</p>
          </div>
          <div>
            <p className='text-sm font-medium'>Frequency</p>
            <p className='text-sm text-muted-foreground mt-1'>Every 6 hours</p>
          </div>
          <div>
            <p className='text-sm font-medium'>Encryption</p>
            <p className='text-sm text-muted-foreground mt-1 flex items-center gap-1'>
              <Lock className='h-3 w-3' />
              AES-256
            </p>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className='grid gap-4 sm:grid-cols-2'>
        <Card className='p-6 cursor-pointer hover:bg-muted/50 transition-colors'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='font-semibold'>Export Full Backup</p>
              <p className='text-xs text-muted-foreground mt-1'>ENCRYPTED_SNAPSHOT.JSON</p>
            </div>
            <Database className='h-6 w-6 text-muted-foreground' />
          </div>
        </Card>
        <Card className='p-6 cursor-pointer hover:bg-muted/50 transition-colors'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='font-semibold'>Export Data as CSV</p>
              <p className='text-xs text-muted-foreground mt-1'>COMPRESSED_DATA.ZIP</p>
            </div>
            <Download className='h-6 w-6 text-muted-foreground' />
          </div>
        </Card>
      </div>

      {/* Backup History Table */}
      <Card>
        <div className='p-6 border-b'>
          <h3 className='font-semibold text-lg'>Backup Archive History</h3>
          <p className='text-xs text-muted-foreground mt-1'>Recent backup operations</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>Filename</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-mono text-sm'>2024-01-15 03:00:01</TableCell>
              <TableCell>PD_AUTO_DAILY_SYNC_C10.json</TableCell>
              <TableCell className='font-mono'>2.31 GB</TableCell>
              <TableCell>
                <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800'>
                  Success
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-mono text-sm'>2024-01-14 03:00:04</TableCell>
              <TableCell>PD_AUTO_DAILY_SYNC_C10.json</TableCell>
              <TableCell className='font-mono'>2.28 GB</TableCell>
              <TableCell>
                <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800'>
                  Success
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-mono text-sm'>2024-01-13 03:00:12</TableCell>
              <TableCell>PD_AUTO_DAILY_SYNC_C10.json</TableCell>
              <TableCell className='font-mono'>2.25 GB</TableCell>
              <TableCell>
                <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800'>
                  Success
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='font-mono text-sm'>2024-01-12 14:12:45</TableCell>
              <TableCell>PD_MANUAL_EXPORT_U04.json</TableCell>
              <TableCell className='font-mono'>2.21 GB</TableCell>
              <TableCell>
                <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800'>
                  Failed
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      {/* Technical Specs Footer */}
      <div className='grid gap-4 sm:grid-cols-4'>
        <Card className='p-4'>
          <div className='flex items-center gap-3'>
            <div className='w-2 h-8 bg-blue-500 rounded'></div>
            <div>
              <p className='text-xs font-medium text-muted-foreground'>Database Engine</p>
              <p className='text-sm font-mono font-semibold'>PostgreSQL 14.2</p>
            </div>
          </div>
        </Card>
        <Card className='p-4'>
          <div className='flex items-center gap-3'>
            <div className='w-2 h-8 bg-purple-500 rounded'></div>
            <div>
              <p className='text-xs font-medium text-muted-foreground'>Encryption</p>
              <p className='text-sm font-mono font-semibold'>AES-256-GCM</p>
            </div>
          </div>
        </Card>
        <Card className='p-4'>
          <div className='flex items-center gap-3'>
            <div className='w-2 h-8 bg-green-500 rounded'></div>
            <div>
              <p className='text-xs font-medium text-muted-foreground'>Redundancy</p>
              <p className='text-sm font-mono font-semibold'>RAID-5 Striped</p>
            </div>
          </div>
        </Card>
        <Card className='p-4'>
          <div className='flex items-center gap-3'>
            <div className='w-2 h-8 bg-amber-500 rounded'></div>
            <div>
              <p className='text-xs font-medium text-muted-foreground'>Last Audit</p>
              <p className='text-sm font-mono font-semibold'>48h Ago (Pass)</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}