const driverService = require('../services/driverService');

async function getDrivers(req, res, next) {

  const params = req.body;

  const response = await driverService.findDrivers(params);
  if(response) return res.json(response);

  return res.sendStatus(500);
}

async function postDriver(req, res, next) {
  const { name, age, genre, isAutonomous, cnhType, isLoaded, vehicleType, from, destination } = req.body;
  if (!name || !age || !genre || isAutonomous === undefined || !cnhType || !isLoaded === undefined || !vehicleType || !from || !destination) {
    return res.sendStatus(400);
  }

  const response = await driverService.newDriver(name, age, genre, isAutonomous, cnhType, isLoaded, vehicleType, from, destination);
  if (response) return res.json(response);

  return res.sendStatus(500);
}

async function putDriver(req, res, next) {

  const id = req.query.id;
  const param = req.body;
  if (!id || !param) return res.sendStatus(400);

  const response = await driverService.updateDriver(id, param);
  if (response) return res.send(response);

  return res.sendStatus(500);
}

async function deleteDriver(req, res, next) {

}

module.exports = { getDrivers, postDriver, putDriver, deleteDriver };
