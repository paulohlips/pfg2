import express from "express";
import gplay from "google-play-scraper";
import ApkReader from "node-apk-parser";

const server = express();

server.use(express.json());

//Vetores para agrupar as permissões por tipo
var location = [];
var microphone = [];
var calendar = [];
var camera = [];
var phone = [];
var contacts = [];
var storage = [];
var sensors = [];
var sms = [];
var call_log = [];
var outros = [];
var network = [];
var activity_recognition = [];

//Vetor com todas as permissões
var permName = [];
//string com todos os grupos
var grupos = [];

//funçao responsável por classificar as permissões
function classificar(itens) {
  itens.forEach(item => {
    if (
      item == "ACCESS_COARSE_LOCATION" ||
      item == "ACCESS_COARSE_LOCATION" ||
      item == "ACCESS_LOCATION_EXTRA_COMMANDS"
    ) {
      location.push(item);
      console.log(item);
    } else if (item == "CAMERA") {
      camera.push(item);
    } else if (item == "RECORD_AUDIO") {
      microphone.push(item);
    } else if (item == "READ_CALENDAR" || item == "WRITE_CALENDAR") {
      calendar.push(item);
    } else if (
      item == "READ_EXTERNAL_STORAGE" ||
      item == "WRITE_EXTERNAL_STORAGE" ||
      item == "ACCESS_MEDIA_LOCATION" ||
      item == "WRITE_OBB"
    ) {
      storage.push(item);
    } else if (item == "READ_CONTACTS" || item == "WRITE_CONTACTS") {
      contacts.push(item);
    } else if (
      item == "ACCESS_UCE_PRESENCE_SERVICE" ||
      item == "ACCESS_UCE_OPTIONS_SERVICE" ||
      item == "READ_PHONE_STATE" ||
      item == "READ_PHONE_NUMBERS" ||
      item == "CALL_PHONE" ||
      item == "ADD_VOICEMAIL" ||
      item == "USE_SIP" ||
      item == "ANSWER_PHONE_CALLS" ||
      item == "MANAGE_OWN_CALLS" ||
      item == "CALL_COMPANION_APP" ||
      item == "ACCEPT_HANDOVER"
    ) {
      phone.push(item);
    } else if (
      item == "BODY_SENSORS" ||
      item == "USE_FINGERPRINT" ||
      item == "USE_BIOMETRIC"
    ) {
      sensors.push(item);
    } else if (
      item == "READ_SMS" ||
      item == "RECEIVE_SMS" ||
      item == "SEND_SMS" ||
      item == "RECEIVE_WAP_PUSH" ||
      item == "RECEIVE_MMS" ||
      item == "BIND_CELL_BROADCAST_SERVICE" ||
      item == "READ_CELL_BROADCASTS" ||
      item == "SMS_FINANCIAL_TRANSACTIONS"
    ) {
      sms.push(item);
    } else if (
      item == "READ_CALL_LOG" ||
      item == "WRITE_CALL_LOG" ||
      item == "PROCESS_OUTGOING_CALLS"
    ) {
      call_log.push(item);
    } else if (
      item == "INTERNET" ||
      item == "ACCESS_NETWORK_STATE" ||
      item == "ACCESS_WIFI_STATE" ||
      item == "CHANGE_WIFI_STATE" ||
      item == "BLUETOOTH" ||
      item == "SUSPEND_APPS" ||
      item == "BLUETOOTH_ADMIN" ||
      item == "BLUETOOTH_PRIVILEGED" ||
      item == "BLUETOOTH_MAP" ||
      item == "BLUETOOTH_STACK" ||
      item == "NFC" ||
      item == "NFC_TRANSACTION_EVENT"
    ) {
      network.push(item);
    } else if (item == "ACTIVITY_RECOGNITION") {
      activity_recognition.push(item);
    } else outros.push(item);
  });
  console.log("location", location);
  console.log("camera", camera);
  grupos = JSON.stringify([
    location,
    camera,
    microphone,
    calendar,
    phone,
    contacts,
    storage,
    sensors,
    sms,
    call_log,
    outros
  ]);
}

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
  const permissoes = manifest.usesPermissions;

  permissoes.forEach(perm => {
    const perm2 = Object.values(perm);

    var stringExemplo = perm2[0];
    var resultado = stringExemplo.split(".");
    var last = resultado.pop();
    permName.push(last);
  });

  classificar(permName);

  return res.status(200).json({ permissions: { permissoes, grupos } });
});

server.listen(3001);
