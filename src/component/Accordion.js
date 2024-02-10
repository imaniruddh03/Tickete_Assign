import React,  { useState } from 'react'





const Methodtry = () => {

  const items = [
    {
      title: 'What Should I do  on my first trip to Rome',
      content: "Explore Rome's Colosseum, Vatican City, and Roman Forum. Throw a coin in Trevi Fountain, savor Italian cuisine, stroll Trastevere, climb Spanish Steps, and wander along the Tiber River. Enjoy"
      ,
    },
    {
      title: 'What are the Hidden Gems to see in Rome',
      content: "Explore Rome's Colosseum, Vatican City, and Roman Forum. Throw a coin in Trevi Fountain, savor Italian cuisine, stroll Trastevere, climb Spanish Steps, and wander along the Tiber River. Enjoy",
    },
    {
      title: 'Title',
      content: 'Content you want',
    },
    {
      title: 'Title You Want',
      content: 'Tickete',
    },
  ];
  const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <div className="w-full max-w-md mx-auto">
        {items.map((item, index) => (
          <div key={index} className="mb-4 w-full">
            <div
              className="bg-white border border-blue_gray-200 border-solid flex flex-1 flex-row items-start justify-start sm:px-5 px-7 py-6 rounded-[16px] w-full"
              onClick={() => toggleItem(index)}
            >
              <div className='text-left flex-1 text-gray-900 text-lg w-auto font-opensans font-semibold'>{item.title}</div>
              <svg
                className={`w-6 h-6 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {openIndex === index && (
              <div className="bg-white p-4">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div className="flex flex-col items-center justify-right min-w-[300px]">
      <Accordion items={items} />
                
    </div>
  )
}

export default Methodtry;
