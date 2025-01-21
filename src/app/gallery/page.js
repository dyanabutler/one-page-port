'use client'

import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import Footer from '@/components/Footer'

// Replace these with your actual image URLs
const imageUrls = [
  `https://res.cloudinary.com/dyanabutler/image/upload/v1737499736/wrldchngrs_sticker_v6afsw.png`,
  `https://res.cloudinary.com/dyanabutler/image/upload/v1737499771/emobunni_art__sample_shroomline_uvszf7.png`,
  `https://res.cloudinary.com/dyanabutler/image/upload/v1737497089/felipesfiesta_bday_poster_yvt2ms.png`,
  'https://res.cloudinary.com/dyanabutler/image/upload/v1737496977/yo_mittens_pattern_thumbnail_aaw5tm.png',
  'https://res.cloudinary.com/dyanabutler/image/upload/v1732082465/shego_rbsd8o.png',
  'https://res.cloudinary.com/dyanabutler/image/upload/v1732081196/AJ_-_One_on_One_by_Shroomline_mnzuvo.png',
  'https://res.cloudinary.com/dyanabutler/image/upload/v1732081508/Paul_and_I_on_the_piano__q1uimw.png',

  'https://res.cloudinary.com/dyanabutler/image/upload/v1732082465/Braids_gorl_wxz2cu.png',

  'https://res.cloudinary.com/dyanabutler/image/upload/v1732082465/Gorls_d8tmoi.png',
  'https://res.cloudinary.com/dyanabutler/image/upload/v1732082464/biopic2_b2ymhf.png',

  'https://res.cloudinary.com/dyanabutler/image/upload/v1732082466/Bawb_bijycv.png',
  'https://res.cloudinary.com/dyanabutler/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1732081196/mine_and_yours__tneujs.png',
  'https://res.cloudinary.com/dyanabutler/image/upload/v1732081513/Interview_Pt_1_bidwod.png',
  'https://res.cloudinary.com/dyanabutler/image/upload/v1732081530/Shroomline_Nov-2024_Green-04_baud9c.png',
]

export default function MasonryGallery() {
  const [imagesLoaded, setImagesLoaded] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }

  return (
    <>
    <div className="min-h-screen bg-black p-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto -ml-1"
        columnClassName="pl-1 bg-clip-padding"
      >
        {imageUrls.map((url, index) => (
          <MasonryItem 
            key={index} 
            url={url} 
            setImagesLoaded={setImagesLoaded} 
            onClick={() => setSelectedImage(url)}
          />
        ))}
      </Masonry>
      {imagesLoaded < imageUrls.length && (
        <p className="text-center mt-4 text-white">Loading images: {imagesLoaded} of {imageUrls.length}</p>
      )}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged gallery image"
                width={1200}
                height={800}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl"
                aria-label="Close enlarged image"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    <Footer />
    </>
  )
}

function MasonryItem({ url, setImagesLoaded, onClick }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
  
  return (
    
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="mb-1 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative group"
      >
        <Image
          src={url}
          alt="Gallery image"
          width={500}
          height={300}
          className="w-full h-auto transition-all duration-300 filter md:grayscale md:hover:grayscale-0 md:group-hover:grayscale-0"
          onLoad={() => setImagesLoaded(prev => prev + 1)}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </motion.div>
  
  )
}