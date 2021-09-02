import {useSelector,useDispatch} from 'react-redux'
import {useState} from 'react'
import styles from './ContainerCards.module.scss'
import Card from "../Card/Card.component";
import {changeCard} from "../../redux/cards/card.actions";

const ContainerCard = ()=>{
    // const [transform, setTransform] = useState(0)
    const dispatch = useDispatch()
    const cards = useSelector(store => store.cards.data)
    let transform = 0
    return (
        <div className={styles.container}>
            <span className={styles.cardsCount}>{cards.length}</span>
            {
                cards.map((item,idx)=>{
                    transform+=2
                    if(item.id < 5)
                    return (
                        <div
                            onClick={()=>dispatch(changeCard())}
                            key={item.id}
                            className={styles.item}
                            style={{transform: `translate(${transform}px,${transform}px)` }}
                        >
                            <Card open={false} src={item.src}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ContainerCard