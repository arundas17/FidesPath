// src/data/industryData.js
import retail from '../../assets/retail.png';
import media from '../../assets/media.png';
import healthcrae from '../../assets/healthcare.png';
import manufacture from '../../assets/manufacturing.png';
import finance from '../../assets/financial-services.png'

export const industryCards = [
  {
    id: 1,
    title: 'Media & Entertainment',
    description: 'We understand the dynamic nature of the media and entertainment.',
    imageUrl: media, 
    link: '#media'
  },
  {
    id: 2,
    title: 'Financial Services',
    description: 'We understand the complex regulatory landscape and security requirements.',
    imageUrl: finance, 
    link: '#finance'
  },
  {
    id: 3,
    title: 'Healthcare',
    description: 'We are committed to improving healthcare outcomes through innovative solutions.',
    imageUrl: healthcrae, 
    link: '#healthcare'
  },
  {
    id: 4,
    title: 'Retail & E-commerce',
    description: 'We help businesses create engaging and personalized shopping experiences.',
    imageUrl: retail, 
    link: '#retail'
  },
  {
    id: 5,
    title: 'Manufacturing',
    description: 'Optimizing production processes and supply chains for efficiency and quality.',
    imageUrl: manufacture, 
    link: '#manufacturing'
  },
  // {
  //   id: 6,
  //   title: 'Education',
  //   description: 'Empowering learning institutions with technology for a better educational experience.',
  //   imageUrl: 'https://placehold.co/400x250/909090/333333?text=Education', // Placeholder image
  //   link: '#education'
  // }
];