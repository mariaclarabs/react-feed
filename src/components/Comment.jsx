import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https:github.com/diego3g.png" hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="27 de agosto às 12:00" dateTime="2022-08-27 12:00">Publicado há 1h</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>
            Morbi consectetur nisl est!
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Apladir 
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
