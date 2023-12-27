import Header from './Header'
import Footer from './Footer'
import { AppProps } from 'next/app'
 
export default function Layout({ children, setShowRules, showRules, setUserScore, userScore }: any) {
  const props = {setShowRules, showRules, userScore, setUserScore}
  return (
    <main>
      <Header {...props} />
      {children}
      <Footer {...props} />
    </main>
  )
}