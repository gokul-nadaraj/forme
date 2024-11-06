import React, { useEffect, useState } from "react";
import "./Faq.css";
import "aos/dist/aos.css";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Toggle open/close for the selected question
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section>
        <div className="faq-container">
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          <div className="faq-content">
            {[
              {
                question: "Is it a digital product or Physical Product?",
                answer:
                  "TinyKart is a digital product which you can instantly access once you do the payment, and print whenever you wish.",
              },
              {
                question: "How can I get the access link of the Ebook?",
                answer:
                  "After successful payment, you will be redirected to the Thank You Page where you can download the Ebook with just one click. You will also receive an email with the download link.\n\nIf you face any technical issues, please send a screenshot of the payment via email, and our team will send you the learning bundle immediately.",
              },
              {
                question: "Any additional charges after purchasing this Ebook?",
                answer:
                  "No, you don't need to pay anything after purchasing this ebook. You will have lifetime access after completing the payment.",
              },
              {
                question: "What payment methods are accepted?",
                answer: "We accept Razorpay, Credit/Debit cards, and UPI.",
              },
              {
                question: "What is the Return/Cancel policy?",
                answer:
                  "Since we provide non-tangible, irrevocable goods, we do not issue Returns or Cancellations for digital products once the order is confirmed and the product is sent.\n\nPlease note that we offer digital products, not services, so there is no way to close access to the files you've already received.",
              },
            ].map((item, index) => (
              <div className="faq-item" key={index}>
                <div
                  className="faq-question"
                  onClick={() => toggleAnswer(index)}
                >
                  <h3>{item.question}</h3>
                  <svg
                    className={`faq-icon ${openIndex === index ? "open" : ""}`}
                    viewBox="0 0 42 25"
                  >
                    <path
                      d="M3 3L21 21L39 3"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>
                      {item.answer.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
