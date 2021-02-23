import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompletedChallenges from "../components/CompletedChallenges";

import {Container } from './styles';

export default function Home() {
  return (
    <Container className="container">
    <ExperienceBar />
    <section>
      <div>
        <Profile />
        <CompletedChallenges />
      </div>
      <div></div>
    </section>
  </Container>
  )
}
