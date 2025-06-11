"use client"
import React from 'react'
// import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  // FormLabel,
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
import {  MessageCircle } from "lucide-react";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
// import { BsChatFill } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// })

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};
export default function ContactUs() {
      const contacts = [
    {
      icon: <FaPhoneAlt className="w-8 h-8 text-white text-primary" />,
      title: "Call us free",
      content: (
        <>
          <a href="tel:+911234567890" className="text-teal-600 font-medium block">
            +91 1234567890
          </a>
          <p className="text-xl text-muted-foreground">Or message us on Whatsapp</p>
        </>
      ),
    },
    {
      icon: <FaFacebookF className="w-8 h-8 text-primary text-white" />,
      title: "Ask us on Facebook",
      content: (
        <>
          <p className="text-xl text-muted-foreground">
            Chat to an expert by sending us a message on Facebook
          </p>
          <a
            href="https://facebook.com/Roamnlearn"
            className="text-teal-600 font-medium block mt-1"
            target="_blank"
            rel="noopener noreferrer"
          >
           facebook.com/Roamnlearn
          </a>
        </>
      ),
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-white text-primary" />,
      title: "Chat to us",
      content: <p className="text-xl text-muted-foreground">Instant Chat</p>,
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
        <div className='container py-10'>
            <div className='text-center'>
                <h1 className='text-4xl lg:text-6xl'><span className='primary-red'>Contact </span>Us</h1>
                <p className='text-lg md:text-2xl py-5 w-2/4 m-auto'>We're here to connect when it suits you, giving you more time to plan big adventures.</p>
            </div>

    <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-10 py-10 px-4">
      {contacts.map((card, index) => (
        <Card key={index} className="!gap-4 text-center bg-[#fffdf6] shadow-sm  border-none">
          <div className="flex justify-center bg-primary-blue m-auto text-white p-4 rounded-full mb-4 border-none" >{card.icon}</div>
          <CardHeader>
            <CardTitle className="text-lg md:text-4xl">{card.title}</CardTitle>
          </CardHeader>
          <CardContent className='text-lg md:text-2xl flex-1 !space-y-4 w-3/4 m-auto'>{card.content}</CardContent>
        </Card>
      ))}
    </div>
            <div className='flex flex-col justify-self-center py-20'>
                <p className='text-center text-2xl md:text-3xl'>Still not sorted</p>
                <h2 className='text-center text-4xl lg:text-6xl pb-10'>Drop us <span className='primary-red'>a line</span></h2>
    <Select>
      <SelectTrigger className="w-5xl">
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
           
    <div className='flex w-full justify-center bg-[#FFFDEF] p-5 rounded-4xl'>         
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

        <Button type="submit" className="w-fit bg-[#FFC809] px-12 py-6 color-white flex">
          Submit
        </Button>
      </form>
                </Form>
    </div>
    </div>
  )
}

