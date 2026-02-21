import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Phone, Mail, MessageCircle, CheckCircle } from "lucide-react"

const servicesData = {
  "printing-services": {
    title: "Printing Services",
    description: "Comprehensive printing solutions including banners, stickers, poly matte materials, and all your printing needs with vibrant colors and crisp quality.",
    image: "/professional-banner-printing-nairobi-kenya.jpg",
    features: ["High Quality Printing", "Fast Delivery", "Various Materials", "Custom Sizes", "Bulk Orders"],
    startingFrom: "KES 500",
    gallery: [
      "/professional-banner-printing-nairobi-kenya.jpg",
      "/professional-event-banners-displays.jpg",
      "/modern-printing-press-industrial.jpg"
    ],
    subServices: [
      "Banners & Large Format Printing",
      "Stickers & Labels",
      "Poly Matte Materials",
      "Custom Printing",
      "Bulk Orders"
    ]
  },
  "banners": {
    title: "Banners",
    description: "All types of banners including roll up, tear drop, pop up, backdrop, telescopic, and road banners for any occasion.",
    image: "/professional-roll-up-banner-stand.jpg",
    features: ["Roll Up Banners", "Tear Drop Banners", "Pop Up Banners", "Backdrop Banners", "Telescopic Banners", "Road Banners"],
    startingFrom: "KES 1,500",
    gallery: [
      "/professional-roll-up-banner-stand.jpg",
      "/professional-event-banners-displays.jpg",
      "/event-backdrop.jpg"
    ],
    subServices: [
      "Roll Up Banners",
      "Tear Drop Banners",
      "Pop Up Banners",
      "Backdrop Banners",
      "Telescopic Banners",
      "Road Banners"
    ]
  },
  "stickers": {
    title: "Stickers & Labels",
    description: "Wall branding stickers, car wrapping, branding stickers, label stickers, packaging stickers, and contour cutting stickers.",
    image: "/branded-pens.jpg",
    features: ["Wall Branding", "Car Wrapping", "Labels", "Packaging", "Contour Cutting"],
    startingFrom: "KES 200",
    gallery: [
      "/branded-pens.jpg",
      "/branded-vehicle-car-wrapping-kenya.jpg",
      "/promotional-printing.jpg"
    ],
    subServices: [
      "Wall Branding Stickers",
      "Car Wrapping & Branding Stickers",
      "Labels Stickers",
      "Packaging Stickers",
      "Contour Cutting Stickers"
    ]
  },
  "branding-services": {
    title: "Branding Services",
    description: "Complete apparel branding including t-shirts, screen printing, embroidery, and various clothing items.",
    image: "/branded-corporate-t-shirts-uniform.jpg",
    features: ["T-Shirt Branding", "Screen Printing", "Embroidery", "Dust Coats", "Aprons", "Overalls", "Jackets", "Hoodies", "Caps", "Hats"],
    startingFrom: "KES 800",
    gallery: [
      "/branded-corporate-t-shirts-uniform.jpg",
      "/corporate-branding-kenya-business.jpg",
      "/corporate-event-branding-kenya.jpg"
    ],
    subServices: [
      "T-Shirts Branding",
      "Screen and Embroidery Services",
      "Dust Coats",
      "Aprons",
      "Overalls",
      "Jackets",
      "Hoodies",
      "Caps",
      "Hats",
      "General Apparel"
    ]
  },
  "uv-printing": {
    title: "UV Printing Services",
    description: "Custom UV printing on water bottles, notebooks, pens, gift items, mugs, tumblers, clocks, and promotional merchandise.",
    image: "/uv-printed-promotional-items-bottles.jpg",
    features: ["Water Bottles", "Notebooks", "Pens", "Gift Items", "Thermo Mugs", "Tumblers", "Clocks", "Desktop Organisers"],
    startingFrom: "KES 1,200",
    gallery: [
      "/uv-printed-promotional-items-bottles.jpg",
      "/uv-printed-branded-water-bottles.jpg",
      "/uv-printing-promotional-products.jpg"
    ],
    subServices: [
      "Water Bottles",
      "Notebooks and Diaries",
      "Pens",
      "Customised Gift Items",
      "Thermo Mugs",
      "Tumblers",
      "Clocks",
      "Desktop Organisers",
      "Promotional Merchandise",
      "Marketing Materials",
      "Giveaways"
    ]
  },
  "hotel-conferences": {
    title: "Hotel & Conference Care",
    description: "Branded conference materials including pens, notepads, notebooks, attendance registers, catalogues, and training manuals.",
    image: "/corporate-event-branding-kenya.jpg",
    features: ["Conference Pens", "Notepads", "Notebooks", "Attendance Registers", "Catalogues", "Training Manuals"],
    startingFrom: "KES 5,000",
    gallery: [
      "/corporate-event-branding-kenya.jpg",
      "/corporate-conference-event-branding.jpg",
      "/promotional.jpg"
    ],
    subServices: [
      "Branded Conference Pens",
      "Loose Leaf Notepads",
      "Notebooks",
      "Attendance Registers",
      "Catalogues",
      "Training Manuals",
      "Guides"
    ]
  },
  "training-centers": {
    title: "Training Centers Support",
    description: "Complete training support materials including manuals, awards, badges, tags, winner awards, and certificates.",
    image: "/corporate-conference-event-branding.jpg",
    features: ["Training Manuals", "Custom Awards", "Badges & Tags", "Winner Awards", "Certificates"],
    startingFrom: "KES 3,000",
    gallery: [
      "/corporate-conference-event-branding.jpg",
      "/promotional.jpg",
      "/professional-team-avatar.jpg"
    ],
    subServices: [
      "Training Manuals",
      "Customised Awards",
      "Customised Badges and Tags",
      "Winner Awards",
      "Participants Certificates"
    ]
  },
  "paper-printing": {
    title: "Paper Printing Services",
    description: "Professional paper printing including training guides, letterheads, journals, diaries, and company profiles.",
    image: "/promotional-printing.jpg",
    features: ["Training Guides", "Letterheads", "Journals", "Diaries", "Company Profiles"],
    startingFrom: "KES 1,000",
    gallery: [
      "/promotional-printing.jpg",
      "/modern-printing-press-industrial.jpg",
      "/modern-printing-press-industrial2.jpg"
    ],
    subServices: [
      "Training and Conference Guides",
      "Office Letterheads Design and Print",
      "Journals and Diaries",
      "Design and Print of Company Profiles"
    ]
  },
  "laser-cutting": {
    title: "Laser Cutting & Engraving",
    description: "Precision laser cutting and engraving on acrylic, wood, custom logos, and various materials.",
    image: "/acrylic-menu-holders-displays.jpg",
    features: ["Acrylic/Perspex", "2D/3D Logos", "Wood Cutting", "Door Signs", "Notebook Engraving", "Door Hangers", "Room Signs"],
    startingFrom: "KES 300",
    gallery: [
      "/acrylic-menu-holders-displays.jpg",
      "/acrylic-menu-holders.jpg",
      "/3d-printing.jpg"
    ],
    subServices: [
      "Acrylic/Perspex Cutting",
      "Logos 2D and 3D Customisation",
      "Wood Cutting and Wooden Key Holders",
      "Wooden Door Signs",
      "Labels",
      "Notebooks and Diaries Laser Engraving",
      "Door Hangers (Do Not Disturb, Meeting in Progress, Occupied, Room Service)",
      "Acrylic Room Key Holders",
      "Door Signs",
      "Floor Labels",
      "Building Names with Acrylic",
      "Customised Items"
    ]
  },
  "signages": {
    title: "Signages & 3D Signs",
    description: "Quality durable 3D signs for all businesses including restaurants, hotels, malls, and gas stations.",
    image: "/3d-signage-storefront-kenya.jpg",
    features: ["3D Signs", "Restaurant Signs", "Hotel Signs", "Building Signs", "Mall Signs", "Supermarket Signs", "Gas Station Signs"],
    startingFrom: "KES 2,000",
    gallery: [
      "/3d-signage-storefront-kenya.jpg",
      "/3d-company-signage-letters.jpg",
      "/3d-restaurant-signage-illuminated.jpg"
    ],
    subServices: [
      "3D Signs for All Kind of Business",
      "Big and Small Signs",
      "Restaurant Signs",
      "Barbershop Signs",
      "Hotel Signs",
      "New and Existing Buildings",
      "Malls",
      "Supermarkets",
      "Gas Stations"
    ]
  },
  "acrylic-bending": {
    title: "Acrylic Bending Services",
    description: "Precise acrylic bending for menu holders, price tag holders, promotional materials, and custom designs.",
    image: "/acrylic-menu-holders.jpg",
    features: ["Menu Holders", "Price Tag Holders", "Promotional Materials", "Food & Drink Displays", "Custom Designs"],
    startingFrom: "KES 1,500",
    gallery: [
      "/acrylic-menu-holders.jpg",
      "/acrylic-menu-holders-displays.jpg",
      "/3d-printing.jpg"
    ],
    subServices: [
      "Restaurant Menu Holders",
      "Price Tag Holders for Electronic Shops",
      "Supermarkets",
      "Promotional Materials for Foods",
      "Drinks",
      "Offers",
      "New Products",
      "Clearance Sales"
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

            {/* Sub-Services */}
            {service.subServices && service.subServices.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Services Included</CardTitle>
                  <CardDescription>
                    Detailed breakdown of our {service.title.toLowerCase()} offerings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.subServices.map((subService, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg border bg-muted/50">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium">{subService}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
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
