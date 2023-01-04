const { URLDashBoard } = require("../model/url/dashBoard.model");
const petition = require('../Api/isapiConnection');

  //Overwiew Status Alarma
  exports.statusAlarma = async (id) => {
    const data = await petition({
      url: URLDashBoard.GetStatusAlarma + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    return data;;
  };

  exports.statusSubSistemas = async (id) => { 
    const data = await petition({
      url: URLDashBoard.GetStatusAlarma + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    return data;
  };