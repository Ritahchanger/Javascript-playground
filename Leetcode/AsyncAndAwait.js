async function fetchData() {
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve("Data fetched"), 2000)
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
  