import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Upload, Badge as BadgeIcon, Key, Settings, Save } from "lucide-react"

export default function StaffProfile() {
  return (
    <main className="pt-[56px] min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Column: Avatar & Summary */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="relative inline-block group">
                  <div className="w-32 h-32 rounded-full border-4 border-muted overflow-hidden mx-auto mb-6 bg-muted flex items-center justify-center">
                    <img alt="Marcus Tetteh" className="w-full h-full object-cover"
                      data-alt="Portrait of a young professional man named Marcus Tetteh with a warm smile and confident posture in professional attire"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE_9CSQYf66PkApMPu4KZnhx0J5jKmTWEYa-XsQXdUT7vHa7fo0Ow9capO-FP_zY04Vh_-QNZ8xmHb_5KkTRK-Uy46UxiPQOxJ-3DjFmeoQx4hLHpz-LRWqUDzJvFn_lARyLDjBMuUWf4TMB6WMLY6w9jKOfD-tQg54vTcAxVW-HPwtaHX9o0HQxG1WU58e3lzmGe9goqeY_g_BUGk1nVcSh506cDRNRXPCLWFBBnQOCRm-ckv4MMDcUsGTHvzwbttVfMtNutCwBZ0" />
                  </div>
                  <Button size="sm" className="absolute bottom-0 right-0 rounded-full shadow-lg">
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="text-2xl font-bold">Marcus Tetteh</h3>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <Badge variant="secondary">CREW</Badge>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-tighter">Member since</p>
                  <p className="text-sm font-semibold mt-1">01 Jan 2024</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-md">
                    <span className="block text-[10px] font-mono text-secondary uppercase">Jobs Completed</span>
                    <span className="block text-xl font-bold">1,248</span>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <span className="block text-[10px] font-mono text-primary uppercase">Uptime Score</span>
                    <span className="block text-xl font-bold">98%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Right Column: Settings Form */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {/* Personal Info Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BadgeIcon className="h-5 w-5 text-primary" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold uppercase tracking-wider">First Name</Label>
                    <Input defaultValue="Marcus" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold uppercase tracking-wider">Last Name</Label>
                    <Input defaultValue="Tetteh" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold uppercase tracking-wider">Email Address</Label>
                    <div className="relative">
                      <Input value="marcus@printdenk.shop" disabled className="pr-10" />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        🔒
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-semibold uppercase tracking-wider">Phone Number</Label>
                    <Input defaultValue="+1 (555) 012-3456" />
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Change Password Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Key className="h-5 w-5 text-primary" />
                  Change Password
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="max-w-md space-y-2">
                    <Label className="text-xs font-semibold uppercase tracking-wider">Current Password</Label>
                    <Input type="password" placeholder="••••••••••••" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold uppercase tracking-wider">New Password</Label>
                      <Input type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold uppercase tracking-wider">Confirm New Password</Label>
                      <Input type="password" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* UI Preferences Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-primary" />
                  UI Preferences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Density Toggle */}
                  <div className="space-y-4">
                    <Label className="text-xs font-semibold uppercase tracking-wider">Density Setting</Label>
                    <div className="flex bg-muted p-1 rounded w-fit">
                      <Button variant="default" size="sm" className="text-xs font-bold uppercase tracking-wide">Compact</Button>
                      <Button variant="ghost" size="sm" className="text-xs font-bold uppercase tracking-wide">Comfortable</Button>
                    </div>
                    <p className="text-[11px] text-muted-foreground italic">Increases data density for faster throughput scanning.</p>
                  </div>
                  {/* Default Landing Page */}
                  <div className="space-y-4">
                    <Label className="text-xs font-semibold uppercase tracking-wider">Default Landing Page</Label>
                    <Select defaultValue="dashboard">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dashboard">Dashboard</SelectItem>
                        <SelectItem value="kanban">Kanban Board</SelectItem>
                        <SelectItem value="jobs">All Jobs</SelectItem>
                        <SelectItem value="art">Art Manager</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Action Footer */}
            <div className="flex items-center justify-end gap-4 pt-4">
              <Button variant="ghost" className="text-xs font-bold uppercase tracking-widest">
                Discard Changes
              </Button>
              <Button className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}