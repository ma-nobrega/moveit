import Head from 'next/head';
import { GetServerSideProps } from 'next'

import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ChallengeBox from "../components/ChallengeBox";
import Nav from "../components/Nav";

import { Container, Content } from '../styles/pages/Home';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  console.log(props);
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
        <Container >
          <Nav />
          <Content className="container">
            <Head>
              <title>Inicio | move.it</title>
            </Head>
            <Profile />
            <CountdownProvider>
              <section>
                <CompletedChallenges />
                <Countdown />
                <ChallengeBox />
              </section>
            </CountdownProvider>
          </Content>
        </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}


