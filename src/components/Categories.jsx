import { useEffect, useState } from "react";
import categoryData from "../Api/categories.json";
import Category from "./ui/Category";
import Title from "./ui/Title";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <div className="bg-white py-4 ">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
        <div className="grid grid-cols-10">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
