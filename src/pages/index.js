import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "VICSR",
    url: "#",
    description:
      "An AI powered Anki-inspired flashcard webapp developed using Angular",
  },
  {
    text: "Treading",
    url: "https://thewhethermen.bandcamp.com/album/treading",
    description: "DIY album recorded in 2022 by The Whethermen. I played bass.",
  },
  {
    text: "Blog",
    url: "blog",
    description: "I write about technology, music, books I have read, etc.",
  },
  {
    text: "My awesome friends",
    url: "#",
    description: "Follow this link to check out my friend’s work.",
  },
]

const moreLinks = [
  { text: "Linkdin", url: "https://www.linkedin.com/in/brimcc/" },
  {
    text: "Github",
    url: "https://github.com/bee-mcc",
  },
  { text: "Resume", url: "#" },

  { text: "Issues with site?", url: "#" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/chicken.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Bri's</b> web page
      </h1>
      <h2 className={styles.intro}>
        I'm a <code>digital alchemist</code> who can transmute your ideas to
        experiences
      </h2>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
