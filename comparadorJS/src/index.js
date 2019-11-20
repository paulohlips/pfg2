import express from "express";

const server = express();

//vetor estático com exemplo de permissões [só para teste]
var permissoes = [
  {
    name: "android.permission.READ_PHONE_STATE"
  },
  {
    name: "android.permission.RECEIVE_SMS"
  },
  {
    name: "android.permission.VIBRATE"
  },
  {
    name: "android.permission.USE_FINGERPRINT"
  },
  {
    name: "android.permission.USE_BIOMETRIC"
  },
  {
    name: "android.permission.ACCESS_COARSE_LOCATION"
  },
  {
    name: "android.permission.ACCESS_FINE_LOCATION"
  },
  {
    name: "android.permission.ACCESS_NETWORK_STATE"
  },
  {
    name: "android.permission.ACCESS_WIFI_STATE"
  },
  {
    name: "android.permission.AUTHENTICATE_ACCOUNTS"
  },
  {
    name: "android.permission.BLUETOOTH"
  },
  {
    name: "android.permission.BROADCAST_STICKY"
  },
  {
    name: "android.permission.CAMERA"
  },
  {
    name: "android.permission.CHANGE_NETWORK_STATE"
  },
  {
    name: "android.permission.CHANGE_WIFI_STATE"
  },
  {
    name: "android.permission.GET_ACCOUNTS"
  },
  {
    name: "android.permission.GET_TASKS"
  },
  {
    name: "android.permission.INSTALL_SHORTCUT"
  },
  {
    name: "android.permission.INTERNET"
  },
  {
    name: "android.permission.MANAGE_ACCOUNTS"
  },
  {
    name: "android.permission.MANAGE_OWN_CALLS"
  },
  {
    name: "android.permission.MODIFY_AUDIO_SETTINGS"
  },
  {
    name: "android.permission.NFC"
  },
  {
    name: "android.permission.READ_CONTACTS"
  },
  {
    name: "android.permission.READ_PROFILE"
  },
  {
    name: "android.permission.READ_SYNC_SETTINGS"
  },
  {
    name: "android.permission.READ_SYNC_STATS"
  },
  {
    name: "android.permission.RECEIVE_BOOT_COMPLETED"
  },
  {
    name: "android.permission.RECORD_AUDIO"
  },
  {
    name: "android.permission.SEND_SMS"
  },
  {
    name: "android.permission.USE_CREDENTIALS"
  },
  {
    name: "android.permission.WAKE_LOCK"
  },
  {
    name: "android.permission.WRITE_CONTACTS"
  },
  {
    name: "android.permission.WRITE_EXTERNAL_STORAGE"
  },
  {
    name: "android.permission.WRITE_SYNC_SETTINGS"
  },
  {
    name: "android.permission.REQUEST_INSTALL_PACKAGES"
  },
  {
    name: "android.permission.FOREGROUND_SERVICE"
  },
  {
    name: "android.permission.USE_FULL_SCREEN_INTENT"
  },
  {
    name: "com.android.launcher.permission.INSTALL_SHORTCUT"
  },
  {
    name: "com.android.launcher.permission.UNINSTALL_SHORTCUT"
  },
  {
    name: "com.google.android.c2dm.permission.RECEIVE"
  },
  {
    name: "com.google.android.providers.gsf.permission.READ_GSERVICES"
  },
  {
    name: "com.sec.android.provider.badge.permission.READ"
  },
  {
    name: "com.sec.android.provider.badge.permission.WRITE"
  },
  {
    name: "com.htc.launcher.permission.READ_SETTINGS"
  },
  {
    name: "com.htc.launcher.permission.UPDATE_SHORTCUT"
  },
  {
    name: "com.sonyericsson.home.permission.BROADCAST_BADGE"
  },
  {
    name: "com.sonymobile.home.permission.PROVIDER_INSERT_BADGE"
  },
  {
    name: "com.huawei.android.launcher.permission.READ_SETTINGS"
  },
  {
    name: "com.huawei.android.launcher.permission.WRITE_SETTINGS"
  },
  {
    name: "com.huawei.android.launcher.permission.CHANGE_BADGE"
  },
  {
    name: "com.whatsapp.permission.BROADCAST"
  },
  {
    name: "com.whatsapp.permission.MAPS_RECEIVE"
  },
  {
    name: "com.whatsapp.permission.REGISTRATION"
  },
  {
    name: "com.whatsapp.sticker.READ"
  },
  {
    name: "android.permission.READ_EXTERNAL_STORAGE"
  }
];

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

//Vetor com todas as permissões
var permName = [];
//string com todos os grupos
var grupos = "";

//funçao responsável por classificar as permissões
function classificar(itens) {
  itens.forEach(item => {
    if (item == "ACCESS_COARSE_LOCATION" || item == "ACCESS_COARSE_LOCATION") {
      location.push(item);
      console.log(item);
    } else if (item == "CAMERA" || item == "VIDEO") {
      camera.push(item);
    }
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

server.get("/", (req, res) => {
  permissoes.forEach(perm => {
    const perm2 = Object.values(perm);

    var stringExemplo = perm2[0];
    var resultado = stringExemplo.split(".");
    var last = resultado.pop();
    permName.push(last);
  });
  classificar(permName);

  return res.json({ grupos: grupos });
});

server.listen(3002);
