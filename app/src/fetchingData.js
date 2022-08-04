import fetch from "node-fetch";
import {} from "dotenv/config";

const data = async() => {
  const TOKEN = process.env.TOKEN;
  const response = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  })
  const data = response.json()
  return data
};
export default data