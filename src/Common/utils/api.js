export const handleResponse = async (response) => {
  if (response.data) return response.data.People;
  throw new Error("Network error");
};

export const handleError = (error) => {
  console.error("Request error" + error);
  throw error;
};
