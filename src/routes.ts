import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import locationController from "./controllers/locationController";
import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();
const upload = multer(uploadConfig);

// métodos no controller: index, show, create, update, delete

routes.get("/coordenates/:latitude/:longitude", locationController.getLocation);
routes.get("/location/:city/:state", locationController.getCoordenates);
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);
routes.delete("/orphanages/delete", OrphanagesController.delete);

export default routes;
