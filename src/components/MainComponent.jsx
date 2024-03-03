import { useLocation } from 'react-router-dom';

import Navigation from './Navigation'
import MainInfo from './MainInfo'
import Form from './Form'

export default function MainComponent() {

    const location = useLocation();

    return (
        <main>
            <Navigation />

            {location.pathname === '/' ?
                <>
                    <MainInfo mainText={"Get your perfect match"} mainDescription={"Trusted Matrimony & Matchmaking Service"} />
                    <Form />
                </> :

                <MainInfo mainText={"Building your perfect match."} mainDescription={"Page under development, stay tuned!"} />

            }
        </main>
    );
}