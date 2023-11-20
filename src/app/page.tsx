import { Button } from '@mantine/core'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      Hello Next.js 14
      <Button className={styles.btn}>Click Me </Button>
      </main>
  )
}
