import express from "express";
import gplay from "google-play-scraper";
import ApkReader from "node-apk-parser";

const server = express();

server.use(express.json());

server.get("/app:keyword", (req, res) => {
  const keyword = req.params.keyword;

  gplay
    .search({
      term: keyword,
      num: 6
    })
    .then(resolve => {
      return res.status(200).json({
        resultado: resolve
      });
    });
});

server.post("/permission", (req, res) => {
  const appid = Object.values(req.body);

  gplay.permissions({ appId: appid[0] }).then(resolve => {
    return res.status(200).json({
      resultado: resolve
    });
  });
});

server.post("/apk", (req, res) => {
  const path = Object.values(req.body);

  const reader = ApkReader.readFile(path[0]);
  const manifest = reader.readManifestSync();

  return res.status(200).json({ permissions: manifest.usesPermissions });
});

server.listen(3001);
