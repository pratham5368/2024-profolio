'use client'
import styles from './page.module.css'
import { useRef, useEffect } from 'react';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';


export default function Home() {

  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
  }, [])

  const setPath = (progress) => {
    const width = window.innerWidth * 0.7;
    path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
  }

  const lerp = (x, y, a) => x * (1 - a) + y * a

  const manageMouseEnter = () => {
    if(reqId){
      cancelAnimationFrame(reqId)
      resetAnimation()
    }
  }

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound =  path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress+= movementY
    setPath(progress);
  }

  const manageMouseLeave = () => {
    animateOut();
  }

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time+=0.2;
    setPath(newProgress);
    if(Math.abs(progress) > 0.75){
      reqId = requestAnimationFrame(animateOut);
    }
    else{
      resetAnimation();
    }
  }

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  }

  return (
    <div className={styles.container}>
        <div className={styles.body}>
            <div className={styles.line}>
              <div onMouseEnter={() => {manageMouseEnter()}} onMouseMove={(e) => {manageMouseMove(e)}} onMouseLeave={() => {manageMouseLeave()}} className={styles.box}></div>
              <svg>
                <path ref={path}></path>
              </svg>
            </div>

            {/*<div className={styles.description}>
              <p>Smart Development</p>
              <p>Combining unique design and rich technology, we build digital products exactly as they were designed, without shortcuts or simplifications.</p>
            </div>*/}
            <div className={styles.tagsContainer}>
              <p>Languages and framework</p>
              <div className={styles.tags}>
              <Rounded><p>JavaScript</p></Rounded>
              <Rounded><p>Reactjs</p></Rounded>
              <Rounded><p>python</p></Rounded>
              <Rounded><p>Css</p></Rounded>
              <Rounded><p>Typescript</p></Rounded>
              <Rounded><p>Scss</p></Rounded>
              <Rounded><p>TailwindCSS</p></Rounded>
              <Rounded><p>Vue</p></Rounded>
              <Rounded><p>Redux</p></Rounded>
              <Rounded><p>Nextjs</p></Rounded>
              <Rounded><p>Next Auth</p></Rounded>
              <Rounded><p>Shadcn UI</p></Rounded>
              <Rounded><p>nodejs</p></Rounded>
              <Rounded><p>material UI</p></Rounded>
              <Rounded><p>Gsap</p></Rounded>
              <Rounded><p>Framer motion</p></Rounded>
              </div>
            </div>
            <div className={styles.tagsContainer}>
              <p>Tools</p>
              <div className={styles.tags}>
              <Rounded><p>Git</p></Rounded>
              <Rounded><p>Github</p></Rounded>
              <Rounded><p>Jira</p></Rounded>
              <Rounded><p>Slack</p></Rounded>
              <Rounded><p>Vercel</p></Rounded>
              <Rounded><p>Figma</p></Rounded>
              <Rounded><p>firebase</p></Rounded>
              <Rounded><p>mongobd</p></Rounded>
              <Rounded><p>Prisma</p></Rounded>
              <Rounded><p>convexdb</p></Rounded>
              <Rounded><p>clerk</p></Rounded>
              </div>
            </div>
            <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
            </div>
        </div>
    </div>
  )
}