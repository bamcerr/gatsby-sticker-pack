import React from "react"
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { Link, PageProps, graphql } from "gatsby";

export default function IndexPage({data}:PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Welcome to DevStickers">
      <div className="grid">
        {data.allContentfulStickerPack.nodes.map((sticker) => {
          console.log(sticker.preview?.gatsbyImageData!)
          const image = sticker.preview?.gatsbyImageData!
          console.log(image)
          return (
            <article key={sticker.id}>
              <GatsbyImage         
                image={image!}
                alt={sticker.name!}
              />
              <Link to={`/products/${sticker.id}`}>
                <h2>{sticker.name}</h2>
                <h4>${sticker.price}</h4>
              </Link>
            </article>
        )})}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;