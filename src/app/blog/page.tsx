import { tr } from "framer-motion/client";

export default function BlogPage() {
  const boolValue = true;

  const isError = boolValue ? true : false; 

  if(isError) {
    throw new Error("An error occurred"); 
  }
  
  return (
    <>
      <h1>Main Blog Page</h1>
    </>
  );
}
