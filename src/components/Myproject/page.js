'use client'
import styles from './page.module.css';
import Rounded from '../../common/RoundedButton';
import Project from './prject/project';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

  const projects = [
    {
      title1: "Thwine",
      title2: "Design",
      src: "Screenshot (52).png",
      href: "https://elite01.vercel.app/"
    },
    {
      title1: "Linear",
      title2: "Clone",
      src: "Screenshot 2024-03-02 042238.png",
      href: "https://travclan.vercel.app/"
    },
    {
      title1: "Exercise",
      title2: "Website",
      src: "Exercise website.png",
      href: "https://exercise-psi.vercel.app/"
    },
    {
      title1: "Notion",
      title2: "Design",
      src: "Screenshot (53).png",
      href: "https://notion-landing-page-rho.vercel.app/"
    },
    {
      title1: "Image",
      title2: "Animation",
      src: "Image Gsap animation.png",
      href: "https://wierd-image-moving-gsap.vercel.app/"
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
