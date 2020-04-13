function Fetch(url = String, method = String, req = Object, token) {
  const headers = new Headers();
  headers.append("Authorization", "Bearer " + token);

  return new Promise(async (resolve, reject) => {
    await fetch(url, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(req),
    })
      .then((resData) => {
        resolve(resData);
      })
      .catch(() => {
        reject("error");
      });
  });
}

export default Fetch;
