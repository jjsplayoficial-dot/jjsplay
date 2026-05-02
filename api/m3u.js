export default async function handler(req, res) {
  const { user, pass } = req.query;

  if (!user || !pass) {
    return res.status(400).send("Faltando usuário ou senha");
  }

  const url = `http://tzprosata.fun:8080/get.php?username=${user}&password=${pass}&type=m3u_plus`;

  try {
    const r = await fetch(url);
    const text = await r.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.status(200).send(text);
  } catch (e) {
    res.status(500).send("Erro ao buscar lista");
  }
}
