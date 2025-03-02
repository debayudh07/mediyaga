"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-green-900 bg-black/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Plus className="h-6 w-6 text-green-500" />
          <span className="text-xl font-bold text-green-300">MediVend</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-green-300 hover:text-green-400 transition-colors">
            Home
          </Link>
          <Link href="/technology" className="text-green-300 hover:text-green-400 transition-colors">
            Technology
          </Link>
          <Link href="#" className="text-green-300 hover:text-green-400 transition-colors">
            Locations
          </Link>
          <Link href="#" className="text-green-300 hover:text-green-400 transition-colors">
            About Us
          </Link>
          <Link href="#" className="text-green-300 hover:text-green-400 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-green-500 text-black hover:bg-green-400">Get Started</Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="border-green-800">
              <Menu className="h-5 w-5 text-green-300" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black border-green-900">
            <div className="flex flex-col space-y-6 pt-6">
              <Link
                href="/"
                className="text-green-300 hover:text-green-400 text-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/technology"
                className="text-green-300 hover:text-green-400 text-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Technology
              </Link>
              <Link
                href="#"
                className="text-green-300 hover:text-green-400 text-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Locations
              </Link>
              <Link
                href="#"
                className="text-green-300 hover:text-green-400 text-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-green-300 hover:text-green-400 text-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-green-500 text-black hover:bg-green-400 w-full mt-4">Get Started</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

