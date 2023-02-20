const { request, response } = require("express");
const { DBnetsocsx } = require("../../database/db");
const {
    dispositivoModel
} = require("../../model/datatbase/db.model");


exports.getDispositivos = async (req = request, res = response) => {
  const dispositivos = [];
  const result = await DBnetsocsx.dispositivos.findMany({});
  result.forEach((element) => {
    dispositivos.push(dispositivoModel(element));
  });
  res.json({
    ok: true,
    res: dispositivos,
  });
};

exports.getDispositivo = async (req = request, res = response) => { 
    var id = parseInt(req);
    const result = await DBnetsocsx.dispositivos.findMany({
        where:{
          IDTipoDispositivo: id
        }
    });

    if( result.length > 0 ){
        return true;
    }else{
        return false;
    }
};
  
//get info device for id
exports.getInfoDevice = async (req = request, res = response) => {     
  var id = parseInt(req);
  const result = await DBnetsocsx.dispositivos.findMany({ 
      where:{
        IDTipoDispositivo: id
      } 
  });

  return await result;
};

exports.deleteDevice = async (req = request, res = response) => {
  try {
    const id  = parseInt(req);
    const device = await DBnetsocsx.dispositivos.delete({
      where: {
        IDDispositivo: id
      }
    });
    return {
      statuscode: "200",
      statusString: `Device ${id} deleted :)`,
      res: dispositivoModel(device),
    };
  } catch (error) {
    console.log(`Device with id ${id} don't found`);
  }
}; 

exports.postDevice = async (req = request, res = response) => {
  try {
    const building = dispositivoModel(req.body);   
    const build = await DBnetsocsx.dispositivos.create({
      data: building,
    });
    return{
      statuscode: "200",
      statusString: "Device registred Successfully",
      res: dispositivoModel(build),
    }; 
  } catch (error) {
    console.log("Device not registered :(");
  } 
};

exports.putDevice = async (req = request, res = response) => {
  try {
    const  id  = req.body.IDDispositivo;
    const building = dispositivoModel(req.body);
  
    const build = await DBnetsocsx.dispositivos.update({
      where: {
        IDDispositivo: id,
      },
      data: building,
    });
  
    return{
      statuscode: "200",
      statusString: "Device Update Successfully",
      res: dispositivoModel(build),
    };
  } catch (error) {
    console.log("Device not updated :(");
  }
};
