import ReactDOM = require("react-dom");
import {OAuth2AuthCodePKCE} from "@bity/oauth2-auth-code-pkce"
import Explorer = require("./components/explorer");

/**
 * Creates and renders the API Explorer component.
 */

const oauth = new OAuth2AuthCodePKCE({
  authorizationUrl: "https://app.asana.com/-/oauth_authorize",
  tokenUrl: "https://ccbv8pweoe.execute-api.us-east-1.amazonaws.com/default/api_explorer_oauth_beta",
  clientId: "23824292948206",
  redirectUrl: "http://localhost:8338/",
  scopes: [],
  onInvalidGrant(){
      console.log("Expired! Auth code or refresh token needs to be renewed.");
  },
  onAccessTokenExpiry(refreshAccessToken) {
      console.log("Expired! Access token needs to be renewed.");
      return refreshAccessToken()
  }
});


export function run(initialResource?: string, initialRoute?: string): void {
  const explorer = ReactDOM.render(Explorer.create({
    initialResourceString: initialResource,
    initialRoute: initialRoute,
    OAuth: oauth
  }), document.getElementById("tab-explorer"));

  oauth.isReturningFromAuthServer().then(hasAuthCode => {
    return oauth.getAccessToken().then((tokenResponse) => {
        explorer.setCredentialsFromOAuth(tokenResponse.token.value)
    });
  })
  .catch((potentialError) => {
    if (potentialError) { console.log(potentialError); }
  });
}
