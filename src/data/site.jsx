export const content ={
    paragraph: "Reflections from travelers who came seeking adventure, and left with something far more lasting"
}

export const travelers = [
    '/avatar1.png',
    '/avatar2.png',
    '/avatar3.png'
]

export const HeroSectionData = {
  hero_background : '/hero_background.jpeg',  
}


export const DestinationSectionData = [
    {   tag: 'Ancient • Living • Timeless',
        heading1: 'The',
        heading2: 'Sacred',
        heading3: 'Valley',
        image: 'swyambhu.jpg',
        image_alt: 'swyambhu image',
        paragraph: "Where Ancient Temples and Monasteries stand side by side, and spirituality is not observed from afar—but lived in every moment.",  
    },
    {
        tag: 'Calm • Open • Reflective',
        heading1: 'Lake',
        heading2: 'And',
        heading3: 'Stillness',
        image: 'resized_pokhara.jpg',
        image_alt: 'pokhara image',
        paragraph: "A place where the mountains meet their reflection, and the world feels suspended between movement and calm.",  
    },
    {
        tag: 'Untamed • Quiet • Unpredictable',
        heading1: 'Wild',
        heading2: 'Lowland',
        heading3: 'Life',
        image: 'chitwan.jpg',
        image_alt: 'chitwan image',
        paragraph: "Where dense grasslands conceal life at every turn, and the wild moves freely—unseen, untamed, and always present.",  
    },
  ]


export const reviews = [
    {
        image:"/pokhara.jpg",
        video:"/videos/nepal.mp4",
        quote:"Kathmandu felt alive in every direction—temples hidden between narrow streets, incense in the air, and moments of calm inside the chaos. It’s a city that stays with you long after you leave.",
        name:"Emma Collins",
        country:"London, United Kingdom",
        location:"Kathmandu",
        avatar: "/avatar1.png"
    },
    {
        video:"/videos/ebc.mp4",
        quote:"Nothing prepares you for the scale of the Himalayas. Every step toward Everest felt unreal—the silence, the altitude, the people, the mountains. It was the most meaningful journey I’ve ever taken.",
        name:"Lucas Meyer",
        country:"Berlin, Germany",
        location:"EBC",
        avatar: "/avatar2.png"
    },
    {
        video:"/videos/gandruk.mp4",
        quote:"Ghandruk felt deeply human. The mountain views were incredible, but what I remember most is the warmth of the people, shared meals, and waking up to quiet Himalayan mornings.",
        name:"Sofia Bennett",
        country:"New York, USA",
        location:"Gandruk",
        avatar: "/avatar3.png"
    },
    {
        video:"/videos/pokhara.mp4",
        quote:"Pokhara gave me a kind of peace I didn’t know I needed. Watching the lake at sunrise with the mountains reflecting in the water felt almost dreamlike.",
        name:"Yuko Kim",
        country:"Seoul, South Korea",
        location:"Pokhara",
        avatar: "/avatar4.png"
    },

]

export const faqs = [
  {
    question: "How do I get around Nepal?",
    answer: <p className='text-(--white)/60'>
  Nepal is easy to navigate. Domestic flights connect major destinations quickly,
  while tourist buses and private transfers are ideal for longer scenic journeys.
  Within cities, ride-sharing apps like <span className="font-bold text-(--white)">
    Pathao, inDrive, and Yango
  </span> provide reliable, affordable, and convenient transportation for everyday travel.
</p>
  },
  {
    question: "When is the best time to visit Nepal?",
    answer:
      <p className='text-(--white)/60'>Autumn <span className="font-bold text-(--white)">(September to November)</span> and spring <span className="font-bold text-(--white)">(March to May)</span> are Nepal's most rewarding seasons, offering clear mountain views, comfortable temperatures, and ideal conditions for exploration.</p>
  },
  {
    question: "Is Nepal affordable for travelers?",
    answer:
      <p className='text-(--white)/60'>Nepal offers <span className="font-bold text-(--white)">exceptional value</span>, from boutique stays and guided adventures to authentic dining and unforgettable cultural experiences, making every journey remarkably rewarding.</p>
  },
  {
    question: "Do I need prior trekking experience?",
    answer:
      <p className='text-(--white)/60'>Not at all for city and village site seeing but for <span className="font-bold text-(--white)"> high altitude circuits like EBC, Gokyo,  you need to have prior trekking experience.</span> Nepal welcomes every level of traveler, with experiences ranging from gentle scenic hikes to world-renowned high-altitude expeditions.</p>
  },
  {
    question: "Is Nepal suitable for solo travelers?",
    answer:
      <p className='text-(--white)/60'>Absolutely. Nepal is celebrated for its <span className="font-bold text-(--white)">warm hospitality</span>, established travel routes, and vibrant community of independent explorers from around the world.</p>
  }
]

export const footerData = {
    hero : 'Visit Nepal',
    supporting: 'Where towering landscapes, timeless traditions, and unforgettable journeys come together.',
    quicklink : [
        {label:'Destinations', link: '#destinations'},
        {label:'Experiences', link: '#expereince',},
        {label:'Why Nepal', link: '#why',},
        {label:'Stories', link: '#testimonials',},
        {label:'FAQ', link: '#faq',},
    ],
    trendyplaces :[
        {label:'Kathmandu Valley', link: '/explore#culture&faith'},
        {label:'Pokhara', link: '/explore#trek&trail'},
        {label:'Himalayas', link: '/explore#horizon'},
        {label:'Chitwan', link: '/explore#people'},
        {label:'Mustang', link: '/explore#horizon'},
        {label:'More', link: '/explore#flavour'},
    ],
    socials:[
        {label: 'Github', link: '#', icon:'/social_github.png'},
        {label: 'Dibble', link: '#', icon:'/social_dribble.png'},
        {label: 'Linkedin', link: '#', icon:'/social_linkedin.png'},
        {label: 'Instagram', link: '#', icon:'/social_instagram.png'},
    ],
    copy:'© 2025 Visit Nepal. Crafted to inspire exploration.',
    privacy:'Privacy Policy || Cookie preferences || Website by Phurpa Sherpa'
}


export const gallaryImages = [
  // Culture & Faith
  {id: 'c1', label:'Pashupatinath Aarati Ceremony', tag:'culture&faith', src:'/gallary/culture_10.mp4', type:'video'},
  {id: 'c2', label:'Jatra Blessing from God', tag:'culture&faith', src:'/gallary/culture_01.webp', type:'image'},
  {id: 'c3', label:'Kathmandu Durbar Square', tag:'culture&faith', src:'/gallary/culture_02.webp', type:'image'},
  {id: 'c4', label:'Boudhanath Stupa Prayer Flags', tag:'culture&faith', src:'/gallary/culture_03.webp', type:'image'},
  {id: 'c5', label:'Pashupatinath Sacred Temple', tag:'culture&faith', src:'/gallary/culture_04.webp', type:'image'},
  {id: 'c6', label:'Patan Daurbar Square', tag:'culture&faith', src:'/gallary/culture_05.webp', type:'image'},
  {id: 'c7', label:'Goddess Sita Birthplace - Janaki Temple', tag:'culture&faith', src:'/gallary/culture_06.jpg', type:'image'},
  {id: 'c8', label:'Devotees at Pashupatinath Temple', tag:'culture&faith', src:'/gallary/culture_11.mp4', type:'video'},
  {id: 'c9', label:'World Peace Pagoda, Pokhara', tag:'culture&faith', src:'/gallary/culture_07.webp', type:'image'},

  // Horizon & Mountains
  {id: 'h1', label:'Flight Over the Himalayas', tag:'horizon', src:'/gallary/horizon_10.mp4', type:'video'},
  {id: 'h2', label:'Upper Manang', tag:'horizon', src:'/gallary/horizon_01.jpg', type:'image'},
  {id: 'h3', label:'Fishtail Mountain from Pokhara ', tag:'horizon', src:'/gallary/horizon_02.jpg', type:'image'},
  {id: 'h4', label:'Everest Base Camp View', tag:'horizon', src:'/gallary/horizon_03.jpg', type:'image'},
  {id: 'h8', label:'Hidden Treasure, Dolpa Valley', tag:'horizon', src:'/gallary/horizon_08.jpg', type:'image'},
  {id: 'h5', label:'Tea Garden, Kanyam', tag:'horizon', src:'/gallary/horizon_04.jpeg', type:'image'},
  {id: 'h6', label:'Blue Water, Phoksundo Lake', tag:'horizon', src:'/gallary/horizon_05.webp', type:'image'},
  {id: 'h7', label:'Snowy Himalayan Peaks', tag:'horizon', src:'/gallary/horizon_06.jpg', type:'image'},
  {id: 'h8', label:'Himalayan Clouds Roll In', tag:'horizon', src:'/gallary/horizon_11.mp4', type:'video'},
  
  // Trek & Trail
  {id: 't1', label:'Adventure off-roading life time experience', tag:'trek&trail', src:'/gallary/trek_01.mp4', type:'video'},
  {id: 't2', label:'Rider Overlooking the Valley', tag:'trek&trail', src:'/gallary/trek_02.webp', type:'image'},
  {id: 't3', label:'Hiker in the Misty Mountain', tag:'trek&trail', src:'/gallary/trek_03.jpg', type:'image'},
  {id: 't4', label:'Suspension Bridge Crossing', tag:'trek&trail', src:'/gallary/trek_04.jpg', type:'image'},
  {id: 't5', label:'Trail Through Rhododendron Forests', tag:'trek&trail', src:'/gallary/trek_05.webp', type:'image'},
  {id: 't6', label:'Morning Fog on the Trail', tag:'trek&trail', src:'/gallary/trek_07.webp', type:'image'},
  {id: 't7', label:'Cycling in Upper Mustang', tag:'trek&trail', src:'/gallary/trek_08.jpg', type:'image'},
  {id: 't8', label:'View from Top of World', tag:'trek&trail', src:'/gallary/trek_06.mp4', type:'video'},
  {id: 't9', label:'Solo Traveler in Mountain', tag:'trek&trail', src:'/gallary/horizon_07.jpg', type:'image'},

  // Flavour & Food
  {id: 'f1', label:'Toursit Enjoying Food in Restaurant', tag:'flavour', src:'/gallary/food_09.mp4', type:'video'},
  {id: 'f5', label:'Steaming Hot Nepali Foods', tag:'flavour', src:'/gallary/food_02.mp4', type:'video'},
  {id: 'f2', label:'Traditional Nepali Thakali Food', tag:'flavour', src:'/gallary/food_01.webp', type:'image'},
  {id: 'f4', label:'Thakali Thali Set', tag:'flavour', src:'/gallary/food_03.jpg', type:'image'},
  {id: 'f6', label:'Street Food in Kathmandu', tag:'flavour', src:'/gallary/food_05.jpg', type:'image'},
  {id: 'f3', label:'Nepali Foods Delicacies', tag:'flavour', src:'/gallary/food_08.mp4', type:'video'},
  {id: 'f8', label:'Newari Platter', tag:'flavour', src:'/gallary/food_04.mp4', type:'video'},
  {id: 'f7', label:'Nepali Fast Foods', tag:'flavour', src:'/gallary/food_06.webp', type:'image'},
  {id: 'f9', label:'Momo', tag:'flavour', src:'/gallary/food_07.mp4', type:'video'},

  // People & Stories
  {id: 'p1', label:'Festival of Color Holi, Pokhara', tag:'people', src:'/gallary/people_03.mp4', type:'video'},
  {id: 'p2', label:'Simling Faces, Strong Traditions', tag:'people', src:'/gallary/people_01.webp', type:'image'},
  {id: 'p3', label:'Student With Smile', tag:'people', src:'/gallary/people_02.jpg', type:'image'},
  {id: 'p4', label:'Dog Tihar, Festival of Dogs', tag:'people', src:'/gallary/people_04.png', type:'image'},
  {id: 'p5', label:'Local Guide Sharing Stories', tag:'people', src:'/gallary/people_07.jpg', type:'image'},
  {id: 'p6', label:'Warm Welcome', tag:'people', src:'/gallary/people_05.jpeg', type:'image'},
  {id: 'p7', label:'Newari Kids in Traditional Dress', tag:'people', src:'/gallary/people_06.jpg', type:'image'},
  {id: 'p8', label:'Artisan Crafting Mask', tag:'people', src:'/gallary/people_08.jpg', type:'image'},
]
    
