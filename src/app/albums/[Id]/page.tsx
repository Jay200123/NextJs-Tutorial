export default function ({
  params,
}: {
  params: {
    Id: string;
  };
}) {
  return (
    <>
      <h3>This is Albums Details page with ID {params?.Id} !</h3>
    </>
  );
}
