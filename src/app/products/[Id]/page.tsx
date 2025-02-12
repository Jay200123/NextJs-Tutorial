export default function ProductDetails({
  params,
}: {
  params: {
    Id: string;
  };
}) {
  return (
    <>
      <h3>Product Details with {params?.Id}</h3>
    </>
  );
}
