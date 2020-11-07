import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle} className="nohero">
      <SEO title="All posts" />


<article className="post">
<div className="container">

	<h1>LOGGERについて</h1>

	<p>LOGGERはライフログに関する情報の発信、アプリ開発、データの分析、ユーザーサポートを行うために設立された会社です。ライフログのサービスやデータを活用することで、日々の生活を楽しみ、よりよくしていくことを目指しています。</p>

	<p>近年はグローバルワールドネットワークとも提携し、国内のみならず、海外展開も含めて活動の場をひろげています。</p>

</div>
</article>

<aside className="history">
<div className="container">
	<div className="photo"></div>
	<div className="text">
		<h2>History</h2>
		<table>
		<tr>
			<th>2010年4月</th>
			<td>LOGGER設立</td>
		</tr>
		<tr>
			<th>2012年6月</th>
			<td>オンラインマガジン創刊</td>
		</tr>
		<tr>
			<th>2014年12月</th>
			<td>海外企業と提携してオンラインデータ共有事業をスタート</td>
		</tr>
		<tr>
			<th>2015年1月</th>
			<td>ライフログアプリをリリース</td>
		</tr>
		</table>
	</div>
</div>
</aside>

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
