"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { HelpCircle, ArrowRight, FileText, Send, CheckCircle, AlertCircle, Clock } from "lucide-react"

export function SupportTicketModal() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "Access Support Portal",
      description: "Navigate to the support section",
      image: "/placeholder.svg?height=200&width=300",
      details: [
        "Click on the 'Help' icon in the top navigation bar",
        "Select 'Submit Support Ticket' from the dropdown menu",
        "You'll be redirected to the support portal",
      ],
    },
    {
      title: "Choose Ticket Type",
      description: "Select the appropriate category",
      image: "/placeholder.svg?height=200&width=300",
      details: [
        "Technical Issue - For bugs or system problems",
        "Feature Request - To suggest new functionality",
        "Account Support - For account-related questions",
        "General Inquiry - For other questions",
      ],
    },
    {
      title: "Fill Out Details",
      description: "Provide comprehensive information",
      image: "/placeholder.svg?height=200&width=300",
      details: [
        "Enter a clear, descriptive subject line",
        "Describe the issue in detail",
        "Include steps to reproduce (if applicable)",
        "Attach relevant screenshots or files",
      ],
    },
    {
      title: "Set Priority Level",
      description: "Choose the urgency of your request",
      image: "/placeholder.svg?height=200&width=300",
      details: [
        "Critical - System down, blocking work",
        "High - Major functionality affected",
        "Medium - Minor issues, workaround available",
        "Low - General questions or suggestions",
      ],
    },
    {
      title: "Submit & Track",
      description: "Submit your ticket and monitor progress",
      image: "/placeholder.svg?height=200&width=300",
      details: [
        "Review all information before submitting",
        "You'll receive a ticket number via email",
        "Track progress in the 'My Tickets' section",
        "Expect initial response within 24 hours",
      ],
    },
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="flex items-center">
          <HelpCircle className="mr-2 h-4 w-4" />
          How to Submit
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl">
            <FileText className="mr-2 h-6 w-6 text-blue-600" />
            How to Submit a Support Ticket
          </DialogTitle>
          <DialogDescription>Follow this step-by-step guide to submit an effective support ticket</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index <= currentStep ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {index < currentStep ? <CheckCircle className="h-4 w-4" /> : index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-1 mx-2 ${index < currentStep ? "bg-blue-600" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Current Step Content */}
          <div className="border rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="outline">
                Step {currentStep + 1} of {steps.length}
              </Badge>
              <h3 className="text-lg font-semibold">{steps[currentStep].title}</h3>
            </div>

            <p className="text-muted-foreground mb-4">{steps[currentStep].description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Image */}
              <div className="space-y-2">
                <img
                  src={steps[currentStep].image || "/placeholder.svg"}
                  alt={`Step ${currentStep + 1} screenshot`}
                  className="w-full h-48 object-cover border rounded-lg bg-gray-100"
                />
                <p className="text-xs text-muted-foreground text-center">
                  Screenshot showing {steps[currentStep].title.toLowerCase()}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <h4 className="font-semibold">Instructions:</h4>
                <ul className="space-y-2">
                  {steps[currentStep].details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm">
                      <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900">Pro Tips:</h4>
                <ul className="text-sm text-blue-800 mt-2 space-y-1">
                  <li>• Be as specific as possible when describing your issue</li>
                  <li>• Include error messages exactly as they appear</li>
                  <li>• Mention what you were trying to do when the issue occurred</li>
                  <li>• Attach screenshots or screen recordings when helpful</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Response Time Info */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-green-600" />
              <div>
                <h4 className="font-semibold text-green-900">Expected Response Times:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 text-sm text-green-800">
                  <div>
                    <div className="font-medium">Critical</div>
                    <div>2-4 hours</div>
                  </div>
                  <div>
                    <div className="font-medium">High</div>
                    <div>4-8 hours</div>
                  </div>
                  <div>
                    <div className="font-medium">Medium</div>
                    <div>1-2 days</div>
                  </div>
                  <div>
                    <div className="font-medium">Low</div>
                    <div>2-5 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
              Previous Step
            </Button>

            <div className="flex space-x-2">
              {currentStep === steps.length - 1 ? (
                <Button className="flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  Start Submitting Ticket
                </Button>
              ) : (
                <Button onClick={nextStep}>
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
