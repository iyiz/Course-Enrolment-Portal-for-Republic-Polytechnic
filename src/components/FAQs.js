import React, { useState } from 'react';
import '../FAQs.css'; // Make sure to create this CSS file

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Republic Polytechnic?",
      answer: "Republic Polytechnic is a leading institution offering a range of diploma programs."
    },
    {
      question: "How do I register for a course?",
      answer: "You can register your interest in a course through our registration page."
    },
    // Add more FAQ items here
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active index
  };

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>▼</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
