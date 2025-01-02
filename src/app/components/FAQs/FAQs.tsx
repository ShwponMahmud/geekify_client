import React from 'react'
import Showcase from '../Showcase/Showcase'
import Accordion from '../sharedComponents/Accordion/Accordion';
import QuickContact from '../sharedComponents/QuickContact/QuickContact';

function FAQs() {
  const faqItems = [
    {
      question: "Do your services only work for businesses?",
      answer:
        "Nope! Our tech experts are great at providing different IT solutions, whether you own a business or just need help with your home computers.",
    },
    {
      question: "Do you sell computer hardware?",
      answer:
        "Absolutely! We're not only good at fixing tech problems but we also sell computers, laptops, and more!",
    },
    {
      question:
        "I'm not good with tech. Will your experts explain things in simple terms?",
      answer:
        "Definitely! Our tech experts are super friendly and good at explaining things in a way that anyone can understand. You don't need to know much about tech to talk to them.",
    },
    {
      question: "How much does your help cost?",
      answer:
        "Check out our website for the prices. We have flexible services that fit different needs, and they're designed to be affordable for everyone!",
    },
    {
      question: "How do I get help from Geekify?",
      answer:
        "Easy! You can reach us by email, phone, or schedule appointments on our website. We'll send our tech experts your way!",
    },
    {
      question:
        "I have questions about the tech help I got. How can I reach you?",
      answer:
        "Just shoot us an email or call our customer care line, and we'll help you out right away!",
    },
  ];
  return (
    <div>
      <Showcase
        backgroundImage="/showcase-images/faqs-banner.png"
        title="Frequently Asked"
        highlights="Questions"
        paragraph="Here you will find answers to some frequently asked questions about Geekify."
      />
      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <Accordion items={faqItems} />
      </div>
      <QuickContact title="Further Any Query?" />
    </div>
  );
}

export default FAQs 