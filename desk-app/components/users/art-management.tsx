import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Search, Bell, FileText, Clock, Package, Eye, Upload, Download, Trash2, CheckCircle, Circle } from 'lucide-react'

export default function ArtManagement() {
  return (
    <div className="h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="flex justify-between items-center px-6 py-4 border-b bg-card">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-bold uppercase tracking-tight">Art Management</h2>
          <div className="flex items-center bg-muted px-3 py-1 rounded-md">
            <Search className="h-4 w-4 text-muted-foreground mr-2" />
            <Input className="border-none bg-transparent focus:ring-0 text-sm w-48 h-auto p-0" placeholder="Search assets..." />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">CREW</Badge>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeEKhl0240lrbNxAFcA-8r6-cwBK32NGIhUsN69VNOUJSKr0MJgFP38oNoZ5c0X1V0yHHZZUg6t6MF7UC8CgeKwq9-aUgg-pF2Vv_TfUlohAxudJAL8QvoFQr9hJl-s8ijkuON0yaoYkzVPwLdh-OdkU2Iw6mHu4qBUMfmPc81C834gJym2ATSLxBv5pFRJ9ZvL-kxJZlNp3fhyKKkBQ3fnvFblOgGwvtn5VcV9Tw56zKXKO81LtPnhd7aDZQZQTa4cAva0AucRIbG" />
            <AvatarFallback>PM</AvatarFallback>
          </Avatar>
        </div>
      </header>
      {/* Art Workspace Grid */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel: Searchable Job List */}
        <Card className="w-[350px] flex flex-col shadow-sm">
          <CardHeader className="pb-4">
            <Input placeholder="Search Jobs..." className="w-full" />
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-0">
            {/* Job Item: Active */}
            <div className="p-4 border-l-4 border-primary bg-muted cursor-pointer">
              <div className="flex justify-between items-start mb-1">
                <span className="text-xs font-medium text-secondary">#1043</span>
                <Badge variant="default" className="text-xs">Needs Art</Badge>
              </div>
              <h4 className="font-semibold text-foreground leading-tight">BRIGHT STAR EVENTS</h4>
              <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  <span>1 FILE</span>
                </div>
                <span>DUE: 5D</span>
              </div>
            </div>
            {/* Job Item */}
            <div className="p-4 hover:bg-muted transition-colors cursor-pointer border-b">
              <div className="flex justify-between items-start mb-1">
                <span className="text-xs font-medium text-muted-foreground">#1047</span>
                <Badge variant="outline" className="text-xs">Needs Art</Badge>
              </div>
              <h4 className="font-semibold text-foreground leading-tight">AFROFEST COLLECTIVE</h4>
              <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  <span>0 FILES</span>
                </div>
                <span>DUE: 8D</span>
              </div>
            </div>
            {/* Additional Decorative Items */}
            <div className="p-4 hover:bg-muted transition-colors cursor-pointer border-b">
              <div className="flex justify-between items-start mb-1">
                <span className="text-xs font-medium text-muted-foreground">#1048</span>
                <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">Approved</Badge>
              </div>
              <h4 className="font-semibold text-foreground leading-tight">URBAN SNEAKER CO.</h4>
              <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  <span>3 FILES</span>
                </div>
                <span>DUE: TOMORROW</span>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Right Panel: File Manager */}
        <div className="flex-1 flex flex-col p-6 overflow-y-auto bg-background">
          {/* Job Summary Header */}
          <header className="flex justify-between items-end mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-sm">JOB #1043</Badge>
                <Badge variant="destructive" className="text-xs">Priority High</Badge>
              </div>
              <h1 className="text-4xl font-bold uppercase">Bright Star Events</h1>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Package className="h-4 w-4" />
                  <span className="font-bold">75x</span> Gildan 64000
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Due in 5 days</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">View Order</Button>
              <Button>Finalize Batch</Button>
            </div>
          </header>
          <div className="grid grid-cols-12 gap-6">
            {/* Art Assets Area */}
            <div className="col-span-12 lg:col-span-9 space-y-6">
              {/* Upload Zone */}
              <Card className="border-2 border-dashed border-muted-foreground/25 hover:border-primary hover:bg-muted/50 transition-all cursor-pointer">
                <CardContent className="p-12 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4 group-hover:text-primary" />
                  <p className="font-bold text-lg uppercase tracking-wide">Drop .AI, .PDF, .PNG, .EPS files here</p>
                  <p className="text-sm text-muted-foreground mt-1">Maximum file size: 250MB</p>
                </CardContent>
              </Card>
              {/* Uploaded Files Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* File Card */}
                <Card className="p-4">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-muted rounded-md shrink-0 flex items-center justify-center overflow-hidden border">
                      <img alt="Mockup Preview" className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbFEHizm-U8d5auApf28HvmbMt0nV1VpSAW6h0-7-s1lvrDhgpXQYyuGgf6j_B5tJ-bqljqhlmvxGJ15wWVL86PztGE97cS4KV8Fi3q7xrAtBISF6PyqEK-E7DpV418aeiELyW_fupwZeVLMHuMv2Vd7ybKE58uYr2SHRNXoHZOHY2NX524MLBgrxKCBICInmwxeuPTxqd_jTRNyoz9R8joVGrmUpNlye71xFLIcXcILLvfKFHP_CxC5ByT9uPocudIZvWNIg22qPK" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h5 className="text-xs font-bold break-all">brightstar_mockup_v1.png</h5>
                        <Badge variant="secondary" className="text-xs">V1</Badge>
                      </div>
                      <div className="mt-2 space-y-1">
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Avatar className="h-3 w-3" />
                          Adjoa (Art Lead)
                        </p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                      <div className="mt-auto pt-3 flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="text-xs">
                          <Download className="h-3 w-3 mr-1" /> Download
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs text-primary">Set Primary</Button>
                        <Button variant="ghost" size="sm" className="text-xs text-destructive">
                          <Trash2 className="h-3 w-3 mr-1" /> Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            {/* Right Metadata Sidebar */}
            <div className="col-span-12 lg:col-span-3 space-y-6">
              {/* Approval Toggle Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xs uppercase tracking-widest">Current Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-between border-l-4 border-muted-foreground">
                    <span className="text-xs uppercase">Pending Review</span>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between border-l-4 border-green-500 bg-green-50 hover:bg-green-100">
                    <span className="text-xs uppercase text-green-700">Approved</span>
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between border-l-4 border-destructive bg-red-50 hover:bg-red-100">
                    <span className="text-xs uppercase text-destructive">Changes Req.</span>
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </CardContent>
              </Card>
              {/* Version History */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xs uppercase tracking-widest">Version History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative pl-6 space-y-6">
                    <div className="absolute left-2 top-1 bottom-1 w-px bg-muted-foreground"></div>
                    <div className="relative">
                      <div className="absolute -left-6 top-1 w-3 h-3 rounded-full border-2 border-primary bg-background"></div>
                      <p className="text-xs font-bold">v1.0 (Current)</p>
                      <p className="text-xs text-muted-foreground mt-1">Initial upload by Adjoa</p>
                      <p className="text-xs text-muted-foreground">2023-10-24 14:32</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Technical Specs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xs uppercase tracking-widest">Technical Specs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center bg-muted p-2 rounded-md">
                    <span className="text-xs uppercase font-bold">Inks</span>
                    <span className="text-xs font-bold text-secondary">CMYK 4/0</span>
                  </div>
                  <div className="flex justify-between items-center bg-muted p-2 rounded-md">
                    <span className="text-xs uppercase font-bold">Print Method</span>
                    <span className="text-xs font-bold text-secondary">DTG PRO</span>
                  </div>
                  <div className="flex justify-between items-center bg-muted p-2 rounded-md">
                    <span className="text-xs uppercase font-bold">Sizing</span>
                    <span className="text-xs font-bold text-secondary">12" x 14"</span>
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