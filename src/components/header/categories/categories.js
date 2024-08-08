import styles from './categories.module.css'



export default function Categories({category}) {
  return(
    <ul className={styles.categories}>
      {category.map((eachCategory)=>{ return <li className={styles.listItem}>{eachCategory}</li>})}
    </ul>
    
  )
}