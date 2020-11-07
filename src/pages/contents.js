import React from "react"
import { Link, graphql } from "gatsby"
import Image from "../components/image";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { faBars } from "@fortawesome/free-regular-svg-icons";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle} className="nohero">
      <SEO title="All posts" />


<article class="post">
<div class="container">

	<div class="bread">
		<ol>
			<li><a href="index.html">トップ</a></li>
			<li><a href="#">記事一覧</a></li>
		</ol>
	</div>

	<h1>ライフログのはじめ方</h1>

	<img src="img/life.jpg" alt=""/>

	<p>日常の生活を記録し、データとして残していく「ライフログ」。ブログで日記を書くことや、毎日食べたものを写真に撮って残していくといったことも、ライフログの１つです。記録をサポートしてくれるオンラインサービスやアプリもたくさんあります。</p>

	<p>手動で記録するのは面倒で…という場合も心配ありません。スマーフォトンやウェアラブルデバイスを利用すると、位置情報や睡眠時間などは自動的に記録することができます。体重計などの測定機器もクラウド化が進んでいますので、さまざまなデータが自動的に記録され、簡単に管理できる時代になっているのです。</p>

</div>
</article>

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
