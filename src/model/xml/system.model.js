exports.cambiarnombre = (params) => (
    '<?xml version="1.0" encoding="utf-8"?>'+
    '<DeviceInfo xmlns="http://www.hikvision.com/ver20/XMLSchema" version="2.0">'+
        '<deviceName>'+params.deviceName+'</deviceName>'+
    '</DeviceInfo>'
);

exports.sshSetting = (params) => (
    "<SSH version='2.0' xmlns='http://www.isapi.org/ver20/XMLSchema'>"+
        "<enabled>"+params.enabled+"</enabled>"+
    "</SSH>"
);

exports.timeManagement = (params) => ( 
    '<Time xmlns="http://www.isapi.org/ver20/XMLSchema" version="2.0">'+
        '<timeMode>'+ params.timeMode +'</timeMode>'+
        '<timeZone>'+ params.timeZone +'</timeZone>'+
    '</Time>' 
);

exports.timeManagementMode = (params) => ( 
    '<NTPServer xmlns="http://www.isapi.org/ver20/XMLSchema" version="2.0">'+
       ' <id>'+ params.id +'</id>'+
        '<addressingFormatType>'+ params.addressingFormatType +'</addressingFormatType>'+
        '<ipAddress>'+ params.ipAddress +'</ipAddress>'+
        '<portNo>'+ params.portNo +'</portNo>'+
        '<synchronizeInterval>'+ params.synchronizeInterval +'</synchronizeInterval>'+
    '</NTPServer>'
);