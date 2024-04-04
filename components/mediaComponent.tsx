"use client"

import { SetStateAction, useState } from 'react';

export default function MediaComponent() {
  const [activeTab, setActiveTab] = useState('image');

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="media-container">
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === 'video' ? 'active' : ''}`}
          onClick={() => handleTabClick('video')}
        >
          Key Moment
        </button>
        <button
          className={`tab-btn ${activeTab === 'image' ? 'active' : ''}`}
          onClick={() => handleTabClick('image')}
        >
          Closer Photo
        </button>
      </div>
      <div className="content">
        {activeTab === 'video' && (
          <video width="100%" controls>
            <source src="https://storage.googleapis.com/test-img-aiden/video" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {activeTab === 'image' && (
          <img src="https://storage.googleapis.com/test-aiden-user-upload/image.jpg" alt="Closer Photo" width="100%" className="max-w-full max-h-full" />
        )}
      </div>

      <style jsx>{`
        .media-container {
          width: 100%;
          padding: 20px;
          margin: 0 auto;
          border: 1px solid #a8d5ba;
          border-radius: 15px;
          overflow: hidden;
        }

        .tabs {
          display: flex;
          justify-content: flex-start;
          border-bottom: 1px solid #a8d5ba;
          margin-bottom: 20px;
        }

        .tab-btn {
          flex: 1;
          padding: 10px;
          border: none;
          border-radius: 15px 15px 0 0;
          background-color: #d1e7dd;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .tab-btn:hover {
          background-color: #b5d9c6;
        }

        .tab-btn.active {
          background-color: #a8d5ba;
        }

        .content {
          padding: 20px;
        }
      `}</style>
    </div>
  );
}
