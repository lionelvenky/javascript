

// Async/Await with Promises


function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = { message: "Data fetched successfully" };
        resolve(data);
      }, 2000);
    });
  }
  

  async function fetchDataAsync() {
    try {
      let result = await fetchData();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  

  fetchDataAsync();
  