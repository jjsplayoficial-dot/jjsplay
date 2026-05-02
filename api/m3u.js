export default async function handler(req, res) {
  const { user, pass } = req.query;

  const url = `http://tzprosata.fun:8080/get.php?username=${user}&password=${pass}&type=m3u_plus&output=ts`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const data = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(data);

  } catch (error) {
    res.status(500).send("Erro ao acessar servidor IPTV");
  }
}
