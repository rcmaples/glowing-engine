import { FC, useState } from 'react';

const WordCarousel: FC = () => {
  const words = ['first', 'second', 'third', 'fourth'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <div>
      <p>{words[currentIndex]}</p>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default WordCarousel;
