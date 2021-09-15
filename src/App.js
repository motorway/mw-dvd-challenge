import DvdLogo from './components/DvdLogo';
import styles from './App.module.scss';
import { useState } from 'react';
import useInterval from './components/useInterval';

// GET SCREEN DIMENTIONS
const SCREEN_WIDTH = 755;
const SCREEN_HEIGHT = 566;
const DVD_LOGO_WIDTH = 294;
const DVD_LOGO_HEIGHT = 150;

const App = () => {
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);
  const [isLeft, setIsLeft] = useState(true);
  const [isDown, setIsDown] = useState(true);
  const yBoundary = SCREEN_HEIGHT - DVD_LOGO_HEIGHT;
  const xBoundary = SCREEN_WIDTH - DVD_LOGO_WIDTH;

  useInterval(() => {

    if (y < yBoundary && isDown) {
      setY(y + 1);
    } else if (y > 0) {
      setIsDown(false);
      setY(y - 1);
    } else {
      setIsDown(true);
    }

    if (x < xBoundary && isLeft) {
      setX(x + 1)
    } else if (x > 0) {
      setIsLeft(false)
      setX(x - 1);
    } else {
      setIsLeft(true)
    }
  }, 10);

  return (
    <div className={styles.app}>
      <div className={styles.helper}>
        <strong>Task:</strong> Recreate the bouncing <a href='https://www.youtube.com/watch?v=5mGuCdlCcNM'>DVD screensaver</a>
      </div>
      <div className={styles.screen}>
        <DvdLogo className={styles.dvdLogo} style={{
          top: y,
          left: x,
        }} />
      </div>
    </div>
  );
}

export default App;
