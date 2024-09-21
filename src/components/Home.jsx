import React from 'react'

const Home = ({ images }) => {
  return (
    <>
        <div className="container-fluid">
            <div className="flex">
                {images.map((image) => (
                    <div key={image.id} className="items">
                        <img src={image.src.medium} alt={image.photographer} />
                    </div>
                ))}
            </div>
        </div>
    </>
  );
};

export default Home
