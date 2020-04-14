function Fetch(url = String, method = String, req = Object, token) {
  const bearer = `Bearer ${token}`;

  return new Promise(async (resolve, reject) => {
    await fetch(url, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: bearer,
      },
      body: JSON.stringify(req),
    })
      .then((resData) => {
        resolve(resData);
      })
      .catch(() => {
        reject("fetch 에러");
      });
  });
}

export default Fetch;
