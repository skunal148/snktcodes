import React, { useEffect } from 'react';

function Modal({ isOpen, onClose, iframeSrc, title = "Game Preview", displayMode= "any" }) {
  useEffect(() => {
    // Optional: Add/remove a class to body to prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]); // Only re-run if isOpen changes

  if (!isOpen) {
    return null; // Don't render anything if the modal is not open
  }

  // This function will be called when the overlay is clicked
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) { // Ensure click is on overlay, not children
      onClose();
    }
  };

  const modalContainerClasses = `modal-container ${
    displayMode === 'landscape' ? 'modal-landscape-content' : ''
  }`;

  return (
    <div className="modal-overlay active" onClick={handleOverlayClick}> {/* 'active' class controls visibility via CSS */}
      <div className={modalContainerClasses}>
        <div className="modal-close" onClick={onClose}></div>
        <div className="iframe-responsive-wrapper">
          {iframeSrc ? (
            <iframe
              className="modal-iframe"
              src={iframeSrc}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen // Changed from allowfullscreen to allowFullScreen for React JSX
            ></iframe>
          ) : (
            <div className="loading-indicator" style={{ height: '100%' }}>Loading preview...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;