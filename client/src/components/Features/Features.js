import React from 'react';
import './Features.css'

export default function Features() {
    const features = {
        "sections": [
         

        ]
    };

    return (
        <div className='bg-img w-100 g-font-b '>
        <div className="container  px-4 py-3" id="featured-3">
            <h2 className="pb-2 border-bottom  border-black ">Features</h2>
            <div className="row g-4 py-3 row-cols-1 row-cols-md-2 row-cols-lg-4">
                {features.sections.map((section, index) => (
                    <div key={index} className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center  fs-3 mb-3">
                            {/* You should replace the SVG element with your own logo */}
                            <img src={section.logo} alt={section.name} width="48" height="48" />
                        </div>
                        <h3 className="fs-3 text-body-emphasis">{section.name}</h3>
                        <p className='fs-6 text-body-secondary'>{section.content}</p>
                        

                    </div>
                ))}
            </div>

            
        </div>
        
        </div>
    );
}
