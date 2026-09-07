"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  { title: "UWE BREAS", kind: "Client website · WordPress / Hostinger", image: "UweBreasPic.png", copy: "Designed, developed and launched a full website for UWE BREAS with a fellow student — translating client needs into a practical, live platform with a user database.", live: "https://uwebreas.com/", code: null, accent: "lime" },
  { title: "PagePal", kind: "Reading companion · JavaScript", image: "PagePalPic.png", copy: "A personal reading list that turns Excel uploads into structured book data, fetches cover art, and makes tracking, searching and finishing books feel effortless.", live: "https://youtu.be/yFfmfAf8XSE", code: "https://github.com/Ondrej0/Page-Pal", accent: "blue" },
  { title: "Pixelz", kind: "Creative tool · JavaScript", image: "PixelzPic.png", copy: "A playful pixel-art maker: choose a grid, pick a colour, draw freely, then export the finished piece as a PNG. Built to sharpen DOM manipulation skills.", live: "https://ondrej0.github.io/Pixelz/", code: "https://github.com/Ondrej0/Pixelz", accent: "coral" },
  { title: "Velocity Fitness", kind: "Responsive concept · Front-end", image: "VelocityPic.png", copy: "A high-energy fitness concept built around sharp responsiveness, flexible layouts and a navigation system that adapts cleanly from desktop to mobile.", live: "https://ondrej0.github.io/VelocityFitness/", code: "https://github.com/Ondrej0/VelocityFitness", accent: "pink" },
  { title: "Weather App", kind: "API experiment · JavaScript", image: "WeatherPic.png", copy: "A city and country weather lookup that was my first hands-on experience connecting an interface to a live API and turning its response into useful information.", live: "https://ondrej0.github.io/Weather-App-3.0/", code: "https://github.com/Ondrej0/Weather-App-3.0", accent: "yellow" },
];

const Arrow = () => <span className="arrow">↗</span>;

export default function Home() {
  const [pointer, setPointer] = useState({ x: -400, y: -400 });
  const [menu, setMenu] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const move = (e: PointerEvent) => setPointer({ x: e.clientX, y: e.clientY });
    const scroll = () => setProgress(window.scrollY / Math.max(1, document.body.scrollHeight - innerHeight));
    addEventListener("pointermove", move); addEventListener("scroll", scroll, { passive: true }); scroll();
    return () => { removeEventListener("pointermove", move); removeEventListener("scroll", scroll); };
  }, []);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenu(false); };
  return <div className="site">
    <div className="progress" style={{ transform: `scaleX(${progress})` }} />
    <div className="spotlight" style={{ transform: `translate(${pointer.x - 240}px,${pointer.y - 240}px)` }} />
    <header><button className="logo" onClick={() => go("home")}>OM<span>●</span></button><nav className={menu ? "open" : ""}><button onClick={() => go("work")}>Work</button><button onClick={() => go("about")}>About</button><button onClick={() => go("contact")}>Contact</button></nav><button className="menu" onClick={() => setMenu(!menu)} aria-expanded={menu}>{menu ? "Close" : "Menu"}</button></header>

    <main>
      <section id="home" className="hero">
        <div className="hero-copy"><p className="overline"><i /> Hey, I&apos;m Ondrej</p><h1>Software<br /><em>developer</em><br />with a feel<br />for the future.</h1><p className="lead">An aspiring software developer based in Bristol, focused on building ideas people want to spend time with.</p><button className="pill" onClick={() => go("work")}>Explore my work <Arrow /></button></div>
        <div className="portrait-wrap"><div className="orbit one" /><div className="orbit two" /><div className="portrait-card"><Image src="/portfolio-assets/profilepic.png" fill sizes="(max-width: 700px) 70vw, 38vw" priority alt="Ondrej Muzik" /></div><span className="orbit-text a">CODE · CREATE · CURIOUS ·</span><span className="orbit-text b">BRISTOL / UK</span></div>
        <div className="scroll-note">Scroll to enter <b>↓</b></div>
      </section>

      <section className="marquee"><div>BUILDING USEFUL THINGS <b>✦</b> MAKING IDEAS MOVE <b>✦</b> BUILDING USEFUL THINGS <b>✦</b></div></section>
      <section id="about" className="about"><p className="index">( 01 — ABOUT )</p><div className="about-grid"><h2>Curious by<br />nature. <em>Precise</em><br />by practice.</h2><div><p>I&apos;m a second-year Business Computing student at the University of the West of England. What started with game development as a hobby became a love for building projects and solving complex problems.</p><p>I work across HTML, CSS and JavaScript, with a grounding in algorithms, data structures, UX/UI principles, Figma, PHP and relational databases.</p><a href="https://github.com/Ondrej0" target="_blank" rel="noreferrer">Follow the experiments <Arrow /></a></div></div><div className="stack"><Image src="/portfolio-assets/TechStackSymbols.png" width={900} height={135} alt="Ondrej's technology stack" /></div></section>

      <section id="work" className="work"><div className="work-head"><p className="index">( 02 — SELECTED WORK )</p><p>Five projects. Plenty of momentum.</p></div>{projects.map((p, i) => <article className={`project ${p.accent}`} key={p.title}><div className="project-image"><span>0{i + 1}</span><Image src={`/portfolio-assets/${p.image}`} fill sizes="(max-width: 700px) 88vw, 56vw" alt={`${p.title} project preview`} /></div><div className="project-content"><p className="kind">{p.kind}</p><h3>{p.title}</h3><p className="description">{p.copy}</p><div className="links"><a href={p.live} target="_blank" rel="noreferrer">{p.title === "UWE BREAS" ? "Visit site" : "See demo"} <Arrow /></a>{p.code && <a href={p.code} target="_blank" rel="noreferrer">GitHub <Arrow /></a>}</div></div></article>)}</section>

      <section className="approach"><p className="index">( 03 — MINDSET )</p><h2>Make it <em>clear.</em><br />Make it <span>matter.</span></h2><div className="approach-grid"><p>Great code isn&apos;t just functional. It&apos;s considered: from the first interaction to the last responsive detail.</p><div className="numbers"><span><b>01</b> Learn loudly</span><span><b>02</b> Build deliberately</span><span><b>03</b> Improve relentlessly</span></div></div></section>

      <section id="contact" className="contact"><div className="contact-orb">✳</div><p className="index">( 04 — CONTACT )</p><h2>Let&apos;s build<br />something <a href="mailto:omuzik27@gmail.com"><em>memorable.</em></a></h2><div className="contact-links"><a href="mailto:omuzik27@gmail.com">omuzik27@gmail.com <Arrow /></a><a href="tel:07539107480">07539 107480 <Arrow /></a></div><footer><a href="https://github.com/Ondrej0" target="_blank" rel="noreferrer">GitHub</a><span>© 2026 Ondrej Muzik</span><button onClick={() => go("home")}>Back to top ↑</button></footer></section>
    </main>
  </div>;
}
