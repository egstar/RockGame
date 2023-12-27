import style from '@/app/styles/rules.module.css'
import Image from "next/image";
import gameRules from '@/app/assets/images/image-rules-bonus.svg'



const RulesModal = (props: any) => {
    const {showRules, setShowRules} = props
    return (
        <div className={`${style.rulesModal} ${showRules? style.showBox : null}`}>
            <div className={`${style.rulesBox}`}>
                <div className={`${style.modalHead}`}>
                    <h1 className={style.title}>RULES</h1>
                    <div className={style.clsBtn} onClick={() => setShowRules(false)}>&#x2715;</div>
                </div>
                <div className={style.imgContainer}>
                    <Image
                        src={gameRules}
                        alt={`Game Rules`}
                    />
                </div>
            </div>
        </div>
    )

}

export default RulesModal;