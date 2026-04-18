import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Users, Bell, Search, RefreshCw, CheckCircle, History, Package } from "lucide-react"

export default function CompletedJobs() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* TopNavBar Shell */}
      <header className="fixed top-0 right-0 flex justify-between items-center px-8 z-40 w-[calc(100%-220px)] h-[56px] bg-white/85 backdrop-blur-md">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-slate-900 font-barlow uppercase tracking-tight">Production Section / Archive</h1>
        </div>
        <div className="flex items-center space-x-6">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            CREW
          </Badge>
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
          <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white">
            <img alt="User Avatar" className="w-full h-full object-cover"
              data-alt="professional portrait of a print shop manager wearing a clean workshop apron in a bright studio environment"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6mF-WN0RXAqmjpesOOh_-pG_GTrqs8B7pDDA0MF9Al9OkXdaUtBRQiMr-vW8yXGjB8bGsrhZIPYi6hMLHw132h4FBjHnpDWJlkrtcv7MItUB3ahmgM8EXJN-Omm4bdzQwtAw8l5hPqmlMNmqoesRActcIDSJFkwr-gIz68rVwoUat_aucQbkHdTUrHQ7xSLkxrlJt8aUoAwDsWrsI74Wxhc2h9ftc9uMF3Uo-1ELb6_ELXX-cG8_aNmSTIDagy879FYxrfg8l-N3V" />
          </div>
        </div>
      </header>
      {/* Content Area */}
      <div className="mt-[56px] p-8 space-y-6">
        {/* Filters & Search Bento-ish Layout */}
        <div className="grid grid-cols-12 gap-4">
          <Card className="col-span-12 lg:col-span-4">
            <CardContent className="p-4">
              <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Job # or Customer</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input className="pl-10" placeholder="Search archive..." />
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-12 md:col-span-6 lg:col-span-4">
            <CardContent className="p-4">
              <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Date Range</label>
              <div className="flex items-center space-x-2">
                <Input type="date" className="text-xs font-mono" />
                <span className="text-muted-foreground text-xs">TO</span>
                <Input type="date" className="text-xs font-mono" />
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-12 md:col-span-6 lg:col-span-4">
            <CardContent className="p-4">
              <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Garment Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="tshirts">T-Shirts</SelectItem>
                  <SelectItem value="hoodies">Hoodies</SelectItem>
                  <SelectItem value="sportswear">Sportswear</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>
        {/* Results Table Container */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mockup</TableHead>
                  <TableHead>Job #</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-center">Total Items</TableHead>
                  <TableHead>Completed Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Row 1 */}
                <TableRow>
                  <TableCell>
                    <div className="w-12 h-12 bg-muted rounded-sm overflow-hidden flex items-center justify-center border">
                      <img alt="Mockup #1050" className="w-full h-full object-cover"
                        data-alt="high-quality digital apparel mockup of a bright red premium t-shirt showing detailed screen printing on the chest"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAryBtzwhfkNcVjxsjyOyg8KqwO1fKuI1ISYMwqfZJjiHJMvIbW5xDuYApj_q0tAvyss7HvM2eo914V5H1f8KiOh4d2gPNd_ejtUIkpyjxoCwbmY-smoP2joUu3_WuwdFLTVSr8Dxr_F_YdCNQwMj_UhCMHbos3sTPEeHpwAFhMx6DVlq6Sl3ZNKb6G56Ld8guQi4KUfD6LybVRenv_Ms6oRpAuNpt0CXNMy719SipAATN6BRgTwArWcQw09wn4rfTXsGX6_SoWj2iw" />
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm font-medium">#1050</TableCell>
                  <TableCell className="text-sm">Bright Star Events</TableCell>
                  <TableCell className="text-sm text-muted-foreground italic max-w-xs truncate">45x Next Level 6210 (Red)</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="secondary" className="text-[11px] font-mono font-bold">45</Badge>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">28 Mar 2025</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-wider">View</Button>
                    <Button size="sm" className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <RefreshCw className="h-3 w-3" />
                      Reprint
                    </Button>
                  </TableCell>
                </TableRow>
                {/* Row 2 */}
                <TableRow>
                  <TableCell>
                    <div className="w-12 h-12 bg-muted rounded-sm overflow-hidden flex items-center justify-center border">
                      <img alt="Mockup #1039" className="w-full h-full object-cover"
                        data-alt="close up of a white cotton football jersey with a circular club crest screen printed in dark blue and gold ink"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAduRBw9xKiBFsTKMIxjLkx81mrbTkj6wqXfCYOg1n8rGD18NwAqTa1_pwLHtJ-hbw6XK_02DJk_UcaPheBBPOhb9-Ts_IRHTf44N7eGjV5jB9qD_6dTvfb3uKmtWkSiZejOwMyxaDnKwjZ3Q3yirPyORlGCv-5KjIdk_ftJFOyiWM1-EXrf_Jw71d9PjtbmEsgl2IUdisLDPZJmb3DWH1ldYSYT7YJAW41UwH_Q0zJIZkoASq0xWblwpiY4InZ7qR7biqOS8U95P81" />
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm font-medium">#1039</TableCell>
                  <TableCell className="text-sm">Accra Football Club</TableCell>
                  <TableCell className="text-sm text-muted-foreground italic max-w-xs truncate">100x Gildan 5000</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="secondary" className="text-[11px] font-mono font-bold">100</Badge>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">20 Mar 2025</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-wider">View</Button>
                    <Button size="sm" className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <RefreshCw className="h-3 w-3" />
                      Reprint
                    </Button>
                  </TableCell>
                </TableRow>
                {/* Additional Placeholder Row for Density */}
                <TableRow>
                  <TableCell>
                    <div className="w-12 h-12 bg-muted rounded-sm overflow-hidden flex items-center justify-center border">
                      <img alt="Mockup #1025" className="w-full h-full object-cover"
                        data-alt="embroidery detail on a black structured baseball cap showing a crisp white logo with high thread count texture"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD8AOyluVDcRznVOn1uT_H5_Zmns7DbmMcpeZ1ya5RSJug6qXNlf1ekfl0eLmriJNoK85onH8QwGIQjdlBCFeev5Qv8VYOkkRYvYmYhv7-S1Q9GLPitW1QQsWXni1HHeJ3sSyK7j6IqLPJ-KqilpIvOwqGb8Q4LSyA39cOYixVdnnkYLp-gWHNEEXMUx-zOrSGLHBTg8SmwVKC8WrPdRBgz0Fflw1i-nNxKv1xMehxR4tXVUDi88btpnejRUa7Kpmj8aUGmVodeN_A" />
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm font-medium">#1025</TableCell>
                  <TableCell className="text-sm">Skyline Tech Corp</TableCell>
                  <TableCell className="text-sm text-muted-foreground italic max-w-xs truncate">24x Yupoong Snapbacks</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="secondary" className="text-[11px] font-mono font-bold">24</Badge>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">15 Mar 2025</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-wider">View</Button>
                    <Button size="sm" className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <RefreshCw className="h-3 w-3" />
                      Reprint
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            {/* Pagination Footer */}
            <div className="bg-muted px-6 py-4 flex items-center justify-between">
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Showing 1 to 3 of 128 completed jobs
              </div>
              <div className="flex items-center space-x-1">
                <Button variant="ghost" size="sm">
                  <span className="sr-only">Previous</span>
                  ←
                </Button>
                <Button size="sm" className="font-mono text-xs font-bold">1</Button>
                <Button variant="ghost" size="sm" className="font-mono text-xs">2</Button>
                <Button variant="ghost" size="sm" className="font-mono text-xs">3</Button>
                <span className="text-muted-foreground font-mono text-xs px-2">...</span>
                <Button variant="ghost" size="sm" className="font-mono text-xs">42</Button>
                <Button variant="ghost" size="sm">
                  <span className="sr-only">Next</span>
                  →
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Archival Statistics */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-3 flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight">Total Archive Density</div>
                <div className="text-sm font-mono font-bold">4,281 JOBS</div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-secondary">
            <CardContent className="p-3 flex items-center space-x-3">
              <History className="h-5 w-5 text-secondary" />
              <div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight">Last Archival Event</div>
                <div className="text-sm font-mono font-bold">28 MAR 2025</div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-muted-foreground">
            <CardContent className="p-3 flex items-center space-x-3">
              <Package className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight">Unique Designs</div>
                <div className="text-sm font-mono font-bold">1,894 SKUS</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}