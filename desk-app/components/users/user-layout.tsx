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
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import ProfileDropdown from '../admin/blocks/dropdown-profile';
import { Button } from '../ui/button'
import { InstagramIcon, LinkedinIcon, TwitterIcon } from '@hugeicons/core-free-icons'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

interface UsersLayoutProps {
  children: React.ReactNode
}

const usersMenuItems = [
  { title: 'Dashboard', icon: ChartNoAxesCombinedIcon, href: '/users', badge: '5' },
]

const usersPages = [
  { title: 'Jobs', icon: UsersIcon, href: '/users/jobs' },
  { title: 'Inventory', icon: TruckIcon, href: '/users/inventory' },
  { title: 'Art', icon: ChartSplineIcon, href: '/users/art', badge: '3' },
  // { title: 'Invoices & Payment', icon: ArrowRightLeftIcon, href: '/admin/invoices-payment', badge: '3' },
  // { title: 'Pricing', icon: ChartSplineIcon, href: '/admin/pricing' },
  // { title: 'Teams', icon: UsersIcon, href: '/admin/teams' },
]

const supportingFeatures = [
  // { title: 'Real Time Monitoring', icon: SquareActivityIcon, href: '/admin/settings/real-time-monitoring' },
  // { title: 'Backups', icon: CalendarClockIcon, href: '/admin/backup' },
  // { title: 'Reports & Export', icon: ClipboardListIcon, href: '/admin/settings/reports-exports' },
  { title: 'Settings', icon: SettingsIcon, href: '/users/settings' },
]

const jobSubPages = [
  { title: 'Details', href: '/users/jobs/details' },
  { title: 'Completed Jobs', href: '/users/jobs/completed-jobs' },
]

// const quotesSubPages = [
//   { title: 'Engine', href: '/admin/quotes/eng' },
//   { title: 'Lists', href: '/admin/quotes' },
// ]

export function UsersLayout({ children }: UsersLayoutProps) {
  const { state } = useSidebar()
  const pathname = usePathname()
  const [jobsOpen, setJobspen] = React.useState(pathname.startsWith('/users/jobs'))

  React.useEffect(() => {
    setJobspen(pathname.startsWith('/users/jobs'))
    // setQuotesOpen(pathname.startsWith('/admin/quotes'))
  }, [pathname])

  const getPageTitle = (page: string) => {
    const titles: Record<string, string> = {
      jobs: 'Jobs',
      products: 'Art Management',
      inventory: 'Inventory',
      settings: 'Settings',
    }
    return titles[page] || page.charAt(0).toUpperCase() + page.slice(1)
  }

  const getBreadcrumbs = () => {
    const segments = pathname.split('/').filter(Boolean)
    
    if (segments.length === 1) {
      // On /user, show only Dashboard as the current page
      return [{ title: 'Dashboard', href: undefined as string | undefined }]
    }
    
    // Always start with User
    const breadcrumbs: Array<{ title: string; href: string | undefined }> = [{ title: 'User', href: '/users' }]
    
    const page = segments[1]
    const pageTitle = getPageTitle(page)
    
    if (segments.length === 2) {
      // On main page like /users/jobs
      breadcrumbs.push({ title: pageTitle, href: undefined })
    } else if (segments.length >= 3) {
      // On subpage like /users/jobs/details
      const subpage = segments[2]
      const subPageTitle = getPageTitle(subpage)
      breadcrumbs.push({ title: pageTitle, href: `/${segments.slice(0, 2).join('/')}` })
      breadcrumbs.push({ title: subPageTitle, href: undefined })
    }
    
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  return (
    <SidebarProvider>
      <div className='flex min-h-dvh w-full'>
        <TooltipProvider>
          <Sidebar collapsible="icon">
            <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {usersMenuItems.map((item) => (
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
                  <SidebarMenuItem key="jobs-section">
                    {state === 'collapsed' ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton asChild>
                            <Link href="/users/jobs">
                              <UsersIcon />
                              <span>Jobs</span>
                            </Link>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p>Jobs</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Collapsible open={jobsOpen} onOpenChange={setJobspen}>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton asChild>
                            <Link href="/users/jobs" className="flex items-center justify-between w-full">
                              <div className="flex items-center gap-2">
                                <UsersIcon />
                                <span>Jobs</span>
                              </div>
                              <ChevronRightIcon
                                className={`size-4 transition-transform ${jobsOpen ? 'rotate-90' : ''}`}
                              />
                            </Link>
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="overflow-hidden">
                          <div className="mt-1 space-y-1 pl-6">
                            {jobSubPages.map((subpage) => (
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

                  <SidebarMenuItem key="inventory-item">
                    {state === 'collapsed' ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton asChild>
                            <Link href="/users/inventory">
                              <TruckIcon />
                              <span>Inventory</span>
                            </Link>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p>Inventory</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <SidebarMenuButton asChild>
                        <Link href="/users/inventory">
                          <TruckIcon />
                          <span>Inventory</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>

                  {/* <SidebarMenuItem key="quotes-section">
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
                  </SidebarMenuItem> */}

                  {usersPages
                    .filter((item) => item.title !== 'Jobs')
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
        </TooltipProvider>
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
                <ProfileDropdown
                  trigger={
                    <Button variant='ghost' size='icon' className='size-9.5'>
                      <Avatar className='size-9.5 rounded-md'>
                        <AvatarImage src='https://api.dicebear.com/7.x/avataaars/svg?seed=User' />
                        <AvatarFallback>US</AvatarFallback>
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
          <footer>
            <div className='text-muted-foreground mx-auto flex size-full max-w-7xl items-center justify-between gap-3 px-4 py-3 max-sm:flex-col sm:gap-6 sm:px-6'>
              <p className='text-sm text-balance max-sm:text-center'>
                {`©${new Date().getFullYear()}`} <Link href='#' className='text-primary'>
                  GCP Printing Management
                </Link>, Built for production excellence
              </p>
              <div className='flex items-center gap-5'>
                <Link href='#'>
                  <BookIcon className='size-4' />
                </Link>
                <Link href='#'>
                  <LanguagesIcon className='size-4' />
                </Link>
                <Link href='#'>
                  <LinkIcon className='size-4' />
                </Link>
                <Link href='#'>
                  <TimerIcon className='size-4' />
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  )
}
