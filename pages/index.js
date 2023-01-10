import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Stack } from '@mui/material';

const NavBar = () => (
  <Box>
    <Stack direction="row" spacing={2} style={{
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: 'lightblue',
      borderRadius: '20px',
      width: '95%',
      margin: '0 auto',
      marginTop: '10px',
      height: '70px',
    }}
  >
      <Box style={{ minWidth: '100px', height: '50px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} className={styles['nav-bar-text-container']}>
        <h3>Home</h3>
      </Box>
      <Box style={{ minWidth: '100px', height: '50px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} className={styles['nav-bar-text-container']}>
        <h3>Portfolio</h3>
      </Box>
      <Box style={{ minWidth: '100px', height: '50px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} className={styles['nav-bar-text-container']}>
        <h3>About</h3>
      </Box>
      <Box style={{ minWidth: '100px', height: '50px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} className={styles['nav-bar-text-container']}>
        <h3>Contact</h3>
      </Box>
    </Stack>
  </Box>
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
