import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-12-11&sortBy=publishedAt&apiKey=e28faea75f994e7080a2cc75afab6923"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.articles);
        setData(data?.articles);
      });
  }, []);

  return (
    <div className="row gap-4 p-3">
      {data?.map((data, idx) => (
        <div className="card" style={{ width: "30rem" }} key={idx}>
          <img
            src={data?.urlToImage}
            className="card-img-top"
            alt="imgSource"
            style={{ width: "100%", height: "300px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{data?.title}</h5>
            <p className="card-text">{data?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
