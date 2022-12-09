const { URLDashBoard } = require("../model/url/dashBoard.model");
const petition = require('../Api/isapiConnection');

  //Overwiew Status Alarma
  exports.statusAlarma = async (req, res) => {
    const data = await petition({
      url: URLDashBoard.GetStatusAlarma,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  exports.statusSubSistemas = async (req, res) => { 
    const data = await petition({
      url: URLDashBoard.GetStatusAlarma,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };