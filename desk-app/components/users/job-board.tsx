import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Shirt, Calendar, Plus, Users } from 'lucide-react'

export default function JobBoard() {
  return (
    <div className="h-screen flex flex-col">
      {/* Toolbar */}
      <div className="px-6 py-4 flex justify-between items-center shrink-0 bg-muted">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-xs font-bold uppercase tracking-wider">Assigned To:</label>
            <Select>
              <SelectTrigger className="w-32 h-8">
                <SelectValue placeholder="All Crews" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Crews</SelectItem>
                <SelectItem value="screen-a">Screen Team A</SelectItem>
                <SelectItem value="embroidery-b">Embroidery B</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-bold uppercase tracking-wider">Due Date:</label>
            <Select>
              <SelectTrigger className="w-32 h-8">
                <SelectValue placeholder="All Dates" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Dates</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
                <SelectItem value="today">Due Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Job Order
          </Button>
        </div>
      </div>
      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden p-6 bg-background">
        <div className="flex h-full gap-4 items-start">
          {/* Column 1: New Orders */}
          <div className="kanban-column flex flex-col h-full min-w-[300px]">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <h3 className="font-bold uppercase text-sm tracking-tight">New Orders</h3>
              </div>
              <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">2</Badge>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {/* Job Card */}
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs font-bold tracking-tight">#1045</span>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" title="Normal Priority"></div>
                  </div>
                  <h4 className="font-bold text-sm mb-1 leading-tight">Metropolitan Coffee Roasters</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Badge variant="outline" className="text-xs">
                      <Shirt className="h-3 w-3 mr-1" />
                      200 pcs
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Oct 24
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex -space-x-1.5">
                      <div className="w-6 h-6 rounded-full bg-muted border border-background flex items-center justify-center text-xs font-bold">JD</div>
                      <div className="w-6 h-6 rounded-full bg-muted border border-background flex items-center justify-center text-xs font-bold text-muted-foreground">+1</div>
                    </div>
                    <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-600">SCREEN PRINT</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs font-bold tracking-tight">#1049</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-sm mb-1 leading-tight">Summit Peak Fitness</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="bg-muted px-1.5 py-0.5 rounded-sm">45 pcs</span>
                    <span>Oct 28</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold">MK</div>
                    <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-600">DIGITAL</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Column 2: Needs Art */}
          <div className="kanban-column flex flex-col h-full min-w-[300px]">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <h3 className="font-bold uppercase text-sm tracking-tight">Needs Art</h3>
              </div>
              <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">2</Badge>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs font-bold tracking-tight">#1043</span>
                    <div className="w-2 h-2 bg-red-600 rounded-full" title="Urgent"></div>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Local Music Festival</h4>
                  <div className="flex items-center gap-2 text-xs mb-3">
                    <Badge variant="outline" className="text-xs">1,200 pcs</Badge>
                    <Badge variant="destructive" className="text-xs">OVERDUE</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold">RL</div>
                    <Badge variant="secondary" className="text-xs bg-orange-50 text-orange-600">VECTORING</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs font-bold tracking-tight">#1047</span>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Pizza Palace Crew</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="bg-muted px-1.5 py-0.5 rounded-sm">24 pcs</span>
                    <span className="text-orange-600 font-bold">DUE TODAY</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold">JD</div>
                    <Badge variant="secondary" className="text-xs bg-orange-50 text-orange-600">RE-COLOR</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Column 3: Art Approved */}
          <div className="kanban-column flex flex-col h-full min-w-[300px]">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <h3 className="font-bold uppercase text-sm tracking-tight">Art Approved</h3>
              </div>
              <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">1</Badge>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs font-bold tracking-tight">#1044</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Tech Builders Inc.</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="bg-muted px-1.5 py-0.5 rounded-sm">150 pcs</span>
                    <span>Oct 25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold">AB</div>
                    <Badge variant="secondary" className="text-xs bg-purple-50 text-purple-600">EMBROIDERY</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Column 4: Pre-Press */}
          <div className="kanban-column flex flex-col h-full min-w-[300px]">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <h3 className="font-bold uppercase text-sm tracking-tight">Pre-Press</h3>
              </div>
              <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-700">1</Badge>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs font-bold tracking-tight">#1046</span>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-sm mb-1">City High Athletics</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="bg-muted px-1.5 py-0.5 rounded-sm">300 pcs</span>
                    <span>Oct 26</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold">SC</div>
                    <Badge variant="secondary" className="text-xs bg-yellow-50 text-yellow-600">SEP-6 COLOR</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Column 5: Printing */}
          <div className="kanban-column flex flex-col h-full min-w-[300px]">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-destructive rounded-full"></div>
                <h3 className="font-bold uppercase text-sm tracking-tight">Printing</h3>
              </div>
              <Badge variant="secondary" className="text-xs bg-destructive/10 text-destructive">1</Badge>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              <Card className="border-l-4 border-l-destructive ring-1 ring-destructive/10">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs font-bold tracking-tight">#1041</span>
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Neon Glow Party</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="bg-muted px-1.5 py-0.5 rounded-sm">500 pcs</span>
                    <span className="text-orange-600 font-bold">DUE TODAY</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold">MK</div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-destructive animate-pulse rounded-full"></div>
                      <span className="text-xs font-mono text-destructive font-bold">PRESS 01</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Column 6: Quality Check */}
          <div className="kanban-column flex flex-col h-full min-w-[300px]">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <h3 className="font-bold uppercase text-sm tracking-tight">Quality Check</h3>
              </div>
              <Badge variant="secondary" className="text-xs bg-teal-100 text-teal-700">1</Badge>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              <Card className="border-l-4 border-l-teal-500">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs font-bold tracking-tight">#1048</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Riverwood Charity</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="bg-muted px-1.5 py-0.5 rounded-sm">120 pcs</span>
                    <span>Oct 27</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold">PW</div>
                    <Badge variant="secondary" className="text-xs bg-teal-50 text-teal-600">COUNTING</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Column 7: Ready for Pickup */}
          <div className="kanban-column flex flex-col h-full min-w-[300px]">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <h3 className="font-bold uppercase text-sm tracking-tight">Ready for Pickup</h3>
              </div>
              <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">1</Badge>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs font-bold tracking-tight">#1042</span>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                  <h4 className="font-bold text-sm mb-1">Sunshine Daycare</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="bg-muted px-1.5 py-0.5 rounded-sm">36 pcs</span>
                    <span>Oct 24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold">FR</div>
                    <span className="text-xs font-mono text-green-700 font-bold">BOXED - A4</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Column 8: Completed */}
          <div className="kanban-column flex flex-col h-full min-w-[300px] opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                <h3 className="font-bold uppercase text-sm tracking-tight">Completed</h3>
              </div>
              <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">1</Badge>
            </div>
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              <Card className="border-l-4 border-l-muted-foreground">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs font-bold text-muted-foreground tracking-tight">#1050</span>
                    <div className="w-4 h-4 text-green-600">✓</div>
                  </div>
                  <h4 className="font-bold text-sm text-muted-foreground mb-1">Old Town Library</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span>12 pcs</span>
                    <span>Completed Oct 23</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}