const assetPath = "/assets/";

const links = {
  line: "https://line.me/R/ti/p/@lumiere-lp",
  tel: "tel:0312345678",
  instagram: "https://www.instagram.com/",
  map: "https://www.google.com/maps?q=Tokyo%20Station&output=embed",
};

const navItems = [
  { label: "選ばれる理由", href: "#features" },
  { label: "メニュー", href: "#menu" },
  { label: "料金", href: "#pricing" },
  { label: "スタッフ", href: "#staff" },
  { label: "アクセス", href: "#access" },
];

const strengths = [
  { title: "予約導線まで設計", text: "LINE、電話、フォーム、Instagramを自然につなぎ、迷わず予約できる流れを作ります。" },
  { title: "スマホ最優先", text: "iPhoneで読みやすい文字サイズ、大きなボタン、片手操作しやすい余白で設計します。" },
  { title: "ブランドの高級感", text: "ピンクゴールドと余白を活かし、安売り感のない上質な第一印象へ整えます。" },
];

const menuItems = [
  { name: "集客LP制作", detail: "サービス紹介、予約導線、FAQ、Google Mapまで含む基本LP", time: "3〜5週間" },
  { name: "予約導線改善", detail: "既存サイトにLINE予約、電話発信、Instagram導線を追加", time: "1〜2週間" },
  { name: "ブランドLPリニューアル", detail: "写真、コピー、構成を見直し、高単価サービス向けに再設計", time: "4〜6週間" },
  { name: "公開後改善サポート", detail: "反応を見ながらCTA、料金表、導線を継続改善", time: "月次" },
];

const prices = [
  { plan: "Starter", price: "¥150,000〜", best: "まず公開したい方", items: ["スマホ最適化", "LINE予約ボタン", "電話タップ発信", "Google Map"] },
  { plan: "Standard", price: "¥280,000〜", best: "集客導線まで整えたい方", items: ["構成・コピー設計", "メニュー/料金表", "スタッフ紹介", "Instagram導線"], featured: true },
  { plan: "Premium", price: "¥450,000〜", best: "ブランド感を作り込みたい方", items: ["撮影トーン設計", "高級感UI", "予約率改善", "公開後30日サポート"] },
];

const staff = [
  { name: "Mika", role: "Brand Director", text: "事業の強みと言葉を整理し、予約につながる見せ方へ翻訳します。" },
  { name: "Aya", role: "UI Designer", text: "スマホで迷わず読める画面と、女性向けサービスの上質感を設計します。" },
  { name: "Rin", role: "Front-end", text: "静的サイトとして軽く、Vercelに公開しやすい構成で実装します。" },
];

const faqs = [
  { q: "スマホだけで見られるLPでも作れますか？", a: "はい。スマホ閲覧を最優先に、PCでは余白とビジュアルを活かした表示へ広げます。" },
  { q: "LINE予約や電話発信は入れられますか？", a: "LINE、電話、Instagram、フォームを目的に合わせて配置できます。" },
  { q: "Vercelで公開できますか？", a: "できます。静的サイトとしてdistに出力し、Framework PresetはOther、Output Directoryはdistで公開できます。" },
];

export function Header() {
  return (
    <>
      <header className="site-header fade-in" data-animate>
        <a className="brand" href="#top" aria-label="Lumiere LP Studio">
          <span className="brand-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-name">Lumiere LP</span>
        </a>
        <nav className="desktop-nav" aria-label="主要ナビゲーション">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="header-line" href={links.line} target="_blank" rel="noreferrer">
          LINE予約
        </a>
      </header>
      <div className="mobile-sticky-cta" aria-label="スマホ固定予約導線">
        <a className="sticky-line" href={links.line} target="_blank" rel="noreferrer">LINE予約</a>
        <a className="sticky-phone" href={links.tel}>電話する</a>
      </div>
    </>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-body fade-in-up" data-animate>
        <p className="eyebrow">Mobile first landing page</p>
        <h1>
          <span>スマホで予約が</span>
          <span>増える、上質な</span>
          <span>LPサイト制作。</span>
        </h1>
        <p className="hero-lead">
          集客、予約導線、ブランディングをひとつに。LINE予約・電話発信・Instagram・地図まで整えた、公開しやすい静的LPを制作します。
        </p>
        <div className="hero-actions">
          <a className="primary-button" href={links.line} target="_blank" rel="noreferrer">LINEで相談予約</a>
          <a className="secondary-button" href={links.tel}>電話で相談する</a>
        </div>
        <div className="quick-links">
          <a href={links.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href="#pricing">料金を見る</a>
          <a href="#access">地図を見る</a>
        </div>
      </div>
      <div className="hero-visual fade-in" data-animate>
        <img src={`${assetPath}hero-urban-rose-gold.png`} alt="上質なLP制作をイメージしたデスクとノートPC" />
      </div>
    </section>
  );
}

export function FeaturePanel() {
  return (
    <section id="features" className="section-shell scroll-reveal" data-animate>
      <SectionHeader kicker="Why choose us" title="予約につながる導線を、スマホ画面から逆算。" />
      <div className="strength-grid">
        {strengths.map((item, index) => (
          <article className="strength-card" key={item.title}>
            <span className={`icon-crop ${["icon-target", "icon-phone", "icon-pencil"][index]}`} aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProcessPanel() {
  return (
    <section id="menu" className="section-shell menu-section scroll-reveal" data-animate>
      <SectionHeader kicker="Menu" title="LPサイト制作メニュー" text="必要な機能を最初から組み込んだ、集客・予約向けの制作メニューです。" />
      <div className="menu-list">
        {menuItems.map((item) => (
          <article className="menu-row" key={item.name}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </div>
            <span>{item.time}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PricingPanel() {
  return (
    <section id="pricing" className="section-shell scroll-reveal" data-animate>
      <SectionHeader kicker="Price" title="料金表" text="Vercel公開に対応した静的サイト構成で、npm run build後にdistへ出力されます。" />
      <div className="price-grid">
        {prices.map((plan) => (
          <article className={`pricing-card ${plan.featured ? "featured" : ""}`} key={plan.plan}>
            {plan.featured && <p className="badge">おすすめ</p>}
            <h3>{plan.plan}</h3>
            <p className="plan-best">{plan.best}</p>
            <strong>{plan.price}</strong>
            <ul>
              {plan.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a href={links.line} target="_blank" rel="noreferrer">このプランを相談</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FaqPanel() {
  return (
    <section id="staff" className="section-shell staff-section scroll-reveal" data-animate>
      <SectionHeader kicker="Staff" title="スタッフ紹介" text="設計、デザイン、実装まで、スマホで成果が出るLPをチームで整えます。" />
      <div className="staff-grid">
        {staff.map((member) => (
          <article className="staff-card" key={member.name}>
            <div className="staff-avatar">{member.name.slice(0, 1)}</div>
            <p>{member.role}</p>
            <h3>{member.name}</h3>
            <span>{member.text}</span>
          </article>
        ))}
      </div>
      <div className="faq-box">
        <h3>よくあるご質問</h3>
        {faqs.map((faq) => (
          <details key={faq.q}>
            <summary>{faq.q}</summary>
            <p>{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ContactStrip() {
  return (
    <section id="access" className="access-section scroll-reveal" data-animate>
      <div className="access-copy">
        <p className="eyebrow">Access / Contact</p>
        <h2>オンライン相談・全国対応。まずは予約導線から整えましょう。</h2>
        <p>LINE予約、電話タップ発信、Instagramリンク、Google Map、問い合わせフォームを標準導線として設計します。</p>
        <div className="contact-buttons">
          <a className="primary-button" href={links.line} target="_blank" rel="noreferrer">LINEで予約する</a>
          <a className="secondary-button" href={links.tel}>03-1234-5678</a>
          <a className="text-link" href={links.instagram} target="_blank" rel="noreferrer">Instagramを見る</a>
        </div>
        <form className="contact-form" aria-label="お問い合わせフォーム">
          <input aria-label="お名前" name="name" placeholder="お名前" />
          <input aria-label="メールアドレス" name="email" type="email" placeholder="メールアドレス" />
          <textarea aria-label="お問い合わせ内容" name="message" rows="4" placeholder="お問い合わせ内容" />
          <button type="button">問い合わせ内容を送る</button>
        </form>
      </div>
      <div className="map-card">
        <iframe
          title="Google Map"
          src={links.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export function BenefitFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p>Lumiere LP Studio</p>
        <small>Static site ready for GitHub to Vercel. Framework Preset: Other / Output Directory: dist</small>
      </div>
      <a href="#top">ページ上部へ</a>
    </footer>
  );
}

function SectionHeader({ kicker, title, text }) {
  return (
    <header className="section-header">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </header>
  );
}
