import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Button from 'components/Button';

import styles from './index.module.scss';

const Home: NextPage = () => {
  return (
    <>
      <Head>

      </Head>
      <div className={styles.welcomeHero}>
        <h1>Welcome to OpenSRM</h1>
        <p>The Open Software Requirements Manager</p>
        <Link href="/login">
          <Button>
            Login
          </Button>
        </Link>
      </div>
   </>);
}

export default Home
