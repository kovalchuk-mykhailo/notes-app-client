import React, { useEffect, useState } from "react";

const OneNew = ({ title = "default" }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};
const LatestNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchLatestNews = async () => {
      const latestNews = await fetch("https://example.com/last"); // Should be real server with correct data in response

      setNews(latestNews);
    };

    try {
      fetchLatestNews();
    } catch {
      console.log("Something went wrong");
    }
  }, []);

  return (
    <div>
      {news && news.map((item) => <OneNew key={item.id} title={item.title} />)}
    </div>
  );
};

export default LatestNews;
