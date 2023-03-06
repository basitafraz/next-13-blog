import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import { posts } from '@/data/posts'
import { type } from 'os'

type Post = {
  id: String,
  title: string,
  date: string
}


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <div className={styles.center}><h1>HELLO WORLD</h1></div>

      <div>
        {posts.map(({id, title, date}: Post) => (
          <>
          <Link href={title}>
              {title}
            </Link>
            <br/>

            <Link href={date}>
              {date}
            </Link>
            <br/>
          </> 
        ))}
      </div>
      <Link href='./posts'><h1>Go to my Posts</h1></Link> 
    </main>
    </>
  )
}  
