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
        const res = JSON.parse(resData._bodyInit);
        if (res.success) {
          resolve(res);
        } else {
          resolve(res.message);
        }
      })
      .catch(() => {
        reject("error");
      });
  });
}

export default Fetch;
