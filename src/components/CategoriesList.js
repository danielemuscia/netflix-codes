import React, { useState } from "react";
import { categories } from "../data";

export default function CategoriesList() {
  const [viewMore, setviewMore] = useState(false)

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
          {category.sub.slice(0,5).map((sub) => (
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
          {viewMore===category.main.id && category.sub.slice(5).map((sub) => (
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
          {category.sub.length > 5 && <p id={`viewMore${category.main}`} className='viewMore' onClick={() => setviewMore(category.main.id)}>{category.main.id === viewMore? "" : "View More..."}</p>}
        </div>
      ))}
    </div>
  );
}
