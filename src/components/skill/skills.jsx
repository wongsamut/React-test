import styles from './skill.module.css'
import { FaJs,FaNodeJs,FaReact,FaGit } from "react-icons/fa6";

function skills() {
  return (
    <div className={styles.skills_con}>
        <h3 className={styles.skills_title}> My Skill set</h3>
        <ul className={styles.skills_list}>
            <li><a href="#"><FaJs /></a></li>
            <li><a href="#"><FaNodeJs /></a></li>
            <li><a href="#"><FaReact /></a></li>
            <li><a href="#"><FaGit /></a></li>
        </ul>

    </div>
  )
}

export default skills