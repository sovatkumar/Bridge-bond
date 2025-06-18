"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"


type FormData = {
  fullName: string;
  dob: string;
  email: string;
  phone: string;
  otp: string;
  createPassword: string;
  reEnterPassword: string;
};

export default function page() {
  const form = useForm<FormData>({
    defaultValues: {
      fullName: "",
      dob: "",
      email: "",
      phone: "",
      otp: "",
      createPassword: "",
      reEnterPassword: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-1 space-y-6"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Full Name" {...field} className="border border-faint-red" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Dob" type="date" {...field} className="border border-faint-red" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email Address" {...field} className="border border-faint-red" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <RadioGroup defaultValue="comfortable" className="flex">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Male</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Female</Label>
            </div>
          </RadioGroup>
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="tel" placeholder="Enter Your Phone Number" {...field} className="border border-faint-red" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full gap-6">
            <Button type="submit" className="w-fit bg-primary-red px-10 py-5 rounded-full text-lg">
              Send OTP
            </Button>
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input type="tel" placeholder="OTP" {...field} className="border border-faint-red" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="createPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Create Password" {...field} className="border border-faint-red" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reEnterPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Re-Enter Password" {...field} className="border border-faint-red" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-3">
            <Button type="submit" className="w-fit bg-primary-red px-10 py-5 rounded-full text-lg">
              Sign Up
            </Button>
            <p className="text-base lg:text-lg xl:text-xl">Have an account? <Link href="#" className="primary-red">Sign In </Link> </p>
          </div>
        </form>
      </Form>
    </div >
  );
}
