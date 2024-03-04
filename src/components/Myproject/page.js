'use client'
import styles from './page.module.css';
import Rounded from '../../common/RoundedButton';
import Project from './prject/project';
import Link from 'next/link';

export default function Home() {

  const projects = [
    {
      title1: "Thwine",
      title2: "Design",
      src: "powell.png",
      href: "elite01.vercel.app/"
    },
    {
      title1: "La",
      title2: "Grange",
      src: "threejs profolio.png",
      href: "https://github.com/"
    },
    {
      title1: "Deux Huit",
      title2: "Huit",
      src: "deux_huit_huit.jpeg",
      href: "https://github.com/"
    },
    {
      title1: "Nothing",
      title2: "Design Studio",
      src: "nothing_design_studio.png",
      href: "https://github.com/"
    },
    {
      title1: "Mambo",
      title2: "Mambo",
      src: "mambo_mambo.jpeg",
      href: "https://github.com/"
    }
  ]

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <p>Featured Work</p>
          {
            projects.map( project => {
              return  <Project project={project}/>
            })
          }
          
        <div className={styles.more}>
    <Rounded>
       <Link href="https://github.com/pratham5368" className={styles.Link}><p>More work</p></Link>
    </Rounded>

      </div></div>
    </main>
  )
}
