import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const VideoPlayer = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#000', position: 'relative' }}>
      <Button
        variant="light"
        style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 9999 }}
        onClick={() => navigate(-1)}
      >
        Close
      </Button>

      <div style={{ height: '100%', width: '100%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Course Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
