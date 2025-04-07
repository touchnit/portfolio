"use client";
import Link from "next/link";
import { motion, stagger } from "framer-motion";

const variants = {
  enter: { opacity: 1 },
};

const staggerChildren = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 3,
      staggerChildren: 0.7,
    },
  },
};

const staggeredChildren = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 3,
    },
  },
};

const noStagger = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 0.1,
    },
  },
};

const hoverAnim = {
  fontWeight: 900,
  transition: { duration: 0.3, type: "easeInOut" },
};

export default function Home() {

  
  return (
    <motion.main className="p-5 md:p-5 flex text-white absolute top-0 cursor-crosshair z-10">
      <div className="border-2 bg-black max-w-[280px] p-3">
        <motion.h1
          variants={variants}
          initial={{ opacity: 0 }}
          animate="enter"
          transition={{ type: "easeIn", duration: 2, delay: 1 }}
          className=" text-3xl tracking-tighter text-justify"
        > Hi ! I am Marc Abadie
        </motion.h1>
        <motion.div
          variants={variants}
          initial={{ opacity: 0 }}
          animate="enter"
          transition={{ type: "easeIn", duration: 1, delay: 2 }}
        >
          <motion.p
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="text-md leading-[16px] mt-1"
          >
            <motion.span variants={staggeredChildren}>
              I'm a self-taught creative developer based in Berlin, who started coding as a
              teenager and never stopped learning new things since. 
            </motion.span>
          </motion.p>
        </motion.div>
        <motion.h2
          variants={variants}
          initial={{ opacity: 0 }}
          animate="enter"
          transition={{ type: "easeIn", duration: 3, delay: 3 }}
          className="mt-3 mb-2 text-2xl"
        >
          A few clients
        </motion.h2>
        <motion.ul
          variants={variants}
          initial={{ opacity: 0 }}
          animate="enter"
          transition={{ type: "easeIn", duration: 3, delay: 4 }}
          className="text-xl leading-[18px]"
        >
          <motion.li whileHover={hoverAnim}>
            <Link href="https://common-ground.io" target="_blank">
              Common Ground
            </Link>
          </motion.li>
          <motion.li whileHover={hoverAnim}>
            <Link href="https://civilisten.de/" target="_blank">
              Civilisten
            </Link>
          </motion.li>
          <motion.li whileHover={hoverAnim}>
            <Link href="https://europeanfilmacademy.org" target="_blank">
              European Film Academy
            </Link>
          </motion.li>
          <motion.li whileHover={hoverAnim}>
            <Link href="https://onboardmusic.net" target="_blank">
              Onboard Music
            </Link>
          </motion.li>
          <motion.li whileHover={hoverAnim}>
            <Link href="https://stationstation.fr/" target="_blank">
              Station Station
            </Link>
          </motion.li>
        </motion.ul>
        <motion.h3
          variants={variants}
          initial={{ opacity: 0 }}
          animate="enter"
          transition={{ type: "easeIn", duration: 3, delay: 5 }}
          className="mt-5 text-sm leading"
        >
          A project, an idea, a question ? Holla at{" "}
          <motion.a
            whileHover={hoverAnim}
            className="underline underline-offset-3"
            href="mailto:marc.abadie64@gmail.com"
          >
            marc.abadie64@gmail.com
          </motion.a>
        </motion.h3>
      </div>
    </motion.main>
  );
}
