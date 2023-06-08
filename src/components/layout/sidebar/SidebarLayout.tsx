import styles from './SidebarLayout.module.scss';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return <div className={styles.container}>ss</div>;
};

export default SidebarLayout;
