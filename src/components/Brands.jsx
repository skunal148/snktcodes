import React from 'react';

const brandsData = [
  { src: 'AlpineFresh.png', alt: 'Alpine Fresh', title: 'Alpine Fresh' },
  { src: 'AlpsBlockchain.png', alt: 'Alps Blockchain', title: 'Alps Blockchain' },
  { src: 'Happn.png', alt: 'Happn', title: 'Happn' },
  { src: 'IceNineKills.png', alt: 'Ice Nine Kills', title: 'Ice Nine Kills' },
  { src: 'LinenChest.png', alt: 'Linen Chest', title: 'Linen Chest' },
  { src: 'mthree.png', alt: 'mthree', title: 'mthree' },
  { src: 'PortalOne.png', alt: 'Portal One', title: 'Portal One' },
  { src: 'RivalClub.png', alt: 'Rival Club', title: 'Rival Club' },
  { src: 'truecaller.png', alt: 'Truecaller', title: 'Truecaller' },
  { src: 'upily.png', alt: 'Upily', title: 'Upily' },
];
const brandsDataExtended = [
  { src: 'AlpineFresh.png', alt: 'Alpine Fresh', title: 'Alpine Fresh' },
  { src: 'AlpsBlockchain.png', alt: 'Alps Blockchain', title: 'Alps Blockchain' },
  { src: 'Happn.png', alt: 'Happn', title: 'Happn' },
  { src: 'IceNineKills.png', alt: 'Ice Nine Kills', title: 'Ice Nine Kills' },
  { src: 'LinenChest.png', alt: 'Linen Chest', title: 'Linen Chest' },
  { src: 'mthree.png', alt: 'mthree', title: 'mthree' },
  { src: 'PortalOne.png', alt: 'Portal One', title: 'Portal One' },
  { src: 'RivalClub.png', alt: 'Rival Club', title: 'Rival Club' },
  { src: 'truecaller.png', alt: 'Truecaller', title: 'Truecaller' },
  { src: 'upily.png', alt: 'Upily', title: 'Upily' },
];

function Brands() {
  return (
    <section className="brands-section">
      <h2 className="section-title">Brands I've Worked With</h2>
      <div className="brands-carousel">
        <div className="brands-container">
          {brandsData.map((brand, index) => (
            <div className="brand-item" key={`first-${index}`}>
              <img
                src={`/brands/${brand.src}`} // Path assuming images are in public/brands/
                alt={brand.alt}
                title={brand.title}
              />
            </div>
          ))}
          {/* Duplicate brands for seamless infinite scroll */}
          {brandsData.map((brand, index) => (
            <div className="brand-item" key={`second-${index}`}>
              <img
                src={`/brands/${brand.src}`}
                alt={brand.alt}
                title={brand.title}
              />
            </div>
          ))}
          {brandsData.map((brand, index) => (
            <div className="brand-item" key={`third-${index}`}>
              <img
                src={`/brands/${brand.src}`}
                alt={brand.alt}
                title={brand.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;