import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const NavBar = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'lightblue',
    borderRadius: '20px',
    width: '95%',
    margin: '0 auto',
    marginTop: '10px',
  }}>
    <h3>Home</h3>
    <h3>Portfolio</h3>
    <h3>About</h3>
    <h3>Contact</h3>
  </div>
);

export default function Home() {
  return (
    <main>
      <Head>

      </Head>
      <div>
        <NavBar />
      </div>
    </main>
  )
}
