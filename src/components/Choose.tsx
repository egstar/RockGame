import style from '@/app/styles/body.module.css'
import Image from 'next/image';
import rock from '@/app/assets/images/icon-rock.svg'
import paper from '@/app/assets/images/icon-paper.svg'
import scissors from '@/app/assets/images/icon-scissors.svg'
import spock from '@/app/assets/images/icon-spock.svg'
import lizard from '@/app/assets/images/icon-lizard.svg'
import { useEffect } from 'react';

const InitRound = (props: any) => {

    const {plOne,setPlOne, setPhase, phase} = props

    useEffect(() => {
        plOne.length ? setPhase(phase+1) : null
    },[plOne])


    return (
        <div className={`${style.choose}`}>
            <div className={`${style.optionsRow}`}>
                <div className={`${style.option} ${style.scissors}`} onClick={(e) => setPlOne(e.currentTarget.dataset['val'])} data-val="scissors">
                    <div className={`${style.imgBg}`}>
                        <Image
                            src={scissors}
                            alt={`Scissors's Image`}
                            className={style.imgSrc}
                        />
                    </div>
                </div>
            </div>
            <div className={`${style.optionsRow} ${style.centerRow}`} >
                <div className={`${style.option} ${style.spock}`} onClick={(e) => setPlOne(e.currentTarget.dataset['val'])} data-val="spock">
                    <div className={`${style.imgBg}`}>
                        <Image
                            src={spock}
                            alt={`Spock's Image`}
                            className={style.imgSrc}
                        />
                    </div>
                </div>
                <div className={`${style.option} ${style.paper}`} onClick={(e) => setPlOne(e.currentTarget.dataset['val'])} data-val="paper">
                        <div className={`${style.imgBg}`}>
                        <Image
                            src={paper}
                            alt={`Paper's Image`}
                            className={style.imgSrc}
                        />
                    </div>
                </div>
            </div>
            <div className={`${style.optionsRow}`}>
                <div className={`${style.option} ${style.lizard}`} onClick={(e) => setPlOne(e.currentTarget.dataset['val'])} data-val="lizard">
                        <div className={`${style.imgBg}`}>
                        <Image
                            src={lizard}
                            alt={`Lizard's Image`}
                            className={style.imgSrc}
                        />
                    </div>
                </div>
                <div className={`${style.option} ${style.rock}`} onClick={(e) => setPlOne(e.currentTarget.dataset['val'])} data-val="rock">
                        <div className={`${style.imgBg}`}>
                        <Image
                            className={style.imgSrc}
                            src={rock}
                            alt={`Rock's Image`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InitRound;