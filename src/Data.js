import banner1 from './assets/img/banner/banner1.png';
import banner2 from './assets/img/banner/banner2.png';
import banner3 from './assets/img/banner/banner3.png';
import banner4 from './assets/img/banner/banner4.png';
import banner5 from './assets/img/banner/banner5.png';
import banner6 from './assets/img/banner/banner6.png';
import banner7 from './assets/img/banner/banner7.png';
import banner8 from './assets/img/banner/banner8.png';
import banner9 from './assets/img/banner/banner9.png';

import avatar1 from './assets/img/avatar/avatar1.png';
import avatar2 from './assets/img/avatar/avatar2.png';
import avatar3 from './assets/img/avatar/avatar3.png';
import avatar4 from './assets/img/avatar/avatar4.png';
import avatar5 from './assets/img/avatar/avatar5.png';
import avatar6 from './assets/img/avatar/avatar6.png';
import avatar7 from './assets/img/avatar/avatar7.png';
import avatar8 from './assets/img/avatar/avatar8.png';
import avatar9 from './assets/img/avatar/avatar9.png';

// Fungsi untuk menghitung harga setelah diskon
function calculateDiscountedPrice(harga, diskon) {
  if (!harga || !diskon) {
    return null;
  }

  const hargaNumeric = parseFloat(harga.replace('Rp ', '').replace('k', '')) * 1000;
  const diskonNumeric = parseFloat(diskon.replace('%', '')) / 100;
  const hargaDisc = hargaNumeric * (1 - diskonNumeric);
  const hargaDiscFormatted = `Rp ${(hargaDisc / 1000).toFixed(0)}k`;
  return hargaDiscFormatted;
}

export const card = [
  {
    id: 1,
    bannerImg: banner5,
    judul: 'Mempelajari Lebih Dalam Pada Industry Film',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    profileImg: avatar5,
    author: 'Jenna Ortega',
    pekerjaan: 'Junior Film Producer di Netflix',
    harga: 'Rp 300k',
    discount: '30%',
    rate: { rateAvg: 4.1, rateCount: 226 },
    category: 'Pemasaran',
    durasi: '2 jam',
  },
  {
    id: 2,
    bannerImg: banner2,
    judul: 'Game Developer With Unreal Engine 5',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar2,
    author: 'Jenner Miller',
    pekerjaan: 'Senior Game Developer di Ubisoft',
    harga: 'Rp 219k',
    discount: null,
    rate: { rateAvg: 4.5, rateCount: 339 },
    category: 'Pengembangan Diri',
    durasi: '3 jam',
  },
  {
    id: 3,
    bannerImg: banner3,
    judul: 'Crypto Currency Expert',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar3,
    author: 'Havanna Summer',
    pekerjaan: 'Junior Accountant di Uber',
    harga: 'Rp 319k',
    discount: '40%',
    rate: { rateAvg: 3.8, rateCount: 113 },
    category: 'Bisnis',
    durasi: '1 jam',
  },
  {
    id: 4,
    bannerImg: banner4,
    judul: 'Marketing Strategy Expert for 2025',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar4,
    author: 'Taylor Jenkins-Lewis',
    pekerjaan: 'Senior Marketing di Google',
    harga: 'Rp 279k',
    discount: null,
    rate: { rateAvg: 3.9, rateCount: 122 },
    category: 'Pemasaran',
    durasi: '2.5 jam',
  },
  {
    id: 5,
    bannerImg: banner1,
    judul: 'Big 4 Auditor Financial Analyst',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar1,
    author: 'Melissa Smith',
    pekerjaan: 'Senior Accountant di Gojek',
    harga: 'Rp 399k',
    discount: '75%',
    rate: { rateAvg: 3.2, rateCount: 74 },
    category: 'Bisnis',
    durasi: '4 jam',
  },
  {
    id: 6,
    bannerImg: banner6,
    judul: 'Making a Music Without Understanding all Music',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar6,
    author: 'Kanye South',
    pekerjaan: 'Senior Music Producer di Spotify',
    harga: 'Rp 150k',
    discount: '25%',
    rate: { rateAvg: 4.4, rateCount: 186 },
    category: 'Pengembangan Diri',
    durasi: '1.5 jam',
  },
  {
    id: 7,
    bannerImg: banner7,
    judul: 'Designing a Logo with Adobe Illustrator',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar7,
    author: 'Justin Howard',
    pekerjaan: 'Senior UI Designer di Figma',
    harga: 'Rp 200k',
    discount: null,
    rate: { rateAvg: 3.5, rateCount: 46 },
    category: 'Desain',
    durasi: '2 jam',
  },
  {
    id: 8,
    bannerImg: banner8,
    judul: 'Business Management for the upcoming Generation',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar8,
    author: 'Franklin Harris',
    pekerjaan: 'Senior Business Management di Shopee',
    harga: 'Rp 199k',
    discount: null,
    rate: { rateAvg: 3.7, rateCount: 64 },
    category: 'Bisnis',
    durasi: '3 jam',
  },
  {
    id: 9,
    bannerImg: banner9,
    judul: 'How to Create a interesting film with Adobe Premiere',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar9,
    author: 'Ortega Harvis',
    pekerjaan: 'Senior Film Editor di Universal studio',
    harga: 'Rp 229k',
    discount: '25%',
    rate: { rateAvg: 4.5, rateCount: 92 },
    category: 'Desain',
    durasi: '2.5 jam',
  },
  {
    id: 10,
    bannerImg: banner1,
    judul: 'Understanding Data Science with Python',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar1,
    author: 'Liam Anderson',
    pekerjaan: 'Data Scientist di Tokopedia',
    harga: 'Rp 350k',
    discount: '25%',
    rate: { rateAvg: 4.7, rateCount: 120 },
    category: 'Teknologi',
    durasi: '4.5 jam',
  },
  {
    id: 11,
    bannerImg: banner2,
    judul: 'Mastering Public Speaking',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar2,
    author: 'Emma Johnson',
    pekerjaan: 'Communication Specialist di BCA',
    harga: 'Rp 180k',
    discount: '25%',
    rate: { rateAvg: 4.2, rateCount: 200 },
    category: 'Pengembangan Diri',
    durasi: '1.5 jam',
  },
  {
    id: 12,
    bannerImg: banner3,
    judul: 'Advanced Photoshop Techniques',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar3,
    author: 'Sophia Brown',
    pekerjaan: 'Graphic Designer di Canva',
    harga: 'Rp 220k',
    discount: '49%',
    rate: { rateAvg: 4.8, rateCount: 150 },
    category: 'Desain',
    durasi: '3.5 jam',
  },
  {
    id: 13,
    bannerImg: banner4,
    judul: 'JavaScript for Beginners',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar4,
    author: 'Noah Wilson',
    pekerjaan: 'Frontend Developer di Traveloka',
    harga: 'Rp 250k',
    discount: null,
    rate: { rateAvg: 4.6, rateCount: 180 },
    category: 'Teknologi',
    durasi: '1.5 jam',
  },
  {
    id: 14,
    bannerImg: banner5,
    judul: 'Photography Basics',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar5,
    author: 'Mason Martinez',
    pekerjaan: 'Photographer di National Geographic',
    harga: 'Rp 300k',
    discount: '55%',
    rate: { rateAvg: 4.4, rateCount: 170 },
    category: 'Fotografi',
    durasi: '3.5 jam',
  },
  {
    id: 15,
    bannerImg: banner6,
    judul: 'Creating Mobile Apps with Flutter',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar6,
    author: 'Logan Lee',
    pekerjaan: 'Mobile Developer di Gojek',
    harga: 'Rp 270k',
    discount: '65%',

    rate: { rateAvg: 4.5, rateCount: 210 },
    category: 'Teknologi',
    durasi: '2.5 jam',
  },
  {
    id: 16,
    bannerImg: banner7,
    judul: 'Mastering SEO for Better Rankings',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar7,
    author: 'Lucas Harris',
    pekerjaan: 'SEO Specialist di Shopee',
    harga: 'Rp 190k',
    discount: null,
    rate: { rateAvg: 4.1, rateCount: 190 },
    category: 'Pemasaran',
    durasi: '1.5 jam',
  },
  {
    id: 17,
    bannerImg: banner8,
    judul: 'Learning HTML & CSS',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar8,
    author: 'Alexander Clark',
    pekerjaan: 'Web Developer di Bukalapak',
    harga: 'Rp 150k',
    discount: null,
    rate: { rateAvg: 4.3, rateCount: 140 },
    category: 'Teknologi',
    durasi: '1 jam',
  },
  {
    id: 18,
    bannerImg: banner9,
    judul: 'Time Management Skills',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar9,
    author: 'Ethan King',
    pekerjaan: 'Project Manager di Tokopedia',
    harga: 'Rp 160k',
    discount: '75%',
    rate: { rateAvg: 4.0, rateCount: 160 },
    category: 'Pengembangan Diri',
    durasi: '1.5 jam',
  },
  {
    id: 19,
    bannerImg: banner1,
    judul: 'Financial Planning for Young Adults',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar1,
    author: 'Aiden Walker',
    pekerjaan: 'Financial Advisor di Mandiri',
    harga: 'Rp 300k',
    discount: null,
    rate: { rateAvg: 3.9, rateCount: 110 },
    category: 'Bisnis',
    durasi: '2.5 jam',
  },
  {
    id: 20,
    bannerImg: banner2,
    judul: 'Digital Marketing for Beginners',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar2,
    author: 'James Wright',
    pekerjaan: 'Digital Marketer di Tokopedia',
    harga: 'Rp 200k',
    discount: '80%',
    rate: { rateAvg: 4.2, rateCount: 130 },
    category: 'Pemasaran',
    durasi: '1.5 jam',
  },
  {
    id: 21,
    bannerImg: banner3,
    judul: 'Introduction to Machine Learning',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar3,
    author: 'Benjamin Young',
    pekerjaan: 'Machine Learning Engineer di Bukalapak',
    harga: 'Rp 400k',
    discount: '30%',
    rate: { rateAvg: 4.7, rateCount: 140 },
    category: 'Teknologi',
    durasi: '2.5 jam',
  },
  {
    id: 22,
    bannerImg: banner4,
    judul: 'Building REST APIs with Node.js',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar4,
    author: 'William Allen',
    pekerjaan: 'Backend Developer di Gojek',
    harga: 'Rp 280k',
    discount: '50%',
    rate: { rateAvg: 4.5, rateCount: 170 },
    category: 'Teknologi',
    durasi: '1.5 jam',
  },
  {
    id: 23,
    bannerImg: banner5,
    judul: 'UX Design Principles',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar5,
    author: 'Michael Scott',
    pekerjaan: 'UX Designer di Grab',
    harga: 'Rp 250k',
    discount: null,
    rate: { rateAvg: 4.4, rateCount: 150 },
    category: 'Desain',
    durasi: '1.5 jam',
  },
  {
    id: 24,
    bannerImg: banner6,
    judul: 'Intro to Cyber Security',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar6,
    author: 'Henry Lewis',
    pekerjaan: 'Cyber Security Specialist di Tokopedia',
    harga: 'Rp 350k',
    discount: '40%',
    rate: { rateAvg: 4.6, rateCount: 160 },
    category: 'Teknologi',
    durasi: '3.5 jam',
  },
  {
    id: 25,
    bannerImg: banner7,
    judul: 'Digital Illustration with Procreate',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar7,
    author: 'Daniel Robinson',
    pekerjaan: 'Illustrator di Canva',
    harga: 'Rp 180k',
    discount: '50%',
    rate: { rateAvg: 4.5, rateCount: 130 },
    category: 'Desain',
    durasi: '4.5 jam',
  },
  {
    id: 26,
    bannerImg: banner8,
    judul: 'Effective Communication Skills',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar8,
    author: 'Matthew Walker',
    pekerjaan: 'Communication Trainer di Mandiri',
    harga: 'Rp 150k',
    discount: '40%',
    rate: { rateAvg: 4.3, rateCount: 140 },
    category: 'Pengembangan Diri',
    durasi: '5.5 jam',
  },
  {
    id: 27,
    bannerImg: banner9,
    judul: 'Learning Kotlin for Android Development',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar9,
    author: 'Joseph Martinez',
    pekerjaan: 'Android Developer di Gojek',
    harga: 'Rp 270k',
    discount: null,
    rate: { rateAvg: 4.4, rateCount: 150 },
    category: 'Teknologi',
    durasi: '1.5 jam',
  },
  {
    id: 28,
    bannerImg: banner1,
    judul: 'Basics of Blockchain Technology',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar1,
    author: 'Sebastian Harris',
    pekerjaan: 'Blockchain Developer di Shopee',
    harga: 'Rp 320k',
    discount: '75%',
    rate: { rateAvg: 4.6, rateCount: 120 },
    category: 'Teknologi',
    durasi: '4.5 jam',
  },
  {
    id: 29,
    bannerImg: banner2,
    judul: 'Public Relations Strategies',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar2,
    author: 'David Rodriguez',
    pekerjaan: 'PR Manager di Bukalapak',
    harga: 'Rp 250k',
    discount: null,
    rate: { rateAvg: 4.2, rateCount: 130 },
    category: 'Pemasaran',
    durasi: '3.5 jam',
  },
  {
    id: 30,
    bannerImg: banner3,
    judul: 'Social Media Marketing Tactics',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar3,
    author: 'Oliver Martinez',
    pekerjaan: 'Social Media Strategist di Tokopedia',
    harga: 'Rp 220k',
    discount: '60%',
    rate: { rateAvg: 4.1, rateCount: 150 },
    category: 'Pemasaran',
    durasi: '2.5 jam',
  },
  {
    id: 31,
    bannerImg: banner4,
    judul: 'Advanced React.js',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar4,
    author: 'John Doe',
    pekerjaan: 'Developer di Apple',
    harga: 'Rp 330k',
    discount: '45%',
    rate: { rateAvg: 4.7, rateCount: 140 },
    category: 'Teknologi',
    durasi: '1.5 jam',
  },
  {
    id: 32,
    bannerImg: banner5,
    judul: 'Basics of AI and ML',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar5,
    author: 'Jane Smith',
    pekerjaan: 'Designer di Adobe',
    harga: 'Rp 210k',
    discount: null,
    rate: { rateAvg: 4.5, rateCount: 150 },
    category: 'Teknologi',
    durasi: '5 jam',
  },
  {
    id: 33,
    bannerImg: banner6,
    judul: 'Creative Graphic Design',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar6,
    author: 'William Brown',
    pekerjaan: 'Designer di Figma',
    harga: 'Rp 150k',
    discount: '25%',
    rate: { rateAvg: 4.4, rateCount: 170 },
    category: 'Desain',
    durasi: '3.5 jam',
  },
  {
    id: 34,
    bannerImg: banner7,
    judul: 'Personal Finance Management',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar7,
    author: 'Jessica Taylor',
    pekerjaan: 'Manager di Shopee',
    harga: 'Rp 280k',
    discount: null,
    rate: { rateAvg: 4.2, rateCount: 180 },
    category: 'Bisnis',
    durasi: '2.5 jam',
  },
  {
    id: 35,
    bannerImg: banner8,
    judul: 'Marketing for Small Businesses',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar8,
    author: 'Christopher Martinez',
    pekerjaan: 'Marketing Specialist di Traveloka',
    harga: 'Rp 290k',
    discount: '10%',
    rate: { rateAvg: 4.5, rateCount: 160 },
    category: 'Pemasaran',
    durasi: '1.5 jam',
  },
  {
    id: 36,
    bannerImg: banner9,
    judul: 'Advanced Excel Techniques',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar9,
    author: 'Matthew Harris',
    pekerjaan: 'Data Analyst di Tokopedia',
    harga: 'Rp 170k',
    discount: null,
    rate: { rateAvg: 4.3, rateCount: 140 },
    category: 'Teknologi',
    durasi: '4.5 jam',
  },
  {
    id: 37,
    bannerImg: banner1,
    judul: 'Leadership and Management',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar1,
    author: 'Alexander Young',
    pekerjaan: 'Manager di Bukalapak',
    harga: 'Rp 300k',
    discount: '30%',
    rate: { rateAvg: 4.6, rateCount: 150 },
    category: 'Pengembangan Diri',
    durasi: '7 jam',
  },
  {
    id: 38,
    bannerImg: banner2,
    judul: 'Creative Writing',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar2,
    author: 'Daniel Clark',
    pekerjaan: 'Writer di Mandiri',
    harga: 'Rp 250k',
    discount: '15%',
    rate: { rateAvg: 4.4, rateCount: 120 },
    category: 'Pengembangan Diri',
    durasi: '3.5 jam',
  },
  {
    id: 39,
    bannerImg: banner3,
    judul: 'Building Mobile Apps with Flutter',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar3,
    author: 'Sebastian Rodriguez',
    pekerjaan: 'Developer di Gojek',
    harga: 'Rp 270k',
    discount: '10%',
    rate: { rateAvg: 4.5, rateCount: 160 },
    category: 'Teknologi',
    durasi: '2.5 jam',
  },
  {
    id: 40,
    bannerImg: banner4,
    judul: 'Entrepreneurship 101',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar4,
    author: 'Benjamin Scott',
    pekerjaan: 'Entrepreneur di Bukalapak',
    harga: 'Rp 200k',
    discount: null,
    rate: { rateAvg: 4.3, rateCount: 180 },
    category: 'Bisnis',
    durasi: '2.5 jam',
  },
  {
    id: 41,
    bannerImg: banner5,
    judul: 'Music Production with Logic Pro',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar5,
    author: 'Matthew Taylor',
    pekerjaan: 'Music Producer di Spotify',
    harga: 'Rp 280k',
    discount: '20%',
    rate: { rateAvg: 4.5, rateCount: 150 },
    category: 'Pengembangan Diri',
    durasi: '1.5 jam',
  },
  {
    id: 42,
    bannerImg: banner6,
    judul: 'Modern Web Design with HTML5 and CSS3',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar6,
    author: 'Michael Brown',
    pekerjaan: 'Web Designer di Canva',
    harga: 'Rp 220k',
    discount: '30%',
    rate: { rateAvg: 4.2, rateCount: 140 },
    category: 'Teknologi',
    durasi: '15 jam',
  },
  {
    id: 43,
    bannerImg: banner7,
    judul: 'SEO and SEM Strategies',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar7,
    author: 'John Martinez',
    pekerjaan: 'SEO Specialist di Traveloka',
    harga: 'Rp 210k',
    discount: null,
    rate: { rateAvg: 4.3, rateCount: 130 },
    category: 'Pemasaran',
    durasi: '2.5 jam',
  },
  {
    id: 44,
    bannerImg: banner8,
    judul: 'Public Speaking Mastery',
    desc: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    profileImg: avatar8,
    author: 'Liam Harris',
    pekerjaan: 'Public Speaker di Mandiri',
    harga: 'Rp 180k',
    discount: null,
    rate: { rateAvg: 4.6, rateCount: 160 },
    category: 'Pengembangan Diri',
    durasi: '1 jam',
  },
];

card.forEach((item) => {
  item.hargaDisc = calculateDiscountedPrice(item.harga, item.discount);
});

export default card;

export const review = [
  {
    id: 1,
    cardId: 11,
    avatar: avatar1,
    author: 'Jenna Ortega',
    pekerjaan: 'Junior Film Producer di Netflix',
    text: 'Materinya sangat jelas dan mudah dipahami. Sangat membantu dalam memahami topik yang sulit!',
    rating: 5,
  },
  {
    id: 2,
    cardId: 17,
    avatar: avatar2,
    author: 'Samuel Johnson',
    pekerjaan: 'Senior Developer di Google',
    text: 'Pembelajaran yang sangat bermanfaat, instruktur sangat berpengalaman.',
    rating: 4,
  },
  {
    id: 3,
    cardId: 18,
    avatar: avatar3,
    author: 'Emily Clark',
    pekerjaan: 'Data Analyst di Facebook',
    text: 'Topik yang diajarkan sangat relevan dengan industri saat ini. Direkomendasikan!',
    rating: 5,
  },
  {
    id: 4,
    cardId: 19,
    avatar: avatar4,
    author: 'Michael Brown',
    pekerjaan: 'Product Manager di Amazon',
    text: 'Materi yang disampaikan cukup baik, namun perlu beberapa penjelasan lebih mendalam.',
    rating: 3,
  },
  {
    id: 5,
    cardId: 15,
    avatar: avatar5,
    author: 'Sarah Wilson',
    pekerjaan: 'UX Designer di Spotify',
    text: 'Instruktur sangat berkompeten, metode pengajaran menarik dan interaktif.',
    rating: 5,
  },
  {
    id: 6,
    cardId: 16,
    avatar: avatar6,
    author: 'David Smith',
    pekerjaan: 'Marketing Specialist di Apple',
    text: 'Sangat membantu untuk meningkatkan pemahaman tentang topik ini.',
    rating: 4,
  },
  {
    id: 7,
    cardId: 12,
    avatar: avatar7,
    author: 'Sophia Martinez',
    pekerjaan: 'HR Manager di Microsoft',
    text: 'Pembelajaran yang luar biasa dengan banyak contoh kasus yang relevan.',
    rating: 5,
  },
  {
    id: 8,
    cardId: 14,
    avatar: avatar8,
    author: 'James Taylor',
    pekerjaan: 'Financial Analyst di Tesla',
    text: 'Kontennya sangat bagus, namun ada beberapa bagian yang kurang mendetail.',
    rating: 4,
  },
  {
    id: 9,
    cardId: 13,
    avatar: avatar9,
    author: 'Olivia Moore',
    pekerjaan: 'Software Engineer di Adobe',
    text: 'Materi yang sangat lengkap dan terstruktur dengan baik. Sangat direkomendasikan.',
    rating: 5,
  },
  {
    id: 10,
    avatar: avatar1,
    cardId: 11,
    author: 'Liam Thompson',
    pekerjaan: 'Content Creator di YouTube',
    text: 'Instruktur memberikan penjelasan yang mudah dipahami. Sangat puas dengan pembelajaran ini.',
    rating: 5,
  },
  {
    id: 11,
    avatar: avatar2,
    cardId: 20,
    author: 'Emma Harris',
    pekerjaan: 'Operations Manager di Airbnb',
    text: 'Materi yang diberikan sangat membantu dalam pekerjaan sehari-hari saya.',
    rating: 4,
  },
  {
    id: 12,
    cardId: 6,
    avatar: avatar3,
    author: 'Mason Clark',
    pekerjaan: 'Business Analyst di IBM',
    text: 'Pembelajaran yang sangat baik, namun ada beberapa bagian yang bisa ditingkatkan.',
    rating: 3,
  },
  {
    id: 13,
    cardId: 5,
    avatar: avatar4,
    author: 'Isabella Lewis',
    pekerjaan: 'Graphic Designer di Canva',
    text: 'Instruktur sangat interaktif dan materi disampaikan dengan cara yang menarik.',
    rating: 5,
  },
  {
    id: 14,
    cardId: 7,
    avatar: avatar5,
    author: 'Ethan Robinson',
    pekerjaan: 'IT Support Specialist di Oracle',
    text: 'Materi cukup lengkap, namun ada beberapa topik yang perlu diperjelas lebih lanjut.',
    rating: 4,
  },
  {
    id: 15,
    cardId: 8,
    avatar: avatar6,
    author: 'Ava Walker',
    pekerjaan: 'Digital Marketing Strategist di HubSpot',
    text: 'Pembelajaran yang sangat menyenangkan, banyak pengetahuan baru yang didapat.',
    rating: 5,
  },
  {
    id: 16,
    cardId: 10,
    avatar: avatar7,
    author: 'Lucas Hall',
    pekerjaan: 'Sales Manager di Shopify',
    text: 'Konten yang diberikan sangat relevan dengan kebutuhan industri saat ini.',
    rating: 5,
  },
  {
    id: 17,
    cardId: 9,
    avatar: avatar8,
    author: 'Mia Young',
    pekerjaan: 'Project Coordinator di Asana',
    text: 'Instruktur memberikan banyak contoh kasus yang memudahkan pemahaman.',
    rating: 4,
  },
  {
    id: 18,
    cardId: 4,
    avatar: avatar9,
    author: 'Noah Allen',
    pekerjaan: 'Technical Writer di GitHub',
    text: 'Pembelajaran yang sangat bermanfaat, namun perlu penjelasan lebih mendalam di beberapa bagian.',
    rating: 3,
  },
  {
    id: 19,
    cardId: 1,
    avatar: avatar1,
    author: 'Charlotte King',
    pekerjaan: 'Front-End Developer di Mozilla',
    text: 'Materi sangat menarik dan disampaikan dengan cara yang mudah dipahami.',
    rating: 5,
  },
  {
    id: 20,
    cardId: 1,
    avatar: avatar2,
    author: 'Alexander Scott',
    pekerjaan: 'Back-End Developer di LinkedIn',
    text: 'Instruktur sangat kompeten, banyak pengetahuan baru yang didapat dari pembelajaran ini.',
    rating: 5,
  },
  {
    id: 21,
    cardId: 3,
    avatar: avatar3,
    author: 'Aria Martinez',
    pekerjaan: 'Cybersecurity Analyst di McAfee',
    text: 'Pembelajaran yang sangat bermanfaat, namun perlu penjelasan lebih mendalam di beberapa bagian.',
    rating: 4,
  },
];
