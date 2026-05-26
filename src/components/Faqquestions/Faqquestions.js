import React, { useState } from 'react'

const Faqquestions = () => {
    const faqs = [
        {
            id: 1,
            question: "What is Maintehub?",
            answer: "Maintehub is a platform designed to streamline maintenance operations and help teams manage tasks efficiently.",
        },
        {
            id: 2,
            question: "What services does Maintehub offer?",
            answer: "Simply sign up for an account, set up your workspace, and invite your team members to begin collaborating.",
        },
        {
            id: 3,
            question: "How can Maintehub help my business?",
            answer: "Simply sign up for an account, set up your workspace, and invite your team members to begin collaborating.",
        },
        {
            id: 4,
            question: "How do I get started with Maintehub?",
            answer: "Simply sign up for an account, set up your workspace, and invite your team members to begin collaborating.",
        },
    ];
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };
    return (
      
        <div className="faqdivblock">
            <span className='headerspan'>FAQ'S</span>
            <h3>Frequently Asked Question</h3>

            <div className="faqdivblock-questions">
                {faqs.map((faq) => (
                    <div key={faq.id} className="eachquestions-wrapper">
                        <div className="eachquestions">
                            <p>{faq.question}</p>
                            <button onClick={() => handleToggle(faq.id)}>
                                {openId === faq.id ? "−" : "+"}
                            </button>
                        </div>

                        {openId === faq.id && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Faqquestions
