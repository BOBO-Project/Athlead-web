export const baseURL = process.env.BASE_URL;

export const addPartner = () => {
  return (dispact, getState) => {
    fetch(`${baseURL}/partners`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
};
