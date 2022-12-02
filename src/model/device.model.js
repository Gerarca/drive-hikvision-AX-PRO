exports.deviceModel = (device) => ({
  BootVersion:                  device?.bootVersion,
  IDDispositivo:                device?.deviceID,
  NombreDispositivo:            device?.deviceName,
  TipoDispositivo:              device?.deviceType,
  FechaLanzamientoCodifocador:  device?.encoderReleasedDate,
  CodificadorVersion:           device?.encoderVersion,
  FechaPublicaciónFirmware:     device?.firmwareReleasedDate,
  FirmwareVersion:              device?.firmwareVersion,
  DireccionMac:                 device?.macAddress,
  ModeloDispositivo:            device?.model,
  Serial:                       device?.serialNumber,
  TeleControlID:                device?.telecontrolID,
  Url:                          device?.url
});
