import { PageProps, graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


export default function PorductDetail({data}:PageProps<Queries.ProductQuery>) {
  const image = getImage(data.contentfulStickerPack?.preview!);
  return <Layout title={data.contentfulStickerPack?.name!}>
    <GatsbyImage image={image!} alt={data.contentfulStickerPack?.name!} />
    <h2>{data.contentfulStickerPack?.price}</h2>
  </Layout>
}

export const query = graphql`
  query Product($id: String) {
    contentfulStickerPack(id: {eq: $id}) {
      price
      name
      preview {
        gatsbyImageData(height: 250, placeholder: BLURRED)
      }
    }
  }
`;