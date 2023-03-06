
import { posts } from '@/data/posts';
import styles from './../../../page.module.css'

export async function generateStaticParams() {
    const ids: string[] = ["1", "2"];
    return ids.map((id) => ({ id: id }));
  }

async function getPosts(id: string) {
 const post = posts.find(post => post.id === id);
 return post;    
}

export default async function Post({params}: {params: {id: string}}) {
    const {id} = params;
    const post = await getPosts(id);
    return ( 
      <main className={styles.main}>
        <h1>{post!.title}</h1>
        <h1>{post!.date}</h1>
        <br />
        <div className={styles.center}><h1>My Posts</h1></div>
      </main>
    )
  }