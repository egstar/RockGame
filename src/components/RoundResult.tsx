import style from '@/app/styles/final.module.css'

import Image from 'next/image';
import rock from '@/app/assets/images/icon-rock.svg'
import paper from '@/app/assets/images/icon-paper.svg'
import scissors from '@/app/assets/images/icon-scissors.svg'
import spock from '@/app/assets/images/icon-spock.svg'
import lizard from '@/app/assets/images/icon-lizard.svg'
import { useEffect } from 'react';

const Final = (props: any) => {

    const selectImg: any = {
        'paper': [paper, style.paper],
        'rock': [rock, style.rock],
        'scissors': [scissors, style.scissors],
        'spock': [spock, style.spock],
        'lizard': [lizard, style.lizard],
    }
    const {setPlOne, plOne, setPhase, phase, plOpp, setPlOpp, newR, setNewR, setUserScore, userScore} = props
    useEffect(() => {
        if(plOne == 'scissors'){
            if(plOpp == 'spock' || plOpp == 'rock') {
                setNewR('LOSE')
            } else if(plOpp == plOne){
                setNewR('DRAW')
            } else {
                setUserScore(userScore+1)
                setNewR('WIN')
            }
        }
        if(plOne == 'paper'){
            if(plOpp == 'scissors' || plOpp == 'lizard') {
                setNewR('LOSE')
            } else if(plOpp == plOne){
                setNewR('DRAW')
            } else {
                setUserScore(userScore+1)
                setNewR('WIN')
            }
        }
        if(plOne == 'rock'){
            if(plOpp == 'paper' || plOpp == 'sopck') {
                setNewR('LOSE')
            } else if(plOpp == plOne){
                setNewR('DRAW')
            } else {
                setUserScore(userScore+1)
                setNewR('WIN')
            }
        }
        if(plOne == 'lizard'){
            if(plOpp == 'rock' || plOpp == 'scissors') {
                setNewR('LOSE')
            } else if(plOpp == plOne){
                setNewR('DRAW')
            } else {
                setUserScore(userScore+1)
                setNewR('WIN')
            }
        }
        if(plOne == 'spock'){
            if(plOpp == 'paper' || plOpp == 'lizard') {
                setNewR('LOSE')
            } else if(plOpp == plOne){
                setNewR('DRAW')
            } else {
                setUserScore(userScore+1)
                setNewR('WIN')
            }
        }
        console.log(plOne, plOpp)
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

                <div className={`${style.userResult}`}>
                    <h1 className={`${style.status}`}>{newR.toUpperCase() != 'DRAW' ? 'You ' +newR : newR}</h1>
                    <button className={`${style.nxtGame}`} onClick={ () => {
                        setNewR('')
                        setPlOpp('')
                        setPlOne('')
                        setPhase(0)
                    }}>Play again</button>
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

export default Final;