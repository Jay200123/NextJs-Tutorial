export default function ({
  params,
}: {
  params: {
    Id: string;
    commentId: string;
  };
}) {
  return (
    <>
      <h1>
        Blog with {params?.Id} with comment Id {params.commentId}
      </h1>
    </>
  );
}
