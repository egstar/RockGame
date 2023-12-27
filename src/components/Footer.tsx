import style from '@/app/styles/footer.module.css'
import { useState } from 'react'
import RulesModal from './Modal'


const Footer = (props: any) => {
    const { showRules, setShowRules} = props
    return (
        <footer className={style.footer}>
            <RulesModal showRules={showRules} setShowRules={setShowRules} />
            <div className={`${style.rulesContainer}`}>
                <div className={`${style.rulesBtn}`}>
                    <button className={style.rules} onClick={() => setShowRules(!showRules)}>
                        RULES
                    </button>
                </div>
            </div>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://www.frontendmentor.io/profile/egstar" target="_blank">Burham Soliman</a>.
            </div>
        </footer>
    )
}

export default Footer;