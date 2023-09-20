import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Shared/Container/Container";

const CategoryMenu = () => {
  const categories = [
    { id: 1, name: "Software Engineer", route: "/" },
    { id: 2, name: "UI/UX Designer", route: "/" },
    { id: 3, name: "Project Manager", route: "/" },
    { id: 4, name: "Graphic Designer", route: "/" },
    { id: 5, name: "Data Analytic", route: "/" },
  ];

  return (
    <div className="pt-[80px] bg-green-200">
      <Container>
        <ul className="hidden md:flex justify-start items-center gap-10 font-semibold">
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={category.route}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default CategoryMenu;
