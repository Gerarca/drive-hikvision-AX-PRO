const petition = require('../Api/isapiGatewayConnection');
const { URLGateway } = require("../model/url/gateway.model");

  exports.GetListAlarms = async (req, id) => {   
   
    const data = await petition({
      url: URLGateway.getListAlarms + id,
      method: 'POST',
      body: JSON.stringify(req),
    });

    return data; 
  };

