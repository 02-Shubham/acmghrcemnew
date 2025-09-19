export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'past' | 'future';
  imageUrl?: string;
  registrationLink?: string;
};

export const events: Event[] = [
  {
    id: '1',
  title: 'Triple Tech Event',
    date: 'September 9, 2025', // Assuming date
    time: '11:30 AM - 1:30 PM', // Assuming time
    location: 'E-Building 107', // Assuming location
    description: 'Join us for an exciting workshop on "Demystifying the Power of Artificial Intelligence for Everyone" and unlock the potential of AI in your projects.',
    type: 'past',
    imageUrl: 'img/events/insta post day1,2,3.png',
    registrationLink: '/'
  },
  {
    id: '2',
    title: 'HP-Omen Event',
    date: 'July 30, 2025', // Assuming date
    time: '2:00 PM - 5:00 PM', // Assuming time
    location: 'E-Building 316', // Assuming location
    description: 'Join us for an exclusive HP-Omen event where you can experience the latest in gaming technology and innovations.',
    type: 'future',
    imageUrl: 'img/events/HPOmen.png',
  },
  {
    id: '3',
    title: 'Street Play',
    date: 'July 22, 2025', // Assuming date
    time: '10:00 AM - 1:00 PM', // Assuming time
    location: 'Wagholi Bus-stop', // Assuming location
    description: '“Think Before You Click” A Creative Step Towards Cybersecurity Awareness',
    type: 'future',
    imageUrl: 'img/events/streetplay.png',
  },
  // {
  //   id: '4',
  //   title: 'Induction SY',
  //   date: 'January 27, 2025', // Assuming date
  //   time: '3:00 PM - 7:00 PM', // Assuming time
  //   location: 'E-216 , E-318', // Assuming location
  //   description: 'Experience the excitement of IPL Auction 2023 with live bidding and strategy discussions.',
  //   type: 'past',
  //   imageUrl: 'img/events/past/iplAuction.jpg'
  // },
  // {
  //   id: '5',
  //   title: 'Cloud Computing',
  //   date: 'January 27, 2025', // Assuming date
  //   time: '3:00 PM - 7:00 PM', // Assuming time
  //   location: 'E-216 , E-318', // Assuming location
  //   description: 'Experience the excitement of IPL Auction 2023 with live bidding and strategy discussions.',
  //   type: 'past',
  //   imageUrl: 'img/events/past/iplAuction.jpg'
  // },
  // {
  //   id: '6',
  //   title: 'Workshop on: Cyber Sentinels:Protecting Networks in the Age of AI',
  //   date: 'January 27, 2025', // Assuming date
  //   time: '3:00 PM - 7:00 PM', // Assuming time
  //   location: 'E-216 , E-318', // Assuming location
  //   description: 'Experience the excitement of IPL Auction 2023 with live bidding and strategy discussions.',
  //   type: 'past',
  //   imageUrl: 'img/events/past/iplAuction.jpg'
  // },
  // {
  //   id: '7',
  //   title: 'Demystifying the power of artificial intelligence for everyone',
  //   date: 'January 27, 2025', // Assuming date
  //   time: '3:00 PM - 7:00 PM', // Assuming time
  //   location: 'E-216 , E-318', // Assuming location
  //   description: 'Experience the excitement of IPL Auction 2023 with live bidding and strategy discussions.',
  //   type: 'past',
  //   imageUrl: 'img/events/past/iplAuction.jpg'
  // },
  // {
  //   id: '8',
  //   title: 'SkillUp with Flutter:Cross-Platfrom Development',
  //   date: 'January 27, 2025', // Assuming date
  //   time: '3:00 PM - 7:00 PM', // Assuming time
  //   location: 'E-216 , E-318', // Assuming location
  //   description: 'Experience the excitement of IPL Auction 2023 with live bidding and strategy discussions.',
  //   type: 'past',
  //   imageUrl: 'img/events/past/iplAuction.jpg'
  // },
  // {
  //   id: '9',
  //   title: 'Workshop on: Cyber Sentinels:Protecting Networks in the Age of AI',
  //   date: 'January 27, 2025', // Assuming date
  //   time: '3:00 PM - 7:00 PM', // Assuming time
  //   location: 'E-216 , E-318', // Assuming location
  //   description: 'Experience the excitement of IPL Auction 2023 with live bidding and strategy discussions.',
  //   type: 'past',
  //   imageUrl: 'img/events/past/iplAuction.jpg'
  // }
];
