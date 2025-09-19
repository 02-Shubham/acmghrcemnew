// "use client";
// import { ParallaxScroll } from "@/components/ui/parallax-scroll";

// export  default function ParallaxScrollDemo() {
//   return <ParallaxScroll images={images} />;
// }

// const images = [
//   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//   "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//   "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
//   "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
//   "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
// ];
// const images = [
//     { src: '/images/image1.jpg', info: 'Image 1 Description' },
//     { src: '/images/image2.jpg', info: 'Image 2 Description' },
//     { src: '/images/image3.jpg', info: 'Image 3 Description' },
//     { src: '/images/image4.jpg', info: 'Image 4 Description' },
//     { src: '/images/image5.jpg', info: 'Image 5 Description' },
//     { src: '/images/image6.jpg', info: 'Image 6 Description' },
//     { src: '/images/image7.jpg', info: 'Image 7 Description' },
//     { src: '/images/image8.jpg', info: 'Image 8 Description' },
//     { src: '/images/image9.jpg', info: 'Image 9 Description' },
//     { src: '/images/image10.jpg', info: 'Image 10 Description' },
//   ];

"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, ArrowRight, Menu, Instagram, Twitter, Facebook } from "lucide-react"

export default function EventGallery() {
  const heroRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    // Observe all gallery items
    const galleryItems = document.querySelectorAll(".gallery-item")
    galleryItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToEvent = (eventId: string) => {
    const element = document.getElementById(eventId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">UC</span>
              </div>
              <span className="font-semibold text-lg">University College</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToEvent("event-1")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Graduation
              </button>
              <button
                onClick={() => scrollToEvent("event-2")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Cultural Festival
              </button>
              <button
                onClick={() => scrollToEvent("event-3")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Sports Events
              </button>
              <button
                onClick={() => scrollToEvent("event-4")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Academic
              </button>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
                Register
              </Button>
              <Button size="icon" variant="ghost" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6 opacity-0 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">
              Campus Life • Events
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up animate-delay-100 text-balance">
            Campus Events
            <span className="block text-primary">Gallery</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 opacity-0 animate-fade-in-up animate-delay-200 text-pretty max-w-2xl mx-auto">
            Discover the vibrant moments that define our university experience. From academic achievements to cultural
            celebrations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animate-delay-300">
            <Button size="lg" onClick={scrollToGallery} className="group">
              Explore Gallery
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Upcoming Events
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up animate-delay-500">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <div className="w-px h-8 bg-border mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Event 1: Graduation Ceremony */}
      <section id="event-1" className="py-20 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/90 text-primary-foreground">Academic</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Graduation Ceremony 2024</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Celebrating the achievements of our graduating class with family, friends, and faculty
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                May 15, 2024
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Main Stadium
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                2,500 attendees
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card className="gallery-item opacity-0 md:col-span-2 lg:col-span-2 md:row-span-2 overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-500">
              <div className="relative h-64 md:h-full">
                // eslint-disable-next-line react/jsx-no-undef, react/jsx-no-undef
                <Image
                  src="/placeholder-ynyjn.png"
                  alt="Graduation Ceremony Main"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </Card>
            <Card className="gallery-item opacity-0 overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-500">
              <div className="relative h-64">
                <Image
                  src="/placeholder-ymuhk.png"
                  alt="Graduates Walking"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </Card>
            <Card className="gallery-item opacity-0 overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-500">
              <div className="relative h-64">
                <Image
                  src="/placeholder-fnp18.png"
                  alt="Diploma Ceremony"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </Card>
            <Card className="gallery-item opacity-0 md:col-span-2 overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-500">
              <div className="relative h-64">
                <img
                  src="/placeholder-ilyxo.png"
                  alt="Family Celebration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">UC</span>
                </div>
                <span className="font-semibold text-lg">University College</span>
              </div>
              <p className="text-muted-foreground mb-4 text-pretty">
                Creating memorable experiences and fostering community through engaging campus events and activities.
              </p>
              <div className="flex gap-4">
                <Button size="icon" variant="ghost">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Events Calendar
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Photo Gallery
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Student Organizations
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Campus News
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Student Activities Office</p>
                <p>123 Campus Drive</p>
                <p>University City, UC 12345</p>
                <p>events@university.edu</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 University College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

