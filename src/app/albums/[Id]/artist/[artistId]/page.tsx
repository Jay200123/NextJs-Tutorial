export default function ({
  params,
}: {
  params: {
    Id: string;
    artistId: string;
  };
}) {
  return (
    <>
      <h3>
        Album with ID {params?.Id} with Artist ID {params?.artistId}
      </h3>
    </>
  );
}
