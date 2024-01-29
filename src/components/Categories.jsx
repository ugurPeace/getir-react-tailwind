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
        <div className="grid md:grid-cols-6  grid-cols-4 lg:grid-cols-8   xl:grid-cols-10  2xl:grid-cols-12">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
