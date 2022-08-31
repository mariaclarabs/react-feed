import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mariaclarabs.png',
      name: 'Maria Souza',
      role: 'Software Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Sed nec metus nec justo viverra elementum eget ut lorem. Cras magna nisl, tristique ac neque et, interdum ornare enim. In aliquam sagittis magna in hendrerit. Ut quis odio efficitur neque interdum sodales.',
      },
      {
        type: 'paragraph',
        content: 'Mauris vestibulum blandit gravida. Donec elementum consectetur ipsum eu fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec iaculis arcu finibus nulla vestibulum, sed luctus massa tempus.',
      },
      {
        type: 'paragraph',
        content: 'Ut malesuada a metus sed facilisis!'
      },
      {
        type: 'link',
        content: 'https://www.lipsum.com/',
      },
    ],
    publishedAt: new Date('2022-08-29 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Sed nec metus nec justo viverra elementum eget ut lorem. Cras magna nisl, tristique ac neque et, interdum ornare enim. In aliquam sagittis magna in hendrerit. Ut quis odio efficitur neque interdum sodales.',
      },
      {
        type: 'paragraph',
        content: 'Mauris vestibulum blandit gravida. Donec elementum consectetur ipsum eu fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec iaculis arcu finibus nulla vestibulum, sed luctus massa tempus.',
      },
      {
        type: 'link',
        content: 'https://www.lipsum.com/',
      },
    ],
    publishedAt: new Date('2022-08-28 20:00:00'),
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App
