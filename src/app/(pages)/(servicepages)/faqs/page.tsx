import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function page() {
    const faqs = [
        {
            question: "What is Roam and Learn?",
            answer:
                "Roam and Learn is a travel-based program designed for students to explore the world while experiencing different cultures, places, and adventures—outside the classroom.",
        },
        {
            question: "Who can join a Roam and Learn trip?",
            answer:
                "Our trips are designed for students in middle school, high school, and early college. Age requirements may vary depending on the destination.",
        },
        {           
            question: "Is this an educational program or a tour?",
            answer:
                "Roam and Learn is a tour-based experience. While you’ll learn a lot through travel, we don’t offer formal lessons or academic programs.",
        },
        {
            question: "Are the trips supervised?",
            answer:
                "Yes! Each trip is led by trained and experienced tour leaders. We also maintain a safe student-to-staff ratio and always have a local guide with us.",
        },
        {
            question: "Do students travel alone?",
            answer:
                "No, students travel in groups with tour leaders and fellow participants. Parents/guardians are kept informed throughout the journey.",
        },
        {
            question: "What’s included in the trip cost?",
            answer:
                "The cost typically includes flights, accommodation, meals, entrance fees to attractions, guides, and transportation during the trip. A detailed breakdown is provided for each trip.",
        },
        
        {
            question: "Is travel insurance included?",
            answer:
                "Yes! Roam and Learn provides travel insurance for all students. It covers medical emergencies and trip interruptions. Baggage loss is not included, so we recommend students pack responsibly and keep valuables in carry-on bags.",
        },
        {
            question: "What kind of destinations do you offer?",
            answer:
                "We offer both international and local destinations, ranging from historical cities to nature-based adventures. All destinations are vetted for safety and suitability for student travel.",
        },
        {
            question: "What should students pack?",
            answer:
                "We provide a packing checklist before every trip based on the weather, activities, and destination. Essentials like comfortable shoes, travel documents, and weather-appropriate clothing are a must.",
        },
        {
            question: "How do you ensure student safety?",
            answer:
                "Safety is our top priority. We partner with trusted travel providers, monitor health guidelines, have 24/7 emergency contacts, and conduct regular check-ins.",
        },
        {
            question: "Can students use their phones?",
            answer:
                "Phones are allowed but usage is limited during group activities. We encourage students to be present and engaged. Parents will receive regular updates through designated communication channels.",
        },
        {
            question: "How can parents get in touch during the trip?",
            answer:
                "Parents can contact tour leaders directly through emergency lines. We also send updates and photos through our secure trip communication system.",
        },
        {
            question: "How do I register?",
            answer:
                "You can register online through our website. Each trip page has a sign-up form, payment details, and required documents.",
        },
        {
            question: "What happens if a student breaks the rules?",
            answer:
                "We follow a clear Code of Conduct. Major violations may result in a student being sent home at the guardian’s expense.",
        },
    ];
    return (
        <div className="container py-20">
            <div className="flex m-auto justify-between pb-10">
                <h1 className="text-4xl lg:text-6xl">
                    Top frequently asked <span className="primary-red">questions</span>
                </h1>
                <form className="flex mt-6 items-center">
                    {/* Search Input */}
                    <input
                        type="search"
                        id="default-search"
                        className="block p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 
          focus:ring-blue-500 focus:border-blue-500 
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
          dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-4xl"
                        placeholder="Search"
                        required
                    />
                    {/* Search Icon */}
                    <div className="ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                </form>
            </div>

            <div>
                {faqs.map((faq, index) => (
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem value="item-2" key={index} className="mb-2">
                            <AccordionTrigger className="bg-primary-blue rounded-none rounded-t-3xl text-white px-5 text-3xl">
                                {faq.question}
                            </AccordionTrigger>

                            <AccordionContent className="text-xl flex flex-col gap-4 text-balance bg-[#fdf8f2] text-gray-800 px-4 py-3">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}
