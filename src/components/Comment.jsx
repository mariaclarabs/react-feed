import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https:github.com/mariaclarabs.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maria Souza</strong>
              <time title="27 de agosto às 12:00" dateTime="2022-08-27 12:00">Publicado há 1h</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>
            Muito bom, parabéns!
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