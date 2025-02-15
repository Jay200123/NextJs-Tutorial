"use client";
import { useRouter } from "next/navigation";

export default function Products() {
  const router = useRouter();

  const handleBack = () => {
    router.replace("/");
  };
  return (
    <>
      <h1>Products Main Page</h1>
      <button onClick={handleBack}>Go Back</button>
    </>
  );
}
