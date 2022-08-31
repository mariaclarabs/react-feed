import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  const [applauseCount, setApplauseCount] = useState(0);

  function handleApplauseComment() {
    setApplauseCount(applauseCount + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

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
            <button 
              title="Deletar comentário" 
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>
        <footer>
          <button onClick={handleApplauseComment}>
            <ThumbsUp size={20} />
            Apladir 
            <span>{applauseCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
