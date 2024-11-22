import "./FAQ.css";

const FAQs = () => {
  const handleToggle = (e) => {
    const question = e.target;
    const answer = e.target.nextSibling;

    if (question.classList.contains("faq-accordion-question-button-active")) {
      question.classList.remove("faq-accordion-question-button-active");
      answer.classList.remove("faq-accordion-answer-active");
    } else {
      // // reset
      const openQuestions = document.querySelectorAll(
        ".faq-accordion-answer-active"
      );
      const openBtn = document.querySelectorAll(
        ".faq-accordion-question-button-active"
      );
      openQuestions?.forEach((item) =>
        item.classList.remove("faq-accordion-answer-active")
      );
      openBtn?.forEach((btn) =>
        btn.classList.remove("faq-accordion-question-button-active")
      );

      question.classList.add("faq-accordion-question-button-active");
      answer.classList.toggle("faq-accordion-answer-active");
    }
  };

  const data = [
    {
      id: 1,
      question:
        "What is Fiber Optic Internet, and how is it different from traditional broadband?",
      answer:
        "Fiber optic internet uses light to transmit data at incredibly fast speeds, offering lower latency, higher reliability, and faster download/upload speeds compared to traditional copper or cable broadband",
    },
    {
      id: 2,
      question: "Do you offer unlimited data plans?",
      answer:
        "Yes, all of our broadband packages come with unlimited data, so you can enjoy seamless browsing, streaming, and downloading without worrying about data limits or extra charges.",
    },
    {
      id: 3,
      question: "How do I set up my Wi-Fi or broadband service?",
      answer:
        "Setting up your service is simple! We offer full installation and setup assistance for both Wi-Fi and broadband connections. Our team will guide you through the process to ensure everything is working perfectly.",
    },
    {
      id: 4,
      question: "Can I bundle broadband with TV and other services?",
      answer:
        "Absolutely! We offer customizable packages that allow you to bundle broadband, TV services, and other features, giving you the best value and convenience.",
    },
    {
      id: 5,
      question: "What do I do if I have an issue with my service?",
      answer:
        "If you experience any issues, our customer support team is available 24/7. You can reach us via phone, email, or our online support portal, and we'll work quickly to resolve any concerns or technical issues.",
    },
  ];

  return (
    <div className="faq-accordion df ">
      <div
        className="faq-accordion-container mb-5 mt-5 ms-auto me-auto"
        data-aos="fade-in"
        data-aos-delay="250"
        data-aos-duration="500"
      >
        {/* <div className='border col-md-4'>
                <img src="./assets/images/about.jpg" className='w-100' alt="" />
               </div> */}
        <div className="faq-accordion-content  col-lg-12">
          <h1 className="faq-accordion-title text-center mb-5">FAQ</h1>

          {data.map((item) => (
            <div className="faq-accordion-question" key={item.id}>
              <button
                className="faq-accordion-question-button"
                onClick={handleToggle}
              >
                {" "}
                {item.question}
              </button>
              <div className="faq-accordion-answer">
                <p> {item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
