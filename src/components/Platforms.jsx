import React from 'react';

const platformsData = [
  { src: 'facebook.png', alt: 'Facebook Ads', title: 'Facebook Ads' },
  { src: 'googleads.png', alt: 'Google Ads', title: 'Google Ads' },
  { src: 'unityads.png', alt: 'Unity Ads', title: 'Unity Ads' },
  { src: 'ironsource.png', alt: 'ironSource', title: 'ironSource' },
  { src: 'applovin.png', alt: 'AppLovin', title: 'AppLovin' },
  { src: 'vungle.png', alt: 'Vungle', title: 'Vungle' },
  { src: 'adcolony.png', alt: 'AdColony', title: 'AdColony' },
  { src: 'mIntegral.png', alt: 'mIntegral', title: 'mIntegral' }, // Corrected filename if it was Mintegral
  { src: 'moloco.png', alt: 'Moloco', title: 'Moloco' },
  { src: 'tiktokads.png', alt: 'TikTok Ads', title: 'TikTok Ads' },
];

function Platforms() {
  return (
    <section className="platforms-section">
      {/* The h2 title was commented out in your original HTML. If you want it, uncomment below: */}
      {/* <h2 className="section-title">Platforms I Work With</h2> */}
      <p className="platforms-description">
        Playable ads supported across all ad networks
      </p>
      <div className="platforms-container">
        {platformsData.map((platform, index) => (
          <div className="platform-item" key={index}>
            <img
              src={`/playableplatforms/${platform.src}`} // Path assuming images are in public/playableplatforms/
              alt={platform.alt}
              title={platform.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Platforms;