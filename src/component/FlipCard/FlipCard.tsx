import React, { useState } from 'react';
import { FlipCardProps } from '../../type/types';
import styles from './FlipCard.module.css';

const FlipCard: React.FC<FlipCardProps> = (props) => {
  const [flip, setFlip] = useState<boolean>(false);
  const front = props.front;
  const back = props.back;
  const options = props.options;

  const handleClick = () => {
    setFlip(!flip);
  }

  return (
    <div>
      <div
        onClick={options === 2 ? handleClick : undefined}
        className={`${styles.card} ${flip ? styles.flipped : styles.unflipped}`}
      >
        <div
          onClick={options === 1 ? handleClick : undefined}
          className={`${styles.front} ${flip ? styles.unflipped : styles.flipped}`}
        >
          {front}
        </div>
        <div
          className={`${styles.back} ${flip ? styles.flipped : styles.unflipped}`}
        >
          {back}
        </div>
      </div>
    </div>
  )
}

export default FlipCard;
