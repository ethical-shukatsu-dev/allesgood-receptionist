'use client'

import { useState } from 'react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useLanguage } from '@/lib/LanguageContext'
import { teams as allTeams } from '@/lib/teams'

type Purpose = 'Meeting' | 'Interview' | 'Delivery' | 'Other'

export default function GuestForm() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const purposes: Purpose[] = ['Meeting', 'Interview', 'Delivery', 'Other']

  // Create a schema for form validation
  const formSchema = z.object({
    name: z.string().min(2, {
      message: t.name.error,
    }),
    company: z.string().optional(),
    team: z.string({
      required_error: t.team.error,
    }),
    purpose: z.enum(['Meeting', 'Interview', 'Delivery', 'Other'] as const, {
      required_error: t.purpose.error,
    }),
  })

  // Initialize form with react-hook-form and zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      team: "",
      purpose: "Meeting",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    setError('')

    try {
      await axios.post('/api/notify', values)
      setIsSuccess(true)
      form.reset()
    } catch (err) {
      setError(t.error.message)
      console.error('Error sending notification:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-800">{t.success.title}</h2>
          <p className="mb-6 text-gray-600">
            {t.success.message}
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="py-3 text-base w-full max-w-xs"
          >
            {t.success.button}
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-xl sm:text-2xl">{t.title}</CardTitle>
        <CardDescription>{t.description}</CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">{t.name.label}</FormLabel>
                  <FormControl>
                    <Input {...field} className="h-12 text-base" placeholder={t.name.placeholder} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">{t.company.label}</FormLabel>
                  <FormControl>
                    <Input {...field} className="h-12 text-base" placeholder={t.company.placeholder} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="team"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">{t.team.label}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder={t.team.placeholder} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {allTeams.map((team) => (
                        <SelectItem key={team.id} value={team.id} className="text-base py-2.5">
                          {t.teamOptions[team.id]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">{t.purpose.label}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder={t.purpose.placeholder} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {purposes.map((purpose) => (
                        <SelectItem key={purpose} value={purpose} className="text-base py-2.5">
                          {t.purposeOptions[purpose]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {error && (
              <Alert variant="destructive">
                <AlertTitle>{t.error.title}</AlertTitle>
                <AlertDescription>
                  {error}
                </AlertDescription>
              </Alert>
            )}
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-purple400 h-12 text-base font-medium mt-4"
            >
              {isSubmitting ? t.button.submitting : t.button.submit}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
} 