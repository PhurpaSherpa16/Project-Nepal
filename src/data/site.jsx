export const content ={
    paragraph: "Reflections from travelers who came seeking adventure, and left with something far more lasting"
}

export const travelers = [
    '/avatar1.png',
    '/avatar2.png',
    '/avatar3.png'
]

export const reviews = [
    {
        image:"/pokhara.jpg",
        quote:"Reflections from travelers who came seeking adventure, and left with something far more lasting",
        name:"Emma Collins",
        country:"London, United Kingdom",
        location:"Pokhara",
        avatar: "/avatar1.png"
    },
    {
        image:"/swyambhu.jpg",
        quote:"Reflections from travelers who came seeking adventure, and left with something far more lasting",
        name:"Emma Collins",
        country:"London, United Kingdom",
        location:"Kathmandu",
        avatar: "/avatar2.png"
    },
    {
        image:"/exp2_EBC.jpg",
        quote:"Reflections from travelers who came seeking adventure, and left with something far more lasting",
        name:"Emma Collins",
        country:"London, United Kingdom",
        location:"EBC",
        avatar: "/avatar3.png"
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
        {label:'Destinations', link: '#'},
        {label:'Experiences', link: '#',},
        {label:'Why Nepal', link: '#',},
        {label:'Travel Guide', link: '#',},
        {label:'Stories', link: '#',},
        {label:'FAQ', link: '#',},
    ],
    trendyplaces :[
        {label:'Kathmandu Valley', link: '#'},
        {label:'Pokhara', link: '#'},
        {label:'Himalayas', link: '#'},
        {label:'Chitwan', link: '#'},
        {label:'Mustang', link: '#'},
        {label:'More', link: '#'},
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