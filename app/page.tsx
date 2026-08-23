/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';

const news = [
  ['Aug. 2026', "My first-author paper, RESIST: Residual Reinforcement Learning for Lifespan Clock Tree Reliability Optimization, has been accepted by ICCD'26!"],
  ['Jul. 2026', 'I received the 2026 IEEE CASS Student Travel Grant!'],
  ['Jun. 2026', "My first-author paper, Beyond Iterative Search: Intelligent Generative GATv2 Framework for Analog Sizing, has been accepted by AICAS'26!"],
  ['May 2026', 'Our co-authored paper, Extending Silicon Lifetime: A Review of Design Techniques for Reliable Integrated Circuits, has been published in ACM Computing Surveys!'],
  ['May 2026', 'Our co-first-authored paper, Shift-Left Techniques in Electronic Design Automation: A Survey, has been published in ACM Computing Surveys!'],
  ['Apr. 2026', "Our co-authored paper, ChiPlanner: Physically-Aware and Timing-Driven Design Planner for 2.5D Multi-Chiplet Systems, has been accepted by DAC'26!"],
  ['Nov. 2025', 'Our team received multiple awards in the EDA Elite Competition for AI-based, cross-process behavioral modeling of analog integrated circuits!'],
  ['Jul. 2025', 'I received the 2024 Annual Excellent Teaching Assistant Award from Global College, Shanghai Jiao Tong University!'],
  ['Apr. 2025', 'Our iCAS team secured a Winning Award at the AICAS 2025 Grand Challenge by designing a two-stage operational amplifier using LLMs! Congratulations!'],
  ['Dec. 2024', 'Our team won second place in the EDA Elite Competition for Chiplet Partitioner with Timing-Driven Placement!'],
];

const researchAreas = [
  { title: 'Timing prediction & optimization', text: 'Learning-based timing prediction and timing-driven optimization for advanced chips, including 3D ICs, with an emphasis on early physical design decisions.', tone: 'blue' },
  { title: 'AI for EDA', text: 'Generative, reinforcement-learning, and agentic approaches for analog and digital circuit design automation.', tone: 'yellow' },
  { title: 'Reliability-aware design', text: 'Design methodologies that account for aging, stress, and long-term reliability in integrated circuits.', tone: 'white' },
];

const publications = [
  { type: 'Conference paper', venue: 'ICCD 2026', title: 'RESIST: Residual Reinforcement Learning for Lifespan Clock Tree Reliability Optimization', authors: 'F. Hu, X. Wu, H. Wang, J. Shaik, S. Singhal, and X. Guo*' },
  { type: 'Conference paper', venue: 'AICAS 2026', title: 'Beyond Iterative Search: Intelligent Generative GATv2 Framework for Analog Sizing', authors: 'F. Hu, J. Shaik, and X. Guo*' },
  { type: 'Conference paper', venue: 'DAC 2026', title: 'ChiPlanner: Physically-Aware and Timing-Driven Design Planner for 2.5D Multi-Chiplet Systems', authors: 'Z. Li†, K. Tian†, F. Hu, Z. Li, X. Wu, H. Zhang, S. Chen, J. Zhai*, X. Guo*, and K. Zhao' },
  { type: 'Conference paper', venue: 'MCSOC 2026', title: 'Aging Analysis of CMOS Synaptic Circuits with Simplified Leaky Integrate-and-Fire Neurons', authors: 'S. J. Babu, S. Menezes Picard, F. Hu, X. Wu, S. Singhal, and X. Guo' },
  { type: 'Conference paper', venue: 'ISOCC 2026', title: 'PRISM: Beam-Search Technology Mapping via Learned Physical Timing', authors: 'L. Zhu, X. Wu, F. Hu, L. Li, Y. Hu, Q. He, and X. Guo' },
  { type: 'Journal paper', venue: 'ACM Computing Surveys', title: 'Extending Silicon Lifetime: A Review of Design Techniques for Reliable Integrated Circuits', authors: 'J. Shaik, F. Hu, L. Zhu, S. Singha, and X. Guo*', link: 'https://doi.org/10.1145/3829075', identifier: 'DOI · 10.1145/3829075' },
  { type: 'Journal paper', venue: 'ACM Computing Surveys', title: 'Shift Left Techniques in Electronic Design Automation: A Survey', authors: 'X. Wu†, Z. Li†, F. Hu†, T. Lin, X. Zhao, R. Wang, and X. Guo*', link: 'https://doi.org/10.1145/3819588', identifier: 'DOI · 10.1145/3819588' },
  { type: 'Book / Book Chapter', venue: 'China Machine Industry Press · 2026 · ISBN 9787111799894', title: 'AI-Powered Vehicles: Computing Power and Chips for Intelligent Driving', authors: 'X. Guo, R. Wang, F. Hu, and X. Wu' },
];

const awards = [
  ['IEEE CASS Student Travel Grant', '2026'],
  ['Outstanding Teaching Assistant Award, Global College, SJTU', '2025'],
  ['Winning Award, AICAS Grand Challenge: LLM-Based Analog Circuit Design Competition', '2025'],
  ['Third Prize, EDA Elite Competition', '2025'],
  ['Second Prize, EDA Elite Competition', '2024'],
  ['Honorable Mention, MCM for College Students', '2022, 2023'],
  ['Outstanding Undergraduate B-level Scholarship, SJTU', '2022'],
  ['Outstanding Undergraduate Progress Scholarship, SJTU', '2022'],
  ['University-Level Merit Student, SJTU', '2022'],
  ['Silver Medal, University Physics Competition', '2021'],
];

const teaching = [
  ['System-on-Chip Design', '2025'],
  ['Modern Digital VLSI Design', '2025'],
  ['Electromagnetics', '2024'],
  ['Introduction to Circuits', '2023'],
  ['Introduction to Signals and Systems', '2023'],
];

const services = [
  'IEEE Student Membership.',
  'Core Member, ACM-W SJTU Student Organization.',
  'Reviewer for DAC, ICCAD, ICCD, ISCAS, and ISEDA conferences.',
];

const searchEntries = [
  { label: 'Fan Hu · Ph.D. Candidate', href: '#top', meta: 'Profile', keywords: 'Shanghai Jiao Tong University Google Scholar GitHub LinkedIn ORCID email researching intelligent reliable ways design chips' },
  { label: 'About Me', href: '#about', meta: 'About', keywords: 'Electronic Science and Technology advised Prof. Xinfei Guo Intelligent Circuits Architectures and Systems iCAS Lab B.S. Electrical and Computer Engineering AI Electronic Design Automation timing prediction optimization early EDA reliability-aware aging advanced semiconductor technologies' },
  { label: 'Education', href: '#education', meta: 'Section', keywords: 'Ph.D. B.S. Shanghai Jiao Tong University Electronic Science and Technology Electrical and Computer Engineering advisor Xinfei Guo 2020 2024 present Shanghai China' },
  { label: 'News', href: '#news', meta: 'Section', keywords: 'recent updates papers awards grant competition' },
  { label: 'Main Research Topics', href: '#research', meta: 'Section', keywords: 'AI EDA timing prediction optimization reliability chips 3D IC' },
  { label: 'Publications', href: '#publications', meta: 'Section', keywords: 'papers journal conference book chapter' },
  { label: 'Honors & Awards', href: '#awards', meta: 'Section', keywords: 'honors awards competition grant scholarship' },
  { label: 'Services', href: '#services', meta: 'Section', keywords: 'IEEE reviewer ACM-W academic service membership' },
  { label: 'Teaching', href: '#teaching', meta: 'Section', keywords: 'teaching assistant courses Global College' },
  ...news.map(([date, text]) => ({ label: text, href: '#news', meta: date, keywords: text })),
  ...researchAreas.map((area) => ({ label: area.title, href: '#research', meta: 'Research', keywords: area.text })),
  ...publications.map((publication) => ({ label: publication.title, href: '#publications', meta: publication.venue, keywords: `${publication.type} ${publication.authors} ${publication.identifier ?? ''}` })),
  ...awards.map(([award, year]) => ({ label: award, href: '#awards', meta: year, keywords: award })),
  ...services.map((service) => ({ label: service, href: '#services', meta: 'Service', keywords: service })),
  ...teaching.map(([course, year]) => ({ label: course, href: '#teaching', meta: year, keywords: `${course} teaching assistant Global College SJTU` })),
];

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }

function AuthorLine({ authors }: { authors: string }) {
  const parts = authors.split(/(F\. Hu|[†*])/g).filter(Boolean);
  return <>{parts.map((part, index) => {
    if (part === 'F. Hu') return <strong key={`${part}-${index}`}>F. Hu</strong>;
    if (part === '†' || part === '*') return <sup className="author-marker" key={`${part}-${index}`}>{part}</sup>;
    return <span key={`${part}-${index}`}>{part}</span>;
  })}</>;
}

export default function Home() {
  const [publicationFilter, setPublicationFilter] = useState('All');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const filteredPublications = publicationFilter === 'All' ? publications : publications.filter((publication) => publication.type.startsWith(publicationFilter));
  const latestNews = news.slice(0, 4);
  const earlierNews = news.slice(4);
  const recentAwards = awards.slice(0, 5);
  const earlierAwards = awards.slice(5);
  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const searchResults = searchEntries.filter((entry) => !normalizedSearchQuery || `${entry.label} ${entry.meta} ${entry.keywords}`.toLowerCase().includes(normalizedSearchQuery)).slice(0, 8);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('fan-hu-theme');
    const themeTimer = window.setTimeout(() => setDarkMode(savedTheme === 'dark'), 0);
    return () => window.clearTimeout(themeTimer);
  }, []);

  function toggleTheme() {
    setDarkMode((current) => {
      const next = !current;
      window.localStorage.setItem('fan-hu-theme', next ? 'dark' : 'light');
      return next;
    });
  }

  return (
    <div className={darkMode ? 'site dark' : 'site'}>
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Fan Hu home">Fan Hu</a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#top">Main Page</a>
          <a href="#about">About Me</a>
          <a href="#education">Education</a>
          <a href="#news">News</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#awards">Awards</a>
          <a href="#services">Services</a>
          <a href="#teaching">Teaching</a>
        </nav>
        <div className="header-actions">
          <button className="header-action" type="button" aria-expanded={searchOpen} aria-controls="site-search" onClick={() => setSearchOpen((current) => !current)}>Search</button>
          <button className="header-action" type="button" aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`} onClick={toggleTheme}>{darkMode ? 'Light' : 'Dark'}</button>
        </div>
        {searchOpen ? <div className="search-panel" id="site-search" role="search">
          <input autoFocus value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} onKeyDown={(event) => { if (event.key === 'Escape') setSearchOpen(false); }} placeholder="Search this page" aria-label="Search all page content" />
          <div className="search-results">
            {searchResults.length ? searchResults.map((entry) => <a href={entry.href} key={`${entry.href}-${entry.label}`} onClick={() => { setSearchOpen(false); setSearchQuery(''); }}><span>{entry.label}</span><small>{entry.meta}</small></a>) : <p>No matching results.</p>}
          </div>
        </div> : null}
      </header>

      <main className="page-layout section-shell" id="top">
        <aside className="profile-column">
          <div className="portrait-card"><img src="/fan.png" alt="Portrait of Fan Hu" /></div>
          <h1>Fan Hu</h1>
          <p className="profile-role">Ph.D. Candidate</p>
          <p className="profile-affiliation">Shanghai Jiao Tong University</p>
          <p className="profile-goal"><span aria-hidden="true">🎯</span> Researching intelligent and reliable ways to design chips.</p>
          <div className="profile-links" aria-label="Academic and professional links">
            <a href="https://scholar.google.com/citations?hl=zh-CN&user=glSH6U8AAAAJ" target="_blank" rel="noreferrer">Google Scholar <Arrow /></a>
            <a href="https://github.com/hu-fan" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="https://www.linkedin.com/in/fan-hu-18935b344/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://orcid.org/0009-0003-6173-0357" target="_blank" rel="noreferrer">ORCID <Arrow /></a>
            <a href="mailto:hu-fan@sjtu.edu.cn">Email <Arrow /></a>
          </div>
        </aside>

        <div className="main-column">
          <section className="about-section" id="about">
          <div className="about-copy">
            <h2 className="about-heading">About Me</h2>
            <p>Hi! I am Fan Hu, a Ph.D. candidate in Electronic Science and Technology at Shanghai Jiao Tong University, advised by <a href="https://sites.gc.sjtu.edu.cn/xinfei-guo/" target="_blank" rel="noreferrer">Prof. Xinfei Guo</a>, and I conduct my research in the <a href="https://sites.gc.sjtu.edu.cn/icas/" target="_blank" rel="noreferrer">Intelligent Circuits, Architectures, and Systems (iCAS) Lab</a>. Before beginning my doctoral study, I received my B.S. in Electrical and Computer Engineering from Shanghai Jiao Tong University.</p>
            <p>My research interests lie in AI for Electronic Design Automation (EDA), with a particular focus on applying AI to timing prediction and optimization in the early stages of the EDA flow. I am also interested in reliability-aware chip design, especially understanding and addressing aging effects in advanced semiconductor technologies.</p>
            <div className="about-tags"><span>AI for EDA</span><span>Timing Optimization for Advanced Chips</span><span>Reliable circuits</span></div>
          </div>
        </section>

        <section className="section-block" id="education">
          <div className="section-heading"><h2 className="section-title">Education</h2></div>
          <div className="education-list">
            <article className="education-item"><div className="school-mark"><img src="/sjtu-seal.png" alt="Shanghai Jiao Tong University seal" /></div><div><p className="education-date">2024—Present</p><h3>Ph.D. in Electronic Science and Technology</h3><p>Shanghai Jiao Tong University · Shanghai, China</p><p className="education-note">Advisor: <a href="https://sites.gc.sjtu.edu.cn/xinfei-guo/" target="_blank" rel="noreferrer">Prof. Xinfei Guo</a></p></div></article>
            <article className="education-item"><div className="school-mark"><img src="/sjtu-seal.png" alt="Shanghai Jiao Tong University seal" /></div><div><p className="education-date">2020—2024</p><h3>B.S. in Electrical and Computer Engineering</h3><p>Shanghai Jiao Tong University · Shanghai, China</p></div></article>
          </div>
        </section>

        <section className="section-block" id="news">
          <div className="section-heading"><h2 className="section-title">News</h2></div>
          <ul className="news-list">{latestNews.map(([date, text], index) => <li key={`${date}-${index}`}><time>{date}</time><p>{text} <span className="news-celebration" aria-hidden="true">🎉</span></p></li>)}</ul>
          <details className="news-archive">
            <summary>Show earlier news</summary>
            <ul className="news-list news-list-archive">{earlierNews.map(([date, text], index) => <li key={`${date}-${index}`}><time>{date}</time><p>{text} <span className="news-celebration" aria-hidden="true">🎉</span></p></li>)}</ul>
          </details>
        </section>

        <section className="section-block" id="research">
          <div className="section-heading"><h2 className="section-title">Main Research Topics</h2></div>
          <div className="research-grid">{researchAreas.map((area) => <article className={`research-card ${area.tone}`} key={area.title}><div><h3>{area.title}</h3><p>{area.text}</p></div></article>)}</div>
        </section>

        <section className="section-block" id="publications">
          <div className="section-heading heading-with-link"><h2 className="section-title">Publications</h2><a className="text-link" href="https://scholar.google.com/citations?hl=zh-CN&user=glSH6U8AAAAJ" target="_blank" rel="noreferrer">Google Scholar <Arrow /></a></div>
          <div className="filter-row" role="group" aria-label="Filter publications">{['All', 'Conference', 'Journal', 'Book / Book Chapter'].map((filter) => <button type="button" className={publicationFilter === filter ? 'filter-button active' : 'filter-button'} onClick={() => setPublicationFilter(filter)} key={filter}>{filter}</button>)}</div>
          <p className="publication-legend"><span><sup>†</sup> Equal contribution (co-first authors)</span><span><sup>*</sup> Corresponding author</span></p>
          <div className="publication-list">{filteredPublications.map((publication) => <article className="publication-item" key={publication.title}><div className="publication-meta"><span>{publication.type}</span><time>{publication.venue}</time>{publication.link ? <a href={publication.link} target="_blank" rel="noreferrer">{publication.identifier} <Arrow /></a> : null}</div><div className="publication-body"><h3>{publication.title}</h3><p className="authors"><AuthorLine authors={publication.authors} /></p></div></article>)}</div>
        </section>

        <section className="section-block" id="awards">
          <div className="section-heading"><h2 className="section-title">Honors &amp; Awards</h2></div>
          <div className="simple-list awards-list">{recentAwards.map(([award, year]) => <div key={award}><strong>{award}</strong><span>{year}</span></div>)}</div>
          <details className="list-archive">
            <summary>Show earlier honors &amp; awards</summary>
            <div className="simple-list awards-list awards-list-archive">{earlierAwards.map(([award, year]) => <div key={award}><strong>{award}</strong><span>{year}</span></div>)}</div>
          </details>
        </section>

        <section className="section-block" id="services">
          <div className="section-heading"><h2 className="section-title">Services</h2></div>
          <div className="service-list">{services.map((service) => <div key={service}>{service}</div>)}</div>
        </section>

        <section className="section-block" id="teaching">
          <div className="section-heading"><h2 className="section-title">Teaching</h2></div>
          <p className="section-intro">Teaching Assistant, Global College, Shanghai Jiao Tong University.</p>
          <div className="simple-list teaching-list">{teaching.map(([course, year]) => <div key={course}><strong>{course}</strong><span>{year}</span></div>)}</div>
        </section>

        <footer className="footer"><div><strong>Fan Hu</strong><span>Ph.D. Candidate · Shanghai Jiao Tong University</span></div><div className="footer-links"><a href="mailto:hu-fan@sjtu.edu.cn">hu-fan@sjtu.edu.cn</a><a href="#top">Back to top ↑</a></div><p>© 2026 Fan Hu</p></footer>
        </div>
      </main>
    </div>
  );
}
