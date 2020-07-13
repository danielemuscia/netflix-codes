import React from "react";
import { categories } from "../data";

export default function CategoriesList() {
  return (
    <div className="categoriesList">
      {categories.map((category) => (
        <div className="categoriesList__category">
          <h3 id={category.main.id}>
            <a
              href={`https://netflix.com/browse/genre/${category.main.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {category.main.title}
              <span> #{category.main.id}</span>
            </a>
          </h3>
          {category.sub.map((sub) => (
            <p>
              <a
                href={`https://netflix.com/browse/genre/${sub.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sub.title} <span>#{sub.id}</span>
              </a>
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
