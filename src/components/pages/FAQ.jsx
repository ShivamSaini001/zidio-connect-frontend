import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {

  const faqs = [
    {
      question: 'How quickly can I expect a response to my inquiry?',
      answer: 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our customer support line.'
    },
    {
      question: 'Is there a customer support phone number I can call?',
      answer: 'Yes, our customer support team is available Monday through Friday from 9am to 6pm EST at +1 (800) 555-0123.'
    },
    {
      question: 'Do you offer technical support on weekends?',
      answer: 'We offer limited technical support on weekends for emergency issues. Please use the emergency contact form on our support portal for weekend assistance.'
    },
    {
      question: 'How can I schedule a demo of your platform?',
      answer: 'You can schedule a demo by filling out the contact form on this page or by emailing demos@allinoneplatform.com with your preferred date and time.'
    }
  ];

  return (
    <div className="w-full flex justify-center items-center">
      <div className='w-11/12 lg:w-3/4 text-white bg-[#303848] dark:bg-gray-800 rounded-lg shadow-md p-6 mb-16'>
        <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible className="text-white">
          {
            faqs.map(({ question, answer }, index) => {
              return (
                <AccordionItem value={"item-" + index} className="border-b border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-lg font-medium">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              )
            })
          }
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ




