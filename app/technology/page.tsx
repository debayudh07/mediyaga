/* eslint-disable */
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Scan,
  ShieldCheck,
  Zap,
  Database,
  FileText,
  CheckCircle,
  AlertTriangle,
  Pill,
  Microscope,
  Cpu,
} from "lucide-react"

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-black text-green-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Advanced Prescription <span className="text-green-400">Analysis Technology</span>
                </h1>
                <p className="max-w-[600px] text-green-200 md:text-xl">
                  Our proprietary AI-powered system ensures accurate prescription verification, medication
                  identification, and safe dispensing in seconds.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-green-500 text-black hover:bg-green-400">See It In Action</Button>
                <Button variant="outline" className="border-green-500 text-green-300 hover:bg-green-950">
                  Technical Specs
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
                    alt="Prescription analysis technology"
                    className="h-full w-full object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-24 lg:py-32 border-t border-green-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Our Technology Works</h2>
              <p className="max-w-[900px] text-green-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our advanced prescription analysis system combines computer vision, machine learning, and secure
                verification
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="relative h-20 w-20">
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-green-900 text-green-300">
                  <Scan className="h-8 w-8" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-green-500 transform -rotate-12" />
              </div>
              <h3 className="text-xl font-bold">Optical Recognition</h3>
              <p className="text-green-200">
                High-resolution scanning captures prescription details with 99.9% accuracy using our proprietary OCR
                technology.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="relative h-20 w-20">
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-green-900 text-green-300">
                  <Database className="h-8 w-8" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-green-500 transform -rotate-12" />
              </div>
              <h3 className="text-xl font-bold">Verification Database</h3>
              <p className="text-green-200">
                Secure cloud database cross-references prescription details with authorized medical records in
                milliseconds.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="relative h-20 w-20">
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-green-900 text-green-300">
                  <Pill className="h-8 w-8" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-green-500 transform -rotate-12" />
              </div>
              <h3 className="text-xl font-bold">Medication Dispensing</h3>
              <p className="text-green-200">
                Robotic precision ensures the exact medication and dosage is dispensed with tamper-proof packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-green-950/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Specifications</h2>
              <p className="max-w-[900px] text-green-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our cutting-edge technology ensures accuracy, security, and reliability
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-black border-green-800 transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-green-500/20">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-green-950 mx-auto">
                  <Cpu className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">AI Processing</h3>
                <p className="text-green-200">
                  Neural network architecture with 99.97% accuracy in prescription verification and medication
                  identification.
                </p>
              </div>
            </Card>

            <Card className="bg-black border-green-800 transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-green-500/20">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-green-950 mx-auto">
                  <ShieldCheck className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">Security Protocol</h3>
                <p className="text-green-200">
                  End-to-end encryption with HIPAA-compliant data handling and biometric verification options.
                </p>
              </div>
            </Card>

            <Card className="bg-black border-green-800 transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-green-500/20">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-green-950 mx-auto">
                  <Zap className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">Processing Speed</h3>
                <p className="text-green-200">
                  Average verification time of 2.3 seconds with full medication dispensing in under 30 seconds.
                </p>
              </div>
            </Card>

            <Card className="bg-black border-green-800 transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-green-500/20">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-green-950 mx-auto">
                  <FileText className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">Prescription Format Support</h3>
                <p className="text-green-200">
                  Compatible with all standard prescription formats, including handwritten, digital, and QR-coded
                  prescriptions.
                </p>
              </div>
            </Card>

            <Card className="bg-black border-green-800 transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-green-500/20">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-green-950 mx-auto">
                  <AlertTriangle className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">Safety Checks</h3>
                <p className="text-green-200">
                  Automated drug interaction warnings, allergy alerts, and dosage verification to prevent medication
                  errors.
                </p>
              </div>
            </Card>

            <Card className="bg-black border-green-800 transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-lg hover:shadow-green-500/20">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-green-950 mx-auto">
                  <Microscope className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">Medication Verification</h3>
                <p className="text-green-200">
                  Optical verification of medication type, color, shape, and markings before dispensing for additional
                  safety.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Explanation */}
      <section className="py-12 md:py-24 lg:py-32 border-t border-green-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">The Analysis Process</h2>
                <p className="text-green-200">
                  Our advanced system processes prescriptions through multiple verification layers to ensure accuracy
                  and safety.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Initial Scan</h3>
                    <p className="text-green-200">
                      High-resolution cameras capture prescription details with multi-angle verification.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Data Extraction</h3>
                    <p className="text-green-200">
                      AI algorithms extract patient information, medication details, dosage, and prescriber data.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Authentication</h3>
                    <p className="text-green-200">
                      Secure verification with prescriber database and digital signature validation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Safety Check</h3>
                    <p className="text-green-200">
                      Cross-reference with patient history for potential drug interactions or allergies.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Dispensing Authorization</h3>
                    <p className="text-green-200">
                      Final verification and robotic dispensing of the exact medication with tamper-proof packaging.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full max-w-[500px]">
                <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-br from-green-500/20 to-green-300/10 blur-2xl" />
                <div className="relative h-full w-full transform perspective-1000 transition-all duration-500 hover:scale-105">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="Prescription analysis process visualization"
                    className="h-full w-full object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-green-950/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Case Study: Memorial Health System</h2>
              <p className="text-green-200">
                How our prescription analysis technology improved medication access and reduced errors
              </p>
            </div>

            <div className="rounded-lg border border-green-800 bg-black/50 p-6">
              <div className="space-y-4">
                <blockquote className="text-green-200 italic">
                  "After implementing MediVend's prescription analysis technology across our 12 hospital campuses, we've
                  seen a 94% reduction in medication dispensing errors and a 78% improvement in patient satisfaction
                  with medication access. The technology has been particularly valuable for our rural satellite
                  locations."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-green-800" />
                  <div>
                    <div className="font-medium">Dr. James Wilson</div>
                    <div className="text-sm text-green-400">
                      Chief Medical Technology Officer, Memorial Health System
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex flex-col items-center justify-center rounded-lg border border-green-800 bg-black/50 p-4 text-center">
                <div className="text-3xl font-bold text-green-400">94%</div>
                <div className="text-sm text-green-200">Reduction in dispensing errors</div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-green-800 bg-black/50 p-4 text-center">
                <div className="text-3xl font-bold text-green-400">78%</div>
                <div className="text-sm text-green-200">Improvement in patient satisfaction</div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-green-800 bg-black/50 p-4 text-center">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-green-200">Medication access</div>
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
                Ready to Transform Medication Access?
              </h2>
              <p className="max-w-[900px] text-green-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule a demonstration of our prescription analysis technology for your healthcare facility.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-green-500 text-black hover:bg-green-400">Request Demo</Button>
              <Button variant="outline" className="border-green-500 text-green-300 hover:bg-green-950">
                Download Specs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

