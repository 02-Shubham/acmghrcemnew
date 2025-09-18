// "use client";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";


// export default function Home() {
//   const [filter, setFilter] = useState("all");

//   const cards = [
//     {
//       id: 1,
//       title: "Event name",
//       description: "",
//       imageSrc:
//         "/events/images (23).jpeg.jpg",
//       category: "upcoming",
//     },
//     {
//       id: 2,
//       title: "Event name",
//       description: "",
//       imageSrc:
//         "/events/pitchingCompetition.jpg",
//       category: "past",
//     },
//   ];

//   const filteredCards = cards.filter((card) => {
//     if (filter === "all") return true;
//     return card.category === filter;
//   });

//   return (
//     <div className="bg-black mt-40 min-h-screen p-6">
//       <div className="flex justify-center space-x-4 mb-6">
//         {["all", "upcoming", "past"].map((category) => (
//           <button
//             key={category}
//             onClick={() => setFilter(category)}
//             className={`relative p-[3px] ${
//               filter === category ? "bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg" : ""
//             }`}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg transition duration-200 transform scale-100 group-hover:scale-105" />
//             <div
//               className={`px-8 py-2 rounded-[6px] bg-black relative group text-white transition duration-200 ${
//                 filter === category
//                   ? "hover:bg-transparent"
//                   : "border border-transparent hover:border-white"
//               }`}
//             >
//               {category.charAt(0).toUpperCase() + category.slice(1)}
//             </div>
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
//         {filteredCards.map((card) => (
//           <CardContainer key={card.id} className="inter-var border-[#53a8d8] shadow-lg shadow-blue-400/100">
//             <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
//               <CardItem
//                 translateZ="50"
//                 className="text-xl font-bold text-neutral-100 dark:text-white"
//               >
//                 {card.title}
//               </CardItem>

//               <CardItem
//                 as="p"
//                 translateZ="60"
//                 className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//               >
//                 {card.description}
//               </CardItem>

//               <CardItem translateZ="100" className="w-full mt-4">
//                 <Image
//                   src={card.imageSrc}
//                   height="1000"
//                   width="1000"
//                   className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
//                   alt="thumbnail"
//                 />
//               </CardItem>
//               {card.category === "upcoming" && (
//               <div className="flex justify-between items-center mt-20">
//                 <CardItem
//                   translateZ={20}
//                   as={Link}
//                   href="https://forms.gle/2ZSwJCyU21PJQf5G6"
//                   className="px-4 py-2 rounded-xl bg-blue-500 dark:bg-white dark:text-black text-white text-s font-bold"
//                 >
//                   Register Now !!!
//                 </CardItem>
//               </div>
//               )}
//               {card.category === "past" && (
//               <div className="flex justify-between items-center mt-20">
//                 <CardItem
//                   translateZ={20}
//                   as={Link}
//                   href="https://forms.gle/2ZSwJCyU21PJQf5G6"
//                   className="px-4 py-2 rounded-xl bg-blue-500 dark:bg-white dark:text-black text-white text-s font-bold"
//                 >
//                   View !
//                 </CardItem>
//               </div>
//               )}
//             </CardBody>
//           </CardContainer>
//         ))}
//       </div>
//       </div>
//   );
// };
import Event from "../../components/Event/Event"
import { events } from "@/libs/event-data"


export default function TeamPage() {
  return <Event initialEvents={events} />
}