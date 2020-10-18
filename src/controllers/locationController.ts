import { Request, Response } from "express";
import geocoder from "../services/geocoder";

import * as Yup from "yup";

export default {
  async getLocation(request: Request, response: Response) {
    const { latitude, longitude } = request.params;

    const result = await geocoder.reverse({
      lat: parseFloat(latitude),
      lon: parseFloat(longitude),
    });

    const location = {
      city: result[0].administrativeLevels?.level2long,
      state: result[0].administrativeLevels?.level1short,
    };

    return response.json(location);
  },

  async getCoordenates(request: Request, response: Response) {
    const { city, state } = request.params;

    const result = await geocoder.geocode(`${city} ${state}`);

    const coordenates = {
      latitude: result[0].latitude,
      longitude: result[0].longitude,
    };

    return response.json(coordenates);
  },
};
