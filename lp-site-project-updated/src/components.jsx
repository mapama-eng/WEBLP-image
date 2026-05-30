import { useEffect } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/";

const workStyles = [
  ["マンツーマン接客", "お客様と丁寧に向き合える"],
  ["ヘアショー + 撮影", "感性を形にする活動"],
  ["SNS・発信", "自分の世界観を育てる"],
  ["シフト制", "無理なく続けられる働き方"],
  ["個室空間", "落ち着いた施術環境"],
  ["セミナー", "学びを積み重ねる"],
];

const benefits = [
  ["勤務形態", "正社員 / パート / 時短勤務 相談可"],
  ["休日", "シフト制・ライフスタイルに合わせて相談"],
  ["教育", "技術セミナー・撮影・SNS発信をサポート"],
  ["環境", "全席個室、マンツーマンで向き合えるサロン"],
  ["応募", "Instagram DMより受付"],
];

const imageProps = {
  draggable: "false",
  onContextMenu: (event) => event.preventDefault(),
};

function LineIcon({ index }) {
  const paths = [
    <path key="p" d="M18 42c0-8 5-14 12-14s12 6 12 14M24 23a6 6 0 1 0 12 0 6 6 0 0 0-12 0m23 4 8-8m-4 0h4v4" />,
    <path key="p" d="m17 18 30 30m0-30L17 48m31-24 7 3-3 7m-39 2 10-5 5 10" />,
    <path key="p" d="M18 22h28a5 5 0 0 1 5 5v20H23a5 5 0 0 1-5-5Zm24 0 4-6m-19 6-4-6m9 18 7 7 10-13" />,
    <path key="p" d="M18 22h34v27H18Zm0 9h34M27 16v10m16-10v10m-16 15h.1m9.9 0h.1m9.9 0h.1" />,
    <path key="p" d="M22 42h20a9 9 0 0 0 0-18H28a8 8 0 0 0-8 8v16m26-8h8m-32 8h27" />,
    <path key="p" d="M17 48V22h30v18H27m5-9h22m0 0-6-6m6 6-6 6M18 52h28" />,
  ];

  return (
    <svg aria-hidden="true" viewBox="0 0 68 68" className="mx-auto h-16 w-16 fill-none stroke-ink stroke-[1.8]">
      {paths[index]}
      <path d="M53 18v6m-3-3h6M57 31v4m-2-2h4" className="stroke-gold" />
    </svg>
  );
}

function SectionLabel({ en, jp }) {
  return (
    <div className="section-label" data-reveal>
      <span>{en}</span>
      {jp && <p>{jp}</p>}
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="instagram-icon">
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.2" cy="6.8" r="1" className="instagram-dot" />
    </svg>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const targets = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-ivory font-serifjp text-ink">
      <div className="fixed inset-0 pointer-events-none opacity-70">
        <div className="botanical-shadow botanical-shadow-a" />
        <div className="botanical-shadow botanical-shadow-b" />
      </div>

      <header className="absolute left-0 right-0 top-0 z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 md:px-10">
        <a className="brand" href="#top" aria-label="MiiiU recruit top">
          MiiiU
          <span>recruit 2026</span>
        </a>
        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.42em] text-ink/60 md:flex">
          <a href="#message">Message</a>
          <a href="#work">Work</a>
          <a href="#entry">Entry</a>
        </nav>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">MiiiU recruit 2026</p>
          <h1>
            お客様に選ばれ続ける<span className="mobile-break"><br /></span>美容師へ
          </h1>
          <div className="hero-actions">
            <a className="gold-button" href="#entry">ENTRY</a>
            <a className="text-link" href="#message">MiiiUを知る</a>
          </div>
          <p>
            自分らしく、長く、美容師を続けられる場所。温かさと上質さが共存する空間で、
            感性を磨きながら、お客様と丁寧に向き合えます。
          </p>
        </div>
        <figure className="hero-photo" data-reveal>
          <img src="/assets/photos/recruit-hero-grid.png" alt="MiiiUのヘアスタイルイメージ" {...imageProps} />
          <figcaption>1 / 6</figcaption>
        </figure>
      </section>

      <section id="message" className="message-section" data-reveal>
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <SectionLabel en="MESSAGE" jp="recruit message" />
          <div className="vertical-message" data-reveal>
            <p>
              高級感は大切にしたい。
              <br />
              でも、敷居の高い場所にはしたくない。
              <br />
              お店をつくるとき、私が目指したのは、
              <br />
              お客様が気負わずに足を運べる場所でした。
              <br />
              温かさと上質さが共存する空間で、
              <br />
              日常に寄り添いながら、少しだけ特別な時間を過ごせる。
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="work-section" data-reveal>
        <SectionLabel en="WORK STYLE" jp="自分らしく働ける環境" />
        <div className="work-grid" data-reveal>
          {workStyles.map(([title, text], index) => (
            <article key={title} className="work-item">
              <LineIcon index={index} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="work-note" data-reveal>
          自分らしく、長く、美容師を続けられる環境を整えています。
        </p>
      </section>

      <section id="space" className="space-section" data-reveal>
        <figure className="space-photo" data-reveal>
          <img src="/assets/photos/salon-space-bright.png" alt="MiiiUの個室サロン空間" {...imageProps} />
        </figure>
        <div className="space-copy" data-reveal>
          <SectionLabel en="SALON SPACE" jp="private room" />
          <h2>お客様に寄り添い、感性を磨く個室空間。</h2>
          <p>
            1対1で向き合える落ち着いた施術環境。白と木、自然光が調和する空間で、
            技術だけではなく人としても成長できる時間を大切にしています。
          </p>
        </div>
      </section>

      <section className="looking-section" data-reveal>
        <div className="looking-inner" data-reveal>
          <p className="eyebrow">WE ARE LOOKING FOR...</p>
          <h2>こんな方と働きたい。</h2>
          <ul>
            <li>お客様と丁寧に向き合いたい方</li>
            <li>感性を磨き続けたい方</li>
            <li>美容を本気で楽しみたい方</li>
            <li>関わる人を大切にできる方</li>
            <li>長く美容師を続けていきたい方</li>
          </ul>
        </div>
      </section>

      <section id="requirements" className="requirements-section" data-reveal>
        <SectionLabel en="REQUIREMENTS" jp="募集要項" />
        <div className="requirements-table" data-reveal>
          {benefits.map(([label, value]) => (
            <dl key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </dl>
          ))}
        </div>
      </section>

      <section id="entry" className="entry-section">
        <div className="entry-visual" data-reveal>
          <img src="/assets/photos/entry-vase.png" alt="MiiiUのエントリーイメージ" {...imageProps} />
        </div>
        <div className="entry-panel" data-reveal>
          <SectionLabel en="ENTRY" jp="salon tour / recruit" />
          <h2>サロン見学をご希望の方へ</h2>
          <p>
            MiiiUの考え方や雰囲気に共感してくださる方と、お話ししたいと考えています。
            まずはInstagramのDMよりご連絡ください。見学希望や働き方の相談からでも大丈夫です。
          </p>
          <div className="instagram-entry" data-reveal>
            <a className="instagram-button" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <InstagramIcon />
              <span>Instagramで相談する</span>
            </a>
            <a className="gold-button dm-button" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              DMで見学希望を送る
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p className="brand">
          MiiiU
          <span>recruit 2026</span>
        </p>
        <a href="https://miiiu.jp/" target="_blank" rel="noreferrer">
          official site
        </a>
      </footer>
    </main>
  );
}

export default App;
