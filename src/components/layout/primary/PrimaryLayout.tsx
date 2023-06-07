import Head from 'next/head';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  // justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default PrimaryLayout;
