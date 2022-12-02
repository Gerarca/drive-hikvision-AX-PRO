exports.WiredNetworkAdminAcces = (params) => (
    '<AdminAccessProtocolList xmlns="http://www.isapi.org/ver20/XMLSchema" version="2.0">'+
        '<AdminAccessProtocol xmlns="http://www.isapi.org/ver20/XMLSchema" version="2.0">'+
            '<id>'+params.id+'</id>'+
            '<protocol>'+params.protocol+'</protocol>'+
            '<portNo>'+params.port+'</portNo>'+
        '</AdminAccessProtocol>'+
    '</AdminAccessProtocolList>'
);

exports.WiredNetworkInterfaces = (params) => (
    "<IPAddress version='2.0' xmlns='http://www.isapi.org/ver20/XMLSchema'>"+
        "<ipVersion>"+params.ipVersion+"</ipVersion>"+
        "<addressingType>"+params.addressingType+"</addressingType>"+
        "<ipAddress>"+params.ipAddress+"</ipAddress>"+
        "<subnetMask>"+params.subnetMask+"</subnetMask>"+
        "<DefaultGateway>"+
            "<ipAddress>"+params.DefaultGateway.ipAddress+"</ipAddress>"+
        "</DefaultGateway>"+
        "<PrimaryDNS>"+
            "<ipAddress>"+params.PrimaryDNS.ipAddress+"</ipAddress>"+
        "</PrimaryDNS>"+
        "<SecondaryDNS>"+
        " <ipAddress>"+params.SecondaryDNS.ipAddress+"</ipAddress>"+
        "</SecondaryDNS>"+
    "</IPAddress>"
);

exports.wlan = (params) => (
    "<IPAddress version='2.0' xmlns='http://www.isapi.org/ver20/XMLSchema'>"+
        "<ipVersion>"+ params.ipVersion +"</ipVersion>"+
        "<addressingType>"+ params.addressingType +"</addressingType>"+
        "<ipAddress>"+ params.ipAddress +"</ipAddress>"+
        "<subnetMask>"+ params.subnetMask +"</subnetMask>"+
        "<DefaultGateway>"+
            "<ipAddress>"+ params.ipAddressGateway +"</ipAddress>"+
        "</DefaultGateway>"+
        "<PrimaryDNS>"+
            "<ipAddress>"+ params.ipAddressPrimaryDNS +"</ipAddress>"+
        "</PrimaryDNS>"+
        "<SecondaryDNS>"+
            "<ipAddress>"+ params.ipAddressSecondaryDNS +"</ipAddress>"+
        "</SecondaryDNS>"+
    "</IPAddress>"
);

exports.Wireless = (params) => (
    '<?xml version="1.0" encoding="UTF-8"?>'+
    '<Wireless>'+
        '<enabled>'+ params.enabled +'</enabled>'+
        '<wirelessNetworkMode/>'+
            '<ssid>'+ params.ssid +'</ssid>'+
            '<WirelessSecurity>'+
                '<securityMode>'+ params.securityMode +'</securityMode>'+
                '<WPA>'+
                    '<sharedKey/><wpaKeyLength>'+ params.wpaKeyLength +'</wpaKeyLength>'+
                '</WPA>'+
        '</WirelessSecurity>'+
    '</Wireless>'
);

exports.CouldService = (params) => (
   '<EZVIZ xmlns="http://www.hikvision.com/ver20/XMLSchema">'+
        '<enabled>'+params.enabled+'</enabled>'+
        '<registerStatus>'+params.registerStatus+'</registerStatus>'+
        '<redirect>'+params.redirect+'</redirect>'+
        '<serverAddress>'+
            '<addressingFormatType>'+params.addressingFormatType+'</addressingFormatType>'+
            '<hostName>'+params.hostName+'</hostName>'+
        '</serverAddress>'+
        '<operateCode>'+params.operateCode+'</operateCode>'+
        '<netWork>'+params.netWork+'</netWork>'+
        '<periodicTestEnabled>'+params.periodicTestEnabled+'</periodicTestEnabled>'+
        '<periodicTestTime>'+params.periodicTestTime+'</periodicTestTime>'+
    '</EZVIZ>'
);

exports.NATUPnp = (params) => (
    '<UPnP xmlns="http://www.isapi.org/ver20/XMLSchema" version="2.0">'+
        '<enabled>true</enabled>'+
        '<ports>'+
            '<enabled>'+ params.enabled +'</enabled>'+
            '<mapmode>'+ params.mapmode +'</mapmode>'+
            '<portList>'+
                '<port>'+
                    '<id>'+ params.portList[0].id +'</id>'+
                    '<enabled>'+ params.portList[0].enabled +'</enabled>'+
                    '<internalPort>'+ params.portList[0].internalPort +'</internalPort>'+
                    '<externalPort>'+ params.portList[0].externalPort +'</externalPort>'+
                '</port>'+
                '<port>'+
                    '<id>'+ params.portList[1].id +'</id>'+
                    '<enabled>'+ params.portList[1].enabled +'</enabled>'+
                    '<internalPort>'+ params.portList[1].internalPort +'</internalPort>'+
                    '<externalPort>'+ params.portList[1].externalPort +'</externalPort>'+
                '</port>'+
            '</portList>'+
            '<natType>auto</natType>'+
        '</ports>'+
    '</UPnP>'
);

exports.FTP = (params) => (
    '<?xml version="1.0" encoding="utf-8"?>'+
    '<FTPNotification>'+
        '<id>'+ params.id +'</id>'+
        '<enabled>'+ params.enabled +'</enabled>'+
        '<addressingFormatType>ipaddress</addressingFormatType>'+
        '<ipAddress/>'+
        '<portNo>'+ params.portNo +'</portNo>'+
        '<annoyftp>'+ params.annoyftp +'</annoyftp>'+
        '<userName/>'+
        '<password/>'+
        '<uploadPath>'+
            '<pathDepth>'+ params.uploadPath.pathDepth +'</pathDepth>'+
        '</uploadPath>'+
        '<uploadProtocolType>'+ params.uploadProtocolType +'</uploadProtocolType>'+
    '</FTPNotification>'
);
