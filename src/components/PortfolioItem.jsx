import React from 'react';

function PortfolioItem({ item, onTryNow }) {
  const currentItem = item || {
    thumbnailUrl: 'https://placehold.co/300x180?text=Project', // Fallback
    title: 'Sample Project',
    description: 'A brief description of the sample project.',
    id: 'sample',
    previewUrl: 'about:blank', // Fallback
    type: 'playable'
  };

  const handleTryNowClick = (e) => {
    e.preventDefault();
    if (onTryNow) {
      onTryNow(currentItem);
    }
  };

  // Prepend '/' to thumbnail URLs if they are relative, assuming they are in the public folder
  const finalThumbnailUrl = currentItem.thumbnailUrl && !currentItem.thumbnailUrl.startsWith('http')
    ? `/${currentItem.thumbnailUrl}`
    : currentItem.thumbnailUrl;

  return (
    <div className="portfolio-item">
      <div
        className="portfolio-item-inner"
        onClick={handleTryNowClick}
      >
        <div className="portfolio-image">
          <img src={finalThumbnailUrl} alt={currentItem.title} />
        </div>
        <h3>{currentItem.title}</h3>
        <p>{currentItem.description}</p>
        <a
          href="#"
          className="view-project"
          onClick={handleTryNowClick}
        >
          Try Now
        </a>
      </div>
    </div>
  );
}

export default PortfolioItem;