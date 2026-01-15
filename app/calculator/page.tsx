'use client'
import { useState } from 'react'
import { Calculator, Package, MapPin, Weight, Truck, Ship, Plane } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function ShippingCalculator() {
  const [formData, setFormData] = useState({
    serviceType: '',
    weight: '',
    dimensions: { length: '', width: '', height: '' },
    origin: '',
    destination: '',
    packageType: ''
  })
  const [quote, setQuote] = useState<number | null>(null)
  const [serviceRates, setServiceRates] = useState({
    'air-freight': { base: 8, perKg: 12, enabled: true },
    'sea-freight': { base: 150, perKg: 2, enabled: true },
    'road-transport': { base: 50, perKg: 3, enabled: true }
  })
  const [editingRate, setEditingRate] = useState<{service: string, field: 'base' | 'perKg'} | null>(null)

  const updateRate = (service: string, field: 'base' | 'perKg', value: string) => {
    const numValue = parseFloat(value) || 0
    setServiceRates(prev => ({
      ...prev,
      [service]: {
        ...prev[service as keyof typeof prev],
        [field]: numValue
      }
    }))
  }

  const toggleService = (service: string) => {
    setServiceRates(prev => ({
      ...prev,
      [service]: {
        ...prev[service as keyof typeof prev],
        enabled: !prev[service as keyof typeof prev].enabled
      }
    }))
  }

  const calculateShipping = () => {
    if (!formData.serviceType || !formData.weight) return

    const weight = parseFloat(formData.weight)
    const rates = serviceRates[formData.serviceType as keyof typeof serviceRates]
    
    if (!rates) return

    let total = rates.base + (weight * rates.perKg)
    
    // Add distance multiplier based on destination
    if (formData.destination.toLowerCase().includes('international')) {
      total *= 1.5
    }
    
    // Add package type multiplier
    if (formData.packageType === 'fragile') {
      total *= 1.2
    } else if (formData.packageType === 'hazardous') {
      total *= 1.8
    }

    setQuote(Math.round(total))
  }

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'air-freight': return <Plane className="size-5" />
      case 'sea-freight': return <Ship className="size-5" />
      case 'road-transport': return <Truck className="size-5" />
      default: return <Package className="size-5" />
    }
  }

  return (
    <div className="min-h-screen bg-white text-black pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shipping Calculator</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get instant quotes for your logistics needs. Calculate shipping costs for air, sea, and road transport.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="bg-black border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-[#FFBF00] flex items-center gap-2">
                <Package className="size-5" />
                Shipment Details
              </CardTitle>
              <CardDescription className="text-gray-300">Enter your package information to get a quote</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="service" className="text-[#FFBF00]">Service Type</Label>
                <Select value={formData.serviceType} onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Select shipping method" />
                    <SelectContent>
                      {serviceRates['air-freight'].enabled && <SelectItem value="air-freight">Air Freight</SelectItem>}
                      {serviceRates['sea-freight'].enabled && <SelectItem value="sea-freight">Sea Freight</SelectItem>}
                      {serviceRates['road-transport'].enabled && <SelectItem value="road-transport">Road Transport</SelectItem>}
                    </SelectContent>
                  </SelectTrigger>
                </Select>
              </div>

              <div>
                <Label htmlFor="weight" className="text-[#FFBF00]">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Enter weight in kg"
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>

              <div>
                <Label className="text-[#FFBF00]">Dimensions (cm)</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Input
                    placeholder="Length"
                    value={formData.dimensions.length}
                    onChange={(e) => setFormData({...formData, dimensions: {...formData.dimensions, length: e.target.value}})}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  <Input
                    placeholder="Width"
                    value={formData.dimensions.width}
                    onChange={(e) => setFormData({...formData, dimensions: {...formData.dimensions, width: e.target.value}})}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                  <Input
                    placeholder="Height"
                    value={formData.dimensions.height}
                    onChange={(e) => setFormData({...formData, dimensions: {...formData.dimensions, height: e.target.value}})}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="origin" className="text-[#FFBF00]">Origin</Label>
                  <Input
                    id="origin"
                    placeholder="From city/country"
                    value={formData.origin}
                    onChange={(e) => setFormData({...formData, origin: e.target.value})}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Label htmlFor="destination" className="text-[#FFBF00]">Destination</Label>
                  <Input
                    id="destination"
                    placeholder="To city/country"
                    value={formData.destination}
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="packageType" className="text-[#FFBF00]">Package Type</Label>
                <Select value={formData.packageType} onValueChange={(value) => setFormData({...formData, packageType: value})}>
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Select package type" />
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="fragile">Fragile (+20%)</SelectItem>
                      <SelectItem value="hazardous">Hazardous (+80%)</SelectItem>
                    </SelectContent>
                  </SelectTrigger>
                </Select>
              </div>

              <Button 
                onClick={calculateShipping}
                className="w-full bg-[#FFBF00] hover:bg-[#E6AC00] text-black font-semibold"
                disabled={!formData.serviceType || !formData.weight}
              >
                Calculate Shipping Cost
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {quote && (
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-[#FFBF00]">Your Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#FFBF00] mb-2">
                      ${quote} USD
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                      {getServiceIcon(formData.serviceType)}
                      <span className="capitalize">{formData.serviceType.replace('-', ' ')}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Estimated cost for {formData.weight}kg package
                    </p>
                    <Button 
                      onClick={() => {
                        alert(`Booking request submitted!\n\nService: ${formData.serviceType.replace('-', ' ')}\nWeight: ${formData.weight}kg\nFrom: ${formData.origin}\nTo: ${formData.destination}\nEstimated Cost: $${quote} USD\n\nOur team will contact you shortly at +250 793 145 109`)
                      }}
                      className="w-full bg-black hover:bg-gray-800 text-[#FFBF00] border border-[#FFBF00]"
                    >
                      Book This Shipment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="bg-black border-gray-700 text-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-[#FFBF00] text-lg">Pricing Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(serviceRates).map(([key, rates]) => {
                  const isSelected = formData.serviceType === key
                  const Icon = key === 'air-freight' ? Plane : key === 'sea-freight' ? Ship : Truck
                  const serviceName = key.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                  
                  return (
                    <div key={key} className={`p-2 rounded-lg transition-colors ${
                      rates.enabled ? (isSelected ? 'bg-[#FFBF00] text-black' : 'bg-gray-800') : 'bg-gray-900 opacity-50'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon className={`size-4 ${rates.enabled ? (isSelected ? 'text-black' : 'text-[#FFBF00]') : 'text-gray-500'}`} />
                          <div className="font-medium text-sm">{serviceName}</div>
                        </div>
                        <button
                          onClick={() => toggleService(key)}
                          className={`w-10 h-5 rounded-full transition-colors ${
                            rates.enabled ? 'bg-[#FFBF00]' : 'bg-gray-600'
                          }`}
                        >
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                            rates.enabled ? 'translate-x-5' : 'translate-x-0.5'
                          }`} />
                        </button>
                      </div>
                      {rates.enabled && (
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <Label className="text-xs text-[#FFBF00]">Base ($)</Label>
                            {editingRate?.service === key && editingRate?.field === 'base' ? (
                              <Input
                                type="number"
                                value={rates.base}
                                onChange={(e) => updateRate(key, 'base', e.target.value)}
                                onBlur={() => setEditingRate(null)}
                                onKeyDown={(e) => e.key === 'Enter' && setEditingRate(null)}
                                className="h-7 text-xs bg-gray-900 text-white border-gray-600"
                                autoFocus
                              />
                            ) : (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setEditingRate({service: key, field: 'base'})}
                                className="h-7 text-xs bg-[#FFBF00] hover:bg-[#E6AC00] text-black border-[#FFBF00] justify-start px-2"
                              >
                                ${rates.base}
                              </Button>
                            )}
                          </div>
                          <div>
                            <Label className="text-xs text-[#FFBF00]">Per Kg ($)</Label>
                            {editingRate?.service === key && editingRate?.field === 'perKg' ? (
                              <Input
                                type="number"
                                value={rates.perKg}
                                onChange={(e) => updateRate(key, 'perKg', e.target.value)}
                                onBlur={() => setEditingRate(null)}
                                onKeyDown={(e) => e.key === 'Enter' && setEditingRate(null)}
                                className="h-7 text-xs bg-gray-900 text-white border-gray-600"
                                autoFocus
                              />
                            ) : (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setEditingRate({service: key, field: 'perKg'})}
                                className="h-7 text-xs bg-[#FFBF00] hover:bg-[#E6AC00] text-black border-[#FFBF00] justify-start px-2"
                              >
                                ${rates.perKg}
                              </Button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-[#FFBF00]">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Contact our logistics experts for personalized quotes and assistance.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-[#FFBF00]" />
                    <span>Kigali, Rwanda</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="size-4 text-[#FFBF00]" />
                    <span>+250 793 145 109</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}