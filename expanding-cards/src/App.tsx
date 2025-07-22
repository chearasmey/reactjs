import { useEffect, useRef } from 'react';
import './App.css'
import { ImageCard } from './components/ImageCard'

function App() {
  const images = [
    {
      title: "Explore The World",
      backgroundImage: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Wild Forest",
      backgroundImage: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Sunny Beach",
      backgroundImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
    },
    {
      title: "Mountains",
      backgroundImage: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "City on Winter",
      backgroundImage: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
    }
  ];

  const firstPanelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (firstPanelRef.current) {
      firstPanelRef.current.classList.add('active');
    }
  }, []);

  const applyActiveClass = (e: React.MouseEvent<HTMLDivElement>) => {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
      panel.classList.remove('active');
    });
    const target = e.currentTarget;
    target.classList.add('active');
  };

  return (
    <div className="container">
      {images.map((image, index) => (
        <ImageCard key={image.title + index} title={image.title} backgroundImage={image.backgroundImage} 
        onClick={applyActiveClass}
        ref={index === 0 ? firstPanelRef : undefined}
        />
      ))}
    </div>

  )
}

export default App
