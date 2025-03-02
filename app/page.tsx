/* eslint-disable */
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { QrCode, MapPin, ShieldCheck, Plus } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-300">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Medication Dispensed. <span className="text-green-400">Instantly.</span>
                </h1>
                <p className="max-w-[600px] text-green-200 md:text-xl">
                  Scan your prescription, pick up your medication from our smart vending machines. Accessible
                  healthcare, anytime, anywhere.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-green-500 text-black hover:bg-green-400">Find Nearest Location</Button>
                <Button variant="outline" className="border-green-500 text-green-300 hover:bg-green-950">
                  How It Works
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                <div className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-br from-green-500/20 to-green-300/10 blur-2xl" />
                <div className="relative h-full w-full transform perspective-1000 rotate-3 transition-all duration-500 hover:rotate-6">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="Smart medication vending machine"
                    className="h-full w-full object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Healthcare Reinvented</h2>
              <p className="max-w-[900px] text-green-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our smart medication vending machines are revolutionizing how patients access their prescriptions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card className="bg-black border-green-800 transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-green-500/20">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-green-950 mx-auto">
                  <QrCode className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">Scan & Go</h3>
                <p className="text-green-200">
                  Simply scan your prescription QR code for instant verification and dispensing.
                </p>
              </div>
            </Card>
            <Card className="bg-black border-green-800 transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-green-500/20">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-green-950 mx-auto">
                  <MapPin className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">Convenient Locations</h3>
                <p className="text-green-200">Access your medications from convenient locations across the country.</p>
              </div>
            </Card>
            <Card className="bg-black border-green-800 transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-green-500/20">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-green-950 mx-auto">
                  <ShieldCheck className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">Secure & Private</h3>
                <p className="text-green-200">Advanced security measures ensure your privacy and medication safety.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-green-900 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-green-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Three simple steps to access your medication
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="relative h-20 w-20">
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-green-900 text-green-300 text-xl font-bold">
                  1
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-green-500 transform -rotate-12" />
              </div>
              <h3 className="text-xl font-bold">Receive Digital Prescription</h3>
              <p className="text-green-200">Your doctor sends a digital prescription with a secure QR code.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="relative h-20 w-20">
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-green-900 text-green-300 text-xl font-bold">
                  2
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-green-500 transform -rotate-12" />
              </div>
              <h3 className="text-xl font-bold">Find Nearest Machine</h3>
              <p className="text-green-200">Locate the closest vending machine using our mobile app.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="relative h-20 w-20">
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-green-900 text-green-300 text-xl font-bold">
                  3
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-green-500 transform -rotate-12" />
              </div>
              <h3 className="text-xl font-bold">Scan & Collect</h3>
              <p className="text-green-200">Scan your QR code at the machine and collect your medication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-gradient-to-b from-black to-green-950 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-green-900/20 px-3 py-1 text-sm">
              Trusted by patients nationwide
            </div>
            <blockquote className="max-w-3xl text-xl text-green-200 md:text-2xl">
              "The smart vending machine made accessing my medication so much easier. No more waiting in pharmacy lines
              - I scan, collect, and go!"
            </blockquote>
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-green-800" />
              <div>
                <div className="font-medium">Sarah Johnson</div>
                <div className="text-sm text-green-400">Patient</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Experience the Future of Healthcare?
              </h2>
              <p className="max-w-[900px] text-green-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of patients who have simplified their medication access. Our network is expanding daily.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-green-500 text-black hover:bg-green-400">Sign Up Now</Button>
              <Button variant="outline" className="border-green-500 text-green-300 hover:bg-green-950">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-900 bg-black py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-2">
              <Plus className="h-6 w-6 text-green-500" />
              <span className="text-xl font-bold">MediVend</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="#" className="text-green-300 hover:text-green-400">
                About
              </Link>
              <Link href="#" className="text-green-300 hover:text-green-400">
                Locations
              </Link>
              <Link href="#" className="text-green-300 hover:text-green-400">
                How It Works
              </Link>
              <Link href="#" className="text-green-300 hover:text-green-400">
                FAQ
              </Link>
              <Link href="#" className="text-green-300 hover:text-green-400">
                Contact
              </Link>
            </nav>
            <div className="text-sm text-green-500">© 2025 MediVend Health Solutions. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

