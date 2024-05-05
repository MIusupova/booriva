import { Link } from 'react-router-dom'
import Like from '../../assets/img/icons/like'
import styles from'./card.module.sass'

const CardBomber = ({image, text, price, active}) => {
    return(
        <div className={styles.cardBox}>
            <div className={styles.boxImg}><img src={image} alt='' className={styles.cardImg}/></div>
            <div className={styles.likeBox}><Link to='/wishlistPage'><Like active={active}/></Link></div>
            <div className={styles.cardLine}></div>
            <div className={styles.cardDescription}>
                <div className={styles.cardText}>{text}</div>
                <div className={styles.cardPrice}>{price}</div>
            </div>
        </div>
    )
}

export default CardBomber