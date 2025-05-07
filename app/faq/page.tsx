"use client"; // Needed if you're using App Router, because we have interactivity

import React, { useState } from "react";

const faqs = [
  {
    question: "What are AWS Cloud Clubs?",
    answer:
      "AWS Cloud Clubs are student-led user groups for post-secondary level students and independent learners. Led by Cloud Club Captains, Cloud Clubs are open to any learner aged 18+.",
  },
  {
    question: "How do I become a member?",
    answer:
      "You can submit your application through the website when the new membership window opens.",
  },
  {
    question: "When is the next membership intake?",
    answer:
      "The next submission window will be open from 15-May-2025 to 31-May-2025.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="max-w-4xl mx-auto p-6 mt-16">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-xl font-semibold">{faq.question}</span>
              <span className="text-2xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
