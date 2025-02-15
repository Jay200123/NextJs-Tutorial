"use client";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
  const handleBack = () => {
    router.replace("/");
  };
  return (
    <>
      <h3>This is Albums page!</h3>
      <button onClick={handleBack}>Go Back</button>
    </>
  );
}
