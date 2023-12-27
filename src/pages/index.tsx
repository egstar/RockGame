import style from '@/app/styles/body.module.css'
import InitRound from '@/components/Choose'
import Opponent from '@/components/OpponentChoose';
import Final from '@/components/RoundResult';
import PlayOne from '@/components/UserChoose';
import Head from 'next/head';


const Home = (props:any) => {
    const { phase, setPhase , plOne, setPlOne, plOpp, setPlOpp, userScore, setUserScore} = props

    return(
        <section className={`${style.container}`}>
            <Head>
                <title>Frontend Mentor | Rock, Paper, Scissors</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            {
                Number(phase) === 0 
                    ? <InitRound {...props}  />
                    : phase == 1 
                        ? <PlayOne {...props} />
                        : phase == 2
                            ? <Opponent {...props} />
                            : phase == 3 
                                ? <Final {...props} />
                                : <InitRound {...props}  />

            }
        </section>
    )
}
 
export default Home;