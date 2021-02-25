import Head from 'next/head';

import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ChallengeBox from "../components/ChallengeBox";

import { Container } from './styles';
import { CountdownProvider } from '../contexts/CountdownContext';


export default function Home() {
  return (
    <Container className="container">
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </Container>
  )
}
