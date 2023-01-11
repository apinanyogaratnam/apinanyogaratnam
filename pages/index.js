import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Stack } from '@mui/material';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';
import { FiArrowDownCircle } from 'react-icons/fi';

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
      <Link href="#Home">
        <Box style={{ minWidth: '100px', height: '50px', justifyContent: 'center', alignItems: 'center', display: 'flex' }} className={styles['nav-bar-text-container']}>
          <h3>Home</h3>
        </Box>
      </Link>
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

const HomePage = () => (
    <div style={{
      background: 'linear-gradient(to right, #9cecfb, #65c7f7, #0052d4)',
      borderRadius: '20px',
      width: '95%',
      height: '85vh',
      margin: '0 auto',
      marginTop: '10px',
      padding: '10px',
    }}>
      <h1 style={{
            textAlign: 'center',
            marginTop: '5%',
          }}>
          Apinan Yogaratnam
      </h1>
      <hr style={{
        backgroundColor: 'black',
        color: 'white',
        height: '5px',
        width: '20%',
        margin: '0 auto',
      }}/>
      <div>
        <p style={{
          width: '80%',
          maxWidth: '85%',
          margin: '0 auto',
          marginTop: '10px',
          fontSize: '25px',
          fontFamily: 'sans-serif',
        }}>
        Apinan is a student at the University of Toronto and a full-stack developer based in Toronto, Canada with a passion for building data driven applications. He has a fondness for working across the stack from building the UI of the frontend application to serving API endpoints and querying/aggregating raw data. When not working, he loves making side projects to try out the latest tools and technologies as well as hitting the gym.
        </p>
      </div>
      <div style={{
        margin: '0 auto',
        width: '40%',
        marginTop: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
        <AiFillGithub size="40px" />
        <AiFillLinkedin size="40px" />
        <BsStackOverflow size="40px" />
        <AiFillTwitterCircle size="40px" />
      </div>
      <div style={{
        margin: '0 auto',
        marginTop: '5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <FiArrowDownCircle size="40px" />
      </div>
    </div>
);

const Portfolio = () => {
  const jobs = [{title: 'WeMeta'}];
  return (<div style={{
    backgroundColor: 'green',
    borderRadius: '20px',
    marginTop: '15%',
    height: '90vh',
    margin: '0 auto',
    width: '95%',
    marginBottom: '3%',
    padding: '10px',
  }}>
    <h1 style={{textAlign: 'center'}}>Portfolio</h1>
    {jobs.map((job, index) => (
      <div key={index}>
        {job.title}
      </div>
    ))}
  </div>);
};

export default function Home() {
  return (
    <main>
      <Head>

      </Head>
      <div>
        <NavBar />
        <HomePage />
        <Portfolio />
      </div>
    </main>
  )
}
