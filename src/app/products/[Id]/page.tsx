import { Metadata } from "next";

type Props = {
  params: {
    Id: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params?.Id}`,
    description: `Product Details`,
  };
};

export default function ProductDetails({ params }: Props) {
  return (
    <>
      <h3>Product Details with {params?.Id}</h3>
    </>
  );
}
