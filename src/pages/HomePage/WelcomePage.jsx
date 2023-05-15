import { Header } from './header_b/header_b';
import { Main } from './main_c/main_c';
import { Team } from './our_team/our_team';
import Slider from './reviews/reviews';

export default function WelcomePage() {
  return (
    <>
      <Header />
      <Main />
      <Team />
      <Slider />
    </>
  );
}
