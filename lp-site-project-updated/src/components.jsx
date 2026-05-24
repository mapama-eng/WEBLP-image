const assetPath = "/assets/";

const links = {
  line: "https://line.me/R/ti/p/@lumiere-lp",
  tel: "tel:0312345678",
  instagram: "https://www.instagram.com/",
  map: "https://www.google.com/maps?q=Tokyo%20Station&output=embed",
};

const navItems = [
  { label: "Concept", href: "#concept" },
  { label: "Service", href: "#menu" },
  { label: "Price", href: "#pricing" },
  { label: "Recruit", href: "#recruit" },
  { label: "PR", href: "#pr" },
  { label: "Contact", href: "#access" },
];

const conceptCards = [
  {
    number: "01",
    title: "余白で魅せる上質感",
    text: "白を基調に、写真とコピーが呼吸できる余白を設計。安売り感を出さず、第一印象から信頼をつくります。",
  },
  {
    number: "02",
    title: "スマホで予約しやすい導線",
    text: "大きなCTA、LINE予約、電話発信、Instagram、Google Mapまで迷わずつながる動線に整えます。",
  },
  {
    number: "03",
    title: "女性が憧れる世界観",
    text: "美容学生や20〜30代女性が見て、ここに関わりたいと思える透明感と都会的な華やかさを表現します。",
  },
];

const menuItems = [
  {
    name: "LPサイト制作",
    detail: "ブランドの第一印象、サービス紹介、予約導線、FAQ、Google Mapまで含む基本制作。",
    time: "3〜4週間",
  },
  {
    name: "採用LP追加",
    detail: "美容学生や若手女性に向けた、写真中心の採用ページをLP内に組み込みます。",
    time: "2〜3週間",
  },
  {
    name: "PR・掲載実績セクション",
    detail: "雑誌掲載、Webメディア、セミナー登壇などを上品に見せ、信頼感を高めます。",
    time: "1〜2週間",
  },
  {
    name: "公開後改善サポート",
    detail: "予約率、問い合わせ率、CTA位置を見ながら、月次で改善します。",
    time: "月次",
  },
];

const prices = [
  {
    plan: "Light",
    price: "¥150,000〜",
    lead: "まずは美しく公開したい方へ",
    items: ["スマホ最適化", "LINE予約ボタン", "電話タップ発信", "Google Map"],
  },
  {
    plan: "Brand",
    price: "¥280,000〜",
    lead: "世界観と予約導線を整えたい方へ",
    items: ["構成・コピー設計", "メニュー/料金表", "スタッフ紹介", "Instagram導線"],
    featured: true,
  },
  {
    plan: "Recruit + PR",
    price: "¥450,000〜",
    lead: "採用・PRまで一体化したい方へ",
    items: ["採用セクション", "PR掲載実績", "動画風オープニング", "公開後30日サポート"],
  },
];

const recruitCards = [
  {
    label: "Beauty Students",
    title: "美容学生が憧れる入口をつくる",
    text: "スクールで見ているような透明感のある写真と、未来を想像できる言葉で採用導線を設計します。",
  },
  {
    label: "Women 20s-30s",
    title: "働く女性の感性に届くトーン",
    text: "かわいすぎず、冷たすぎない。上品で柔らかな余白と写真で、ブランドへの期待感を高めます。",
  },
  {
    label: "Creative Career",
    title: "好きと仕事がつながる見せ方",
    text: "技術、SNS、撮影、接客、PRなど、成長できる環境を美しく伝えます。",
  },
];

const prItems = [
  { type: "Magazine", title: "美容・ライフスタイル誌 掲載", note: "ブランドの世界観と実績をコンパクトに紹介。" },
  { type: "Web Media", title: "女性起業家向けWebメディア", note: "LP改善や予約導線のノウハウ記事を掲載。" },
  { type: "Event", title: "美容学生向けセミナー", note: "SNS時代のブランディングと見せ方を発信。" },
];

const staff = [
  {
    name: "Mika",
    role: "Brand Director",
    text: "ブランドの言葉と写真の方向性を整理し、見た瞬間に伝わるLPへ導きます。",
  },
  {
    name: "Aya",
    role: "UI Designer",
    text: "白い余白、ピンクゴールド、写真の重なりで女性らしい洗練を設計します。",
  },
  {
    name: "Rin",
    role: "Front-end",
    text: "Vercelで公開しやすい静的サイトとして、軽く美しい画面に実装します。",
  },
];

const faqs = [
  {
    q: "スマホ表示を最優先にできますか？",
    a: "はい。iPhoneで読みやすい文字サイズ、押しやすいボタン、縦レイアウトを基準に設計します。",
  },
  {
    q: "LINE予約やInstagram導線は入れられますか？",
    a: "LINE予約、電話タップ発信、Instagramリンク、Google Map、お問い合わせフォームまで入れられます。",
  },
  {
    q: "Vercelで公開できますか？",
    a: "できます。静的サイトとしてdistへ出力される構成なので、VercelのOtherプリセットで公開できます。",
  },
];

export function Header() {
  return (
    <>
      <header className="site-header fade-in" data-animate>
        <a className="brand" href="#top" aria-label="Mayumi Watanabe LP Studio">
          <img className="brand-logo" src={`${assetPath}mayumi-watanabe-logo.png`} alt="Mayumi Watanabe" />
        </a>
        <nav className="desktop-nav" aria-label="主要ナビゲーション">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="header-line" href={links.line} target="_blank" rel="noreferrer">LINE相談</a>
      </header>
      <div className="mobile-sticky-cta" aria-label="スマホ固定予約導線">
        <a className="sticky-line" href={links.line} target="_blank" rel="noreferrer">LINE相談</a>
        <a className="sticky-phone" href={links.tel}>電話する</a>
      </div>
    </>
  );
}

export function OpeningMovie() {
  return (
    <section id="top" className="opening-movie" aria-label="ファーストビュー">
      <div className="opening-photo fade-in" data-animate>
        <img src={`${assetPath}hero-urban-rose-gold.png`} alt="白を基調にした都会的なLP制作イメージ" />
      </div>
      <div className="opening-copy fade-in-up" data-animate>
        <p className="eyebrow">LP Design Studio</p>
        <h1>
          白い余白に、<br />
          憧れが立ち上がる。
        </h1>
        <p>
          美容学生や20〜30代女性が思わず惹かれる、都会的で柔らかなLPサイト。
          ピンクゴールドの余韻と大きな写真で、予約・採用・PRまで美しくつなげます。
        </p>
        <div className="hero-actions">
          <a className="primary-button" href={links.line} target="_blank" rel="noreferrer">LINEで相談する</a>
          <a className="secondary-button" href="#concept">世界観を見る</a>
        </div>
      </div>
      <div className="scroll-cue" aria-hidden="true">SCROLL</div>
    </section>
  );
}

export function Hero() {
  return (
    <section id="concept" className="concept-section">
      <div className="concept-copy scroll-reveal" data-animate>
        <p className="eyebrow">Concept</p>
        <h2>
          かわいいだけでは終わらない、<br />
          選ばれるための女性向けLP。
        </h2>
        <p>
          LONESSのような余白感、AFLOATのような柔らかい女性らしさ、
          SHEのような洗練されたキャリア感を、LP制作サービスとして再構成しました。
        </p>
      </div>
      <div className="concept-photo scroll-reveal" data-animate>
        <img src={`${assetPath}cta-rose-tray.png`} alt="ピンクゴールドの光が入る上質なデスク" />
      </div>
    </section>
  );
}

export function FeaturePanel() {
  return (
    <section className="section-shell airy-section scroll-reveal" data-animate>
      <div className="concept-grid reveal-stagger" data-animate>
        {conceptCards.map((item) => (
          <article className="concept-card" key={item.title}>
            <span>{item.number}</span>
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
    <section id="menu" className="service-section scroll-reveal" data-animate>
      <div className="section-shell service-inner">
        <SectionHeader
          kicker="Service"
          title="集客、予約、採用、PRまでひとつの世界観で。"
          text="スマホで見た瞬間の印象を大切にしながら、必要な導線を自然に組み込みます。"
        />
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
      </div>
    </section>
  );
}

export function PricingPanel() {
  return (
    <section id="pricing" className="section-shell scroll-reveal" data-animate>
      <SectionHeader
        kicker="Price"
        title="料金プラン"
        text="白基調の上品なLPから、採用・PRまで含むブランドサイト型LPまで対応します。"
      />
      <div className="price-grid">
        {prices.map((plan) => (
          <article className={`pricing-card ${plan.featured ? "featured" : ""}`} key={plan.plan}>
            {plan.featured && <p className="badge">人気</p>}
            <h3>{plan.plan}</h3>
            <p className="plan-best">{plan.lead}</p>
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

export function RecruitPanel() {
  return (
    <section id="recruit" className="recruit-section scroll-reveal" data-animate>
      <div className="recruit-photo">
        <img src={`${assetPath}hero-urban-rose-gold.png`} alt="都会的な美容系リクルートサイトのイメージ" />
      </div>
      <div className="section-shell recruit-inner">
        <div className="recruit-heading">
          <p className="eyebrow">Recruit</p>
          <h2>ここで働く未来が、少し先の憧れになる。</h2>
          <p>
            大きな写真、透明感のある余白、柔らかいコピーで、美容学生や若手女性に届く採用導線を付属させました。
          </p>
        </div>
        <div className="recruit-grid reveal-stagger" data-animate>
          {recruitCards.map((card) => (
            <article className="recruit-card" key={card.title}>
              <p>{card.label}</p>
              <h3>{card.title}</h3>
              <span>{card.text}</span>
            </article>
          ))}
        </div>
        <div className="recruit-entry">
          <div>
            <p className="eyebrow">Entry</p>
            <h3>募集職種</h3>
            <p>LPデザイナー / フロントエンド実装 / SNS導線プランナー / コピーライター</p>
          </div>
          <a className="primary-button" href="#access">採用について問い合わせる</a>
        </div>
      </div>
    </section>
  );
}

export function PrPanel() {
  return (
    <section id="pr" className="section-shell pr-section scroll-reveal" data-animate>
      <SectionHeader
        kicker="Press / PR"
        title="雑誌掲載やメディア実績を、品よく見せる。"
        text="掲載実績やイベント登壇を整理し、ブランドとしての信頼と憧れを高めます。"
      />
      <div className="pr-grid">
        {prItems.map((item) => (
          <article className="pr-card" key={item.title}>
            <p>{item.type}</p>
            <h3>{item.title}</h3>
            <span>{item.note}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FaqPanel() {
  return (
    <section id="staff" className="section-shell staff-section scroll-reveal" data-animate>
      <SectionHeader
        kicker="Team"
        title="写真、言葉、導線を一緒に整えるチーム。"
        text="ブランド設計からスマホ実装まで、女性向けサービスに必要な見せ方を整えます。"
      />
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
        <h3>よくある質問</h3>
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
        <p className="eyebrow">Contact</p>
        <h2>まずは、今の世界観と予約導線を見せてください。</h2>
        <p>
          LINE相談、電話、お問い合わせフォームからご連絡いただけます。Instagramや既存サイトがある場合は、
          その雰囲気に合わせて上品に再設計します。
        </p>
        <div className="contact-buttons">
          <a className="primary-button" href={links.line} target="_blank" rel="noreferrer">LINEで相談する</a>
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
        <iframe title="Google Map" src={links.map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  );
}

export function BenefitFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={`${assetPath}mayumi-watanabe-logo.png`} alt="Mayumi Watanabe" />
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
