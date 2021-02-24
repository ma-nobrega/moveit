import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";

import {Container } from './styles';

import Head from 'next/head';

export default function Home() {
  return (
    <Container className="container">
      <Head>
        <title>Inicio | move.it</title>
      </Head>
    <ExperienceBar />
    <section>
      <div>
        <Profile />
        <CompletedChallenges />
        <Countdown />
      </div>
      <div></div>
    </section>
  </Container>
  )
}
