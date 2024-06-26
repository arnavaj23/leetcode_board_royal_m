"use client"
import React from "react"
import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import Link from "next/link"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  ProblemID: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50, { message: "Username cannot be greater than 50" }),
})

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ProblemID: "",
    },
  })

  const router = useRouter()
  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/problems/${values.ProblemID}`)

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values.ProblemID)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="ProblemID"
          render={({ field }) => (
            <FormItem>
              <FormLabel> ProblemID</FormLabel>
              <FormControl>
                <Input placeholder="123" {...field} />
              </FormControl>
              <FormDescription>
                Enter the problem ID you want to view
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
