import React from "react"
import { Link, graphql } from "gatsby"
import Image from "../components/image";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { faChartBar, faChevronRight, faCogs, faRocket } from "@fortawesome/free-solid-svg-icons";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle} className="">
      <SEO title="All posts" />

<section className="conA">
<div className="container">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><style>{".a{fill:none;stroke:#fff;stroke-width:6.59px;}"}</style></defs><title>logo-color</title><rect class="a" x="18.44" y="18.28" width="64.05" height="64.05" transform="translate(-21.09 49.72) rotate(-45)"/><line class="a" x1="48.86" y1="6.58" x2="48.86" y2="70.62"/><line class="a" x1="28.5" y1="26.64" x2="28.5" y2="70.06"/><line class="a" x1="29.87" y1="49.6" x2="92.14" y2="49.6"/><line class="a" x1="25.2" y1="70.62" x2="73.92" y2="70.62"/></svg>
	<h1>LOGGER</h1>
	<p>美味しく楽しくライフログ</p>
	<Link to="/">ライフログを始める</Link>
</div>
</section>


<section className="conB">
<div className="container">
	<div className="text">
    <FontAwesomeIcon icon={faChartBar} className="icon" />
		<h2>ライフログって何？</h2>
		<p>日常のあれこれを記録していくライフログ。いろいろなものが見えてきます。</p>
		<Link to="/">MORE... 
    <FontAwesomeIcon icon={faChevronRight} />
		</Link>
	</div>

	<div className="text">
    <FontAwesomeIcon icon={faCogs} className="icon" />
		<h2>必要なのはスマホだけ</h2>
		<p>ライフログを始めるのに必要なのはスマホだけ。いつでもスタートできます。</p>
		<Link to="/">MORE... 
    <FontAwesomeIcon icon={faChevronRight} />
		</Link>
	</div>

	<div className="text">
    <FontAwesomeIcon icon={faRocket} className="icon" />
		<h2>SNSとの連携も簡単</h2>
		<p>TwitterやFacebookといったSNSと連携して、簡単にログを共有することができます。</p>
		<Link to="/">MORE... 
    <FontAwesomeIcon icon={faChevronRight} />
		</Link>
	</div>
</div>
</section>


<section className="conC">
<div className="container">
	<div className="photo"></div>
	<div className="text">
		<h2>面倒な設定やデータの管理は全部おまかせ</h2>
		<p>ライフログでつまずきがちな面倒な設定やデータ管理の煩わしさはありません。他のログアプリとの連携もワンクリックで完了です。</p>
		<Link to="/">詳しい設定方法を確認する
		<FontAwesomeIcon icon={faChevronRight} />
		</Link>
	</div>
</div>
</section>


<section className="conD">
<div className="container">
	<div className="photo"></div>
	<div className="text">
		<h2>ライフログで毎日の日常生活をもっと楽しむ</h2>
		<p>ふと気が付くと蓄積しているライフログ。ログを見返すといろいろなことが見えてきて、なんてことのない日常も楽しくなってきます。</p>
		<Link to="/">たとえばこんな楽しみ方が…
		<FontAwesomeIcon icon={faChevronRight} />
		</Link>
	</div>
</div>
</section>

    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
