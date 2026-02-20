import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Phone, Mail, MessageCircle, CheckCircle } from "lucide-react"

const servicesData = {
  "printing-services": {
    title: "Printing Services",
    description: "Professional printing solutions including banners, business cards, brochures, and promotional materials with vibrant colors and crisp quality.",
    image: "/professional-banner-printing-nairobi-kenya.jpg",
    features: ["High Quality Printing", "Fast Delivery", "Competitive Pricing", "Custom Designs", "Bulk Orders"],
    startingFrom: "KES 500",
    gallery: [
      "/professional-banner-printing-nairobi-kenya.jpg",
      "/professional-event-banners-displays.jpg",
      "/modern-printing-press-industrial.jpg"
    ]
  },
  "branding-services": {
    title: "Corporate Branding",
    description: "Complete branding solutions including t-shirts, uniforms, caps, and corporate apparel with custom designs.",
    image: "/branded-corporate-t-shirts-uniform.jpg",
    features: ["Custom Designs", "Premium Materials", "Expert Installation", "Brand Consultation", "Quality Assurance"],
    startingFrom: "KES 800",
    gallery: [
      "/branded-corporate-t-shirts-uniform.jpg",
      "/corporate-branding-kenya-business.jpg",
      "/corporate-event-branding-kenya.jpg"
    ]
  },
  "uv-printing": {
    title: "UV Printing",
    description: "Advanced UV printing technology for promotional items, branded merchandise, and custom products.",
    image: "/uv-printed-promotional-items-bottles.jpg",
    features: ["Advanced Technology", "Eco-Friendly", "Long-lasting Results", "High Precision", "Versatile Applications"],
    startingFrom: "KES 1,200",
    gallery: [
      "/uv-printed-promotional-items-bottles.jpg",
      "/uv-printed-branded-water-bottles.jpg",
      "/uv-printing-promotional-products.jpg"
    ]
  },
  "signage-services": {
    title: "Signage & 3D Signs",
    description: "Indoor and outdoor signage including 3D letters, LED signs, and building signage.",
    image: "/3d-signage-storefront-kenya.jpg",
    features: ["3D Design", "LED Options", "Weather Resistant", "Custom Fabrication", "Installation Service"],
    startingFrom: "KES 2,000",
    gallery: [
      "/3d-signage-storefront-kenya.jpg",
      "/3d-company-signage-letters.jpg",
      "/3d-restaurant-signage-illuminated.jpg"
    ]
  },
  "vehicle-branding": {
    title: "Vehicle Branding",
    description: "Complete vehicle branding solutions including car wraps, fleet branding, and mobile advertising.",
    image: "/branded-vehicle-fleet-company-cars.jpg",
    features: ["Full Vehicle Wraps", "Fleet Branding", "High Quality Materials", "Mobile Advertising", "Professional Installation"],
    startingFrom: "KES 15,000",
    gallery: [
      "/branded-vehicle-fleet-company-cars.jpg",
      "/branded-vehicle-car-wrapping-kenya.jpg",
      "/vehicle-branding-car-wrap-kenya.jpg"
    ]
  },
  "laser-cutting": {
    title: "Laser Cutting",
    description: "Precision laser cutting services for acrylic, wood, engraving, and custom displays.",
    image: "/acrylic-menu-holders-displays.jpg",
    features: ["Precision Cutting", "Custom Shapes", "Quick Turnaround", "Various Materials", "Detailed Engraving"],
    startingFrom: "KES 300",
    gallery: [
      "/acrylic-menu-holders-displays.jpg",
      "/acrylic-menu-holders.jpg",
      "/3d-printing.jpg"
    ]
  }
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = servicesData[slug as keyof typeof servicesData]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-primary/20 to-primary/5">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Details */}
            <Card>
              <CardHeader>
                <CardTitle>Service Overview</CardTitle>
                <CardDescription>
                  Comprehensive {service.title.toLowerCase()} solutions for your business needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description} Our expert team ensures high-quality results with attention to detail 
                  and customer satisfaction. We use the latest technology and premium materials to deliver 
                  exceptional results that exceed your expectations.
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Our Work</CardTitle>
                <CardDescription>
                  Examples of our {service.title.toLowerCase()} projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.gallery.map((image, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${service.title} example ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Get Started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <p className="text-3xl font-bold text-primary">{service.startingFrom}</p>
                </div>
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Get Quote
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="https://wa.me/254701869821" target="_blank">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">+254 701 869 821</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">brandsonmedia@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">WhatsApp Available</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }))
}
