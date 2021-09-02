import {useState,useEffect} from 'react'
import classNames from "classnames"
import styles from './Card.module.scss'
import {useSelector} from "react-redux";

const Card = ({id,type,value,src,open = true,user})=>{
    const [active,setActive] = useState(false)
    const container = classNames({
        [styles.container]:true,
        [styles.active]:active
    })
    const result = useSelector(store => store.cards.result)
    useEffect(()=>{
        let timer;
        if(user === 'user'){
            timer = setTimeout(()=>{
                setActive(true)
            },1000)

        }
        return ()=>{
            clearTimeout(timer)
        }
    },[])
    useEffect(()=>{
        let timer;
        if(result && open){
            timer = setTimeout(()=>{
                setActive(true)
            },1000)
        }
        return ()=>{
            clearTimeout(timer)
        }
    },[result])
    return (
        <div className={container}>
            <span className={styles.after}>
                <img src="https://wallpaperaccess.com/full/2434380.jpg"  alt={"https://wallpaperaccess.com/full/2434380.jpg" } />
            </span>
            <span className={styles.before}>
                <img src={src} alt={src} />
            </span>

        </div>
    )
}

export default Card