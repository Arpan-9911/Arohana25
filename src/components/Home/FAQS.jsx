import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { faqsData } from '../../constants'
import { useState } from 'react';

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="sm:text-3xl text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg p-4 cursor-pointer bg-gray-200"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              {openIndex === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
            </div>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQS