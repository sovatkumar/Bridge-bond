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

type FormData = {
  email: string;
  password: string;
};

export default function page() {
  const form = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter Password" {...field} className="border border-faint-red" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-4">
            <Button type="submit" className="w-fit bg-primary-red px-10 py-5 rounded-full text-lg">
              Sign In
            </Button>
            <p className="text-base lg:text-lg xl:text-xl">Don’t have account? <Link href="/auth/sign-up" className="primary-red"> Sign Up</Link> </p>
            <p className="text-base lg:text-lg xl:text-xl"><Link href="/forgot-password" className="primary-red">Forgot password</Link> </p>
          </div>
        </form>
      </Form>
    </div >
  );
}
