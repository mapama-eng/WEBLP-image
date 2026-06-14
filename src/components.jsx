import { useEffect, useState } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/miiiu_1111/";
const JBC_URL = "https://jbc-web.info/miiiu-4/";

const mobileNavigation = [
  {
    label: "CONCEPT",
    href: "#concept",
    children: [{ label: "OUR BEGINNING", href: "#origin" }],
  },
  { label: "OWNER MESSAGE", href: "#message" },
  { label: "SALON SPACE", href: "#space" },
  {
    label: "OUR TEAM",
    href: "#team",
    children: [
      { label: "STAFF VOICE", href: "#voices" },
      { label: "ACTIVITY", href: "#activity" },
    ],
  },
  {
    label: "WORK STYLE",
    href: "#work",
    children: [{ label: "DAILY FLOW", href: "#daily-flow" }],
  },
  {
    label: "RECRUITMENT",
    href: "#looking",
    children: [{ label: "RECRUITMENT INFORMATION", href: "#recruit-info" }],
  },
  { label: "FAQ", href: "#faq" },
  { label: "ENTRY", href: "#entry" },
];

const assets = {
  hero: "/assets/photos/miiiu-editorial-hero.png",
  reception: "/assets/photos/salon-reception-counter.JPG",
  lighting: "/assets/photos/salon-spherical-light.JPG",
  salonMain: "/assets/photos/salon-space-bright.png",
  salonSeat: "/assets/photos/official-salon/salon-seat.jpg",
  salonShampoo: "/assets/photos/official-salon/salon-shampoo.jpg",
  salonLight: "/assets/photos/official-salon/salon-light.jpg",
  owner: "/images/owner.jpg",
  hairshow: "/images/hairshow.jpg",
  jbcCover: "/images/jbc-cover.png",
  hotpepperAward: "/images/hotpepper-award.jpg",
  recruitScissors: "/images/recruit-salon-work.png",
  recruitInformation: "/images/recruit-salon-treatment.png",
  logoMark: "/assets/photos/miiiu-logo-transparent.png",
};

const imageProps = {
  draggable: "false",
  onContextMenu: (event) => event.preventDefault(),
};

const workStyles = [
  {
    title: "マンツーマン接客",
    text: "お客様一人ひとりと丁寧に向き合い、信頼を重ねていく働き方です。",
    icon: "person",
  },
  {
    title: "ヘアショー・クリエイティブ活動",
    text: "技術だけでなく、感性を形にする機会を大切にしています。",
    icon: "stage",
  },
  {
    title: "SNS・撮影",
    text: "自分の世界観を育て、発信する力も磨いていけます。",
    icon: "camera",
  },
  {
    title: "シフト制",
    text: "自分らしく、長く続けられる働き方を相談できます。",
    icon: "calendar",
  },
  {
    title: "個室空間",
    text: "落ち着いた空間で、お客様との時間に集中できます。",
    icon: "privateRoom",
  },
  {
    title: "セミナーによるスキルアップ",
    text: "学び続けたい気持ちを支え、技術と人間性を育てます。",
    icon: "seminar",
  },
];

const lookingFor = [
  "お客様と丁寧に向き合える美容師になりたい方",
  "流れ作業ではなく、一人ひとりに寄り添う接客がしたい方",
  "感性や技術を、自分のペースで磨いていきたい方",
  "美容を楽しみながら、長く続けられる働き方を探している方",
  "人との関わりを大切にしながら成長したい方",
];

const recruitInfo = [
  ["募集職種", "スタイリスト"],
  ["経験年数", "不問"],
  ["募集人数", "男性1名\n女性1名"],
  ["年齢", "20代〜30代"],
  ["勤務地", "MiiiU（天童店）"],
  ["勤務条件", "1ヶ月の中で\n土日6日以上勤務可能な方"],
  ["雇用形態", "業務委託"],
  ["平均単価", "11,000円"],
  ["技術売上", "50〜60％\n例）売上100万円 →\n50〜60万円"],
  ["店販売上", "10％"],
  ["ECサイト売上", "10％"],
  ["その他", "条件交渉可"],
];

const activityItems = [
  {
    title: "Hair Show Activity",
    text: "サロンワークだけでなく、表現の場も大切にするサロン。",
    src: assets.hairshow,
    alt: "MiiiUのクリエイティブ活動を表すサロンイメージ",
    href: "https://2025.campuscollection.jp/sendai/",
  },
  {
    title: "Japan Brand Collection",
    text: "Japan Brand Collection 宮城・山形版に3年連続掲載。",
    src: assets.jbcCover,
    alt: "MiiiUの掲載実績を表すサロンイメージ",
    href: JBC_URL,
  },
  {
    title: "HOT PEPPER BEAUTY AWARD",
    text: "2025・2026 サロン部門 注目サロン選出。お客様から高い支持をいただき、2年連続で選出されました。",
    src: assets.hotpepperAward,
    alt: "HOT PEPPER Beauty AWARD 2025・2026 サロン部門 注目サロン選出",
    href: "https://beauty.hotpepper.jp/slnH000576408/?msockid=2232ad5700396a7018d4bbb401a96b66",
  },
];

const teamMembers = [
  {
    name: "Rio",
    src: "/assets/photos/staff-rio.jpg",
    alt: "Rioのスタッフ写真",
  },
  {
    name: "Nene",
    src: "/assets/photos/staff-nene.jpg",
    alt: "Neneのスタッフ写真",
  },
  {
    name: "Minori",
    src: "/assets/photos/staff-minori.jpg",
    alt: "Minoriのスタッフ写真",
  },
];

const originStory = [
  "MiiiUを作った理由は、過去の経験の中で「もっと一人ひとりに静かに向き合える場所があったら」と感じたことが始まりです。流れ作業のように時間が過ぎるのではなく、お客様の小さな迷いや、言葉にならない好みまで丁寧に受け止められる美容室を目指しました。",
  "美容師として長く続けていくためには、技術だけでなく、働く人自身の感性や暮らしも大切にできる環境が必要だと考えています。MiiiUは、お客様にもスタッフにも無理な強さを求めず、穏やかに成長していける場所でありたいと思っています。",
];

const staffVoices = [
  {
    name: "Rio",
    role: "スタイリスト",
    image: "/assets/photos/staff-rio.jpg",
    quote:
      "MiiiUの良いところは、個室でお客様としっかり向き合いながら、ゆっくり過ごしていただけるところだと思います。また、プライベートも充実できる環境なので、仕事も前向きに頑張ることができます。",
  },
  {
    name: "Nene",
    role: "スタイリスト",
    image: "/assets/photos/staff-nene.jpg",
    quote:
      "MiiiUではマンツーマンでお客様一人ひとりと向き合うことができるので、お客様にも自分自身にも負担をかけず、丁寧に施術できる環境が整っています。落ち着いて働けることが魅力だと感じています。",
  },
  {
    name: "Minori",
    role: "スタイリスト",
    image: "/assets/photos/staff-minori.jpg",
    quote:
      "お客様と周りを気にせず話せる半個室のプライベート空間がとても気に入っています。髪に優しい薬剤やヘアケア商品、美容機器も充実しており、お客様に安心してヘアスタイルをご提案できる環境です。",
  },
];

const dailyFlow = [
  ["09:15", "出勤・店内準備", "空間を整え、予約内容や共有事項を確認します。"],
  ["10:00", "サロンワーク開始", "カウンセリングから仕上げまで、一人ひとりに丁寧に向き合います。"],
  ["13:00", "休憩", "予約状況に合わせて、落ち着いて休める時間を確保します。"],
  ["14:00", "サロンワーク", "午後も目の前のお客様との時間を大切に、施術や撮影を行います。"],
  ["18:00", "最終受付", "最後のお客様まで、丁寧なカウンセリングと仕上がりを大切にします。"],
  ["19:00", "清掃・片付け", "店内を整え、翌日の準備や一日の振り返りを行います。"],
  ["19:15", "退勤", "無理なく続けられるリズムを大切にしています。"],
];

const faqs = [
  ["見学だけでも可能ですか？", "もちろん可能です。InstagramのDMより希望日時をご相談ください。まずは雰囲気を見ていただくだけでも大丈夫です。"],
  ["業務委託未経験でも応募できますか？", "サポート体制があります。働き方や不安な点を伺いながら、無理のない形を一緒に考えます。"],
  ["ブランクがありますが大丈夫ですか？", "お気軽にご相談ください。これまでの経験や現在の状況に合わせて、お話しできればと思います。"],
  ["子育て中でも働けますか？", "働き方をご相談いただけます。予約状況や勤務ペースをふまえて、長く続けやすい形を一緒に探します。"],
  ["面接前に相談できますか？", "Instagram DMよりお気軽にご連絡ください。見学希望や働き方の相談からでも大丈夫です。"],
];

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="instagram-icon">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.2" cy="6.8" r="1" className="instagram-dot" />
    </svg>
  );
}

function WorkIcon({ type }) {
  const paths = {
    person: (
      <>
        <circle cx="22" cy="20" r="5.5" />
        <circle cx="43" cy="20" r="5.5" />
        <path d="M13 45c1.4-8.2 7-13 14-13" />
        <path d="M51 45c-1.4-8.2-7-13-14-13" />
        <path d="M28 34c3 2.5 5 2.5 8 0" className="gold-stroke" />
        <path d="M18 51h28" />
      </>
    ),
    stage: (
      <>
        <path d="M14 48h36" />
        <path d="M20 48v-7h24v7" />
        <path d="M17 18h30" />
        <path d="M22 18l-8 18" />
        <path d="M42 18l8 18" />
        <path d="M25 23l-7 14" className="gold-stroke" />
        <path d="M39 23l7 14" className="gold-stroke" />
        <circle cx="32" cy="18" r="4" />
      </>
    ),
    camera: (
      <>
        <rect x="13" y="15" width="20" height="34" rx="3" />
        <path d="M19 20h8M21 44h4" />
        <path d="M38 29h6l2-4h6l2 4h3v18H38z" />
        <circle cx="48" cy="38" r="5.3" />
        <path d="M53 17v6m-3-3h6" className="gold-stroke" />
      </>
    ),
    calendar: (
      <>
        <rect x="13" y="17" width="32" height="30" rx="3" />
        <path d="M13 27h32M21 12v10M37 12v10" />
        <path d="M22 35h.1M30 35h.1" />
        <circle cx="47" cy="45" r="9" />
        <path d="M47 40v5l4 3" className="gold-stroke" />
      </>
    ),
    privateRoom: (
      <>
        <path d="M14 14h36v38H14z" />
        <path d="M32 14v38" className="gold-stroke" />
        <path d="M22 41h17a5 5 0 0 0 0-10H28a6 6 0 0 0-6 6v9" />
        <path d="M23 46h19M32 41v9" />
        <path d="M43 31h3" className="gold-stroke" />
      </>
    ),
    seminar: (
      <>
        <path d="M20 14h34v24H20z" />
        <path d="M26 45c0-5.8 4.2-9.8 9.2-9.8s9.2 4 9.2 9.8" />
        <circle cx="35.2" cy="29.5" r="4.5" />
        <path d="M14 51h40" />
        <path d="M29 22h16" className="gold-stroke" />
        <path d="M29 28h10" />
        <path d="M48 18v16" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className="work-icon">
      {paths[type]}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`} data-reveal>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function InstagramButton({ children, variant = "primary" }) {
  return (
    <a
      className={`instagram-cta ${variant}`}
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={`${children} Instagramを新しいタブで開く`}
    >
      <InstagramIcon />
      <span>{children}</span>
    </a>
  );
}

function FixedInstagramCta() {
  return (
    <a
      className="fixed-instagram-cta"
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="InstagramのDMで見学予約する"
    >
      <InstagramIcon />
      <span>DMで見学予約</span>
    </a>
  );
}

function useRevealAnimation() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const targets = Array.from(document.querySelectorAll("[data-reveal]"));

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return () => document.documentElement.classList.remove("reveal-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);
}

function useBackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.9);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible;
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <img className="brand-watermark hero-logo-watermark" src={assets.logoMark} alt="" aria-hidden="true" />
      <div className="hero-media" data-reveal>
        <img
          src={assets.hero}
          alt="MiiiUリクルートサイト用のヘアスタイルイメージ"
          fetchPriority="high"
          {...imageProps}
        />
        <p>recruit visual</p>
      </div>

      <div className="hero-copy" data-reveal>
        <p className="eyebrow">MiiiU recruit 2026</p>
        <h1>
          お客様に
          <br />
          選ばれ続ける
          <br />
          美容師へ
        </h1>
        <div className="hero-support">
          <p className="hero-lead">本当の“美しさ”は、信頼から。</p>
          <p>
            自分らしく、長く、美容師を続けられる場所。温かさと上質さが共存する空間で、
            感性を磨きながら、お客様と丁寧に向き合えます。
          </p>
          <div className="hero-actions">
            <InstagramButton variant="primary">Instagramを見る</InstagramButton>
            <InstagramButton variant="secondary">DMで相談する</InstagramButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Concept() {
  return (
    <section id="concept" className="concept-section concept-section-compact">
      <div className="concept-frame" data-reveal>
        <p className="eyebrow">CONCEPT</p>
        <p className="concept-statement">信頼は、一人ひとりと過ごす時間から。</p>
      </div>
    </section>
  );
}

function Message() {
  return (
    <section id="message" className="message-section">
      <img className="brand-watermark message-logo-watermark" src={assets.logoMark} alt="" aria-hidden="true" />
      <SectionHeading eyebrow="OWNER MESSAGE" title="高級感だけではなく、温かさを。" />
      <div className="message-content">
        <figure className="owner-photo" data-reveal>
          <img src={assets.owner} alt="MiiiUオーナー写真" {...imageProps} />
        </figure>
        <div className="message-body" data-reveal>
          <p>
            高級感は大切にしたい。でも、敷居の高い場所にはしたくない。
            お店をつくるとき、私が目指したのは、お客様が気負わずに足を運べる場所でした。
          </p>
          <p>
            温かさと上質さが共存する空間で、日常に寄り添いながら、
            少しだけ特別な時間を過ごせる。MiiiUは、そんなサロンでありたいと思っています。
          </p>
          <p>
            同じ想いを持ち、お客様と丁寧に向き合いながら感性を磨き続けたい方と、
            これからのMiiiUを一緒につくっていきたいです。
          </p>
        </div>
      </div>
    </section>
  );
}

function SalonSpace() {
  return (
    <section id="space" className="space-section">
      <div className="space-copy" data-reveal>
        <SectionHeading eyebrow="SALON SPACE" title="お客様との時間を、大切にできる場所。" />
        <p className="space-intro">
          お客様一人ひとりと静かに向き合える、半個室の上質な空間。
          <br />
          美容師としての技術だけでなく、接客の時間そのものを大切にできる場所です。
        </p>
      </div>
      <div className="space-visuals" data-reveal>
        <figure className="space-photo space-photo-main">
          <img src={assets.salonMain} alt="MiiiUのセット面と半個室が並ぶサロンスペース" {...imageProps} />
          <figcaption>SEMI PRIVATE SPACE</figcaption>
        </figure>
        <div className="space-support-photos">
          <figure className="space-photo space-photo-reception">
            <img src={assets.reception} alt="MiiiUの受付と奥行きのある店内" {...imageProps} />
            <figcaption>RECEPTION</figcaption>
          </figure>
          <figure className="space-photo space-photo-light">
            <img src={assets.salonLight} alt="MiiiU店内を彩る球体照明" {...imageProps} />
            <figcaption>LIGHTING</figcaption>
          </figure>
          <figure className="space-photo space-photo-seat">
            <img src={assets.salonSeat} alt="MiiiUの鏡と一人掛けのセット面" {...imageProps} />
            <figcaption>SET SPACE</figcaption>
          </figure>
          <figure className="space-photo space-photo-shampoo">
            <img src={assets.salonShampoo} alt="MiiiUの落ち着いたシャンプーブース" {...imageProps} />
            <figcaption>SHAMPOO SPACE</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function OurTeam() {
  return (
    <section id="team" className="team-section">
      <div className="team-head" data-reveal>
        <SectionHeading
          eyebrow="OUR TEAM"
          title={
            <>
              共に学び、
              <br />
              共に成長する仲間たち。
            </>
          }
        />
      </div>
      <div className="team-grid" data-reveal>
        {teamMembers.map((member) => (
          <article className="team-card" key={member.name}>
            <figure>
              <img src={member.src} alt={member.alt} {...imageProps} />
            </figure>
            <p>{member.name}</p>
            <span>OUR TEAM</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function OriginStory() {
  return (
    <section id="origin" className="origin-section">
      <div className="origin-inner" data-reveal>
        <SectionHeading eyebrow="OUR BEGINNING" title="なぜMiiiUを作ったのか" />
        <div className="origin-body">
          {originStory.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function StaffVoices() {
  return (
    <section id="voices" className="voices-section">
      <SectionHeading eyebrow="STAFF VOICE" title="スタッフの声" align="center" />
      <div className="voice-grid" data-reveal>
        {staffVoices.map((voice) => (
          <article className="voice-card" key={voice.name}>
            <figure className={`voice-photo ${voice.image ? "" : "is-empty"}`}>
              {voice.image ? (
                <img src={voice.image} alt={`${voice.name}のスタッフ写真`} {...imageProps} />
              ) : (
                <span aria-hidden="true">MiiiU</span>
              )}
            </figure>
            <div>
              <p className="voice-quote">{voice.quote}</p>
              <p className="voice-name">{voice.name}</p>
              <span className="voice-role">{voice.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DailyFlow() {
  return (
    <section id="daily-flow" className="daily-flow-section">
      <div className="daily-flow-head" data-reveal>
        <SectionHeading eyebrow="DAILY FLOW" title="1日の流れ" />
        <p>09:15から19:15までの一例です。予約状況に合わせながら、丁寧に一日を整えます。</p>
      </div>
      <ol className="daily-flow-list" data-reveal>
        {dailyFlow.map(([time, title, text]) => (
          <li key={time}>
            <time>{time}</time>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="faq-section">
      <SectionHeading eyebrow="FAQ" title="よくある質問" />
      <div className="faq-list" data-reveal>
        {faqs.map(([question, answer]) => (
          <details className="faq-item" key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function SeoIntro() {
  return (
    <section id="tendo-recruit" className="seo-intro-section">
      <div className="seo-intro-inner" data-reveal>
        <p className="eyebrow">TENDO BEAUTY RECRUIT</p>
        <h2>天童・山形エリアで美容師として長く働ける環境を探している方へ</h2>
        <p>
          天童で美容師求人や美容室求人を探している方へ。MiiiU天童店は、半個室の上質な空間で、お客様一人ひとりに丁寧に向き合うサロンワークを大切にしています。落ち着いた環境の中で、技術と接客の両方を穏やかに磨きながら、長く美容師を続けていける場所を目指しています。
        </p>
        <p>
          天童市をはじめ、東根市・寒河江市・山形市など山形エリアで美容師転職を考えている方、業務委託美容師として自分らしい働き方を探している方にも、MiiiUの空気感を知っていただけたらと思います。半個室サロンの美容師求人を比較している段階でも、まずはサロン見学や働き方について、InstagramのDMからお気軽にご相談ください。
        </p>
      </div>
    </section>
  );
}

function ActivitySection() {
  return (
    <section id="activity" className="activity-section">
      <div className="activity-copy" data-reveal>
        <SectionHeading eyebrow="ACTIVITY" title="サロンワークの先に広がる、表現の場" />
        <p>
          MiiiUでは、日々のサロンワークだけでなく、ヘアショーなどのクリエイティブな活動にも取り組んでいます。
          技術を磨くだけでなく、美容師としての感性や表現力を広げられる機会があることも、MiiiUの魅力のひとつです。
        </p>
        <p>
          また、MiiiUは「Japan Brand Collection 宮城・山形版」に3年連続で掲載されています。
          地域の中でも上質なサロンとして選ばれ続けていることを、採用ページ内でも上品に伝えます。
        </p>
      </div>

      <div className="activity-grid" data-reveal>
        {activityItems.map((item) => (
          <article className="activity-card" key={item.title}>
            <figure>
              {item.href ? (
                <a
                  className="activity-image-link"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.title} 掲載ページを見る`}
                >
                  <img src={item.src} alt={item.alt} {...imageProps} />
                  <span className="activity-external-label">View More ↗</span>
                </a>
              ) : (
                <img src={item.src} alt={item.alt} {...imageProps} />
              )}
            </figure>
            <div>
              <span>{item.title}</span>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function RecruitInformation() {
  return (
    <section id="recruit-info" className="recruit-info-section">
      <div className="recruit-info-copy" data-reveal>
        <SectionHeading eyebrow="RECRUIT INFORMATION" title="新しい仲間を募集しています。" />
        <figure className="recruit-info-photo recruit-info-photo-mobile">
          <img src={assets.recruitInformation} alt="お客様の髪を整えるMiiiUの美容師" {...imageProps} />
          <figcaption>SALON WORK / MiiiU</figcaption>
        </figure>
        <p>
          MiiiUでは、これからのサロンを一緒に育ててくれる新しい仲間を募集しています。
        </p>
        <p>
          お客様一人ひとりに丁寧に向き合いながら、似合わせカット、ツヤ感・透明感カラー、髪質改善を中心に、
          長く信頼される美容師として成長できる環境を大切にしています。
        </p>
        <dl className="recruit-info-list">
          {recruitInfo.map(([label, value]) => (
            <div className="recruit-info-item" key={label}>
              <dt>{label}</dt>
              <dd>
                {value.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
        <div className="recruit-info-entry">
          <p>応募方法</p>
          <span>InstagramのDMよりご連絡ください。質問だけでもお気軽にお待ちしています。</span>
        </div>
      </div>

      <figure className="recruit-info-photo recruit-info-photo-desktop">
        <img src={assets.recruitInformation} alt="お客様の髪を整えるMiiiUの美容師" {...imageProps} loading="eager" />
        <figcaption>SALON WORK / MiiiU</figcaption>
      </figure>
    </section>
  );
}

function WorkStyle() {
  return (
    <section id="work" className="work-section">
      <SectionHeading eyebrow="WORK STYLE" title="自分らしく、長く続けられる環境" align="center" />
      <div className="work-grid" data-reveal>
        {workStyles.map((item) => (
          <article className="work-item" key={item.title}>
            <WorkIcon type={item.icon} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function LookingFor() {
  return (
    <section id="looking" className="looking-section">
      <div className="looking-inner" data-reveal>
        <p className="eyebrow">WE ARE LOOKING FOR...</p>
        <h2>こんな想いを持つ方と、働きたい。</h2>
        <ul>
          {lookingFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="looking-note">
          今の技術や経験だけで判断するのではなく、どんな美容師になりたいかという想いを大切にしたいと考えています。
        </p>
      </div>
    </section>
  );
}

function Entry() {
  return (
    <section id="entry" className="entry-section">
      <div className="entry-copy" data-reveal>
        <SectionHeading eyebrow="ENTRY" title="サロン見学をご希望の方へ" />
        <p>
          <span>まずはInstagramの投稿やハイライトを</span>
          <span>ご覧いただき、</span>
          <span>MiiiUの考え方や雰囲気に</span>
          <span>共感してくださる方のみ、</span>
          <span>DMよりご連絡をお願いいたします。</span>
        </p>
        <p>
          <span>見学希望、働き方の相談、</span>
          <span>少し話を聞いてみたいという段階でも</span>
          <span>大丈夫です。</span>
          <span>お互いを大切にできる出会いを、</span>
          <span>丁寧に重ねていきたいと考えています。</span>
        </p>
        <InstagramButton variant="entry">DMで見学希望を送る</InstagramButton>
      </div>
    </section>
  );
}

export function EntryRecruitPage() {
  useRevealAnimation();

  return (
    <main className="entry-route-shell">
      <header className="entry-route-header">
        <a className="brand" href="/" aria-label="MiiiU recruit トップページへ">
          MiiiU
          <span>recruit 2026</span>
        </a>
        <a className="entry-route-back" href="/">
          Recruit Top
        </a>
      </header>

      <section className="entry-recruit-section" aria-labelledby="entry-recruit-title">
        <figure className="entry-recruit-visual" aria-hidden="true">
          <img src={assets.recruitScissors} alt="" {...imageProps} />
        </figure>

        <div className="entry-recruit-content" data-reveal>
          <div className="entry-recruit-heading">
            <p>RECRUIT INFORMATION</p>
            <h1 id="entry-recruit-title">募集要項</h1>
          </div>

          <dl className="entry-recruit-list">
            {recruitInfo.map(([label, value]) => (
              <div className="entry-recruit-item" key={label}>
                <dt>{label}</dt>
                <dd>
                  {value.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>

          <div id="entry-application" className="entry-recruit-application">
            <h2>応募方法</h2>
            <p>InstagramのDMよりご連絡ください。質問だけでもお気軽にお待ちしています。</p>
            <InstagramButton variant="entry-page">Instagramで相談する</InstagramButton>
          </div>
        </div>
      </section>

      <footer className="entry-route-footer">
        <p className="brand">
          MiiiU
          <span>recruit 2026</span>
        </p>
        <a
          className="footer-instagram"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="MiiiU公式Instagramを見る"
        >
          <InstagramIcon />
          <span className="footer-instagram-account">@miiiu_1111</span>
          <span className="footer-instagram-label">Instagramを見る</span>
        </a>
      </footer>

      <FixedInstagramCta />
    </main>
  );
}

export default function RecruitPage() {
  const showBackToTop = useBackToTop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useRevealAnimation();

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 720px)");
    const closeOnDesktop = (event) => {
      if (event.matches) setIsMobileMenuOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="MiiiU recruit top">
          MiiiU
          <span>recruit 2026</span>
        </a>
        <nav aria-label="ページ内ナビゲーション">
          <a href="#concept">Concept</a>
          <a className="nav-owner" href="#message"><span>Owner</span><span>Message</span></a>
          <a href="#work">Work Style</a>
          <a href="#space">Salon</a>
          <a href="#faq">FAQ</a>
          <a href="#entry">Entry</a>
        </nav>

        <button
          className={`mobile-menu-button ${isMobileMenuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={isMobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <button
          className={`mobile-menu-backdrop ${isMobileMenuOpen ? "is-open" : ""}`}
          type="button"
          aria-label="メニューを閉じる"
          tabIndex={isMobileMenuOpen ? 0 : -1}
          onClick={closeMobileMenu}
        />

        <aside
          id="mobile-navigation"
          className={`mobile-menu-panel ${isMobileMenuOpen ? "is-open" : ""}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="mobile-menu-heading">
            <p>MENU</p>
            <span>MiiiU recruit 2026</span>
          </div>
          <nav className="mobile-nav" aria-label="スマートフォン用ページ内ナビゲーション">
            <ul>
              {mobileNavigation.map((item) => (
                <li className="mobile-nav-group" key={item.label}>
                  <a className="mobile-nav-primary" href={item.href} onClick={closeMobileMenu}>
                    {item.label}
                  </a>
                  {item.children ? (
                    <ul className="mobile-nav-children">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a href={child.href} onClick={closeMobileMenu}>
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </header>

      <Hero />
      <Concept />
      <Message />
      <OriginStory />
      <SalonSpace />
      <OurTeam />
      <StaffVoices />
      <WorkStyle />
      <ActivitySection />
      <DailyFlow />
      <LookingFor />
      <RecruitInformation />
      <FaqSection />
      <SeoIntro />
      <Entry />

      <footer className="site-footer">
        <p className="brand">
          MiiiU
          <span>recruit 2026</span>
        </p>
        <div className="footer-links">
          <a href="https://miiiu.jp/" target="_blank" rel="noreferrer">official site</a>
          <a
            className="footer-instagram"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="MiiiU公式Instagramを見る"
          >
            <InstagramIcon />
            <span className="footer-instagram-account">@miiiu_1111</span>
            <span className="footer-instagram-label">Instagramを見る</span>
          </a>
        </div>
      </footer>

      <a className={`back-to-top ${showBackToTop ? "visible" : ""}`} href="#top" aria-label="ページ上部へ戻る">
        ↑
      </a>
      {!isMobileMenuOpen ? <FixedInstagramCta /> : null}
    </main>
  );
}
