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
    var id = req;
    const result = await DBnetsocsx.dispositivos.findMany({
        where:{
          IDTipoFamilia: id
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
  var id = req;
  const result = await DBnetsocsx.dispositivos.findMany({ 
      where:{
        IDTipoFamilia: id
      } 
  });

  return await result;
};

exports.deleteDevice = async (req = request, res = response) => {
  const id  = req;
  const device = await DBnetsocsx.dispositivos.delete({
    where: {
      Serial: id,
    },
  });
  res.json({
    ok: true,
    res: dispositivoModel(device),
  });
};

exports.postDevice = async (req = request, res = response) => {
  const building = dispositivoModel(req.body);
  const build = await DBnetsocsx.dispositivos.create({
    data: building,
  });
  res.json({
    ok: true,
    res: dispositivoModel(build),
  });
};

exports.putDevice = async (req = request, res = response) => {
  const  id  = req;
  const building = dispositivoModel(req.body);

  const build = await DBnetsocsx.dispositivos.update({
    where: {
        Serial: id,
    },
    data: building,
  });

  res.json({
    ok: true,
    res: dispositivoModel(build),
  });
};
