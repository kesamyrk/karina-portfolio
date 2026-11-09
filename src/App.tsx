import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Menu, X, Sparkles, MousePointer2, Send, Github, Mail, Check, ChevronDown } from 'lucide-react'
import { services, tools, projects } from './data'

const nav = [{label:'Услуги',href:'#services'},{label:'Обо мне',href:'#about'},{label:'Инструменты',href:'#tools'},{label:'Процесс',href:'#process'},{label:'Проекты',href:'#projects'}]
const fade = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:.65,ease:[.22,1,.36,1] as const}} }

function Reveal({children,className=''}:{children:React.ReactNode;className?:string}) {
  const reduce = useReducedMotion()
  return <motion.div className={className} variants={fade} initial="hidden" whileInView="show" viewport={{once:true,amount:.14}} transition={reduce?{duration:0}:undefined}>{children}</motion.div>
}
function Header() {
 const [open,setOpen]=useState(false)
 return <header className="header"><a className="brand" href="#top" aria-label="На главную"><span className="brand-mark">К.</span><span>КАРИНА МЕЙСАРОШ<small>DIGITAL SERVICES</small></span></a>
 <nav className={open?'nav nav-open':'nav'}>{nav.map(n=><a key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}</a>)}<a className="nav-contact" href="#contact" onClick={()=>setOpen(false)}>Связаться <ArrowUpRight size={14}/></a></nav>
 <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Закрыть меню':'Открыть меню'}>{open?<X/>:<Menu/>}</button></header>
}
function Hero() {
 return <section className="hero section-shell" id="top"><div className="hero-grid">
   <div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> OPEN TO NEW PROJECTS <span className="eyebrow-line"/></div>
    <motion.p className="hero-kicker" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.1}}>ПЕРСОНАЛЬНОЕ DIGITAL-ПОРТФОЛИО</motion.p>
    <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:.18,duration:.8,ease:[.22,1,.36,1]}}>Карина<br/><span>Мейсарош</span><i>.</i></motion.h1>
    <motion.h2 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{delay:.3}}>Помогаю идеям<br className="desktop-break"/> становиться <em>результатом.</em></motion.h2>
    <motion.p className="hero-description" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.55}}>Сайты, цифровые задачи, контент и работа с данными — беру на себя то, что помогает вашему проекту двигаться быстрее.</motion.p>
    <motion.div className="hero-actions" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.65}}><a className="button button-primary" href="#contact">Обсудить задачу <ArrowUpRight size={17}/></a><a className="button button-ghost" href="#services">Посмотреть услуги <ArrowDown size={15}/></a></motion.div>
    <div className="hero-foot"><span>REMOTE / DIGITAL SERVICES</span><span>01 — 06 <span className="foot-rule"/></span></div>
   </div>
   <div className="hero-art" aria-label="Абстрактная фиолетовая 3D-композиция"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-core"><div className="core-shine"/><span>K</span></div><div className="art-ring ring-a"/><div className="art-ring ring-b"/><div className="art-spark spark-a">✳</div><div className="art-spark spark-b">✦</div><div className="art-label label-top">CREATIVE<br/>SYSTEMS</div><div className="art-label label-bottom">IDEAS → IMPACT</div><div className="art-cross">+</div></div>
  </div><div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line"><span/></div><span>AMSTERDAM / REMOTE</span></div></section>
}
function SectionHeading({index,eyebrow,title,desc}:{index:string;eyebrow:string;title:React.ReactNode;desc?:string}) {
 return <div className="section-heading"><div className="section-index">{index} <span/></div><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{desc&&<p className="section-desc">{desc}</p>}</div></div>
}
function Services() {
 const [active,setActive]=useState<number|null>(0)
 return <section className="section section-shell" id="services"><Reveal><SectionHeading index="01 / WHAT I DO" eyebrow="НАПРАВЛЕНИЯ РАБОТЫ" title={<>Чем могу <em>помочь.</em></>} desc="Подключаюсь к отдельным задачам и комплексной работе над цифровыми проектами — в зависимости от того, что нужно именно вам."/></Reveal>
 <div className="services-grid">{services.map((s,i)=>{const Icon=s.icon;return <motion.article key={s.number} className={`service-card ${active===i?'service-active':''}`} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} tabIndex={0} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{delay:i*.06,duration:.55}}><div className="service-top"><span>{s.number}</span><span className="service-tag">{s.tag}</span></div><div className="service-icon"><Icon size={22} strokeWidth={1.5}/></div><h3>{s.title}</h3><p className="service-description">{s.description}</p><ul>{s.tasks.map(t=><li key={t}><span className="list-dash"/> {t}</li>)}</ul><div className="service-arrow"><ArrowUpRight size={18}/></div></motion.article>})}</div>
 <Reveal><div className="service-note"><Sparkles size={18}/><p>Если вашей задачи нет в списке — напишите мне. <strong>Обсудим, смогу ли я помочь.</strong></p><a href="#contact" aria-label="Связаться"><ArrowUpRight/></a></div></Reveal></section>
}
function About() {
 const traits=['Быстро обучаюсь','Коммуникабельная','Внимательна к деталям','Ответственная','Люблю новые технологии','Открыта к сотрудничеству']
 return <section className="section section-shell about-section" id="about"><Reveal><SectionHeading index="02 / A LITTLE ABOUT ME" eyebrow="ЗНАКОМСТВО" title={<>Привет, я <em>Карина.</em></>}/></Reveal><div className="about-layout"><Reveal className="about-visual"><div className="about-frame"><div className="about-monogram">К<span>.</span></div><div className="about-orbit"/><div className="about-caption">CURIOUS MIND<br/>DIGITAL APPROACH</div><div className="about-coordinate">52°22' N<br/>04°54' E</div></div><div className="about-side-note">LEARNING<br/>BY DOING <ArrowUpRight size={15}/></div></Reveal><Reveal className="about-content"><p className="about-lead">Мне интересно превращать сложные и разрозненные задачи в понятные, работающие решения.</p><p>Я развиваюсь в сфере информационных технологий и цифровых решений. Мне нравится создавать удобные сайты, разбираться в новых инструментах и находить эффективные способы решения задач.</p><p>Быстро осваиваю новые технологии, внимательно отношусь к деталям и стараюсь доводить каждую задачу до качественного результата.</p><p>В своей работе использую современные инструменты и нейросети, чтобы оптимизировать процессы, экономить время и эффективнее решать задачи.</p><p>Открыта к новым проектам, интересным задачам и удалённому сотрудничеству.</p><div className="traits">{traits.map(t=><span key={t}><Check size={13}/>{t}</span>)}</div></Reveal></div></section>
}
function Tools() {
 return <section className="section section-shell tools-section" id="tools"><Reveal><SectionHeading index="03 / MY TOOLKIT" eyebrow="РАБОЧАЯ СРЕДА" title={<>Инструменты для <em>идей.</em></>} desc="Технологии и сервисы, с которыми я знакомлюсь и работаю. Список будет расширяться вместе с практикой."/></Reveal><div className="tool-groups">{tools.map((group,i)=><Reveal key={group.title}><div className="tool-group"><div className="tool-group-title"><span>0{i+1}</span><h3>{group.title}</h3><span className="tool-count">{String(group.items.length).padStart(2,'0')} TOOLS</span></div><div className="tool-cloud">{group.items.map((item)=><motion.span key={item} className="tool-pill" whileHover={{y:-4,borderColor:'rgba(190,157,255,.65)',backgroundColor:'rgba(153,111,230,.12)'}} transition={{type:'spring',stiffness:300,damping:18}}>{item}<span className="tool-plus">↗</span></motion.span>)}</div></div></Reveal>)}</div></section>
}
function Process() {
 const steps=[['01','Обсуждаем задачу','Вы рассказываете, что нужно сделать, а я уточняю детали и ожидаемый результат.'],['02','Согласуем условия','Фиксируем объём работы, сроки, стоимость и удобный формат взаимодействия.'],['03','Я выполняю работу','Двигаюсь по согласованному плану и при необходимости остаюсь на связи по ходу работы.'],['04','Передаю результат','Вы получаете готовую работу и, если нужно, короткие пояснения по дальнейшему использованию.']]
 return <section className="section section-shell process-section" id="process"><Reveal><SectionHeading index="04 / WORKFLOW" eyebrow="ПОНЯТНЫЙ ПРОЦЕСС" title={<>От задачи — к <em>результату.</em></>} desc="Прозрачный процесс без лишней сложности. На каждом этапе понятно, что происходит дальше."/></Reveal><div className="process-list">{steps.map((s,i)=><Reveal key={s[0]}><div className="process-step"><div className="process-number">{s[0]}<span/></div><div className="process-main"><h3>{s[1]}</h3><p>{s[2]}</p></div><div className="process-mark">{i===3?<Check/>:<ArrowUpRight/>}</div></div></Reveal>)}</div></section>
}
function Projects() {
  return (
    <section className="section section-shell projects-section" id="projects">
      <Reveal>
        <SectionHeading index="05 / SELECTED WORK" eyebrow="ПОРТФОЛИО" title={<>Избранные <em>проекты.</em></>} />
      </Reveal>
      <div className="projects-grid">
        {projects.map(project => (
          <article className="project-card" key={project.title}>
            <div className="project-cover">
              <img src={project.image} alt="" width={960} height={580} loading="lazy" />
            </div>
            <div className="project-copy">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.sample && (
                <details className="project-sample">
                  <summary className="project-action">Пример редактуры <ChevronDown size={16} aria-hidden="true" /></summary>
                  <dl>
                    <dt>До</dt><dd>{project.sample.before}</dd>
                    <dt>После</dt><dd>{project.sample.after}</dd>
                  </dl>
                </details>
              )}
              {project.url && (
                <a className="project-action" href={project.url} target="_blank" rel="noopener noreferrer"
                  aria-label={`Открыть ${project.title} в новой вкладке`}>
                  Открыть сайт <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
function Contact() {
 return <section className="contact-section section-shell" id="contact"><div className="contact-glow"/><Reveal><div className="contact-top"><span className="eyebrow">06 / LET'S CONNECT</span><span className="contact-availability"><span className="status-dot"/> OPEN FOR COLLABORATION</span></div><h2>Давайте сделаем<br/>что-то <em>полезное.</em></h2><p className="contact-intro">Расскажите о своей задаче — обсудим детали и найдём подходящий формат сотрудничества.</p><a className="button button-primary contact-cta" href="https://t.me/kesamyrk" target="_blank" rel="noreferrer">Написать в Telegram <ArrowUpRight size={18}/></a></Reveal><div className="contact-links"><a href="https://t.me/kesamyrk" target="_blank" rel="noreferrer"><span><Send size={17}/></span><small>TELEGRAM</small><strong>@kesamyrk</strong><ArrowUpRight className="contact-link-arrow"/></a><a href="https://github.com/kesamyrk" target="_blank" rel="noreferrer"><span><Github size={17}/></span><small>GITHUB</small><strong>github.com/kesamyrk</strong><ArrowUpRight className="contact-link-arrow"/></a><a href="mailto:karinameisarosh@mail.ru"><span><Mail size={17}/></span><small>EMAIL</small><strong>karinameisarosh@mail.ru</strong><ArrowUpRight className="contact-link-arrow"/></a></div></section>
}
function Footer() {return <footer className="footer section-shell"><a className="brand" href="#top"><span className="brand-mark">К.</span><span>КАРИНА МЕЙСАРОШ<small>DIGITAL SERVICES</small></span></a><span>СОЗДАЮ. СТРУКТУРИРУЮ. ПОМОГАЮ.</span><a href="#top">НАВЕРХ ↑</a><small>© {new Date().getFullYear()} KARINA MEISAROSH</small></footer>}
export default function App() {return <><Header/><main><Hero/><Services/><About/><Tools/><Process/><Projects/><Contact/></main><Footer/><div className="cursor-hint"><MousePointer2 size={13}/> DIGITAL / REMOTE</div></>}
