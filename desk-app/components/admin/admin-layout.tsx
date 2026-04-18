'use client'

import React, { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import {
  ArrowRightLeftIcon,
  CalendarClockIcon,
  ChartNoAxesCombinedIcon,
  ChartSplineIcon,
  ChevronRightIcon,
  ClipboardListIcon,
  CrownIcon,
  SettingsIcon,
  SquareActivityIcon,
  TruckIcon,
  UsersIcon,
  LanguagesIcon,
  BookIcon,
  LinkIcon,
  TimerIcon
} from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar
} from '@/components/ui/sidebar'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// import LanguageDropdown from './blocks/dropdown-language'
import ProfileDropdown from './blocks/dropdown-profile'
import { Button } from '../ui/button'
import { InstagramIcon, LinkedinIcon, TwitterIcon } from '@hugeicons/core-free-icons'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

interface AdminLayoutProps {
  children: React.ReactNode
}

const adminMenuItems = [
  { title: 'Dashboard', icon: ChartNoAxesCombinedIcon, href: '/admin', badge: '5' },
]

const adminPages = [
  { title: 'Customers', icon: UsersIcon, href: '/admin/customers' },
  { title: 'Products', icon: TruckIcon, href: '/admin/products' },
  { title: 'Quotes', icon: ChartSplineIcon, href: '/admin/quotes' },
  { title: 'Invoices & Payment', icon: ArrowRightLeftIcon, href: '/admin/invoices-payment', badge: '3' },
  { title: 'Pricing', icon: ChartSplineIcon, href: '/admin/pricing' },
  { title: 'Teams', icon: UsersIcon, href: '/admin/teams' },
]

const supportingFeatures = [
  { title: 'Real Time Monitoring', icon: SquareActivityIcon, href: '/admin/settings/real-time-monitoring' },
  { title: 'Backups', icon: CalendarClockIcon, href: '/admin/backup' },
  { title: 'Reports & Export', icon: ClipboardListIcon, href: '/admin/settings/reports-exports' },
  { title: 'Settings', icon: SettingsIcon, href: '/admin/settings' },
]

const customerSubPages = [
  { title: 'Directory', href: '/admin/customers/dir' },
  { title: 'Details', href: '/admin/customers' },
]

const quotesSubPages = [
  { title: 'Engine', href: '/admin/quotes/eng' },
  { title: 'Lists', href: '/admin/quotes' },
]

export function AdminLayout({ children }: AdminLayoutProps) {
  const { state } = useSidebar();
  const pathname = usePathname();
  const [customersOpen, setCustomersOpen] = React.useState(pathname.startsWith('/admin/customers'));
  const [quotesOpen, setQuotesOpen] = React.useState(pathname.startsWith('/admin/quotes'));

  React.useEffect(() => {
    setCustomersOpen(pathname.startsWith('/admin/customers'))
    setQuotesOpen(pathname.startsWith('/admin/quotes'))
  }, [pathname]);

  const getPageTitle = (page: string) => {
    const titles: Record<string, string> = {
      customers: 'Customers',
      dir: 'Directory',
      products: 'Products',
      quotes: 'Quotes',
      eng: 'Engine',
      'invoices-payment': 'Invoices & Payment',
      pricing: 'Pricing',
      teams: 'Teams',
      backup: 'Backups',
      settings: 'Settings',
      'my-account': 'My Account',
      billing: 'Billing',
      'reports-exports': 'Reports & Export',
      'real-time-monitoring': 'Real Time Monitoring',
    }
    return titles[page] || page.charAt(0).toUpperCase() + page.slice(1)
  }

  const getBreadcrumbs = () => {
    const segments = pathname.split('/').filter(Boolean)
    
    if (segments.length === 1) {
      // On /admin, show only Dashboard as the current page
      return [{ title: 'Dashboard', href: undefined as string | undefined }]
    }
    
    // Always start with Admin
    const breadcrumbs: Array<{ title: string; href: string | undefined }> = [{ title: 'Admin', href: '/admin' }]
    
    const page = segments[1]
    const pageTitle = getPageTitle(page)
    
    if (segments.length === 2) {
      // On main page like /admin/customers
      breadcrumbs.push({ title: pageTitle, href: undefined })
    } else if (segments.length >= 3) {
      // On subpage like /admin/customers/dir
      const subpage = segments[2]
      const subPageTitle = getPageTitle(subpage)
      breadcrumbs.push({ title: pageTitle, href: `/${segments.slice(0, 2).join('/')}` })
      breadcrumbs.push({ title: subPageTitle, href: undefined })
    }
    
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  return (
    // <SidebarProvider>
      <div className='flex min-h-dvh w-full'>
        {/* <TooltipProvider> */}
          <Sidebar collapsible="icon">
            <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {adminMenuItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      {state === "collapsed" ? (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <SidebarMenuButton asChild>
                              <Link href={item.href}>
                                <item.icon />
                                <span>{item.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            <p>{item.title}</p>
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        <SidebarMenuButton asChild>
                          <Link href={item.href}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      )}
                      {item.badge && (
                        <SidebarMenuBadge className='bg-primary/10 rounded-full'>{item.badge}</SidebarMenuBadge>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Pages</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem key="customers-section">
                    {state === 'collapsed' ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton asChild>
                            <Link href="/admin/customers">
                              <UsersIcon />
                              <span>Customers</span>
                            </Link>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p>Customers</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Collapsible open={customersOpen} onOpenChange={setCustomersOpen}>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="justify-between w-full">
                            <div className="flex items-center gap-2">
                              <UsersIcon />
                              <span>Customers</span>
                            </div>
                            <ChevronRightIcon
                              className={`size-4 transition-transform ${customersOpen ? 'rotate-90' : ''}`}
                            />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="overflow-hidden">
                          <div className="mt-1 space-y-1 pl-6">
                            {customerSubPages.map((subpage) => (
                              <Link
                                key={subpage.href}
                                href={subpage.href}
                                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate"
                              >
                                <span>{subpage.title}</span>
                              </Link>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    )}
                  </SidebarMenuItem>

                  <SidebarMenuItem key="products-item">
                    {state === 'collapsed' ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton asChild>
                            <Link href="/admin/products">
                              <TruckIcon />
                              <span>Products</span>
                            </Link>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p>Products</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <SidebarMenuButton asChild>
                        <Link href="/admin/products">
                          <TruckIcon />
                          <span>Products</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>

                  <SidebarMenuItem key="quotes-section">
                    {state === 'collapsed' ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton asChild>
                            <Link href="/admin/quotes">
                              <ChartSplineIcon />
                              <span>Quotes</span>
                            </Link>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p>Quotes</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Collapsible open={quotesOpen} onOpenChange={setQuotesOpen}>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="justify-between w-full">
                            <div className="flex items-center gap-2">
                              <ChartSplineIcon />
                              <span>Quotes</span>
                            </div>
                            <ChevronRightIcon
                              className={`size-4 transition-transform ${quotesOpen ? 'rotate-90' : ''}`}
                            />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="overflow-hidden">
                          <div className="mt-1 space-y-1 pl-6">
                            {quotesSubPages.map((subpage) => (
                              <Link
                                key={subpage.href}
                                href={subpage.href}
                                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate"
                              >
                                <span>{subpage.title}</span>
                              </Link>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    )}
                  </SidebarMenuItem>

                  {adminPages
                    .filter((item) => item.title !== 'Customers' && item.title !== 'Quotes')
                    .map((item) => (
                      <SidebarMenuItem key={item.href}>
                        {state === 'collapsed' ? (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <SidebarMenuButton asChild>
                                <Link href={item.href}>
                                  <item.icon />
                                  <span>{item.title}</span>
                                </Link>
                              </SidebarMenuButton>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                              <p>{item.title}</p>
                            </TooltipContent>
                          </Tooltip>
                        ) : (
                          <SidebarMenuButton asChild>
                            <Link href={item.href}>
                              <item.icon />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        )}
                        {item.badge && (
                          <SidebarMenuBadge className='bg-primary/10 rounded-full'>{item.badge}</SidebarMenuBadge>
                        )}
                      </SidebarMenuItem>
                    ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Supporting Features</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {supportingFeatures.map((item) => (
                    <SidebarMenuItem key={`${item.title}-${item.href}`}>
                      {state === "collapsed" ? (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <SidebarMenuButton asChild>
                              <Link href={item.href}>
                                <item.icon />
                                <span>{item.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            <p>{item.title}</p>
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        <SidebarMenuButton asChild>
                          <Link href={item.href}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          </Sidebar>
        {/* </TooltipProvider> */}
        <div className='flex flex-1 flex-col'>
          <header className='bg-card sticky top-0 z-50 border-b'>
            <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6'>
              <div className='flex items-center gap-4'>
                <SidebarTrigger className='[&_svg]:size-5! -ml-3' />
                <Separator orientation='vertical' className='hidden h-4! sm:block' />
                <Breadcrumb className='hidden sm:block'>
                  <BreadcrumbList>
                    {breadcrumbs.map((crumb, index) => (
                      <Fragment key={`breadcrumb-${index}`}>
                        <BreadcrumbItem>
                          {crumb.href ? (
                            <BreadcrumbLink href={crumb.href}>{crumb.title}</BreadcrumbLink>
                          ) : (
                            <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                          )}
                        </BreadcrumbItem>
                        {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                      </Fragment>
                    ))}
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className='flex items-center gap-1.5'>
                {/* <LanguageDropdown
                  trigger={
                    <Button variant='ghost' size='icon'>
                      <LanguagesIcon />
                    </Button>
                  }
                /> */}
                <ProfileDropdown
                  trigger={
                    <Button variant='ghost' size='icon' className='size-9.5'>
                      <Avatar className='size-9.5 rounded-md'>
                        <AvatarImage src='https://api.dicebear.com/7.x/avataaars/svg?seed=Admin' />
                        <AvatarFallback>AD</AvatarFallback>
                      </Avatar>
                    </Button>
                  }
                />
              </div>
            </div>
          </header>
          <main className='mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6'>
            {children}
          </main>
          {/* <footer>
            <div className='text-muted-foreground mx-auto flex size-full max-w-7xl items-center justify-between gap-3 px-4 py-3 max-sm:flex-col sm:gap-6 sm:px-6'>
              <p className='text-sm text-balance max-sm:text-center'>
                {`©${new Date().getFullYear()}`} <Link href='#' className='text-primary'>
                  shadcn/studio
                </Link>, Made for better web design
              </p>
              <div className='flex items-center gap-5'>
                <Link href='#'>
                  <BookIcon className='size-4' />
                </Link>
                <Link href='#'>
                  <BookIcon className='size-4' />
                </Link>
                <Link href='#'>
                  <LinkIcon className='size-4' />
                </Link>
                <Link href='#'>
                  <TimerIcon className='size-4' />
                </Link>
              </div>
            </div>
          </footer> */}
        </div>
      </div>
    // </SidebarProvider>
  )
}
