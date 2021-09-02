import {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import Card from "../Card/Card.component";
import styles from "./UserCards.module.scss"
import {sum} from "../../utils/sum.util";

const UserCards = ({cards,user})=>{

    console.log(cards)
    const userCards = useSelector(store => store.cards.userCards)
    const result = useSelector(store => store.cards.result)
    const botCards = useSelector(store => store.cards.botCards)
    return(
        <div className={styles.container}>
            {(user==="bot" && !!result) && <span className={styles.sum}>{sum(botCards)}</span>}
            {
                cards.map(item=>{
                    return <Card key={item.id} src={item.src} user={user}/>
                })
            }
        </div>
    )
}
export default UserCards