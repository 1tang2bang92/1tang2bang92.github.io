import react from "react";

export const handlePage = () => {
  const [page, setPage] = react.useState(1);
  
  const handleChange = (e: react.ChangeEvent<unknown>, p: number) => {
    setPage(p);
  }

  return { page, handleChange }
}