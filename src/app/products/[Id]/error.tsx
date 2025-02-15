"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return 
    <>
      <h3>Error: {error.message}</h3>
    </>
}
