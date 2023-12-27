import style from '@/app/styles/header.module.css'

const Header = (props: any) => {
    const {userScore} = props
    return (
        <header className={`${style.header}`}>
        <div className={`${style.container}`}>
            <div className={`${style.nav}`}>
                <ul className={`${style.list}`}>
                    <li className={`${style.actions}`}>Rock</li>
                    <li className={`${style.actions}`}>Paper</li>
                    <li className={`${style.actions}`}>Scissors</li>
                    <li className={`${style.actions}`}>Lizard</li>
                    <li className={`${style.actions}`}>Spock</li>
                </ul>
                <div className={`${style.score}`}>
                    <h5 className={`${style.scoreTitle}`}>Score</h5>
                    <h1 className={`${style.scoreTxt}`}>{userScore ? userScore : '0'}</h1>
                </div>
            </div>
        </div>
        </header>
    )
}

export default Header;