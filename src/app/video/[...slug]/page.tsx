export default function ({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  return (
    <>
      <h1>
        {params?.slug?.length === 2 ? (
          <p>
            Video with Comment{params?.slug[0]} and User {params?.slug[1]}
          </p>
        ) : params?.slug?.length === 1 ? (
          <p>Video with Comment {params?.slug[0]}</p>
        ) : (
          <p>Video Page</p>
        )}
      </h1>
    </>
  );
}
