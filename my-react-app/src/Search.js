import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import axios from "axios";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
        const apiKey = "AIzaSyDqXoJNgOQ6alqHLxT0zf3SZ2QAQAseJGY";
        const cx = "754603afa9f2240ce";
        const customSearchURL = `https://www.googleapis.com/customsearch/v1?q=${searchQuery}&cx=${cx}&key=${apiKey}&num=5`;
  
        const response = await axios.get(customSearchURL);
        const resultLinks = response.data.items.map((item) => item.link);
  
        const scrapingBeeApiKey = "A6JYFITQARHULW7FH75Y4ZC0Z7VXC7DYD36TL4U0K9Q04EGIJ1DO0GBMORUGV86CWSVQW6YUG8CSB25B";
        const scrapingBeeURL = "https://app.scrapingbee.com/api/v1/";
  
        const scrapedData = await Promise.all(
          resultLinks.map(async (url) => {
            const response = await axios.get(scrapingBeeURL, {
              params: {
                api_key: scrapingBeeApiKey,
                url,
                render_js: false,
              },
            });
            return response.data.text;
          })
        );
  
        setSearchResults(scrapedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <TextField
        label="Enter your search query"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>

      <div>
        {searchResults.map((text, index) => (
          <Typography key={index} variant="body1" component="p">
            {text}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default Search;
