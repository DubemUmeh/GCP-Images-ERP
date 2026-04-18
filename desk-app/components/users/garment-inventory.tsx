import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Search, Bell, Filter } from 'lucide-react'

export default function GarmentInventory() {
  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <header className="flex justify-between items-center px-6 py-4 border-b bg-card">
        <div className="flex items-center space-x-4">
          <span className="uppercase text-lg font-bold">Production Section</span>
          <span className="h-4 w-px bg-muted"></span>
          <span className="font-mono text-xs text-muted-foreground">REF: INV-2024-Q3</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              className="pl-9 w-64 text-xs uppercase tracking-wider"
              placeholder="SEARCH INVENTORY..." />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-destructive rounded-full"></span>
            </Button>
            <div className="flex items-center space-x-2 border-l pl-4">
              <Badge variant="secondary" className="text-xs">CREW</Badge>
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1RjW5ZzhXhFq8friDjaP0iq3PE86xQk1RXcEKFGCHqsvDaXRzfA0vi66yI44CpbbfEOGiNfibX9qcEMmG0P5MblI-fFTzR_QqcvEDlcK0-cmYD05xHQCCqnx76OZyPwdlZx4diSy6dbHMYXlDpmOZnEzkwG8vLGaJvndqas-1T8WRYK_rgM6noSp4yc9L0zA_zX8jv4E38-X6y1srIBnqDgvLVVcPKeGX4McFYcFmEQvwZHisb1KzAm2GrZ3cg7v4_ECPhZPpAkx6" />
                <AvatarFallback>PW</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>
      {/* Content Canvas */}
      <section className="p-8 space-y-6">
        {/* Filter Bar */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <div className="flex flex-col">
                  <label className="text-xs font-bold uppercase tracking-widest mb-1">Filter by Brand</label>
                  <Select>
                    <SelectTrigger className="w-32 border-none bg-transparent p-0 h-auto">
                      <SelectValue placeholder="All Brands" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Brands</SelectItem>
                      <SelectItem value="gildan">Gildan</SelectItem>
                      <SelectItem value="bella">Bella+Canvas</SelectItem>
                      <SelectItem value="next">Next Level</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="h-8 w-px bg-muted"></div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold uppercase tracking-widest mb-1">Base Color</label>
                  <Select>
                    <SelectTrigger className="w-32 border-none bg-transparent p-0 h-auto">
                      <SelectValue placeholder="Any Color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Color</SelectItem>
                      <SelectItem value="whites">Whites</SelectItem>
                      <SelectItem value="blacks">Blacks</SelectItem>
                      <SelectItem value="heathers">Heathers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="h-8 w-px bg-muted"></div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold uppercase tracking-widest mb-1">Size Range</label>
                  <Select>
                    <SelectTrigger className="w-32 border-none bg-transparent p-0 h-auto">
                      <SelectValue placeholder="All Sizes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sizes</SelectItem>
                      <SelectItem value="standard">Standard (S-XL)</SelectItem>
                      <SelectItem value="extended">Extended (2XL+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Clear All</Button>
                <Button size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Dense Table Area */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Brand</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Style Name</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">SKU</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">Available Colors</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-center">Size Run</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-right">Stock Qty</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-right">Reorder</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-muted transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="w-12 h-8 bg-muted rounded flex items-center justify-center font-bold text-xs">GILDAN</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold block">5000</span>
                    <span className="text-xs text-muted-foreground uppercase">Heavy Cotton T-Shirt</span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs font-bold text-secondary">G5000</td>
                  <td className="px-6 py-4">
                    <div className="flex -space-x-1">
                      <div className="w-4 h-4 rounded-full bg-white border border-border" title="White"></div>
                      <div className="w-4 h-4 rounded-full bg-black" title="Black"></div>
                      <div className="w-4 h-4 rounded-full bg-red-600" title="Red"></div>
                      <div className="w-4 h-4 rounded-full bg-blue-600" title="Blue"></div>
                      <div className="w-4 h-4 rounded-full bg-green-700" title="Green"></div>
                      <span className="ml-2 text-xs font-mono text-muted-foreground">+12</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge variant="secondary" className="text-xs">S–5XL</Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-mono font-bold">1,240</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-mono text-xs text-muted-foreground">500</span>
                  </td>
                </tr>
                <tr className="hover:bg-muted transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="w-12 h-8 bg-muted rounded flex items-center justify-center font-bold text-xs">BELLA+CANVAS</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold block">3001</span>
                    <span className="text-xs text-muted-foreground uppercase">Unisex Jersey Tee</span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs font-bold text-secondary">B3001</td>
                  <td className="px-6 py-4">
                    <div className="flex -space-x-1">
                      <div className="w-4 h-4 rounded-full bg-white border border-border" title="White"></div>
                      <div className="w-4 h-4 rounded-full bg-black" title="Black"></div>
                      <div className="w-4 h-4 rounded-full bg-blue-900" title="Navy"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-500" title="Grey"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge variant="secondary" className="text-xs">S–4XL</Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Badge variant="destructive" className="font-mono">85</Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-mono text-xs font-bold text-destructive">200</span>
                  </td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="px-6 py-0" colSpan={7}>
                    <div className="py-4 border-l-4 border-destructive pl-8 my-2">
                      <div className="grid grid-cols-8 gap-4">
                        <div className="flex flex-col">
                          <span className="text-xs font-mono text-muted-foreground uppercase">Small</span>
                          <span className="font-mono text-sm font-bold">12</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-mono text-muted-foreground uppercase">Medium</span>
                          <span className="font-mono text-sm font-bold">24</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-mono text-muted-foreground uppercase">Large</span>
                          <span className="font-mono text-sm font-bold text-destructive">4</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-mono text-muted-foreground uppercase">X-Large</span>
                          <span className="font-mono text-sm font-bold">18</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-mono text-muted-foreground uppercase">2X-Large</span>
                          <span className="font-mono text-sm font-bold text-destructive">0</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-mono text-muted-foreground uppercase">3X-Large</span>
                          <span className="font-mono text-sm font-bold">12</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-mono text-muted-foreground uppercase">4X-Large</span>
                          <span className="font-mono text-sm font-bold">15</span>
                        </div>
                        <div className="flex items-center justify-end">
                          <Button variant="ghost" size="sm" className="text-xs">Close Detail</Button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-muted transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="w-12 h-8 bg-muted rounded flex items-center justify-center font-bold text-xs">NEXT LEVEL</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold block">6210</span>
                    <span className="text-xs text-muted-foreground uppercase">Premium Fitted CVC Tee</span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs font-bold text-secondary">N6210</td>
                  <td className="px-6 py-4">
                    <div className="flex -space-x-1">
                      <div className="w-4 h-4 rounded-full bg-black" title="Black"></div>
                      <div className="w-4 h-4 rounded-full bg-blue-700" title="Royal"></div>
                      <div className="w-4 h-4 rounded-full bg-green-600" title="Kelly"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Badge variant="secondary" className="text-xs">S–3XL</Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-mono font-bold">450</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-mono text-xs text-muted-foreground">100</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
        {/* Dashboard Stats Summary */}
        <div className="grid grid-cols-4 gap-4">
          <Card className="border-l-4 border-muted-foreground">
            <CardContent className="p-4">
              <p className="text-xs font-bold uppercase tracking-widest mb-1">Total Items</p>
              <p className="text-2xl font-bold">4,812</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-destructive">
            <CardContent className="p-4">
              <p className="text-xs font-bold text-destructive uppercase tracking-widest mb-1">Low Stock Alerts</p>
              <p className="text-2xl font-bold">12</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-secondary">
            <CardContent className="p-4">
              <p className="text-xs font-bold uppercase tracking-widest mb-1">Active Brands</p>
              <p className="text-2xl font-bold">08</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-green-600">
            <CardContent className="p-4">
              <p className="text-xs font-bold uppercase tracking-widest mb-1">Inventory Health</p>
              <p className="text-2xl font-bold">94%</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}