function Fetch(url = String, method = String, req, token) {
  const bearer = `Bearer ${token}`;
  const option = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: bearer,
    },
    body: JSON.stringify(req),
  };

  if (method == "GET") delete option.body;

  return new Promise(async (resolve, reject) => {
    await fetch(url, option)
      .then((resData) => {
        resolve(resData);
      })
      .catch(() => {
        reject("fetch 에러");
      });
  });
}

export default Fetch;
