exports.xmlsetdevice = (params) => ( 
    '<?xml version="1.0" encoding="utf-8"?>'+
    '<DeviceInfo xmlns="http://www.hikvision.com/ver20/XMLSchema" version="2.0">'+
        '<deviceName>'+ params.deviceName +'</deviceName>'+
        '<deviceID>'+ params.deviceID +'</deviceID>'+
        '<model>'+ params.model +'</model>'+
        '<serialNumber>'+ params.serialNumber +'</serialNumber>'+
        '<macAddress>'+ params.macAddress +'</macAddress>'+
        '<firmwareVersion>'+ params.firmwareVersion +'</firmwareVersion>'+
        '<firmwareReleasedDate>'+ params.firmwareReleasedDate +'</firmwareReleasedDate>'+
        '<hardwareVersion>'+ params.hardwareVersion +'</hardwareVersion>'+
        '<encoderVersion>'+ params.encoderVersion +'</encoderVersion>'+
        '<encoderReleasedDate>'+ params.encoderReleasedDate +'</encoderReleasedDate>'+
        '<deviceType>'+ params.deviceType +'</deviceType>'+
        '<telecontrolID>'+ params.telecontrolID +'</telecontrolID>'+
        '<charEncodeFormat>'+ params.charEncodeFormat +'</charEncodeFormat>'+
        '<languageType opt="english,spanish,portuguese,italian,french,russian,german,polish,czech,greek,turkish,dutch,hungarian,croatian,ukrainian,brazilianPortuguese,slovenian,swedish,norwegian,romanian,danish,slovak,serbian">'+ params.languageType +'</languageType>'+
        '<customizedInfo/>'+
    '</DeviceInfo>'
)