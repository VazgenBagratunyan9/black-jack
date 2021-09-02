import {useSelector,useDispatch} from "react-redux"
import styles from "./PlayerControl.module.scss"
import Button from "../button/Button.component";
import {changeCard, newGame, readyOpenCards} from "../../redux/cards/card.actions";
import {sum} from "../../utils/sum.util"
const PlayerControl = ()=>{
    const userCards = useSelector(store=>store.cards.userCards)
    const botCards = useSelector(store=>store.cards.botCards)
    const dispatch = useDispatch()
    const result = useSelector(store => store.cards.result)
    return (
        <div className={styles.container}>
            <Button
                disabled={!!result}
                color="#17a23c"
                onClick={()=>{dispatch(changeCard())}}
            >
                take a card
            </Button >
            <Button
                color="#17a23c"
                onClick={()=>{dispatch(readyOpenCards({userCards:userCards,botCards:botCards}))}}
            >
                ready
            </Button>
            <Button
                color="#17a23c"
                onClick={()=>{dispatch(newGame())}}
            >
                new game
            </Button>
            <span className={styles.sum}>{sum(userCards)}</span>
        </div>
    )
}

export default PlayerControl