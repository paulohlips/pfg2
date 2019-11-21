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
var network = [];
var activity_recognition = [];

//Vetor com todas as permissões
var permName = [];
//string com todos os grupos
var grupos = "";

//funçao responsável por classificar as permissões
function classificar(itens) {
  itens.forEach(item => {
    if (item == "ACCESS_COARSE_LOCATION" || item == "ACCESS_COARSE_LOCATION" || item == "ACCESS_LOCATION_EXTRA_COMMANDS") {
      location.push(item);
      console.log(item);
    } 
    else if (item == "CAMERA") {
      camera.push(item);
    } 
    else if (item == "RECORD_AUDIO") {
        microphone.push(item);
    }
    else if (item == "READ_CALENDAR" || item == "WRITE_CALENDAR") {
        calendar.push(item);
    }
    else if (item == "READ_EXTERNAL_STORAGE" || item == "WRITE_EXTERNAL_STORAGE" || item == "ACCESS_MEDIA_LOCATION" || item == "WRITE_OBB") {
        storage.push(item);
    }
    else if (item == "READ_CONTACTS" || item == "WRITE_CONTACTS") {
        contacts.push(item);
    }
    else if (item == "ACCESS_UCE_PRESENCE_SERVICE" || item == "ACCESS_UCE_OPTIONS_SERVICE" || item == "READ_PHONE_STATE"  || item == "READ_PHONE_NUMBERS" || item == "CALL_PHONE" || item == "ADD_VOICEMAIL"  || item == "USE_SIP" || item == "ANSWER_PHONE_CALLS" || item == "MANAGE_OWN_CALLS" || item == "CALL_COMPANION_APP" || item == "ACCEPT_HANDOVER") {
        phone.push(item);
    }
    else if (item == "BODY_SENSORS" || item == "USE_FINGERPRINT" || item == "USE_BIOMETRIC") {
        sensors.push(item);
    }
    else if (item == "READ_SMS" || item == "RECEIVE_SMS" || item == "SEND_SMS" || item == "RECEIVE_WAP_PUSH" || item == "RECEIVE_MMS" || item == "BIND_CELL_BROADCAST_SERVICE" || item == "READ_CELL_BROADCASTS" || item == "SMS_FINANCIAL_TRANSACTIONS") {
        sms.push(item);
    }
    else if (item == "READ_CALL_LOG" || item == "WRITE_CALL_LOG" || item == "PROCESS_OUTGOING_CALLS") {
        call_log.push(item);
    }
    else if (item == "INTERNET" || item == "ACCESS_NETWORK_STATE" || item == "ACCESS_WIFI_STATE" || item == "CHANGE_WIFI_STATE" || item == "BLUETOOTH" || item == "SUSPEND_APPS" || item == "BLUETOOTH_ADMIN" || item == "BLUETOOTH_PRIVILEGED" || item == "BLUETOOTH_MAP" || item == "BLUETOOTH_STACK" || item == "NFC" || item == "NFC_TRANSACTION_EVENT"
    ) {
        network.push(item);
    }
    else if (item == "ACTIVITY_RECOGNITION") {
        activity_recognition.push(item);
    }
    else 
        outros.push(item);
    
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
