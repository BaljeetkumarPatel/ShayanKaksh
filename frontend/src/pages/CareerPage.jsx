// import React from "react";

// const CareerPage = () => {
//   const jobOpenings = [
//     {
//       id: 1,
//       title: "Front Desk Executive",
//       type: "Full-time",
//       location: "Bangalore, India",
//       description:
//         "We are looking for a professional Front Desk Executive to manage reservations, customer queries, and ensure a smooth guest experience.",
//     },
//     {
//       id: 2,
//       title: "Housekeeping Staff",
//       type: "Part-time",
//       location: "Bangalore, India",
//       description:
//         "Responsible for maintaining cleanliness and hygiene of guest rooms and common areas.",
//     },
//     {
//       id: 3,
//       title: "Hotel Manager",
//       type: "Full-time",
//       location: "Bangalore, India",
//       description:
//         "Lead hotel operations, manage staff, ensure guest satisfaction, and oversee financial performance.",
//     },
//   ];

//   // Replace with your actual Google Form link
//   const googleFormUrl =
//     "https://docs.google.com/forms/d/e/your-form-id/viewform";

//   return (
//     <div className="py-28 px-4 md:px-16 lg:px-24 xl:px-32">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//           Careers at <span className="text-primary">ShyanKaksh</span>
//         </h1>
//         <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//           Join our passionate team and be a part of delivering exceptional
//           hospitality experiences. Explore our current job opportunities below.
//         </p>
//       </div>

//       {/* Job Listings */}
//       <div className="grid gap-8">
//         {jobOpenings.map((job) => (
//           <div
//             key={job.id}
//             className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
//             <p className="mt-2 text-gray-600">{job.description}</p>
//             <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
//               <span className="px-3 py-1 bg-gray-100 rounded-full">
//                 {job.type}
//               </span>
//               <span className="px-3 py-1 bg-gray-100 rounded-full">
//                 {job.location}
//               </span>
//             </div>
//             <a
//               href={googleFormUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block mt-6 px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary-dull transition-all"
//             >
//               Apply Now
//             </a>
//           </div>
//         ))}
//       </div>

//       {/* Footer Section */}
//       <div className="mt-16 text-center">
//         <h2 className="text-2xl font-bold text-gray-800">
//           Can’t find a role for you?
//         </h2>
//         <p className="mt-2 text-gray-600">
//           We’re always looking for talented people. Send us your resume at{" "}
//           <span className="font-semibold text-primary">
//             careers@stayease.com
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CareerPage;


import React from "react";
import { Link } from "react-router-dom"; // ✅ use Link for internal navigation

const CareerPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Front Desk Executive",
      type: "Full-time",
      location: "Bangalore, India",
      description:
        "We are looking for a professional Front Desk Executive to manage reservations, customer queries, and ensure a smooth guest experience.",
    },
    {
      id: 2,
      title: "Housekeeping Staff",
      type: "Part-time",
      location: "Bangalore, India",
      description:
        "Responsible for maintaining cleanliness and hygiene of guest rooms and common areas.",
    },
    {
      id: 3,
      title: "Hotel Manager",
      type: "Full-time",
      location: "Bangalore, India",
      description:
        "Lead hotel operations, manage staff, ensure guest satisfaction, and oversee financial performance.",
    },
  ];

  return (
    <div className="py-28 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Careers at <span className="text-primary">ShyanKaksh</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Join our passionate team and be a part of delivering exceptional
          hospitality experiences. Explore our current job opportunities below.
        </p>
      </div>

      {/* Job Listings */}
      <div className="grid gap-8">
        {jobOpenings.map((job) => (
          <div
            key={job.id}
            className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <p className="mt-2 text-gray-600">{job.description}</p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
              <span className="px-3 py-1 bg-gray-100 rounded-full">
                {job.type}
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">
                {job.location}
              </span>
            </div>
            {/* ✅ Change Google Form link → internal ApplyPage link */}
            <Link
              to={`/apply/${job.id}`}  
              className="inline-block mt-6 px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary-dull transition-all"
            >
              Apply Now
            </Link>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Can’t find a role for you?
        </h2>
        <p className="mt-2 text-gray-600">
          We’re always looking for talented people. Send us your resume at{" "}
          <span className="font-semibold text-primary">
            baljeetpatel022@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default CareerPage;
