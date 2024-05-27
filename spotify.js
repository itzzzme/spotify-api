const { data } = await axios.post(
  "https://gae2-spclient.spotify.com/connect-state/v1/player/command/from/8983dc862df387eb46af07cee9ae72207665ab4c/to/8983dc862df387eb46af07cee9ae72207665ab4c",
  config,
  {
    headers: {
      Authorization: "Bearer " + response.accessToken,
      "Client-Token": client_token.granted_token.token,
    },
  }
);
console.log(data);
