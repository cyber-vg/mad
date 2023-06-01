

            
const trackart=document.querySelector(".track-art")
const fetchData = async () => {
  const url = 'https://theaudiodb.p.rapidapi.com/searchalbum.php?s=daft_punk';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6609acd4camsh59eb4d3cc91a5b7p13caecjsne61737c1d490',
      'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(response);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
