import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>TTFS2Y | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A modded minecraft server based on the TTFS2Y Modpack."
        />

        <meta itemprop="name" content="TTFS2Y Server" />
        <meta
          itemprop="description"
          content="A modded minecraft server based on the TTFS2Y Modpack."
        />
        <meta
          itemprop="image"
          content="http://cdn.discordapp.com/attachments/538464909055229972/1008002191681933394/TTFS2Y_banner.png"
        />

        <meta property="og:url" content="https://ttfs2y.sthlmpreclarus.se" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TTFS2Y Server" />
        <meta
          property="og:description"
          content="A modded minecraft server based on the TTFS2Y Modpack."
        />
        <meta
          property="og:image"
          content="http://cdn.discordapp.com/attachments/538464909055229972/1008002191681933394/TTFS2Y_banner.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TTFS2Y Server" />
        <meta
          name="twitter:description"
          content="A modded minecraft server based on the TTFS2Y Modpack."
        />
        <meta
          name="twitter:image"
          content="http://cdn.discordapp.com/attachments/538464909055229972/1008002191681933394/TTFS2Y_banner.png"
        />
      </Head>

      <body>
        <main>
          <video className="landing" autoPlay muted loop>
            <source src="TTFS2Y_trailer_WEB.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </main>
        <footer>
          <a>website by &#169;STHLM Preclarus</a>
        </footer>
      </body>
      <style jsx>{`
        body {
          overflow: hidden;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .landing {
          position: absolute;
          width: 120vw;
          height: 120vh;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .purple {
          color: #5c37bc;
          text-decoration: none;
        }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 90%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          box-shadow: 3px 3px 5px 0.1 black;
          border-radius: 5px;
          transition: color 0.1s ease, border-color 0.1s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #5c37bc;
          border-color: #5c37bc;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
          }
          .grid {
            width: 100%;
            flex-direction: column;
          }
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 3rem;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
