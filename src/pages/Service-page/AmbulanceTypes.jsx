import React, { useState, useEffect } from 'react';
import './AmbulanceTypes.css';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variant';

const AmbulanceTypes = () => {
  const [ambulanceList, setAmbulanceList] = useState([
    {
      id: 1,
      name: 'ALS',
      fullName: 'Advanced Life Support',
      detail: 'It has cardiac life support, cardiac monitors, as well as a glucose-testing device.',
      features: [
        ['Defibrillator', 'More Details Coming Soon...'],
        ['Medicines', 'More Details Coming Soon...'],
        ['Stretcher', 'More Details Coming Soon...'],
        ['Nurse', 'More Details Coming Soon...'],
        ['Bandages', 'More Details Coming Soon...'],
        ['Oxygen Supply', 'More Details Coming Soon...'],
      ],
      imageCount: 4, // Number of ALS images you have (e.g., ALS_1, ALS_2, ALS_3)
    },
    {
      id: 2,
      name: 'BLS',
      fullName: 'Basic Life Support',
      detail: 'It is used for patients with life-threatening illnesses or injuries until they can be given full medical care by advanced life support providers (paramedics, nurses, physicians).',
      features: [
        ['Medicines', 'More Details Coming Soon...'],
        ['Stretcher', 'More Details Coming Soon...'],
        ['Nurse', 'More Details Coming Soon...'],
        ['Bandages', 'More Details Coming Soon...'],
        ['Oxygen Supply', 'More Details Coming Soon...'],
        ['Defibrillator', 'More Details Coming Soon...'],
      ],
      imageCount: 3, // Number of BLS images you have (e.g., BLS_1, BLS_2, BLS_3)
    },
    // Add more ambulance types here
    {
      id: 3,
      name: 'PTS',
      fullName: 'Patient Transport Service',
      detail: 'It is a non-emergency vehicle that transfers patients to and from hospitals.',
      features: [
        ['Stretcher', 'More Details Coming Soon...'],
        ['Nurse', 'More Details Coming Soon...'],
        ['Bandages', 'More Details Coming Soon...'],
        ['Oxygen Supply', 'More Details Coming Soon...'],
        ['Defibrillator', 'More Details Coming Soon...'],
        ['Medicines', 'More Details Coming Soon...'],
      ],
      imageCount: 3,
    },
    {
      id: 4,
      name: 'MA',
      fullName: 'Medium Ambulance',
      detail: 'It provides ample room for storage, and more capacity for transporting patients and larger response crew.',
      features: [
        ['Nurse', 'More Details Coming Soon...'],
        ['Bandages', 'More Details Coming Soon...'],
        ['Oxygen Supply', 'More Details Coming Soon...'],
        ['Defibrillator', 'More Details Coming Soon...'],
        ['Medicines', 'More Details Coming Soon...'],
        ['Stretcher', 'More Details Coming Soon...'],
      ],
      imageCount: 4,
    },
  ]);

  const [selectedAmbulance, setSelectedAmbulance] = useState(ambulanceList[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState(0);

  const handleAmbulanceClick = (ambulance) => {
    setSelectedAmbulance(ambulance);
    setSelectedImageIndex(0);
    setSelectedFeature(0);
  };

  const handleFeatureClick = (index) => {
    setSelectedFeature(index);
  };

  // Function to show the next image in the carousel
  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % selectedAmbulance.imageCount);
  };

  // Function to show the previous image in the carousel
  const showPreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + selectedAmbulance.imageCount) % selectedAmbulance.imageCount);
  };

  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setSelectedImageIndex((prevIndex) => (prevIndex + 1) % selectedAmbulance.imageCount);
    }, 5000);

    return () => clearInterval(imageChangeInterval);
  }, [selectedAmbulance]);

  return (
    <section className="ambulance-types box hidden">
      <motion.h1 variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} className="underline">
        <abbr title="Types of Ambulance">Types of Ambulance</abbr>
      </motion.h1>
      <motion.div variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} className="ambulance-list-div">
        <section className="ambulance-list js-ambulance-list">
          {ambulanceList.map((ambulance) => (
            <figure
              key={ambulance.id}
              className={`ambulances-img js-ambulance ${ambulance.name === selectedAmbulance.name ? 'selected' : ''}`}
              data-name={ambulance.name}
              onClick={() => handleAmbulanceClick(ambulance)}
            >
              <abbr title={ambulance.name}>
                <img
                  loading="lazy"
                  src={`images/Service-images/ambulance/${ambulance.name}.webp`}
                  alt={`${ambulance.name} Ambulance image`}
                  className={`ambulance-img ${ambulance.name}-ambulance-img`}
                />
              </abbr>
              <abbr title={ambulance.name}>
                <figcaption className="ambulance-img-figcaption">
                  {ambulance.name}
                </figcaption>
              </abbr>
            </figure>
          ))}
        </section>
        <section className="ambulance-detail">
          <article>
            <h1 className="ambulance-detail-h1">{selectedAmbulance.fullName}</h1>
            <div className="selected-ambulance-img">
              
              <figure className="selected-ambulance-outer-figure">
                <img
                  loading="lazy"
                  src={`images/Service-images/ambulance/${selectedAmbulance.name}.webp`}
                  alt={selectedAmbulance.name}
                  className="selected-ambulance-outer-img"
                />
              </figure>
              <button className="prev" onClick={showPreviousImage}>
               
              </button>
              <figure className="selected-ambulance-inner-figure">
                <img
                  loading="lazy"
                  src={`images/Service-images/ambulance/inner-${selectedAmbulance.name}_${selectedImageIndex + 1}.webp`}
                  alt={`${selectedAmbulance.name} interior`}
                  className="selected-ambulance-inner-img"
                />
              </figure>
              <button className="next" onClick={showNextImage}>
               
              </button>
            </div>
            <div className="selected-ambulance-detail">
              <p className="selected-ambulance-detail-p" dangerouslySetInnerHTML={{ __html: selectedAmbulance.detail }}></p>
            </div>
            <div className="selected-ambulance-features-div">
              {selectedAmbulance.features.map((feature, index) => (
                <div
                  key={index}
                  className={`flip-card selected-ambulance-features ${index === selectedFeature ? 'selected' : ''}`}
                  onClick={() => handleFeatureClick(index)}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        loading="lazy"
                        src={`images/Service-images/ambulance/features/${selectedAmbulance.name}/FEATURES ${index + 1}.webp`}
                        alt={feature[0]}
                        className="selected-ambulance-feature-img"
                      />
                      <p className="selected-ambulance-feature-p">{feature[0]}</p>
                    </div>
                    <div className="flip-card-back">
                      <h3>{feature[0]}</h3>
                      <br />
                      <p>{feature.slice(1).join('<br>')}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </motion.div>
    </section>
  );
};

export default AmbulanceTypes;

