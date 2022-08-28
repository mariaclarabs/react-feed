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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta ante libero, eu maximus libero rhoncus at. Pellentesque sollicitudin neque eget orci consequat, quis mollis metus mattis. Fusce commodo consequat odio rhoncus egestas. Pellentesque molestie aliquet dignissim. Maecenas id varius risus, at vehicula nisl. Cras accumsan consectetur dolor eu tincidunt. Curabitur bibendum ex nec sem placerat, ut ultrices dui finibus. Mauris luctus pharetra malesuada. Nullam nec vehicula tortor, eu pulvinar magna. Suspendisse venenatis eros a mattis semper.
        </p>
        <p>
          <a href="">Link</a>
        </p>
      </div>
    </article>
  );
}