import { notFound } from "next/navigation";

export default function BlogDetails({
  params,
}: {
  params: {
    Id: string;
  };
}) {
  if (parseInt(params.Id) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>Blog Details {params.Id}</h1>
    </div>
  );
}
