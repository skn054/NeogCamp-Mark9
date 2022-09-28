import "./styles.css";
import { useState } from "react";
const foodDB = {
  hyderabad: [
    { name: "Hyderabad Chicken Biryani", rating: "4.5/5" },
    { name: "Andhra Meals", rating: "4/5" },
    { name: "Lukmi", rating: "4.25/5" }
  ],

  Bangalore: [
    {
      name: "Mangalore Buns",
      rating: "4/5"
    },
    {
      name: "Dal Obbattu",
      rating: "4.5/5"
    },
    {
      name: "Uttapam",
      rating: "4/5"
    }
  ],
  Mumbai: [
    {
      name: "Vada pav",
      rating: "4.5/5"
    },
    {
      name: "Batata Vada",
      rating: "5/5"
    },
    {
      name: "Bhel Puri",
      rating: "4.25/5"
    }
  ]
};
export default function App() {
  var [foodItems, setFoodItems] = useState("hyderabad");
  function onClickHandler(city) {
    setFoodItems(city);
  }
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="foodemji">
          🍽️
        </span>{" "}
        Food Recommendation
      </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite food delicacies. Select a city to get started
      </p>
      <div>
        {Object.keys(foodDB).map((city) => {
          return (
            <button
              key={city}
              className="cities"
              onClick={() => onClickHandler(city)}
            >
              {city}
            </button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[foodItems].map((food) => {
            return (
              <li
                key={food.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div style={{ fontSize: "larger" }}>{food.name}</div>
                <div style={{ fontSize: "smaller" }}>{food.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
