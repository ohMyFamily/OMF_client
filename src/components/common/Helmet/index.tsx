import { Helmet } from 'react-helmet-async';

export default function MetaHead() {
  return (
    <Helmet>
      <title>OMF | 효자인가, 효놈인가</title>
      <meta name="description" content="진짜 문제임. 10문 10답! 효자 테스트" />
      <link rel="icon" href="/favicon.png" />

      {/* Open Graph */}
      <meta property="og:title" content="효자인가, 효놈인가. 그것이 문제로다." />
      <meta property="og:description" content="Oh my family 진짜 문제임. 10문 10답!" />
      <meta property="og:image" content="/miri.png" />
      <meta property="og:url" content="https://www.oh-my-family.com" />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
