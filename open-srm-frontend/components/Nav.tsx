import Image from 'next/image';
import Link from 'components/Link';
import Logo from 'res/logo.png';

import styles from './Nav.module.scss';

export default function Nav({}){
    return (
    <div className={styles.nav}>
       <Link href="/">
           <div className={styles.navBrand}>
               <Image
                    src={Logo}
                    />
           </div>
       </Link>
    </div>);
}