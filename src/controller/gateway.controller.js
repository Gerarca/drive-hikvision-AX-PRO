const petition = require('../Api/isapiGatewayConnection');
const { URLGateway } = require("../model/url/gateway.model");

  exports.GetListAlarms = async (req, res) => {   
   
    const data = await petition({
      url: URLGateway.getListAlarms,
      method: 'POST',
      body: JSON.stringify(req),
    });

    return data; 
  };

