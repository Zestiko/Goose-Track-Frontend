import ourTeam from './assets/ourTeam.json';

import { Header } from './header_b/header_b';
import { Main } from './main_c/main_c';
import { Footer } from './footer_f/footer_f';
import { Team } from './our_team/our_team';
import { Title } from './title/title';



export default function HomePage() {
    return (
        <div>
            <Header />
            <Main />
            <Title text ={ "Meet our team" } />
            <Team team = { ourTeam } />
            <Footer />
        </div>
    );
}