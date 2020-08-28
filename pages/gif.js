import Link from 'next/link';
import RandomGif from '../components/random-gif/random-gif';
import styles from '../styles/Home.module.css';

export default function Gif() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Dis a Nicky Gif y'all</h1>

      <div>
        <RandomGif />
      </div>

      <Link href='/'>
        <a>← Get me back to home</a>
      </Link>
    </main>
  );
}
