import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Phone, Mail, MessageCircle } from "lucide-react"

const services = [
  {
    id: "printing-services",
    title: "Printing Services",
    description: "Comprehensive printing solutions including banners, stickers, poly matte materials, and all your printing needs with vibrant colors and crisp quality.",
    features: ["High Quality Printing", "Fast Delivery", "Various Materials", "Custom Sizes", "Bulk Orders"],
    startingFrom: "KES 500",
    popular: true,
    image: "/professional-banner-printing-nairobi-kenya.jpg"
  },
  {
    id: "banners",
    title: "Banners",
    description: "All types of banners including roll up, tear drop, pop up, backdrop, telescopic, and road banners for any occasion.",
    features: ["Roll Up Banners", "Tear Drop Banners", "Pop Up Banners", "Backdrop Banners", "Telescopic Banners", "Road Banners"],
    startingFrom: "KES 1,500",
    popular: true,
    image: "/professional-roll-up-banner-stand.jpg"
  },
  {
    id: "stickers",
    title: "Stickers & Labels",
    description: "Wall branding stickers, car wrapping, branding stickers, label stickers, packaging stickers, and contour cutting stickers.",
    features: ["Wall Branding", "Car Wrapping", "Labels", "Packaging", "Contour Cutting"],
    startingFrom: "KES 200",
    popular: false,
    image: "/branded-pens.jpg"
  },
  {
    id: "branding-services",
    title: "Branding Services",
    description: "Complete apparel branding including t-shirts, screen printing, embroidery, and various clothing items.",
    features: ["T-Shirt Branding", "Screen Printing", "Embroidery", "Dust Coats", "Aprons", "Overalls", "Jackets", "Hoodies", "Caps", "Hats"],
    startingFrom: "KES 800",
    popular: true,
    image: "/branded-corporate-t-shirts-uniform.jpg"
  },
  {
    id: "uv-printing",
    title: "UV Printing Services",
    description: "Custom UV printing on water bottles, notebooks, pens, gift items, mugs, tumblers, clocks, and promotional merchandise.",
    features: ["Water Bottles", "Notebooks", "Pens", "Gift Items", "Thermo Mugs", "Tumblers", "Clocks", "Desktop Organisers"],
    startingFrom: "KES 1,200",
    popular: true,
    isNew: true,
    image: "/uv-printed-promotional-items-bottles.jpg"
  },
  {
    id: "hotel-conferences",
    title: "Hotel & Conference Care",
    description: "Branded conference materials including pens, notepads, notebooks, attendance registers, catalogues, and training manuals.",
    features: ["Conference Pens", "Notepads", "Notebooks", "Attendance Registers", "Catalogues", "Training Manuals"],
    startingFrom: "KES 5,000",
    popular: false,
    image: "/corporate-event-branding-kenya.jpg"
  },
  {
    id: "training-centers",
    title: "Training Centers Support",
    description: "Complete training support materials including manuals, awards, badges, tags, winner awards, and certificates.",
    features: ["Training Manuals", "Custom Awards", "Badges & Tags", "Winner Awards", "Certificates"],
    startingFrom: "KES 3,000",
    popular: false,
    image: "/corporate-conference-event-branding.jpg"
  },
  {
    id: "paper-printing",
    title: "Paper Printing Services",
    description: "Professional paper printing including training guides, letterheads, journals, diaries, and company profiles.",
    features: ["Training Guides", "Letterheads", "Journals", "Diaries", "Company Profiles"],
    startingFrom: "KES 1,000",
    popular: false,
    image: "/promotional-printing.jpg"
  },
  {
    id: "laser-cutting",
    title: "Laser Cutting & Engraving",
    description: "Precision laser cutting and engraving on acrylic, wood, custom logos, and various materials.",
    features: ["Acrylic/Perspex", "2D/3D Logos", "Wood Cutting", "Door Signs", "Notebook Engraving", "Door Hangers", "Room Signs"],
    startingFrom: "KES 300",
    popular: false,
    image: "/acrylic-menu-holders-displays.jpg"
  },
  {
    id: "signages",
    title: "Signages & 3D Signs",
    description: "Quality durable 3D signs for all businesses including restaurants, hotels, malls, and gas stations.",
    features: ["3D Signs", "Restaurant Signs", "Hotel Signs", "Building Signs", "Mall Signs", "Supermarket Signs", "Gas Station Signs"],
    startingFrom: "KES 2,000",
    popular: true,
    image: "/3d-signage-storefront-kenya.jpg"
  },
  {
    id: "acrylic-bending",
    title: "Acrylic Bending Services",
    description: "Precise acrylic bending for menu holders, price tag holders, promotional materials, and custom designs.",
    features: ["Menu Holders", "Price Tag Holders", "Promotional Materials", "Food & Drink Displays", "Custom Designs"],
    startingFrom: "KES 1,500",
    popular: false,
    image: "/acrylic-menu-holders.jpg"
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
