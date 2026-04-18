import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, Edit, AlertCircle, Package, Upload } from "lucide-react"

export default function UserDashboard() {
  return (
    <main className="pt-[72px] p-6 space-y-6">
      {/* 4-Column KPI Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-blue-600">
          <CardContent className="p-5">
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-1">Jobs Due Today</p>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold">3</span>
              <span className="text-xs font-medium uppercase tracking-tighter text-secondary">Critical</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-1">Jobs In Production</p>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold">8</span>
              <span className="text-xs text-muted-foreground">Active Press</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-red-600">
          <CardContent className="p-5">
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-1">Awaiting Artwork</p>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-red-600">12</span>
              <span className="text-xs font-medium text-red-600">Pending Client</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-1">Completed This Week</p>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold">25</span>
              <span className="text-xs text-muted-foreground">Target: 30</span>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-10 gap-6">
        {/* Left (60%): Today's Priority Queue */}
        <Card className="col-span-10 lg:col-span-6 overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-base uppercase tracking-wider">Today's Priority Queue</CardTitle>
              <Badge variant="secondary" className="text-[10px]">LAST SYNC: 09:42:15</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[11px] font-bold uppercase tracking-wider">Job #</TableHead>
                  <TableHead className="text-[11px] font-bold uppercase tracking-wider">Customer</TableHead>
                  <TableHead className="text-[11px] font-bold uppercase tracking-wider">Items</TableHead>
                  <TableHead className="text-[11px] font-bold uppercase tracking-wider">Status</TableHead>
                  <TableHead className="text-[11px] font-bold uppercase tracking-wider">Due Date</TableHead>
                  <TableHead className="text-[11px] font-bold uppercase tracking-wider text-right">Assigned</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-secondary">#1042</TableCell>
                  <TableCell className="font-medium">Accra Football Club</TableCell>
                  <TableCell className="text-xs">50 items</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-[10px] uppercase tracking-tighter bg-green-100 text-green-700">Ready for Pickup</Badge>
                  </TableCell>
                  <TableCell className="font-semibold text-red-600">Today</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="text-xs">Marcus</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-secondary">#1048</TableCell>
                  <TableCell className="font-medium">New Horizon School</TableCell>
                  <TableCell className="text-xs">80 items</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-[10px] uppercase tracking-tighter bg-blue-100 text-blue-700">Quality Check</Badge>
                  </TableCell>
                  <TableCell>Tomorrow</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="text-xs">Sarah</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-secondary">#1041</TableCell>
                  <TableCell className="font-medium">GoldCoast Apparel</TableCell>
                  <TableCell className="text-xs">200 items</TableCell>
                  <TableCell>
                    <Badge variant="destructive" className="text-[10px] uppercase tracking-tighter">Printing</Badge>
                  </TableCell>
                  <TableCell>2 days</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="text-xs">Mike</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="p-4 bg-muted flex justify-center">
              <Button variant="ghost" className="text-[11px] font-bold uppercase tracking-widest">View Full Production Schedule →</Button>
            </div>
          </CardContent>
        </Card>
        {/* Right (40%): Attention & Activity */}
        <div className="col-span-10 lg:col-span-4 space-y-6">
          {/* Needs Your Attention */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-red-600 text-white">
              <CardTitle className="flex items-center gap-2 text-base uppercase tracking-wider">
                <AlertTriangle className="h-5 w-5" />
                Needs Your Attention
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="px-6 py-4 flex items-center justify-between hover:bg-muted transition-colors">
                  <div>
                    <span className="text-xs font-bold text-secondary">#1043</span>
                    <p className="text-sm font-medium">Bright Star Events</p>
                    <p className="text-[10px] text-red-600 uppercase font-bold mt-1">Status: Needs Art</p>
                  </div>
                  <Button size="sm" className="text-[10px] font-bold flex items-center tracking-wider">
                    <Upload className="h-3 w-3 mr-1" />
                    UPLOAD ART
                  </Button>
                </div>
                <div className="px-6 py-4 flex items-center justify-between hover:bg-muted transition-colors">
                  <div>
                    <span className="text-xs font-bold text-secondary">#1047</span>
                    <p className="text-sm font-medium">AfroFest Collective</p>
                    <p className="text-[10px] text-red-600 uppercase font-bold mt-1">Status: Needs Art</p>
                  </div>
                  <Button size="sm" className="text-[10px] font-bold flex items-center tracking-wider">
                    <Upload className="h-3 w-3 mr-1" />
                    UPLOAD ART
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* Recent Activity Feed */}
          <Card className="overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="text-base uppercase tracking-wider">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-border">
                <div className="flex space-x-4 relative">
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-green-500 flex items-center justify-center z-10">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs leading-tight">
                      <span className="font-bold">[Job #1042]</span> moved to <span className="font-bold">Printing</span> by <span className="font-medium text-secondary">Marcus</span>
                    </p>
                    <p className="text-[10px] text-muted-foreground font-medium mt-0.5">2h ago</p>
                  </div>
                </div>
                <div className="flex space-x-4 relative">
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center z-10">
                    <Edit className="h-3 w-3 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs leading-tight">
                      <span className="font-bold">[Job #1048]</span> updated by <span className="font-medium text-secondary">Sarah</span>
                    </p>
                    <p className="text-[10px] text-muted-foreground font-medium mt-0.5">3h ago</p>
                  </div>
                </div>
                <div className="flex space-x-4 relative">
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-red-600 flex items-center justify-center z-10">
                    <AlertCircle className="h-3 w-3 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs leading-tight">
                      <span className="font-bold">[Job #1043]</span> flagged as <span className="font-bold text-red-600">Missing Artwork</span>
                    </p>
                    <p className="text-[10px] text-muted-foreground font-medium mt-0.5">5h ago</p>
                  </div>
                </div>
                <div className="flex space-x-4 relative opacity-80">
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-muted flex items-center justify-center z-10">
                    <Package className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs leading-tight">
                      <span className="font-bold">[Job #1041]</span> materials checked into pressroom
                    </p>
                    <p className="text-[10px] text-muted-foreground font-medium mt-0.5">Yesterday</p>
                  </div>
                </div>
                <div className="pt-2">
                  <Button variant="outline" className="w-full text-[10px] font-bold uppercase">Load Older Activity</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}