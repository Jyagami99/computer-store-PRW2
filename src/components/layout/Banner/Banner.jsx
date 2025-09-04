import styles from './style.module.css';

const Banner = () => {
  return (
    <header className={styles.header}>
      <img
        src='/assets/logos/logo_loja.png'
        alt='Logo'
        className={styles.logo}
      />
      <h1 className={styles.title}>Computer Store</h1>
      <h2 className={styles.subtitle}>Sua loja de informática completa</h2>
    </header>
  );
};

export default Banner;
