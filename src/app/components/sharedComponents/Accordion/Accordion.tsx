import { useState, useRef, useEffect } from "react";

interface AccordionProps {
  items: {
    question: string;
    answer: string;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heights, setHeights] = useState<number[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (refs.current.length) {
      const calculatedHeights = refs.current.map(
        (ref) => ref?.scrollHeight || 0
      );
      setHeights(calculatedHeights);
    }
  }, [refs]);

  return (
    <div className="join join-vertical w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5 overflow-hidden rounded-lg transition-all duration-300"
        >
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <span className="text-xl font-medium">{item.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div
            className={`transition-max-height duration-300 ease-in-out ${
              openIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="p-4 text-[#3d3d3d]">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
