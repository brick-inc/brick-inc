"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileUpload } from "@/components/ui/file-upload"
import { useForm } from "react-hook-form"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select"
import { useState } from "react"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  position: z.string({ required_error: "Please select a position." }),
  resumeLink: z.string().optional(),
  coverLetter: z.string().min(10, { message: "Cover letter should be at least 50 characters." }),
})

type FormValues = z.infer<typeof formSchema>

interface CareerFormProps {
  position?: string;
}

export default function CareerForm({ position = "frontend-engineer" }: CareerFormProps) {
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: position,
      resumeLink: "",
      coverLetter: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      // Create FormData to send both text data and file
      const formData = new FormData()
      
      // Add all form fields
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value || "")
      })
      
      // Ensure position is set
      formData.set('position', position)
      
      // Add resume file if it exists
      if (resumeFile) {
        formData.append('resumeFile', resumeFile)
      }
      
      // Send to API endpoint
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      })
      
      if (!response.ok) {
        throw new Error('Failed to submit application')
      }
      
      // Show success message
      setSubmitSuccess(true)
      
      // Reset form
      form.reset()
      setResumeFile(null)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError('There was a problem submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      {submitSuccess ? (
        <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
          <h3 className="text-xl font-medium text-green-800 mb-2 font-sans">Application Submitted!</h3>
          <p className="text-green-700 font-sans">
            Thank you for your interest in joining our team. We'll review your application and get back to you soon.
          </p>
          <Button 
            className="mt-4 font-sans"
            onClick={() => setSubmitSuccess(false)}
            variant="outline"
          >
            Submit Another Application
          </Button>
        </div>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-sans">Full Name</FormLabel>
                <FormControl>
                  <Input className="font-sans" placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans">Email</FormLabel>
                  <FormControl>
                    <Input className="font-sans" placeholder="example@email.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans">Phone Number</FormLabel>
                  <FormControl>
                    <Input className="font-sans" placeholder="(123) 456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="space-y-4 font-sans">
            <FormLabel className="font-sans">Resume</FormLabel>
            <FileUpload 
              label="Upload your resume"
              onFileChange={setResumeFile}
              accept=".pdf,.doc,.docx"
            />
            <p className="text-xs font-sans text-muted-foreground mt-1">
              Accepted formats: PDF, DOC, DOCX
            </p>
            
            <FormField
              control={form.control}
              name="resumeLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans">Or provide a resume link (optional)</FormLabel>
                  <FormControl>
                    <Input className="font-sans" placeholder="https://drive.google.com/your-resume" {...field} />
                  </FormControl>
                  <FormDescription className="font-sans">
                    Google Drive, Dropbox, OneDrive, etc.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="coverLetter"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-sans">Why would you like to join us?</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us why you're interested in this position and what makes you a good fit..."
                    className="min-h-[150px] font-sans"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md text-sm font-sans">
              {submitError}
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full font-sans"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      )}
    </Form>
  );
}
