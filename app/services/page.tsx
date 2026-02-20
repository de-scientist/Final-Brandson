import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Phone, Mail, MessageCircle } from "lucide-react"

const services = [
  {
    id: "printing-services",
    title: "Printing Services",
    description: "Professional printing solutions including banners, business cards, brochures, and promotional materials with vibrant colors and crisp quality.",
    features: ["High Quality Printing", "Fast Delivery", "Competitive Pricing", "Custom Designs", "Bulk Orders"],
    startingFrom: "KES 500",
    popular: true,
    image: "/professional-banner-printing-nairobi-kenya.jpg"
  },
  {
    id: "branding-services",
    title: "Corporate Branding",
    description: "Complete branding solutions including t-shirts, uniforms, caps, and corporate apparel with custom designs.",
    features: ["Custom Designs", "Premium Materials", "Expert Installation", "Brand Consultation", "Quality Assurance"],
    startingFrom: "KES 800",
    popular: false,
    image: "/branded-corporate-t-shirts-uniform.jpg"
  },
  {
    id: "uv-printing",
    title: "UV Printing",
    description: "Advanced UV printing technology for promotional items, branded merchandise, and custom products.",
    features: ["Advanced Technology", "Eco-Friendly", "Long-lasting Results", "High Precision", "Versatile Applications"],
    startingFrom: "KES 1,200",
    popular: true,
    isNew: true,
    image: "/uv-printed-promotional-items-bottles.jpg"
  },
  {
    id: "signage-services",
    title: "Signage & 3D Signs",
    description: "Indoor and outdoor signage including 3D letters, LED signs, and building signage.",
    features: ["3D Design", "LED Options", "Weather Resistant", "Custom Fabrication", "Installation Service"],
    startingFrom: "KES 2,000",
    popular: false,
    image: "/3d-signage-storefront-kenya.jpg"
  },
  {
    id: "vehicle-branding",
    title: "Vehicle Branding",
    description: "Complete vehicle branding solutions including car wraps, fleet branding, and mobile advertising.",
    features: ["Full Vehicle Wraps", "Fleet Branding", "High Quality Materials", "Mobile Advertising", "Professional Installation"],
    startingFrom: "KES 15,000",
    popular: true,
    image: "/branded-vehicle-fleet-company-cars.jpg"
  },
  {
    id: "laser-cutting",
    title: "Laser Cutting",
    description: "Precision laser cutting services for acrylic, wood, engraving, and custom displays.",
    features: ["Precision Cutting", "Custom Shapes", "Quick Turnaround", "Various Materials", "Detailed Engraving"],
    startingFrom: "KES 300",
    popular: false,
    image: "/acrylic-menu-holders-displays.jpg"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/20 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive printing and branding solutions for your business needs
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="https://wa.me/254701869821" target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Get Quote
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={`/services/${service.id}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 bg-card border-border h-full overflow-hidden cursor-pointer">
                {/* Service Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/90 hover:bg-white text-gray-900"
                    >
                      <ArrowRight className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    {service.isNew && (
                      <Badge variant="secondary" className="bg-green-500 text-white text-xs">
                        New
                      </Badge>
                    )}
                    {service.popular && (
                      <Badge variant="secondary" className="bg-orange-500 text-white text-xs">
                        Popular
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-sm">{service.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {service.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{service.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        <p className="text-lg font-bold text-primary">{service.startingFrom}</p>
                      </div>
                      <Button size="sm" className="shrink-0">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today for a free consultation and quote for your printing and branding needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-sm text-muted-foreground">+254 701 869 821</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-sm text-muted-foreground">brandsonmedia@gmail.com</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Chat with us</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="https://wa.me/254701869821" target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start Chat
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Form
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
