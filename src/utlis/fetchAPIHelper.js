const fetchAPIHelper = async (url, method, payload = null) => {
  try {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };
    if (payload) {
      options.body = JSON.stringify(payload);
    }
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error(`Failed to ${method} data:`, response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export default fetchAPIHelper;
