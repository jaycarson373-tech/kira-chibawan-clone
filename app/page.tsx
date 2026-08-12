const SOURCE = "https://chibawan.net";

const navItems = [
  ["HOME", SOURCE, "home"],
  ["ちばわんとは", `${SOURCE}/about`, "about"],
  ["いぬ親さん募集", `${SOURCE}/?dogdetailscat=dog`, "dog"],
  ["ねこ親さん募集", `${SOURCE}/?catdetailscat=cat`, "cat"],
  ["イベント情報", `${SOURCE}/?eventcat=eventall`, "event"],
  ["ボランティアガイド", `${SOURCE}/volunteer`, "volunteer"],
  ["お役立ちコーナー", `${SOURCE}/help`, "help"],
] as const;

const sideLinks = [
  ["いぬ親さん募集TOP", `${SOURCE}/dogdetailscat/dog/`],
  ["成犬（オス）", `${SOURCE}/dogdetailscat/002_dog_male/`],
  ["成犬（メス）", `${SOURCE}/dogdetailscat/001_dog_female/`],
  ["子犬（12ヶ月以下）", `${SOURCE}/dogdetailscat/003_dog_child/`],
  ["個人保護（掲載お手伝い）", `${SOURCE}/dogdetailscat/010_dog_help/`],
  ["いぬ親さん・ねこ親さんになるまで", `${SOURCE}/flowofadoptive/`],
  ["譲渡負担金について", `${SOURCE}/flowofadoptive/allocation/`],
  ["いぬ親さん・ねこ親さんの体験談", `${SOURCE}/taikencat/taiken/`],
  ["幸せをつかんだいぬ", `${SOURCE}/graduation/d001_graduationcat_dog/`],
  ["迷子情報", `${SOURCE}/missingcat/missing_all/`],
  ["不妊手術・去勢手術について", `${SOURCE}/help/shujutu/`],
] as const;

const banners = [
  ["report.gif", "―放棄された犬猫たちの現状―愛護センターリポート", "http://centrerep.exblog.jp/"],
  ["tnr.gif", "野良猫のTNR（繁殖制限）活動", "http://chibawant.exblog.jp/"],
  ["sayno.gif", "だれでもできる！知って広める動物愛護", `${SOURCE}/sayno/index.html`],
  ["missing.gif", "迷子を捜しています", `${SOURCE}/missingcat/missing_all`],
  ["happy.gif", "幸せをつかんだいぬ・ねこたち", `${SOURCE}/graduation/graduationcat_all`],
] as const;

const smallBanners = [
  ["support.gif", "支援物資報告", `${SOURCE}/supportcat/support`],
  ["budget.gif", "収支報告", `${SOURCE}/about/budget_20`],
  ["medical.gif", "医療支援レポート", `${SOURCE}/iryoshienrepocat/iryoshienrepo`],
  ["charity.gif", "チャリティーグッズ", "http://chibawan.ocnk.net/"],
  ["what.gif", "こんな時どうする？", `${SOURCE}/help/qacase`],
  ["contact.gif", "お問い合わせ", `${SOURCE}/about/inquiry/`],
] as const;

const footerGroups = [
  {
    icon: "footer-info.gif",
    title: "ちばわんとは",
    links: ["ちばわんの「趣旨」", "ちばわん活動報告", "幸せをつかんだいぬ・ねこたち", "迷子情報", "ご支援・ご協力をお願いしています", "お問い合わせ先一覧"],
  },
  {
    icon: "footer-dog.gif",
    title: "いぬ親さん募集",
    links: ["成犬（オス）", "成犬（メス）", "子犬", "個人保護（掲載お手伝い）", "いぬ親さんになるまで", "いぬ親申込アンケート"],
  },
  {
    icon: "footer-cat.gif",
    title: "ねこ親さん募集",
    links: ["千葉", "東京", "神奈川", "埼玉・長野", "個人保護（掲載お手伝い）", "ねこ親さんになるまで"],
  },
  {
    icon: "footer-event.gif",
    title: "イベント情報",
    links: ["ちばわん主催", "篠崎いぬ親会", "船橋いぬ親会", "八王子いぬ親会", "その他いぬ・ねこ親会", "その他イベント"],
  },
  {
    icon: "footer-volunteer.gif",
    title: "ボランティアガイド",
    links: ["一時預かりボランティア", "イベント運営ボランティア", "運搬ボランティア", "ボランティア経験者の声"],
  },
  {
    icon: "footer-help.gif",
    title: "お役立ちコーナー",
    links: ["こんな時どうする？", "知ってほしい犬猫のこと", "オリジナルＹ字リード販売", "ポスターダウンロード", "ちばわんへのリンクについて"],
  },
] as const;

const photos = [
  { id: "photo-1", src: "/reference/nina0001.jpeg", alt: "キラが木の床に座っている写真" },
  { id: "photo-2", src: "/reference/nina0006.jpg", alt: "赤い首輪をつけたキラの写真" },
  { id: "photo-3", src: "/reference/koume0099.jpg", alt: "ご家族と一緒に写るキラの写真" },
] as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">本文へ移動</a>
      <header className="site-header" id="top">
        <div className="brand-block">
          <a href={SOURCE} aria-label="ちばわん ホーム">
            <img className="logo" src="/reference/logo.gif" alt="ちばわん" width="227" height="54" />
          </a>
          <p>ちばわんは保護された犬猫を家族に迎えてくださる方をさがしています。</p>
        </div>
        <div className="header-tools">
          <div className="socials" aria-label="ソーシャルメディア">
            <a href="https://www.instagram.com/chibawan_dog/" aria-label="犬のInstagram"><img src="/reference/instagram-dog.gif" alt="" /></a>
            <a href="https://www.instagram.com/chibawan_cat/" aria-label="猫のInstagram"><img src="/reference/instagram-cat.gif" alt="" /></a>
            <a href="https://twitter.com/chibawan_info" aria-label="X"><img src="/reference/x.gif" alt="" /></a>
            <a href="https://www.facebook.com/CHIBAWAN1" aria-label="Facebook"><img src="/reference/facebook.gif" alt="" /></a>
          </div>
          <form className="search" role="search" method="get" action={SOURCE}>
            <label className="sr-only" htmlFor="site-search">サイト内検索</label>
            <input id="site-search" name="s" type="search" />
            <button type="submit">検索</button>
          </form>
        </div>
      </header>

      <nav className="primary-nav" aria-label="メインナビゲーション">
        <ul>
          {navItems.map(([label, href, kind]) => (
            <li key={label} className={kind}><a href={href}>{label}</a></li>
          ))}
        </ul>
      </nav>

      <div className="important-note">
        <span>ちばわんは「不妊・去勢手術こそが、動物愛護の第一歩である」と考えます。</span>
        <a href={`${SOURCE}/about/about_shujutu`}>⇒詳しく見る</a>
      </div>

      <div className="breadcrumb"><a href={SOURCE}>HOME</a><span> &gt; No4000 キラ</span></div>

      <main className="page-shell" id="main-content">
        <aside className="sidebar">
          <img className="menu-title" src="/reference/menu-title.gif" alt="menu" width="200" height="38" />
          <nav className="side-nav" aria-label="いぬ親さん募集メニュー">
            <ul>{sideLinks.map(([label, href], index) => <li key={label} className={index === 8 ? "current" : ""}><a href={href}>{label}</a></li>)}</ul>
          </nav>
          <div className="banner-stack">
            {banners.map(([image, alt, href]) => <a key={image} href={href}><img src={`/reference/${image}`} alt={alt} /></a>)}
          </div>
          <section className="donation">
            <a href={`${SOURCE}/about/about_support`}><img src="/reference/donate-title.gif" alt="寄付・物資援助のお願い" /></a>
            <h3>銀行振込</h3>
            <p>■ゆうちょ銀行<br />店番 019（ゼロイチキュウ）<br />当座 0156664<br />ちばわん</p>
            <p>■みずほ銀行<br />東京中央支店（110）<br />普通預金 5591921<br />千葉ワン 担当 小林 美樹</p>
            <h3>郵便振替</h3>
            <p>00170-1-156664<br />ちばわん</p>
          </section>
          <div className="banner-stack">
            {smallBanners.map(([image, alt, href]) => <a key={image} href={href}><img src={`/reference/${image}`} alt={alt} /></a>)}
          </div>
          <p className="reprint">＜無断転載禁止＞</p>
        </aside>

        <article className="profile-card">
          <p className="graduation-number">【卒業番号：No.1825】</p>
          <div className="tags"><a href={`${SOURCE}/graduation/d001_graduationcat_dog/`}>幸せをつかんだいぬ</a><a href={`${SOURCE}/graduation/d003_graduationcat_dogfemale/`}>成犬メス</a></div>
          <h1>No4000 キラ</h1>

          <div className="profile-summary">
            <a className="hero-photo" href="#photo-1"><img src="/reference/nina0001.jpeg" alt="キラ" /></a>
            <div className="details-wrap">
              <table className="details">
                <tbody>
                  <tr><th scope="row">犬種</th><td>MIX</td></tr>
                  <tr><th scope="row">性別</th><td>メス（不妊手術済）</td></tr>
                  <tr><th scope="row">年齢</th><td>推定1歳</td></tr>
                  <tr><th scope="row">家族になった日</th><td>2020年1月3日</td></tr>
                  <tr><th scope="row">おうち</th><td>千葉県佐倉市</td></tr>
                  <tr><th scope="row">幸せ配達人</th><td>佐藤ファミリー</td></tr>
                  <tr><th scope="row">預かり人</th><td>佐藤敦子</td></tr>
                  <tr><th scope="row">ブログ</th><td><a href="https://kabochan.blog.jp/">かぼすちゃんとおさんぽ。</a></td></tr>
                  <tr><th scope="row">飼い主</th><td><a href="https://kabochan.blog.jp/">佐藤敦子</a></td></tr>
                </tbody>
              </table>
              <p className="published">公開日：<time dateTime="2019-12-14">2019/12/14</time>　最終更新日：2020/2/9</p>
            </div>
          </div>

          <section className="photo-section" aria-labelledby="photo-heading">
            <h2 id="photo-heading"><img src="/reference/photo-title.jpg" alt="Photo" width="60" height="16" /></h2>
            <div className="photo-grid">
              {photos.map((photo) => <a key={photo.id} href={`#${photo.id}`}><img src={photo.src} alt={photo.alt} /></a>)}
            </div>
          </section>
        </article>
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          {footerGroups.map((group) => (
            <section key={group.title}>
              <h2><img src={`/reference/${group.icon}`} alt="" />{group.title}</h2>
              <ul>{group.links.map((label) => <li key={label}><a href={SOURCE}>{label}</a></li>)}</ul>
            </section>
          ))}
        </div>
        <p className="copyright">© CHIBAWAN　<a href={`${SOURCE}/privacypolicy`}>プライバシーポリシー</a></p>
      </footer>

      <a className="to-top" href="#top" aria-label="ページトップへ">↑</a>

      {photos.map((photo) => (
        <div className="lightbox" id={photo.id} key={photo.id}>
          <a className="lightbox-backdrop" href="#photo-heading" aria-label="写真を閉じる" />
          <figure><img src={photo.src} alt={photo.alt} /><a className="close" href="#photo-heading">閉じる ×</a></figure>
        </div>
      ))}
    </>
  );
}
