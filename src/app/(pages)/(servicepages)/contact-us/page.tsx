"use client"
import React from 'react'
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { MessageCircle } from "lucide-react";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"


type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};
export default function page() {
  const contacts = [
    {
      icon: <FaPhoneAlt className="w-8 h-8 text-white" />,
      title: "Call us free",
      content: (
        <>
          <a href="tel:+911234567890" className="primary-blue font-medium block">
            +91 1234567890
          </a>
          <p className="text-xl text-black">Or message us on Whatsapp</p>
        </>
      ),
    },
    {
      icon: <FaFacebookF className="w-8 h-8 text-white" />,
      title: "Ask us on Facebook",
      content: (
        <>
          <p className="text-xl text-black">
            Chat to an expert by sending us a message on Facebook
          </p>
          <a
            href="https://facebook.com/Roamnlearn"
            className="primary-blue font-medium block mt-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook.com/Roamnlearn
          </a>
        </>
      ),
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-white " />,
      title: "Chat to us",
      content: (<>
        <p className="text-xl text-black">Instant Chat</p>
        <p className="text-xl text-black">Or message us on Whatsapp</p>
      </>
      )
    },
  ];
  const form = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className='container py-20 lg:px-4'>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-10">
        {contacts.map((card, index) => (
          <Card key={index} className="!gap-4 text-center shadow-sm boxShadow border-none">
            <div className="flex justify-center bg-primary-red m-auto text-white p-4 rounded-full mb-4 border-none" >{card.icon}</div>
            <CardHeader>
              <CardTitle className="text-lg md:text-4xl">{card.title}</CardTitle>
            </CardHeader>
            <CardContent className='text-lg md:text-2xl flex-1 !space-y-4 w-3/4 m-auto'>{card.content}</CardContent>
          </Card>
        ))}
      </div>
      <div className='flex flex-col lg:justify-self-center py-20'>
        <p className='text-center text-2xl md:text-3xl'>Still not sorted</p>
        <h2 className='text-center text-4xl lg:text-6xl pb-10'>Drop us <span className='primary-red'>a line</span></h2>
        <Select>
          <SelectTrigger className="w-full lg:w-5xl">
            <SelectValue placeholder="Select category*" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
              <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
              <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
              <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
              <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
              <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Europe & Africa</SelectLabel>
              <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
              <SelectItem value="cet">Central European Time (CET)</SelectItem>
              <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
              <SelectItem value="west">
                Western European Summer Time (WEST)
              </SelectItem>
              <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
              <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Asia</SelectLabel>
              <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
              <SelectItem value="ist">India Standard Time (IST)</SelectItem>
              <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
              <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
              <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
              <SelectItem value="ist_indonesia">
                Indonesia Central Standard Time (WITA)
              </SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Australia & Pacific</SelectLabel>
              <SelectItem value="awst">
                Australian Western Standard Time (AWST)
              </SelectItem>
              <SelectItem value="acst">
                Australian Central Standard Time (ACST)
              </SelectItem>
              <SelectItem value="aest">
                Australian Eastern Standard Time (AEST)
              </SelectItem>
              <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
              <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>South America</SelectLabel>
              <SelectItem value="art">Argentina Time (ART)</SelectItem>
              <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
              <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
              <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className='flex w-full justify-center shadow-sm px-5 py-10 rounded-4xl'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 max-w-6xl space-y-6"
          >
            <h2 className='text-2xl md:text-3xl'>Please provide your details:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="Enter Your Email" {...field} />
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
                    <FormControl>
                      <Input type="tel" placeholder="Enter Your Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Write Your Message..." rows={10} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[#000302]">
                <Checkbox id="terms " className="size-4.5 lg:size-5" />
                <Label htmlFor="terms" className="text-sm lg:text-lg">Keep me updated on the latest Contiki news, deals and latest trips. You can unsubscribe at any time.</Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="terms-2" className="size-4 lg:size-5" />
                <div className="grid gap-2 text-[#000302]">
                  <Label htmlFor="terms-2" className="text-sm lg:text-lg">By checking this box, you accept our privacy policy *</Label>
                </div>
              </div>

            </div>
            <Button type="submit" className="w-fit bg-primary-red px-12 py-6 rounded-full color-white flex justify-self-end">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}