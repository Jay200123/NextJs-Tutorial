export default function BlogDetails({
  params,
}: {
  params: {
    Id: string;
  };
}) {
  return (
    <div>
      <h1>Blog Details {params.Id}</h1>
    </div>
  );
}
