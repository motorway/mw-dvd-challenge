import DvdLogo from './components/DvdLogo';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.helper}>
        <strong>Task:</strong> Recreate the bouncing <a href='https://www.youtube.com/watch?v=5mGuCdlCcNM'>DVD screensaver</a>
      </div>
      <div className={styles.screen}>
        <DvdLogo className={styles.dvdLogo} />
      </div>
    </div>
  );
}

export default App;
