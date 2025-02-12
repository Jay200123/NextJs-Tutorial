export default function RatingDetails({
  params,
}: {
  params: {
    Id: string;
    ratingId: string;
  };
}) {
  return (
    <div>
      <h1>
        Rating {params.ratingId} for product {params.Id}
      </h1>
    </div>
  );
}
