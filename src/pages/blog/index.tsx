import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { Link, PageProps, graphql } from "gatsby";

export default function Blog({data}:PageProps<Queries.BlogQuery>) {
  return (
    <Layout title="Blog">
      <p>The most recent news from my shop.</p>
      <section className="grid">
        {data?.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>{file.frontmatter?.author} in: {file.frontmatter?.category}</h5>
              <h6>{file.frontmatter?.date}</h6>
              <p>{file.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Blog {
    allMdx {
      nodes {
        frontmatter {
          category
          date
          title
          author
          slug
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;