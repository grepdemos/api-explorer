interface BaseConstants {
  LOCALSTORAGE_KEY: string;
  CLIENT_ID: string;
  REDIRECT_URI: string;
}

var ghPagesConstants: BaseConstants = {
  LOCALSTORAGE_KEY: "api_tester_credentials",
  CLIENT_ID: "29147353239426",
  REDIRECT_URI:
    "https://asana.github.io/node-asana-tester/popup_receiver.html"
};

var localhostConstants: BaseConstants = {
  LOCALSTORAGE_KEY: "api_tester_credentials",
  CLIENT_ID: "23824292948206",
  REDIRECT_URI: "http://localhost:8338/popup_receiver.html"
};

var constants = process.env.USE_GH_PAGES ?
  ghPagesConstants : localhostConstants;
export = constants;
