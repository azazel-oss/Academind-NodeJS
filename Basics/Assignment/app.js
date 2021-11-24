const fs = require("fs");
const http = require("http");

const users = ["User1", "User2", "User3", "User4", "User5", "User6", "User7"];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html><body>Welcome</br>");
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>'
    );
    res.write("</body></html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => body.push(chunk));
    req.on("end", () => {
      const parsedData = Buffer.concat(body).toString();
      console.log(parsedData);
    });
  }

  if (url === "/users") {
    let listString = "";
    users.forEach((element) => {
      listString += `<li>${element}</li>`;
    });
    res.write("<html><body><ul>" + listString + "</ul></body></html>");
    return res.end();
  }
});

server.listen(3000);
