import NodeGeocoder from "node-geocoder";

interface GoogleOptions {
  provider: "google";
  clientId?: string;
  apiKey?: string;
  language?: string;
  region?: string;
  excludePartialMatches?: boolean;
  channel?: string;
}
const options: GoogleOptions = {
  provider: "google",

  // Optional depending on the providers
  //   fetch: customFetchImplementation,
  apiKey: process.env.API_KEY_GOOGLE,
};

const geocoder = NodeGeocoder(options);

export default geocoder;

// async function teste() {
//   const res = await geocoder.geocode("sobradinho df");

//   console.log(res);
// }

// teste();
