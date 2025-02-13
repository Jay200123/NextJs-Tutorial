export default function ({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  return (
    <>
      <h3>
        {params?.slug?.length === 2 ? (
          <p>
            Viewing post for feature {params?.slug[0]} and post{" "}
            {params?.slug[1]}
          </p>
        ) : params?.slug?.length === 1 ? (
          <p>Viewing Docs for feature {params?.slug[0]}</p>
        ) : (
          <p>Viewing All Posts</p>
        )}
      </h3>
    </>
  );
}
