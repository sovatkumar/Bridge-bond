"use client";

import React from "react";
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
    fullName: string;
    email: string;
    phone: string;
    dob: string;
    school: string;
    grade: string;
    parent: string;
    parentPhone: string;
    relationship: string;
    invitationCode: string;
};

export default function page() {
    const form = useForm<FormData>({
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            dob: "",
            school: "",
            grade: "",
            parent: "",
            parentPhone: "",
            relationship: "",
            invitationCode: "",
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
                                    <Input
                                        placeholder="Full Name"
                                        {...field}
                                        className="border border-faint-red"
                                    />
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
                                    <Input
                                        type="email"
                                        placeholder="Email address"
                                        {...field}
                                        className="border border-faint-red"
                                    />
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
                                    <Input
                                        type="tel"
                                        placeholder="Phone Number"
                                        {...field}
                                        className="border border-faint-red"
                                    />
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
                                    <Input
                                        placeholder="Date of Birth"
                                        type="date"
                                        {...field}
                                        className="border border-faint-red"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="school"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="School / College"
                                        {...field}
                                        className="border border-faint-red"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="grade"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Grade / Year"
                                        {...field}
                                        className="border border-faint-red"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="parent"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Parent / Guardian"
                                        {...field}
                                        className="border border-faint-red"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="parentPhone"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Contact Number"
                                        {...field}
                                        className="border border-faint-red"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="relationship"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Relationship"
                                        {...field}
                                        className="border border-faint-red"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="invitationCode"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Invitation Code"
                                        {...field}
                                        className="border border-faint-red"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="w-fit bg-primary-red px-10 py-5 rounded-full text-lg"
                    >
                        Register Now
                    </Button>
                </form>
            </Form>
        </div>
    );
}
