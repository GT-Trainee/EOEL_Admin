import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome styles
import './FloatingButton.css'; // Ensure this path is correct

// SettingsModal Component
const SettingsModal = ({ showModal, handleClose }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>×</button>
        <h2>Settings</h2>
        <p>Modify your settings below:</p>
        {/* Add your settings options or functionality here */}
      </div>
    </div>
  );
};

const FloatingButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <a
        href="#!"
        onClick={showModal ? handleCloseModal : handleShowModal}
        className="settings-button"
        aria-label={showModal ? "Close modal" : "Open Settings"}
      >
        <i className={showModal ? "fas fa-times" : "fas fa-cog"}></i>
        <span className="settings-button-tooltip">
          {showModal ? "Close" : "Settings"}
        </span>
      </a>
      <SettingsModal showModal={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default FloatingButton;
