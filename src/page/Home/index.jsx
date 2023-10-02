import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card"; 
import Button from "../../components/Button";

export default function Home() {
  const [newsData, setNewsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async (category) => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${
            !category ? "business" : category
          }&apiKey=970c170f07e04db587231fc5e91930ee`
        );

        setNewsData(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(selectedCategory);
  }, [selectedCategory]);

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };
  const handleDetail = () => {
    navigate("/details");
  };
  return (
    <>
      {" "}
      <p className="bg-gray-900 font-bold text-5xl text-white flex justify-center">Nabiel News</p>
      <div className="w-screen h-40 bg-gray-900 flex justify-center items-center">
        <div className="w-52 h-auto flex my-8 mr-48">
          <button
            className={`bg-blue-500 py-3 px-5 rounded-md text-white mx-5 ${
              selectedCategory === "business" ? "font-bold" : ""
            }`}
            onClick={() => handleCategory("business")}
          >
            Business
          </button>
          <button
            className={`bg-blue-500 py-3 px-5 rounded-md text-white ${
              selectedCategory === "health" ? "font-bold" : ""
            }`}
            onClick={() => handleCategory("health")}
          >
            Health
          </button>
          <button
            className={`bg-blue-500 py-3 px-5 rounded-md text-white mx-5 ${
              selectedCategory === "politics" ? "font-bold" : ""
            }`}
            onClick={() => handleCategory("politics")}
          >
            Politics
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-5">
        {newsData.map((article, index) => (
          <Card
            id={article.id}
            title={article.title}
            date={article.publishedAt}
            source={article.source.name}
            image={article.urlToImage}
          />
        ))}
        <Button onClick={()=>handleDetail()}></Button>
      </div>
    </>
  );
}
