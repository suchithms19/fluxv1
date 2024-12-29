import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Github, Linkedin, Twitter, Instagram, Upload } from 'lucide-react'
import { Button } from '@/componenets/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/componenets/ui/form'
import { Input } from '@/componenets/ui/input'
import { Textarea } from '@/componenets/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/componenets/ui/radio-group'


const MentorForm = () => {
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      gender: 'male',
      organization: '',
      role: '',
      experience: '',
      headline: '',
      bio: '',
      languages: '',
      linkedin: '',
      twitter: '',
      github: '',
      instagram: '',
    },
  })


  const onSubmit = async (values) => {
    console.log(values)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-inter">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <div className="relative mb-8 rounded-lg bg-[#ffe05c] p-6">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/waves.svg')] bg-cover opacity-10" />
          </div>
          <h1 className="relative text-2xl font-bold text-black md:text-3xl">
            Mentor the Next Generation with Flux!
          </h1>
          <p className="relative mt-2 text-black">
            Enter your details
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
           

            <div >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Arjun Mehra" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="arjun@example.com" {...field} />
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
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="9019526435" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-wrap gap-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="male" />
                        </FormControl>
                        <FormLabel className="font-normal">Male</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="font-normal">Female</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="others" />
                        </FormControl>
                        <FormLabel className="font-normal">Others</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Organization</FormLabel>
                  <FormControl>
                    <Input placeholder="Company or Institution name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Role</FormLabel>
                    <FormControl>
                      <Input placeholder="Senior Developer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work Experience</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" placeholder="5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="headline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Headline</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Goldman Sachs| IIMA Rank 8 | Entrepreneur"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio / About You</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="languages"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Languages you're fluent in</FormLabel>
                  <FormControl>
                    <Input placeholder="English, Kannada, Hindi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Social Media Links</h3>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="linkedin"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <Linkedin className="h-5 w-5 text-[#0077B5]" />
                        <FormControl className="flex-1">
                          <Input 
                            placeholder="LinkedIn profile URL" 
                            {...field}
                            className="transition-all hover:border-[#0077B5] focus:border-[#0077B5]"
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="twitter"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                        <FormControl className="flex-1">
                          <Input 
                            placeholder="Twitter profile URL" 
                            {...field}
                            className="transition-all hover:border-[#1DA1F2] focus:border-[#1DA1F2]"
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <Instagram className="h-5 w-5 text-[#E4405F]" />
                        <FormControl className="flex-1">
                          <Input 
                            placeholder="Instagram profile URL" 
                            {...field}
                            className="transition-all hover:border-[#E4405F] focus:border-[#E4405F]"
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#ffe05c] text-black hover:text-white"
            >
              Submit Application
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default MentorForm



