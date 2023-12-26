

//Parallel Asynchronous Operations



function fetchData1() {
    return new Promise(resolve => {
      setTimeout(() => resolve("Data from source 1"), 2000);
    });
  }
  

  function fetchData2() {
    return new Promise(resolve => {
      setTimeout(() => resolve("Data from source 2"), 1500);
    });
  }
  

  async function fetchParallelData() {
    try {
      const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
      console.log("Data 1:", data1);
      console.log("Data 2:", data2);
    } catch (error) {
      console.error(error);
    }
  }

  
  fetchParallelData();
  