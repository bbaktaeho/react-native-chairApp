function Fetch(url = String, method = String, req = Object, token) {
  const option = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: bearer,
    },
    body: JSON.stringify(req),
  }
  const bearer = `Bearer ${token}`;
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
