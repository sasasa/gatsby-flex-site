import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle} className="nohero">
      <SEO title="All posts" />


<article className="post">
<div className="container">

	<h1>お問い合わせ</h1>

	<p>ROGGERについてのご質問などがございましたら、下記の窓口よりお問い合わせください。</p>

	<div className="contact-wrap">
		<div className="contact">
      <span><FontAwesomeIcon icon={faPhone} /></span>
			<h2>電話</h2>
			<a href="tel:00012345678">000-1234-5678</a>
		</div>

		<div className="contact">
      <span><FontAwesomeIcon icon={faEnvelope} /></span>
			<h2>Eメール</h2>
			<a href="mailto:contact@logger.nett">contact@logger.nett</a>
		</div>
	</div>

</div>
</article>


<aside className="location">
<h2>LOCATION</h2>
<iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.656784611315!2d139.80851171536258!3d35.710062680187605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed0d12f9adf%3A0x7d1d4fb31f43f72a!2z5p2x5Lqs44K544Kr44Kk44OE44Oq44O8!5e0!3m2!1sja!2sjp!4v1465699039448" width="600" height="450" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>
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
