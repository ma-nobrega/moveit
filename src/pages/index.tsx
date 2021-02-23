import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

import {Container } from './styles';

export default function Home() {
  return (
    <Container className="container">
    <ExperienceBar />
    <section>
      <div>
        <Profile />
      </div>
      <div></div>
    </section>
  </Container>
  )
}
