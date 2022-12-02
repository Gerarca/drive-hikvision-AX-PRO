const { URLDashBoard } = require("../model/url/dashBoard.model");
const peticion = require('../Api/isapiConnection');

  //Overwiew Status Alarma
  exports.statusAlarma = async (req, res = response) => {
    const data = await peticion({
      url: URLDashBoard.GetStatusAlarma,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data);
  };

  exports.statusSubSistemas = async (req, res = response) => { 
    const data = await peticion({
      url: URLDashBoard.GetStatusAlarma,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data);
  };