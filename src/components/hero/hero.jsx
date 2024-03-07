// import React from 'react'
import styles from './hero.module.css'
import { FaGithubAlt,FaLinkedinIn,FaFacebookF } from "react-icons/fa6";
function hero() {
  return (
    <div className={styles.hero_wrapper}>
        <div className={styles.container}>
            <div className={styles.hero_con}>
                <div className={styles.hero_info}>
                    <p className={styles.text_1}>Hi I'm </p>
                    <h3 className={styles.text_2}>Jetdo </h3>
                    <p className={styles.text_3}>I'm developer </p>
                    <p className={styles.text_4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione officiis repellendus modi totam aperiam reiciendis. Quia accusantium sint enim, nobis ipsam aliquam excepturi iure tenetur, adipisci vero reiciendis, possimus qui? </p>
                    <ul className={styles.hero_social}>
                        <li><a href="#"><FaGithubAlt /></a></li>
                        <li><a href="#"><FaLinkedinIn /></a></li>
                        <li><a href="#"><FaFacebookF /></a></li>

                    </ul>
                </div>
                <div>
                    <div className={styles.hero_img}>

                    </div>

                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default hero