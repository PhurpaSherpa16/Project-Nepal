import { Link, useLocation } from "react-router-dom"
import { Heading } from "../../components/heading"
import { MoveLeft, MoveRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { gallaryImages } from "../../data/site"
import { useScroll, useSpring, useTransform, motion } from "motion/react"


export default function About() {
  const location = useLocation()
  const tag = location.hash.slice(1)
  const [images, setImages] = useState(gallaryImages)

  const content = [
    {title:'Ancient Faith Living', tag:'culture&faith', paragraph:'Where belief is not distant, but woven into daily life—through rituals, devotion, and moments that feel Timeless, Sacred & Deeply Present'},
    {title:'Beyond Every Horizon', tag:'horizon', paragraph:'Vast mountains and open skies redefine scale, creating a world that feels Limitless, Elevated & Quietly Overwhelming.'},
    {title:'Path Into Freedom', tag:'trek&trail', paragraph:'Every trail leads somewhere unknown—through landscapes that feel Timeless, Raw, Remote & Entirely Unrestricted.'},
    {title:'Where Flavour Lingers', tag:'flavour', paragraph:'Food becomes a shared experience, shaped by tradition and connection—simple, Flavourful & Unforgettable.'},
    {title:'Human Warmth Within', tag:'people', paragraph:'In shared moments and quiet smiles, connection feels effortless Warm, Genuine & Love Care.'},
  ]

  useEffect(() => {
    setImages(tag === 'all' ? gallaryImages : gallaryImages.filter((image) => image.tag === tag))
  }, [tag])

  const title = tag !== 'all' ? content.find((item) => item.tag === tag).title : 'Before You Go'
  const paragraph = tag !== 'all' ? content.find((item) => item.tag === tag).paragraph : 'Everything you need to know before setting out—designed to make every journey feel Effortless, Informed, and Inspiring.'

  return (
    <div className="pt-8 pb-24 relative bg-(--white)">
      <div className='padding_inline mx-auto pb-16'>
        <Link to={'/'} className="flex items-center gap-2 group bg-white transition-all duration-300 px-[2px] py-[2px] rounded-full w-fit">
          <div className="flex items-center gap-2 group transition-all duration-300 hover:bg-(--black)/10 px-2 py-1 rounded-full w-fit">
            <MoveLeft className="group-hover:rotate-45 transition-all duration-300" />
            Back to Home
          </div>
        </Link>
      </div>
      <div className='padding_inline flex items-center justify-between'>
        <Heading text1={title} className='text-(--black) text-[46px] md:text-[132px]' />
        <p className='text-center lg:text-right w-sm text-(--black)'>
          {paragraph}
        </p>
      </div>

      <GallerySection images={images} />

    </div>
  )
}


const GallerySection = ({ images }) => {
  
  const mainDivRef = useRef(null)
    
  const {scrollYProgress} = useScroll({
      target: mainDivRef,
      offset: ["start end", "end start"]
  })

  const groupedImages = []

  for (let i = 0; i < images.length; i += 3) {
    groupedImages.push(images.slice(i, i + 3))
  }

  return (
    <div ref={mainDivRef} className="min-h-screen px-16">
      <div className="h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {groupedImages.map((item, index) => (
          <GalleryRow row={item} scrollYProgress={scrollYProgress} index={index}
          />
        ))}
      </div>

    </div>
  )
}

const GalleryRow = ({row, scrollYProgress, index}) =>{
  const speedMultipler = [10, 5, 10][index % 3]

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [30 * speedMultipler , -30 * speedMultipler]),
          {stiffness: 50, damping: 15})

  return(
  <motion.div style={{y}} key={index} className="flex flex-col gap-16 h-fit">
      {row.map((item) => {
        const isVideo = item.type === "video"
        return (
          <div key={item.id} className={`overflow-hidden rounded relative ${isVideo ? "col-span-2" : "col-span-1"}`}>
            {item.type === "image" ? (
              <img src={item.src} alt={item.label} className="w-full h-full object-cover rounded hover:scale-105 transition-all duration-500
              filter grayscale-100 hover:grayscale-0"/>
            ) : (
              <video src={item.src} autoPlay muted loop playsInline className="w-full h-full object-cover rounded hover:scale-105 transition-all duration-500
              filter grayscale-100 hover:grayscale-0"/>
            )}
            <div className="absolute inset-0 bg-linear-to-t pointer-events-none from-black/80 via-black/20 to-transparent 
            flex flex-col justify-end p-4 z-10 transition-opacity duration-500 hover:opacity-100">
              <h2 className="text-white text-2xl font-bold">{item.label}</h2>
              <p className="text-white">{item.description}</p>
              <div className="flex gap-2">
                <span className="border- rounded-full px-2 py-1 text-white">#{item.tag}</span>

              </div>
            </div>
          </div>
        )
      })}
    </motion.div>
  )
}


