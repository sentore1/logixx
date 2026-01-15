'use client'
import { useState } from 'react'
import { Calculator, Plane, Ship, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function QuickQuoteCalculator() {
  const [formData, setFormData] = useState({
    serviceType: '',
    weight: '',
    destination: ''
  })
  const [quote, setQuote] = useState<number | null>(null)

  const rates = {
    'air-freight': { base: 8, perKg: 12 },
    'sea-freight': { base: 150, perKg: 2 },
    'road-transport': { base: 50, perKg: 3 }
  }

  const calculateQuote = () => {
    if (!formData.serviceType || !formData.weight) return

    const weight = parseFloat(formData.weight)
    const serviceRates = rates[formData.serviceType as keyof typeof rates]
    
    let total = serviceRates.base + (weight * serviceRates.perKg)
    
    if (formData.destination.toLowerCase().includes('international')) {
      total *= 1.5
    }

    setQuote(Math.round(total))
  }

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'air-freight': return <Plane className="size-4" />
      case 'sea-freight': return <Ship className="size-4" />
      case 'road-transport': return <Truck className="size-4" />
      default: return <Calculator className="size-4" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-yellow-600">
          <Calculator className="size-5" />
          Quick Quote Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="service">Service Type</Label>
          <select 
            value={formData.serviceType} 
            onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          >
            <option value="">Select service</option>
            <option value="air-freight">Air Freight</option>
            <option value="sea-freight">Sea Freight</option>
            <option value="road-transport">Road Transport</option>
          </select>
        </div>

        <div>
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            placeholder="Enter weight"
            value={formData.weight}
            onChange={(e) => setFormData({...formData, weight: e.target.value})}
          />
        </div>

        <div>
          <Label htmlFor="destination">Destination</Label>
          <Input
            id="destination"
            placeholder="City/Country"
            value={formData.destination}
            onChange={(e) => setFormData({...formData, destination: e.target.value})}
          />
        </div>

        <Button 
          onClick={calculateQuote}
          className="w-full bg-yellow-600 hover:bg-yellow-700"
          disabled={!formData.serviceType || !formData.weight}
        >
          Calculate Quote
        </Button>

        {quote && (
          <div className="mt-4 p-4 bg-white rounded-lg text-center border">
            <div className="flex items-center justify-center gap-2 mb-2">
              {getServiceIcon(formData.serviceType)}
              <span className="font-semibold text-gray-800">Estimated Cost</span>
            </div>
            <div className="text-2xl font-bold text-yellow-600 mb-2">
              ${quote} USD
            </div>
            <p className="text-sm text-gray-600 mb-3">
              For {formData.weight}kg to {formData.destination}
            </p>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => window.location.href = '/contact'}
              className="border-yellow-600 text-yellow-600 hover:bg-yellow-50"
            >
              Get Detailed Quote
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}