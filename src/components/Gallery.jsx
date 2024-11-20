// src/components/Gallery.jsx
"use client"
import { useEffect, useRef,  } from 'react';
import Image from 'next/image';


const Gallery = ({ images }) => {
    const galleryRef = useRef(null);
    const galleryInstance = useRef(null);

    useEffect(() => {
        // Only initialize if we have a DOM reference and images
        if (galleryRef.current && images?.length) {
            // Format images for Natural Gallery
            const galleryImages = images.map(image => ({
                thumbnailSrc: image.src,
                enlargedSrc: image.src,
                enlargedWidth: image.width,
                enlargedHeight: image.height,
                title: image.title,
                color: '#f5f5f5',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                // Add Next.js Image optimization
                component: (
                    <Image
                        src={image.src}
                        alt={image.title}
                        width={image.width}
                        height={image.height}
                        priority
                    />
                )
            }));

            // Initialize gallery
            galleryInstance.current = new Masonry(galleryRef.current, {
                rowHeight: 300,
                gap: 16,
                showLabels: true,
                responsive: {
                    640: {
                        rowHeight: 240,
                        gap: 12,
                    },
                    1024: {
                        rowHeight: 300,
                        gap: 16,
                    }
                }
            });

            galleryInstance.current.init();
            galleryInstance.current.setItems(galleryImages);
        }

        // Cleanup on unmount
        return () => {
            if (galleryInstance.current) {
                galleryInstance.current.destroy();
            }
        };
    }, [images]);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
                ref={galleryRef} 
                className="gallery-container"
                style={{ minHeight: '400px' }}
            />
        </div>
    );
};

export default Gallery;