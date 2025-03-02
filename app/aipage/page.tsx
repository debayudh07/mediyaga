/* eslint-disable */
"use client";
import { useState, useRef } from "react";
import Webcam from "react-webcam";
import Tilt from "react-parallax-tilt";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PrescriptionAnalysis = () => {
  const [cameraFacingMode, setCameraFacingMode] = useState("user"); // 'user' for front, 'environment' for back
  interface AnalysisResult {
    medication: string;
    dosage: string;
    frequency: string;
    instructions: string;
    category: string;
    commonSideEffects: string[];
    interactions: string[];
    precautions: string;
    alternatives: string[];
    refillDate: string;
  }
  
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const webcamRef = useRef(null);

  const toggleCamera = () => {
    setCameraFacingMode((prevMode) =>
      prevMode === "user" ? "environment" : "user"
    );
  };

  const analyzePrescription = () => {
    if (!webcamRef.current) return;
    setIsAnalyzing(true);
    
    // Simulate delayed API response
    setTimeout(() => {
      const webcamCurrent = webcamRef.current as unknown as Webcam;
      const imageSrc = webcamCurrent.getScreenshot();
      // Enhanced simulated AI analysis result with additional insights
      const simulatedResult = {
        medication: "Paracetamol",
        dosage: "500mg",
        frequency: "Every 6 hours",
        instructions: "Take with food",
        // Additional insights
        category: "Analgesic",
        commonSideEffects: ["Nausea", "Headache", "Dizziness"],
        interactions: ["Alcohol", "Warfarin", "Some antidepressants"],
        precautions: "May cause liver damage in high doses or with alcohol",
        alternatives: ["Ibuprofen", "Aspirin"],
        refillDate: "2025-04-02",
      };
      setAnalysisResult(simulatedResult);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black p-2 sm:p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 text-green-400">
          Prescription Scanner
        </h1>

        {/* Mobile view - Stack everything vertically */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {/* Camera Section */}
          <Card className="lg:col-span-2 bg-gray-900/80 border border-green-500/30 shadow-xl shadow-green-500/10 rounded-xl overflow-hidden">
            <div className="p-2 sm:p-4">
              <div className="relative rounded-lg overflow-hidden shadow-inner shadow-green-500/5">
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={1500}
                  className="h-full w-full"
                >
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{
                      facingMode: cameraFacingMode,
                      width: { ideal: 1920 },
                      height: { ideal: 1080 },
                    }}
                    className="w-full rounded-lg object-cover min-h-48 sm:min-h-64 h-full"
                  />
                </Tilt>

                {/* Mobile-friendly camera controls */}
                <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-between px-2 sm:px-4">
                  <Button
                    onClick={toggleCamera}
                    className="bg-gray-800/70 hover:bg-gray-700/70 text-green-400 rounded-full shadow-lg border border-green-500/30 text-xs sm:text-sm"
                    size="sm"
                    disabled={isAnalyzing}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 sm:h-5 sm:w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="hidden sm:inline">Switch Camera</span>
                  </Button>

                  <Button
                    onClick={analyzePrescription}
                    className="bg-green-600/90 hover:bg-green-700/90 text-black font-medium rounded-full shadow-lg shadow-green-500/20 text-xs sm:text-sm"
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="hidden sm:inline">Analyzing...</span>
                        <span className="sm:hidden">...</span>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1 sm:h-5 sm:w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                        <span className="hidden sm:inline">Analyze Prescription</span>
                        <span className="sm:hidden">Analyze</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Analysis Result Section */}
          <div className="space-y-3 sm:space-y-4">
            <Card className="bg-gray-900/80 border border-green-500/30 shadow-xl shadow-green-500/10 rounded-xl overflow-hidden">
              <div className="p-3 sm:p-4 md:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-green-400 mb-2 sm:mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Prescription Analysis
                </h2>

                {analysisResult ? (
                  <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    scale={1.02}
                    transitionSpeed={1500}
                    className="w-full"
                  >
                    <div className="bg-gray-800/50 p-3 sm:p-4 md:p-6 rounded-xl border border-green-500/20 shadow-inner shadow-green-500/5">
                      <div className="space-y-2 sm:space-y-3 md:space-y-4">
                        <div>
                          <h3 className="text-xs sm:text-sm text-green-300 font-medium">Medication</h3>
                          <p className="text-base sm:text-lg font-semibold text-white">{analysisResult.medication}</p>
                        </div>

                        <div>
                          <h3 className="text-xs sm:text-sm text-green-300 font-medium">Dosage</h3>
                          <p className="text-base sm:text-lg font-semibold text-white">{analysisResult.dosage}</p>
                        </div>

                        <div>
                          <h3 className="text-xs sm:text-sm text-green-300 font-medium">Frequency</h3>
                          <p className="text-base sm:text-lg font-semibold text-white">{analysisResult.frequency}</p>
                        </div>

                        <div>
                          <h3 className="text-xs sm:text-sm text-green-300 font-medium">Instructions</h3>
                          <p className="text-base sm:text-lg font-semibold text-white">{analysisResult.instructions}</p>
                        </div>

                        <div>
                          <h3 className="text-xs sm:text-sm text-green-300 font-medium">Next Refill</h3>
                          <p className="text-base sm:text-lg font-semibold text-white">{analysisResult.refillDate}</p>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                ) : (
                  <div className="flex items-center justify-center py-4 sm:py-6 md:py-8">
                    <div className="text-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-2 sm:mb-4 text-green-800/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <p className="text-green-400/70 text-sm sm:text-base">
                        {isAnalyzing ? "Processing your prescription..." : "Please capture and analyze a prescription"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Additional Insights Card - Only shows when analysis is complete */}
            {analysisResult && (
              <Card className="bg-gray-900/80 border border-green-500/30 shadow-xl shadow-green-500/10 rounded-xl overflow-hidden">
                <div className="p-3 sm:p-4 md:p-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-green-400 mb-2 sm:mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Additional Insights
                  </h2>

                  <div className="space-y-3 sm:space-y-4 md:space-y-5">
                    <div>
                      <h3 className="text-xs sm:text-sm text-green-300 font-medium mb-1 sm:mb-2">Medication Category</h3>
                      <div className="inline-block bg-green-900/30 px-2 py-1 sm:px-3 rounded-full text-green-400 text-xs sm:text-sm">
                        {analysisResult.category}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs sm:text-sm text-green-300 font-medium mb-1 sm:mb-2">Common Side Effects</h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {analysisResult.commonSideEffects.map((effect, index) => (
                          <span key={index} className="bg-gray-800 px-2 py-1 sm:px-3 rounded-full text-gray-300 text-xs sm:text-sm">
                            {effect}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs sm:text-sm text-green-300 font-medium mb-1 sm:mb-2">Potential Interactions</h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {analysisResult.interactions.map((interaction, index) => (
                          <span key={index} className="bg-red-900/20 px-2 py-1 sm:px-3 rounded-full text-red-300 text-xs sm:text-sm">
                            {interaction}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs sm:text-sm text-green-300 font-medium mb-1 sm:mb-2">Precautions</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">{analysisResult.precautions}</p>
                    </div>

                    <div>
                      <h3 className="text-xs sm:text-sm text-green-300 font-medium mb-1 sm:mb-2">Alternative Medications</h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {analysisResult.alternatives.map((alt, index) => (
                          <span key={index} className="bg-gray-800 px-2 py-1 sm:px-3 rounded-full text-gray-300 text-xs sm:text-sm">
                            {alt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionAnalysis;