"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

interface FAQItem {
  title: string;
  header?: string;
  footer: string;
  list: {
    heading: string;
    list: string[];
  }[];
}

const faqData: FAQItem[] = [
  {
    title: "What are the steps for doing the annual chemical inventory?",
    footer:
      "By following these detailed day-of inventory steps, you can ensure a smooth and successful annual chemical inventory process while maintaining safety and compliance with regulations.",
    list: [
      {
        heading: "Preparation Phase (Morning):",
        list: [
          "Gather all necessary materials and equipment.",
          "Conduct a safety briefing to remind staff of proper handling procedures and the importance of accuracy.",
          "Assign specific roles and responsibilities to team members, such as label verification, quantity counting, and data entry.",
        ],
      },
      {
        heading: "Label Verification (Morning):",
        list: [
          "Begin by inspecting chemical labels in the designated areas.",
          "Check each label for accuracy, including the chemical name, hazard warnings, and storage requirements.",
          "Replace or update any damaged or illegible labels.",
        ],
      },
      {
        heading: "Physical Count (Mid-Morning to Afternoon):",
        list: [
          "Divide the inventory team into smaller groups to conduct physical counts simultaneously in different areas.",
          "Use handheld devices, spreadsheets, or paper forms to record quantities accurately.",
          "Pay special attention to high-risk or frequently used chemicals.",
        ],
      },
      {
        heading: "Documentation (Throughout the Day)",
        list: [
          "Record all inventory data promptly to minimize the risk of errors or omissions.",
          "Note any discrepancies between physical counts and existing records.",
          "Document the condition of chemicals, including any leaks, spills, or signs of deterioration.",
        ],
      },
      {
        heading: "New Acquisitions and Disposal (Throughout the Day):",
        list: [
          "Identify and document any new chemicals acquired since the last inventory.",
          "Properly dispose of expired or unwanted chemicals according to established procedures.",
          "Record disposal activities, including dates and methods used.",
        ],
      },
      {
        heading: "Regular Communication (Throughout the Day):",
        list: [
          "Maintain open communication among team members to address any challenges or questions that arise during the inventory process.",
          "Notify supervisors or safety officers of any safety concerns or incidents encountered.",
        ],
      },
      {
        heading: "Verification and Final Checks (Late Afternoon):",
        list: [
          "Reconvene the inventory team to review and verify all recorded data.",
          "Double-check quantities, labels, and documentation for accuracy and completeness.",
          "Resolve any discrepancies or issues identified during the inventory process.",
        ],
      },
      {
        heading: "Cleanup and Wrap-Up (Evening):",
        list: [
          "Organize and return all inventory materials to their designated storage areas.",
          "Clean and tidy up the inventory workspace to ensure a safe and orderly environment.",
          "Conduct a final review of inventory records and documentation before concluding the day’s activities.",
        ],
      },
      {
        heading: "Post-Inventory Review and Follow-Up (Next Day):",
        list: [
          "Schedule a meeting to review the inventory results, address any outstanding issues, and discuss opportunities for improvement.",
          "Update inventory records and databases with any necessary corrections or adjustments.",
          "Implement any corrective actions or process improvements identified during the review.",
        ],
      },
    ],
  },
   // ----------------------------------------Question 02-------------------------------------------------------
   {
    title:
      "What can school districts do to minimize hazardous chemical accidents?",
    header: "",
    footer: "",
    list: [
      {
        heading: "Chemical Inventory Management:",
        list: [
          "Utilize a centralized database or inventory management system to track all hazardous chemicals used in school facilities, ensuring compliance with regulations.",
          "Assign responsibility to designated personnel for maintaining and updating the chemical inventory regularly to minimize hazardous incidents.",
          "Ensure that safety data sheets (SDS) are readily accessible for all chemicals and are kept up to date to comply with regulatory requirements.",
        ],
      },
      {
        heading: "Risk Assessment:",
        list: [
          "Conduct comprehensive risk assessments in collaboration with qualified personnel to identify potential hazards associated with each chemical, ensuring compliance with safety regulations.",
          "Prioritize risks based on severity and likelihood of occurrence, taking into account factors such as toxicity, flammability, and reactivity, to minimize hazardous incidents.",
          "Develop risk mitigation strategies tailored to specific hazards, such as implementing engineering controls, administrative controls, or personal protective equipment (PPE), to ensure compliance and enhance safety.",
        ],
      },
      {
        heading: "Training and Education:",
        list: [
          "Provide initial and ongoing training for all staff, teachers, and students who handle or may be exposed to hazardous chemicals, emphasizing compliance with safety protocols.",
          "Cover topics such as chemical identification, safe handling practices, emergency procedures, and the importance of SDS to ensure compliance with regulations and minimize hazardous incidents.",
          "Offer specialized training for personnel working in laboratory settings or other areas with higher chemical exposure risks, ensuring compliance with safety standards.",
        ],
      },
      {
        heading: "Safe Storage and Handling Practices:",
        list: [
          "Establish clear guidelines for the proper storage, labeling, and handling of hazardous chemicals, following regulations and best practices to ensure compliance and minimize hazards.",
          "Store chemicals in designated areas with appropriate ventilation, temperature control, and containment measures, complying with safety regulations and minimizing risks.",
          "Implement secure storage protocols to prevent unauthorized access or tampering with chemicals, ensuring compliance with safety regulations and enhancing security measures.",
        ],
      },
      {
        heading: "Emergency Preparedness:",
        list: [
          "Develop and regularly review emergency response plans for chemical spills, leaks, fires, or other accidents, ensuring compliance with regulatory requirements and enhancing preparedness.",
          "Conduct drills and training exercises to ensure that all staff and students are familiar with emergency procedures and know how to respond effectively in compliance with safety regulations.",
          "Maintain an inventory of emergency response equipment and supplies, including spill kits, personal protective equipment, and communication devices, to comply with safety standards and enhance emergency response capabilities.",
        ],
      },
      {
        heading: "Proper Ventilation and Engineering Controls:",
        list: [
          "Evaluate ventilation systems in classrooms, laboratories, and other areas where chemicals are used to ensure compliance with safety regulations and minimize exposure risks.",
          "Install and maintain engineering controls such as fume hoods, local exhaust systems, or ventilation fans to comply with safety regulations and minimize exposure to hazardous fumes or vapors.",
          "Monitor ventilation system performance regularly and address any issues promptly to maintain compliance with safety regulations and ensure effectiveness in minimizing hazards.",
        ],
      },
      {
        heading: "Personal Protective Equipment (PPE):",
        list: [
          "Conduct a PPE assessment to determine the appropriate types of protective equipment needed for different tasks and chemicals, ensuring compliance with safety regulations.",
          "Provide properly fitted PPE to all personnel working with hazardous chemicals, and ensure that they are trained in its proper use and care to comply with safety standards.",
          "Regularly inspect and replace PPE as needed to maintain compliance with safety regulations and ensure effectiveness in minimizing risks.",
        ],
      },
      {
        heading: "Regular Inspections and Maintenance:",
        list: [
          "Establish a schedule for routine inspections of chemical storage areas, equipment, and facilities, and document inspection findings to ensure compliance with safety regulations.",
          "Address any maintenance issues or safety hazards identified during inspections promptly, and follow up to ensure corrective actions are implemented in compliance with regulations.",
          "Keep records of equipment maintenance, repairs, and replacements to demonstrate compliance with safety regulations and ensure a safe learning environment.",
        ],
      },
      {
        heading: "Collaboration with Local Authorities:",
        list: [
          "Establish partnerships with local fire departments, emergency responders, and environmental health agencies to exchange information and resources related to chemical safety and compliance with regulations.",
          "Coordinate training sessions, drills, or tabletop exercises with local authorities to enhance preparedness for chemical emergencies and ensure compliance with safety standards.",
          "Develop protocols for communicating with and requesting assistance from emergency responders in the event of a chemical incident, ensuring compliance with regulatory requirements and enhancing emergency response capabilities.",
        ],
      },
      {
        heading: "Community Engagement and Communication:",
        list: [
          "Share information about chemical safety policies, procedures, and initiatives with parents, guardians, and the broader school community through newsletters, meetings, or informational sessions, emphasizing compliance with regulations.",
          "Encourage parents and community members to participate in school safety committees or initiatives focused on chemical safety, fostering compliance with safety standards and enhancing community involvement.",
          "Provide channels for reporting safety concerns or incidents related to chemical hazards and ensure that feedback is addressed promptly and transparently to maintain compliance with regulations and enhance safety measures.",
        ],
      },
    ],
  },
   // ----------------------------------------Question 03-------------------------------------------------------
   {
    title: "How can school districts be compliant with EPA, OSHA, DOT,  regulations?",
    header: "",
    footer: "",
    list: [
      {
        heading: "Stay Informed:",
        list: [
          "Regularly monitor updates and changes to regulations issued by EPA, OSHA, DOT, and relevant regional authorities that pertain to chemical safety, transportation, storage, and disposal."
        ],
      },
      {
        heading: "Designate Compliance Officers:",
        list: [
          "Assign qualified personnel within the school district to oversee compliance with EPA, OSHA, DOT, and regional regulations.",
          "Provide them with the necessary resources and authority to carry out their responsibilities effectively."
        ],
      },
      {
        heading: "Conduct Audits and Assessments:",
        list: [
          "Perform regular audits and assessments of school facilities and operations to identify any areas where compliance may be lacking.",
          "Address any deficiencies promptly and implement corrective actions as needed."
        ],
      },
      {
        heading: "Training and Education:",
        list: [
          "Provide comprehensive training for staff, teachers, and administrators on relevant EPA, OSHA, DOT, and regional regulations.",
          "Ensure that personnel understand their responsibilities and the specific requirements related to chemical safety, transportation, and compliance."
        ],
      },
      {
        heading: "Chemical Management:",
        list: [
          "Develop and implement robust chemical management protocols that align with EPA regulations for hazardous waste management.",
          "Ensure compliance with OSHA standards for chemical safety and DOT requirements for the transportation of hazardous materials."
        ],
      },
      {
        heading: "Safety Data Sheets (SDS) Management:",
        list: [
          "Maintain an organized system for managing safety data sheets (SDS) for all chemicals used in school facilities.",
          "Ensure that SDS are readily accessible to staff and are kept up to date in compliance with OSHA regulations."
        ],
      },
      {
        heading: "Emergency Response Planning:",
        list: [
          "Develop comprehensive emergency response plans for potential chemical incidents, spills, and releases.",
          "Conduct drills and training exercises to ensure that staff are prepared to respond effectively to emergencies."
        ],
      },
      {
        heading: "Record Keeping and Documentation:",
        list: [
          "Keep detailed records of compliance activities, training sessions, audits, assessments, and any incidents or accidents related to chemical safety.",
          "Ensure that documentation is accurate, up to date, and easily accessible for regulatory inspections."
        ],
      },
      {
        heading: "Engage with Regulatory Agencies:",
        list: [
          "Establish open lines of communication with EPA, OSHA, DOT, and regional regulatory agencies.",
          "Seek guidance and clarification on regulatory requirements and proactively address any compliance issues that arise."
        ],
      },
      {
        heading: "Continuous Improvement:",
        list: [
          "Regularly review and update policies, procedures, and practices to ensure ongoing compliance with EPA, OSHA, DOT, and regional regulations.",
          "Incorporate lessons learned from audits, assessments, and incidents to improve chemical safety and compliance measures."
        ],
      },
    ],
  },
// --------------------------------------------------------------------------  question 04---------------------
{
  title: "What is a Chemical Hygiene Plan (CHP) and why is it important ?",
  header: "",
  footer: "",
  list: [
    {
      heading: "Safety:",
      list: [
        "The CHP promotes safety by minimizing the risk of accidents, spills, exposures, and injuries associated with chemical use."
      ],
    },
    {
      heading: "Hazards:",
      list: [
        "It addresses the recognition and management of chemical hazards, ensuring that students and teachers understand the risks involved."
      ],
    },
    {
      heading: "Health Protection:",
      list: [
        "The plan provides guidelines for using personal protective equipment (PPE) like gloves and goggles to protect against chemical exposure and adverse health effects."
      ],
    },
    {
      heading: "Regulations:",
      list: [
        "Many jurisdictions mandate schools to have a Chemical Hygiene Plan to comply with occupational health and safety regulations."
      ],
    },
    {
      heading: "Compliance:",
      list: [
        "Implementing a CHP ensures adherence to relevant standards and regulations, thereby reducing legal liability."
      ],
    },
    {
      heading: "Risk Management:",
      list: [
        "By identifying potential hazards and establishing procedures for emergency response, the CHP helps schools manage risks effectively."
      ],
    },
    {
      heading: "Educational Environment:",
      list: [
        "It fosters a culture of safety and responsibility in the science classroom, educating students on proper chemical handling for their future endeavors."
      ],
    },
  ],
},
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-10 p-4">
      <h1 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className="mb-3">
          <div
            className="flex justify-between items-center bg-gray-100 py- pr-6 rounded-lg cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center space-x-3">
              <span className="bg-[#589142] text-white text-3xl font-semibold w-16 h-16 flex justify-center items-center">
                {index + 1}
              </span>
              <span className="font-medium text-lg px-">{item.title}</span>
            </div>
            <span>
              {activeIndex === index ? (
                <FontAwesomeIcon icon={faCircleChevronUp} className="text-[#589142] rounded-full text-2xl" />
              ) : (
                <FontAwesomeIcon icon={faCircleChevronDown} className="text-[#589142] text-2xl" />
              )}
            </span>
          </div>
          {activeIndex === index && (
            <div className="mt-2 px-10 py-4 bg-gray-50 border-l-4 border-[#589142]">
              <ul className="list-decimal pl-4">
                {item.list.map((subItem, i) => (
                  <li key={i} className="font-bold text-[#353740E5]">
                    {subItem.heading}
                    <ul className="list-disc pl-4">
                      {subItem.list.map((step, j) => (
                        <li key={j} className="font-medium">
                          {step}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <p className="font-medium text-[#353740E5] mt-4">{item.footer}</p>
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-center items-center pt-10 pb-10">
        <Link href="/Faq" className="inline-block bg-[#589142] py-4 px-8 rounded-md text-white">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default FAQ;















// "use client"

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqData: FAQItem[] = 
// [

//   { question: "How do I add a new question?", answer: "You can add a new question by editing the FAQ component." },
//   { question: "Can I insert pictures in my FAQ?", answer: "Yes, you can insert pictures in your FAQ by embedding image tags in the answer." },
//   { question: "Can I insert a video in my FAQ?", answer: "Yes, videos can also be embedded in the answer using the video tag or other media components." },
//   { question: "How do I edit or remove the 'FAQ title'?", answer: "You can edit or remove the title by changing the header in the FAQ component." },
// ];




// const FAQ: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="w-full max-w-3xl mx-auto mb-10 p-4">
//       <h1 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h1>
//       {faqData.map((item, index) => (
//         <div key={index} className="mb-3">
//           <div 
//             className="flex justify-between items-center bg-gray-100 py- pr-6 rounded-lg cursor-pointer" 
//             onClick={() => toggleFAQ(index)}
//           >
//             <div className="flex items-center space-x-3">
//               <span className="bg-[#589142] text-white text-3xl font-semibold w-20 h-16 flex justify-center items-center">
//                 {index + 1}
//               </span>
//               <span className="font-medium text-lg">{item.question}</span>
//             </div>
//             <span>
//               {activeIndex === index ? (
//                 <FontAwesomeIcon icon={faCircleChevronUp} className="text-[#589142] rounded-full text-2xl" />
//               ) : (
//                 <FontAwesomeIcon icon={faCircleChevronDown} className="text-[#589142] text-2xl" />
//               )}
//             </span>
//           </div>
//           {activeIndex === index && (
//             <div className="mt-2 px-10 py-4 bg-gray-50 border-l-4 border-[#589142]">
//               {item.answer}
//             </div>
//           )}
//         </div>
//       ))}
//       <div className='flex  justify-center items-center pt-10 pb-10 '>
//       <Link href="/Faq" className='inline-block bg-[#589142] py-4 px-8 rounded-md text-white'>
//         Read More
//       </Link>
//       </div>
//     </div>
//   );
// };

// export default FAQ;



