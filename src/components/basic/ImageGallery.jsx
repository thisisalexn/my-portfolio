import React from "react";
import "./ImageGallery.css";
import "./Marquee.css";


const ImageGallery = ({ images }) => {


    const handleRightClick = (event) => {
        event.preventDefault();
    };

    return (

        <div class="gallery-wrapper relative w-full overflow-hidden">
            <div className="overflow-x-auto whitespace-nowrap scrollbar-hide flex items-center gap-4 p-4">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        loading="lazy"
                        alt={`Gallery Image ${index + 1}`}
                        className="inline-block h-56 rounded-lg shadow-lg object-cover"
                        onContextMenu={handleRightClick}
                        style={{
                            userDrag: 'none',
                            pointerEvents: 'none'

                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;