import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/mariaclarabs.png" />
          <div className={styles.authorInfo}>
            <strong>Maria Souza</strong>
            <span>Software Developer</span>
          </div>
        </div>
        <time title="27 de agosto às 12:00" dateTime="2022-08-27 12:00">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Content</p>
        <a href="">Link</a>
      </div>
    </article>
  );
}