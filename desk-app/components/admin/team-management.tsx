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
import { Plus, Edit2, Trash2, Users, UserCheck, Briefcase, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TeamManagement() {
  return (
    <div className='flex w-full flex-col gap-6'>
      {/* Header with Action */}
      <div>
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h2 className='text-2xl font-bold'>Team Management</h2>
            <p className='text-sm text-muted-foreground mt-1'>Manage workforce permissions and access levels</p>
          </div>
          <Button className='gap-2'>
            <Plus className='h-4 w-4' />
            Add Team Member
          </Button>
        </div>

        {/* Stats Cards */}
        <div className='grid gap-6 sm:grid-cols-4'>
          <Card className='p-6'>
            <div className='flex items-start justify-between'>
              <div>
                <p className='text-sm text-muted-foreground'>Total Personnel</p>
                <p className='text-3xl font-bold mt-2'>32</p>
                <p className='text-xs text-green-600 mt-2'>+2 this month</p>
              </div>
              <Users className='h-8 w-8 text-muted-foreground' />
            </div>
          </Card>
          <Card className='p-6'>
            <div className='flex items-start justify-between'>
              <div>
                <p className='text-sm text-muted-foreground'>Active Crew</p>
                <p className='text-3xl font-bold mt-2'>28</p>
                <p className='text-xs text-green-600 mt-2'>Online now</p>
              </div>
              <UserCheck className='h-8 w-8 text-muted-foreground' />
            </div>
          </Card>
          <Card className='p-6'>
            <div className='flex items-start justify-between'>
              <div>
                <p className='text-sm text-muted-foreground'>Open Roles</p>
                <p className='text-3xl font-bold mt-2'>04</p>
                <p className='text-xs text-slate-500 mt-2'>Hiring active</p>
              </div>
              <Briefcase className='h-8 w-8 text-muted-foreground' />
            </div>
          </Card>
          <Card className='p-6'>
            <div className='flex items-start justify-between'>
              <div>
                <p className='text-sm text-muted-foreground'>Admin Access</p>
                <p className='text-3xl font-bold text-blue-600 mt-2'>06</p>
                <p className='text-xs text-blue-600 mt-2'>High privilege</p>
              </div>
              <Lock className='h-8 w-8 text-blue-600' />
            </div>
          </Card>
        </div>
      </div>

      {/* Team Table */}
      <Card>
        <div className='p-6 border-b'>
          <h3 className='font-semibold text-lg'>Team Members</h3>
          <p className='text-xs text-muted-foreground mt-1'>Current team roster and access levels</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Member</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Last Login</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm'>
                    MS
                  </div>
                  <div>
                    <p className='font-semibold text-sm'>Marcus Sterling</p>
                    <p className='text-xs text-muted-foreground'>PD-29402</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <p className='text-sm'>m.sterling@printdenk.com</p>
                <p className='text-xs text-muted-foreground'>Ext. 402</p>
              </TableCell>
              <TableCell>
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800'>
                  Admin
                </span>
              </TableCell>
              <TableCell>
                <p className='text-xs font-mono'>2024.01.15</p>
                <p className='text-xs text-muted-foreground'>14:22 GMT</p>
              </TableCell>
              <TableCell>
                <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800'>
                  Active
                </span>
              </TableCell>
              <TableCell className='text-right'>
                <div className='flex justify-end gap-2'>
                  <button className='p-1 hover:text-blue-600 transition-colors'>
                    <Edit2 className='h-4 w-4' />
                  </button>
                  <button className='p-1 hover:text-red-600 transition-colors'>
                    <Trash2 className='h-4 w-4' />
                  </button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-sm'>
                    SJ
                  </div>
                  <div>
                    <p className='font-semibold text-sm'>Sarah Jenkins</p>
                    <p className='text-xs text-muted-foreground'>PD-29408</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <p className='text-sm'>s.jenkins@printdenk.com</p>
                <p className='text-xs text-muted-foreground'>Ext. 112</p>
              </TableCell>
              <TableCell>
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800'>
                  Crew
                </span>
              </TableCell>
              <TableCell>
                <p className='text-xs font-mono'>2024.01.16</p>
                <p className='text-xs text-muted-foreground'>08:01 GMT</p>
              </TableCell>
              <TableCell>
                <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800'>
                  Active
                </span>
              </TableCell>
              <TableCell className='text-right'>
                <div className='flex justify-end gap-2'>
                  <button className='p-1 hover:text-blue-600 transition-colors'>
                    <Edit2 className='h-4 w-4' />
                  </button>
                  <button className='p-1 hover:text-red-600 transition-colors'>
                    <Trash2 className='h-4 w-4' />
                  </button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold text-sm'>
                    AL
                  </div>
                  <div>
                    <p className='font-semibold text-sm'>Andre Lucco</p>
                    <p className='text-xs text-muted-foreground'>PD-29415</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <p className='text-sm'>a.lucco@printdenk.com</p>
                <p className='text-xs text-muted-foreground'>Ext. 339</p>
              </TableCell>
              <TableCell>
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800'>
                  Crew
                </span>
              </TableCell>
              <TableCell>
                <p className='text-xs font-mono'>2024.01.12</p>
                <p className='text-xs text-muted-foreground'>17:45 GMT</p>
              </TableCell>
              <TableCell>
                <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600'>
                  Inactive
                </span>
              </TableCell>
              <TableCell className='text-right'>
                <div className='flex justify-end gap-2'>
                  <button className='p-1 hover:text-blue-600 transition-colors'>
                    <Edit2 className='h-4 w-4' />
                  </button>
                  <button className='p-1 hover:text-red-600 transition-colors'>
                    <Trash2 className='h-4 w-4' />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className='p-4 border-t flex justify-between items-center'>
          <p className='text-xs text-muted-foreground'>Showing 3 of 32 team members</p>
          <div className='flex gap-2'>
            <Button variant='outline' size='sm'>Prev</Button>
            <Button variant='outline' size='sm'>Next</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}