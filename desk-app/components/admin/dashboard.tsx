'use client'

import { CalendarClockIcon, SquareActivityIcon, TruckIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'

import ProductInsightsCard from './blocks/widget-product-insights'
import SalesMetricsCard from './blocks/chart-sales-metrics'
import StatisticsCard from './blocks/statistics-card-01'
import TotalEarningCard from './blocks/widget-total-earning'
import TransactionDatatable, { type Item } from './blocks/datatable-transaction'

// Statistics card data
const StatisticsCardData = [
  {
    icon: <TruckIcon className='size-4' />,
    value: '42',
    title: 'Shipped Orders',
    changePercentage: '+18.2%'
  },
  {
    icon: <SquareActivityIcon className='size-4' />,
    value: '8',
    title: 'Damaged Returns',
    changePercentage: '-8.7%'
  },
  {
    icon: <CalendarClockIcon className='size-4' />,
    value: '27',
    title: 'Missed Delivery Slots',
    changePercentage: '+4.3%'
  }
]

// Earning data for Total Earning card
const earningData = [
  {
    img: 'https://api.dicebear.com/7.x/lorelei/svg?seed=zipcar',
    platform: 'Premium Orders',
    technologies: 'High Value Accounts',
    earnings: '+$23,569.26',
    progressPercentage: 75
  },
  {
    img: 'https://api.dicebear.com/7.x/lorelei/svg?seed=bitbank',
    platform: 'Standard Orders',
    technologies: 'Regular Accounts',
    earnings: '+$12,650.31',
    progressPercentage: 25
  }
]

// Transaction table data
const transactionData: Item[] = [
  {
    id: '1',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JA',
    avatarFallback: 'JA',
    name: 'Jack Alfredo',
    amount: 316.0,
    status: 'paid',
    email: 'jack@company.com',
    paidBy: 'mastercard'
  },
  {
    id: '2',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MG',
    avatarFallback: 'MG',
    name: 'Maria Gonzalez',
    amount: 253.4,
    status: 'pending',
    email: 'maria.g@company.com',
    paidBy: 'visa'
  },
  {
    id: '3',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JD',
    avatarFallback: 'JD',
    name: 'John Doe',
    amount: 852.0,
    status: 'paid',
    email: 'john.doe@company.com',
    paidBy: 'mastercard'
  },
  {
    id: '4',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EC',
    avatarFallback: 'EC',
    name: 'Emily Carter',
    amount: 889.0,
    status: 'pending',
    email: 'emily.carter@company.com',
    paidBy: 'visa'
  },
  {
    id: '5',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DL',
    avatarFallback: 'DL',
    name: 'David Lee',
    amount: 723.16,
    status: 'paid',
    email: 'david.lee@company.com',
    paidBy: 'mastercard'
  },
  {
    id: '6',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SP',
    avatarFallback: 'SP',
    name: 'Sophia Patel',
    amount: 612.0,
    status: 'failed',
    email: 'sophia.patel@company.com',
    paidBy: 'mastercard'
  },
  {
    id: '7',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RW',
    avatarFallback: 'RW',
    name: 'Robert Wilson',
    amount: 445.25,
    status: 'paid',
    email: 'robert.wilson@company.com',
    paidBy: 'visa'
  },
  {
    id: '8',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LM',
    avatarFallback: 'LM',
    name: 'Lisa Martinez',
    amount: 297.8,
    status: 'processing',
    email: 'lisa.martinez@company.com',
    paidBy: 'mastercard'
  },
  {
    id: '9',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MT',
    avatarFallback: 'MT',
    name: 'Michael Thompson',
    amount: 756.9,
    status: 'paid',
    email: 'michael.thompson@company.com',
    paidBy: 'visa'
  },
  {
    id: '10',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AJ',
    avatarFallback: 'AJ',
    name: 'Amanda Johnson',
    amount: 189.5,
    status: 'pending',
    email: 'amanda.johnson@company.com',
    paidBy: 'mastercard'
  }
]

export default function AdminDashboard() {
  return (
    <div className='flex w-full flex-col'>
      <div className='grid grid-cols-2 gap-6 lg:grid-cols-3'>
        {/* Statistics Cards */}
        <div className='col-span-full grid gap-6 sm:grid-cols-3 md:max-lg:grid-cols-1'>
          {StatisticsCardData.map((card, index) => (
            <StatisticsCard
              key={index}
              icon={card.icon}
              title={card.title}
              value={card.value}
              changePercentage={card.changePercentage}
            />
          ))}
        </div>

        <div className='grid gap-6 max-xl:col-span-full lg:max-xl:grid-cols-2'>
          {/* Product Insights Card */}
          <ProductInsightsCard className='justify-between gap-3 *:data-[slot=card-content]:space-y-5' />

          {/* Total Earning Card */}
          <TotalEarningCard
            title='Total Earning'
            earning={24650}
            trend='up'
            percentage={10}
            comparisonText='Compare to last year ($84,325)'
            earningData={earningData}
            className='justify-between gap-5 sm:min-w-0 *:data-[slot=card-content]:space-y-7'
          />
        </div>

        <SalesMetricsCard className='col-span-full xl:col-span-2 *:data-[slot=card-content]:space-y-6' />

        <Card className='col-span-full w-full py-0'>
          <TransactionDatatable data={transactionData} />
        </Card>
      </div>
    </div>
  )
}

