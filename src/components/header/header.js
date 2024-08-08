import Container from '../container';
import Categories from './categories/categories';
import Logo from './logo/logo';
import Icons from './icons/icons';
import styles from './header.module.css';
import {useState} from 'react';

export default function Header () {

  const [category, setCategory] = useState(['男款','女款','最新消息','客製商品','聯絡我們'])

  return(
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <Categories category={category}/>
          <Logo/>
          <Icons/> 
        </div>
      </Container>
    </header>
  )
}