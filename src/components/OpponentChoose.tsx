import style from '@/app/styles/players.module.css'
import Image from 'next/image';
import rock from '@/app/assets/images/icon-rock.svg'
import paper from '@/app/assets/images/icon-paper.svg'
import scissors from '@/app/assets/images/icon-scissors.svg'
import spock from '@/app/assets/images/icon-spock.svg'
import lizard from '@/app/assets/images/icon-lizard.svg'
import { useEffect } from 'react';

const Opponent = (props: any) => {

    const selectImg: any = {
        'paper': [paper, style.paper],
        'rock': [rock, style.rock],
        'scissors': [scissors, style.scissors],
        'spock': [spock, style.spock],
        'lizard': [lizard, style.lizard],
    }
    const {plOne, setPhase, phase, plOpp, setPlOpp} = props
    useEffect(() => {
        let switchPick = setInterval(() => {
            setPlOpp(Object.entries(selectImg)[Math.round(Math.random() * 4)][0])
        },100)
        setTimeout(() => {
            clearInterval(switchPick)
            setPlOpp(Object.entries(selectImg)[Math.round(Math.random() * 4)][0])
            setTimeout(() => setPhase(phase+1), 500)
        },1000)
    },[])

    return (
        <div className={`${style.choose}`}>
            
            <div className={`${style.optionsRow}`} >
                <div className={style.usrPick}>You picked</div>
                <div className={style.usrPick}>The house picked</div>
            </div>
            <div className={`${style.optionsRow}`} >
                <div className={`${style.option} ${selectImg[plOne][1]}`} data-val={plOne}>
                    <div className={`${style.imgBg}`}>
                        <Image
                            className={style.imgSrc}
                            src={plOne ? selectImg[plOne][0]: null}
                            alt={`${plOne.toUpperCase()}'s Image`}
                        />
                    </div>
                </div>
                <div className={`${style.option} ${selectImg[plOpp][1]}`} data-val={plOpp}>
                    <div className={`${style.imgBg}`}>
                        <Image
                            className={style.imgSrc}
                            src={plOne ? selectImg[plOpp][0]: null}
                            alt={`${plOpp.toUpperCase()}'s Image`}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Opponent;