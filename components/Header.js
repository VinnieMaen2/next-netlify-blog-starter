import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav" role="navigation" aria-label="main navigation">
          <Link href="/">
            <a>Demo Blog</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="https://www.reddit.com/user/Foreign-Tailor3040" rel='me'>
            <a></a>
          </Link>
          <Link href="https://github.com/vinniemaen2" rel="me"><a></a></Link>

          <link rel='webmention' href='https://www.reddit.com/user/Foreign-Tailor3040/' />
        </nav>
      </header>
      <style jsx>{`
        header {
          width: 100%;
          height: 100px;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        nav {
          width: calc(100% - 40px);
          max-width: 1200px;
          font-weight: bold;
          font-size: 1.3rem;
        }
        nav a {
          margin-right: 20px;
          color: #00a395;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}
