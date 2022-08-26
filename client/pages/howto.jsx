import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

export default function howto() {
  const [reveal, setReveal] = useState(true);
  const toast = useToast();
  function copyAlert() {
    navigator.clipboard.writeText("145.14.103.144");
    toast({
      title: "Copied to clipboard!",
      status: "success",
      duration: 1000,
      isClosable: false,
    });
  }
  return (
    <div className="container">
      <Head>
        <title>TTFS2Y | Last step</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">How to join the server</h1>
        <p className="undertitle">
          Let's goo! You're eligble to join, welcome! <br /> Follow the steps
          below to start playing.
        </p>

        <div className="list">
          <ul>
            <li>
              <li>
                <h2>Step (0) - Check out the official youtube channel</h2>
                <p>
                  We have a lot of tutorials and more to come on the YouTube
                  channel. Check it out to learn more about joining, playing and
                  etc.
                </p>
                <p>
                  <a
                    href="https://www.youtube.com/channel/UCWuLVCaE9YWpF6fYbRTfY6Q"
                    target="_blank"
                    className="underline"
                  >
                    Link to YouTube Channel
                  </a>
                </p>
              </li>
              <h2>Step 1 - Download the modpack</h2>
              <p>
                1 - Download curseforge by clicking{" "}
                <a
                  href="https://download.curseforge.com/"
                  target="_blank"
                  className="underline"
                >
                  here
                </a>
                , and pressing the download button.
              </p>
              <Image
                alt="Curseforge download button"
                src="/curseforge.png"
                width={675}
                height={350}
              />
              <p>
                2 - Open the downloaded file by pressing it. Curseforge should
                now be downloaded.
              </p>
              <p>
                3 - Go to{" "}
                <a
                  href="https://www.curseforge.com/minecraft/modpacks/ttfs2y"
                  target="_blank"
                  className="underline"
                >
                  this
                </a>{" "}
                page and click install.
              </p>
              <Image
                alt="Modpack installation"
                src="/modsite.png"
                width={675}
                height={350}
              />
              <p>A window will pop up. Press "Yes, open Curseforge app"</p>
              <Image
                alt="Open curse forge window"
                src="/openforge.png"
                width={675}
                height={350}
              />
              <p>
                The mod should now pop up in your Curseforge app. It should look
                something like this.
              </p>
              <Image
                alt="Open curse forge window"
                src="/modview.png"
                width={675}
                height={350}
              />
            </li>
            <li>
              <h2>Step 2 - Join the Discord server</h2>
              <p>
                To play on the minecraft server you need to be in the discord
                server.
              </p>
              <p>
                <a
                  href="https://discord.gg/X4Q92J3AFS"
                  target="_blank"
                  className="underline"
                >
                  Link to discord server
                </a>
              </p>
            </li>
            <li>
              <h2>Step 3 - Join the MC server and get whitelist</h2>
              <p>
                IP:{" "}
                <code onClick={copyAlert}>
                  145.14.103.144{" "}
                  <Image
                    width="14px"
                    height="14px"
                    src="/copy.png"
                    alt="copy icon"
                    color="white"
                  ></Image>
                </code>
              </p>
              <p>Add the server and connect</p>
              <Image
                alt="add the server"
                src="/addserver.png"
                width={675}
                height={350}
              />
              <p>An error will pop up. You need to be whitelisted to play</p>
              <Image
                alt="add the server"
                src="/getwhitelist.png"
                width={675}
                height={250}
              />
              <p>Follow the steps. The bot is in the top of the server.</p>
            </li>
            <li>
              <h2>Step 4 - Reconnect and play!</h2>
              <p>
                You're done! You should be able to reconnect and join like
                normal.
              </p>
            </li>
          </ul>
        </div>
      </main>

      <footer>
        <a>website by &#169;STHLM Preclarus</a>
      </footer>

      <style jsx>{`
        .container {
          background-color: #04000d;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .undertitle {
          color: white;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .list {
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 1rem;
        }

        .list h2 {
          color: white;
          margin-bottom: -10px;
        }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .underline {
          color: white;
          text-decoration: underline;
          cursor: pointer;
        }

        code {
          background: #160f27;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 0.8rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        code:hover {
          cursor: pointer;
        }

        a {
          color: white;
          text-decoration: none;
        }

        .title a {
          color: white;
          text-decoration: none;
        }

        .title {
          color: white;
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        @media (max-width: 600px) {
          .container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
          }
          .list {
            color: white;
            width: 100%;
            padding: 10px;
          }
          .list h2 {
            color: white;
            font-size: 1.4rem;
          }

          .title {
            color: white;
            margin: 0;
            line-height: 1.15;
            font-size: 3rem;
          }

          code {
            background: #160f27;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 0.8rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
