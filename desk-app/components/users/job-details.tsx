import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RefreshCw, Printer, Shirt, StickyNote, FileImage, FileText, CheckCircle, Clock, Circle } from "lucide-react"

export default function JobDetails() {
  return (
    <main className="pt-[56px] min-h-screen">
      <div className="p-6 space-y-6">
        {/* Job Header Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-bold tracking-tight">JOB #1041</h3>
                  <Badge variant="destructive">Printing</Badge>
                </div>
                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                  <span className="font-bold">GoldCoast Apparel</span>
                  <span>•</span>
                  <span>Order: <span className="font-mono">25 Mar 2025</span></span>
                  <span>•</span>
                  <span className="text-destructive font-medium">Due: <span className="font-mono font-bold">04 Apr 2025</span></span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Assigned To</label>
                  <Select defaultValue="Mike">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mike">Mike</SelectItem>
                      <SelectItem value="Marcus">Marcus</SelectItem>
                      <SelectItem value="Linda">Linda</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="destructive" className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Change Status
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Printer className="h-4 w-4" />
                  Print Ticket
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Grid Layout for Details */}
        <div className="grid grid-cols-12 gap-6">
          {/* Section 1: Garments Table */}
          <section className="col-span-12 lg:col-span-8 space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-xs uppercase tracking-widest">
                  <Shirt className="h-4 w-4" />
                  Garments & Quantities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Style</TableHead>
                      <TableHead>Color</TableHead>
                      <TableHead className="text-center">S</TableHead>
                      <TableHead className="text-center">M</TableHead>
                      <TableHead className="text-center">L</TableHead>
                      <TableHead className="text-center">XL</TableHead>
                      <TableHead className="text-center">2XL</TableHead>
                      <TableHead className="text-center">3XL</TableHead>
                      <TableHead className="text-right">Total Qty</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Bella+Canvas 3001</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-white border border-border"></div>
                          White
                        </div>
                      </TableCell>
                      <TableCell className="text-center font-mono">20</TableCell>
                      <TableCell className="text-center font-mono">40</TableCell>
                      <TableCell className="text-center font-mono">60</TableCell>
                      <TableCell className="text-center font-mono">40</TableCell>
                      <TableCell className="text-center font-mono">30</TableCell>
                      <TableCell className="text-center font-mono">10</TableCell>
                      <TableCell className="text-right font-mono font-bold text-primary text-base">200</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            {/* Section 2: Print Locations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Location 01</h5>
                      <h4 className="text-xl font-bold tracking-tight mt-1">Left Chest</h4>
                    </div>
                    <Badge variant="secondary" className="text-[10px] font-mono">3.5" x 3.5"</Badge>
                  </div>
                  <div className="space-y-3 flex-1">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground">Ink Specifications</label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 bg-muted rounded">
                        <div className="w-4 h-4 rounded-sm bg-red-500"></div>
                        <span className="text-xs font-mono">Pantone 185 C (Red)</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 bg-muted rounded">
                        <div className="w-4 h-4 rounded-sm bg-black"></div>
                        <span className="text-xs font-mono">Pantone Black</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 bg-muted rounded">
                        <div className="w-4 h-4 rounded-sm bg-white border border-border"></div>
                        <span className="text-xs font-mono">Pantone White</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Location 02</h5>
                      <h4 className="text-xl font-bold tracking-tight mt-1">Full Back</h4>
                    </div>
                    <Badge variant="secondary" className="text-[10px] font-mono">12" x 14"</Badge>
                  </div>
                  <div className="space-y-3 flex-1">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground">Ink Specifications</label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 bg-muted rounded">
                        <div className="w-4 h-4 rounded-sm bg-red-500"></div>
                        <span className="text-xs font-mono">Pantone 185 C (Red)</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 bg-muted rounded">
                        <div className="w-4 h-4 rounded-sm bg-black"></div>
                        <span className="text-xs font-mono">Pantone Black</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 bg-muted rounded">
                        <div className="w-4 h-4 rounded-sm bg-white border border-border"></div>
                        <span className="text-xs font-mono">Pantone White</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Section 4: Job Notes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xs uppercase tracking-widest">
                  <StickyNote className="h-4 w-4" />
                  Production Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted border-l-4 border-primary p-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold uppercase">Mike</span>
                    <span className="text-[10px] font-mono text-muted-foreground">26 Mar 10:15</span>
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    "White base needs to be extra thick on these."
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* Sidebar Sections */}
          <aside className="col-span-12 lg:col-span-4 space-y-6">
            {/* Section 3: Artwork Files */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-xs uppercase tracking-widest">Proofing & Assets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* File 1 */}
                <div className="group relative flex items-start gap-4 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <div className="bg-orange-100 text-orange-600 w-12 h-12 shrink-0 flex flex-col items-center justify-center rounded">
                    <FileImage className="h-5 w-5" />
                    <span className="text-[8px] font-bold font-mono">.AI</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">goldcoast_front_v2.ai</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Uploaded by Linda</p>
                    <div className="mt-2 flex items-center gap-1.5">
                      <CheckCircle className="w-2 h-2 text-green-500" />
                      <span className="text-[10px] font-bold uppercase text-green-600">Approved</span>
                    </div>
                  </div>
                </div>
                {/* File 2 */}
                <div className="group relative flex items-start gap-4 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                  <div className="bg-red-100 text-red-600 w-12 h-12 shrink-0 flex flex-col items-center justify-center rounded">
                    <FileText className="h-5 w-5" />
                    <span className="text-[8px] font-bold font-mono">.PDF</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">goldcoast_back_v1.pdf</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Uploaded by Linda</p>
                    <div className="mt-2 flex items-center gap-1.5">
                      <Clock className="w-2 h-2 text-amber-500" />
                      <span className="text-[10px] font-bold uppercase text-amber-600">Pending Approval</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-[10px] font-bold uppercase tracking-widest">
                  Upload New Revision
                </Button>
              </CardContent>
            </Card>
            {/* Section 5: Status History Timeline */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-xs uppercase tracking-widest">Event Log</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-7 top-8 bottom-8 w-px bg-border"></div>
                {/* Timeline Item */}
                <div className="relative flex gap-4">
                  <div className="z-10 w-4 h-4 rounded-full bg-primary mt-1 border-4 border-background shadow-sm"></div>
                  <div>
                    <p className="text-xs font-bold">Moved to Printing</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">by Marcus</p>
                    <p className="text-[10px] font-mono text-muted-foreground mt-1 uppercase tracking-tight">26 Mar 09:00</p>
                  </div>
                </div>
                {/* Timeline Item */}
                <div className="relative flex gap-4">
                  <div className="z-10 w-4 h-4 rounded-full bg-green-500 mt-1 border-4 border-background shadow-sm"></div>
                  <div>
                    <p className="text-xs font-bold">Art Approved</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">by Linda</p>
                    <p className="text-[10px] font-mono text-muted-foreground mt-1 uppercase tracking-tight">25 Mar 14:20</p>
                  </div>
                </div>
                {/* Timeline Item */}
                <div className="relative flex gap-4">
                  <Circle className="z-10 w-4 h-4 mt-1 border-4 border-background shadow-sm text-muted-foreground" />
                  <div>
                    <p className="text-xs font-bold">Job Created</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">System Admin</p>
                    <p className="text-[10px] font-mono text-muted-foreground mt-1 uppercase tracking-tight">25 Mar 08:30</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  )
}