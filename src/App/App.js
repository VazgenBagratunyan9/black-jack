import {useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import styles from './App.module.scss';
import classnames from 'classnames'
import Card from "../components/Card/Card.component";
import ContainerCard from "../components/ContainerCards/ContainerCards.component";
import UserCards from "../components/UserCards/UserCards.component";
import PlayerControl from "../components/PlayerControl/PlayerControl.componet";

const App = () => {
    const [active,setActive] = useState(true)
    const container = classnames({
        [styles.container]:true,
        [styles.activeContainer]:active
    })

    const data = useSelector(store => store.cards.data)
    const botCards = useSelector(store => store.cards.botCards)
    const userCards = useSelector(store => store.cards.userCards)
    const result = useSelector(store => store.cards.result)
    useEffect(()=>{
        if(userCards.length){
            setActive(false)
        }
    },[])
    console.log(result)
  return (
    <div className={styles.App}>
        <div className={styles.resultCont}>
            {result && <span className={styles.result}>{result}</span>}
        </div>

        <div className={container}>
            {!!botCards.length && <UserCards user="bot" cards={botCards}/>}
            <ContainerCard />
            {!!userCards.length && <UserCards user="user" cards={userCards}/>}
        </div>
        <div>
            <PlayerControl />
        </div>
    </div>
  );
}

export default App;
