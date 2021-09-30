import type { NextPage } from 'next';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import LoginAside from 'res/loginAside.png';

import styles from './login.module.scss';
const Login: NextPage = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <div className={styles.loginForm}>
                    <div className={styles.loginContent}>
                        <h1>Login</h1>
                        <div className={styles.loginAside}>
                            <Tilt>
                                <Image
                                    src={LoginAside}/>
                            </Tilt>
                        </div>
                    </div> 
                </div>
            </div>
        </div>);
};

export default Login;