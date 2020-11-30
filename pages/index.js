import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Controls from "../components/Controls.js"

export default function Home() {
   return (
    <div className={styles.container}>
	<Controls />
    </div>
  )
}

