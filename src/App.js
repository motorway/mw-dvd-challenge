import DvdLogo from './components/DvdLogo';
import styles from './App.module.scss';
import { useEffect, useRef } from 'react';

const maxPosition = 4;
const colors = ['255, 255, 255', '0, 128, 0', '0, 0, 255', '255, 255, 0'];
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const calculate = (container, logo, pos) => {
  const containerPos = container.getBoundingClientRect();
  const logoPos = logo.getBoundingClientRect();
  let top = 0;
  let left = 0;
  
  if (pos === 1) {
    const random = randomInt(containerPos.width - logoPos.width, logoPos.width);
    top = containerPos.height - logoPos.height;
    left = random - logoPos.width / 2;
  }

  if (pos === 2) {
    const random = randomInt(containerPos.height - logoPos.height, logoPos.height);
    top = random - logoPos.height / 2;
    left = containerPos.width - logoPos.width;
  }

  if (pos === 3) {
    const random = randomInt(containerPos.width - logoPos.width, logoPos.width);
    top = 0;
    left = random - logoPos.width / 2;
  }

  if (pos === 4) {
    const random = randomInt(containerPos.height - logoPos.height, logoPos.height);
    top = random - logoPos.height / 2;
    left = 0;
  }

  return `translate(${left}px, ${top}px)`;
}


const App = () => {
  const container = useRef();
  const logo = useRef();

  useEffect(() => {
    if (container.current && logo.current) {
      const runAnimate = (pos) => {
        const opacityRandom = Math.random();
        logo.current.style.setProperty('--dvdLogo-color', `rgba(${colors[pos - 1]}, ${opacityRandom})`);
        const animateElem = logo.current.animate(
          [
            { transform: calculate(container.current, logo.current, pos) },
          ], {
            duration: 1000,
            easing: 'linear',
            fill: 'forwards',
          },
        );

        animateElem.onfinish = () => {
          const newPos = pos === maxPosition ? 1 : pos + 1; 
          runAnimate(newPos);
        }
      }

      runAnimate(1);
    }
  }, [container, logo]);

  return (
    <div className={styles.app}>
      <div className={styles.helper}>
        <strong>Task:</strong> Recreate the bouncing <a href='https://www.youtube.com/watch?v=5mGuCdlCcNM'>DVD screensaver</a>
      </div>
      <div ref={container} className={styles.screen}>
        <div className={styles.logo} ref={logo}>
          <DvdLogo className={styles.dvdLogo} />
        </div>
      </div>
    </div>
  );
}

export default App;
