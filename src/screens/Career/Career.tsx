import { useState } from "react";
import "./Career.css";
import { GOOGLE_FORM_LINK } from "../../data/constatns";

interface CareerPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time, Part-time, Internship
  experience: string;
  description: string;
  requirements: string[];
}

interface CareerProps {
  isOpen: boolean;
  onClose: () => void;
  positions: CareerPosition[];
}

function Career({ isOpen, onClose, positions }: CareerProps) {
  const [selectedPosition, setSelectedPosition] =
    useState<CareerPosition | null>(null);
//   const GOOGLE_FORM_LINK = ""; // Add your Google Form link here

  const handleApply = () => {
    if (GOOGLE_FORM_LINK) {
      window.open(GOOGLE_FORM_LINK, "_blank");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="career-overlay" onClick={onClose}>
      <div className="career-sheet" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="career-header">
          <h2 className="career-title">
            Join Our <span className="isRegularitalic">Rocket Ship</span> 🚀
          </h2>
          <p className="career-subtitle">
            We're looking for talented individuals who want to make brands
            unforgettable
          </p>
        </div>

        <div className="positions-grid">
          {positions.length > 0 ? (
            positions.map((position) => (
              <div
                key={position.id}
                className="position-card"
                onClick={() => setSelectedPosition(position)}
              >
                <div className="position-header">
                  <h3>{position.title}</h3>
                  <span className="position-type">{position.type}</span>
                </div>
                <div className="position-meta">
                  <span>📍 {position.location}</span>
                  <span>💼 {position.department}</span>
                  <span>⏰ {position.experience}</span>
                </div>
                <p className="position-description">{position.description}</p>
                <button
                  className="apply-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleApply();
                  }}
                >
                  Apply Now →
                </button>
              </div>
            ))
          ) : (
            <div className="no-positions">
              <p>No open positions at the moment. Check back soon!</p>
            </div>
          )}
        </div>

        {selectedPosition && (
          <div
            className="position-modal"
            onClick={() => setSelectedPosition(null)}
          >
            <div
              className="position-details"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedPosition(null)}
              >
                ×
              </button>
              <h3>{selectedPosition.title}</h3>
              <div className="position-meta">
                <span>📍 {selectedPosition.location}</span>
                <span>💼 {selectedPosition.department}</span>
                <span>⏰ {selectedPosition.experience}</span>
              </div>
              <p>{selectedPosition.description}</p>
              <h4>Requirements:</h4>
              <ul>
                {selectedPosition.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              <button className="apply-btn-large" onClick={handleApply}>
                Apply for this Position
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Career;
