
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.7.1
 * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
 */
Prisma.prismaVersion = {
  client: "4.7.1",
  engine: "272861e07ab64f234d3ffc4094e32bd61775599c"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ControladoresScalarFieldEnum = makeEnum({
  IDControlador: 'IDControlador',
  IDEdificio: 'IDEdificio',
  NombreControlador: 'NombreControlador',
  Descripcion: 'Descripcion',
  IDIcono: 'IDIcono',
  TipoControlador: 'TipoControlador',
  Prioridad: 'Prioridad',
  Certificado: 'Certificado',
  PuertoSSL: 'PuertoSSL',
  PuertoNoSSL: 'PuertoNoSSL',
  PuertoMantenimiento: 'PuertoMantenimiento',
  PuertoConexionSC: 'PuertoConexionSC',
  PuertoConexionCC: 'PuertoConexionCC',
  SOAP: 'SOAP',
  Socket: 'Socket',
  API: 'API',
  Sincroniza: 'Sincroniza',
  DireccionAIPV4: 'DireccionAIPV4',
  DireccionBIPv4: 'DireccionBIPv4',
  DireccionAIPV6: 'DireccionAIPV6',
  DireccionBIPv6: 'DireccionBIPv6',
  DireccionPublica1: 'DireccionPublica1',
  DireccionPublica2: 'DireccionPublica2',
  Localizacion: 'Localizacion',
  Latitud: 'Latitud',
  Longitud: 'Longitud',
  Estatus: 'Estatus',
  FechaCreado: 'FechaCreado',
  FechaDesactivado: 'FechaDesactivado'
});

exports.Prisma.DispositivosScalarFieldEnum = makeEnum({
  IDDispositivo: 'IDDispositivo',
  IDSubsistema: 'IDSubsistema',
  IDTipoFamilia: 'IDTipoFamilia',
  IDFamilia: 'IDFamilia',
  IDTipoDispositivo: 'IDTipoDispositivo',
  IDGateway: 'IDGateway',
  IDControlador: 'IDControlador',
  IDModelo: 'IDModelo',
  IDEdificio: 'IDEdificio',
  IDZona: 'IDZona',
  IDPuerta: 'IDPuerta',
  NombreDispositivo: 'NombreDispositivo',
  Descripcion: 'Descripcion',
  IDIconografia: 'IDIconografia',
  IDMenuPropio: 'IDMenuPropio',
  Estatus: 'Estatus',
  Sentidos: 'Sentidos',
  Ignorado: 'Ignorado',
  Enrolamiento: 'Enrolamiento',
  Latitud: 'Latitud',
  Longitud: 'Longitud',
  DireccionGPS: 'DireccionGPS',
  GeometriaGPS: 'GeometriaGPS',
  IDTipoEvento: 'IDTipoEvento',
  IDModeloElemento: 'IDModeloElemento',
  FechaCreacion: 'FechaCreacion',
  FechaDesactivacion: 'FechaDesactivacion',
  FechaEliminacion: 'FechaEliminacion',
  Parametros: 'Parametros',
  Certificado: 'Certificado',
  PuertoSSL: 'PuertoSSL',
  PuertoNoSSL: 'PuertoNoSSL',
  PuertoMantenimiento: 'PuertoMantenimiento',
  PuertoConexionSC: 'PuertoConexionSC',
  PuertoConexionCC: 'PuertoConexionCC',
  SOAP: 'SOAP',
  Socket: 'Socket',
  API: 'API',
  Sincroniza: 'Sincroniza',
  DireccionAIPV4: 'DireccionAIPV4',
  DireccionBIPv4: 'DireccionBIPv4',
  DireccionAIPV6: 'DireccionAIPV6',
  DireccionBIPv6: 'DireccionBIPv6',
  DireccionPublica1: 'DireccionPublica1',
  DireccionPublica2: 'DireccionPublica2',
  Serial: 'Serial',
  user: 'user',
  password: 'password',
  IDManual: 'IDManual'
});

exports.Prisma.GatewayScalarFieldEnum = makeEnum({
  IDGateway: 'IDGateway',
  IDTipoGateway: 'IDTipoGateway',
  IDControlador: 'IDControlador',
  IDEdificio: 'IDEdificio',
  IDIdentificadorExterno: 'IDIdentificadorExterno',
  IDTipoEvento: 'IDTipoEvento',
  IDGrupoMetodo: 'IDGrupoMetodo',
  NAbonado: 'NAbonado',
  NombreGateway: 'NombreGateway',
  Descripcion: 'Descripcion',
  IDIcono: 'IDIcono',
  ValorEstado: 'ValorEstado',
  Parametros: 'Parametros',
  EstadoOnOff: 'EstadoOnOff',
  Latitud: 'Latitud',
  Longitud: 'Longitud',
  SerialGPS: 'SerialGPS',
  GeometriaGPS: 'GeometriaGPS',
  FechaCreado: 'FechaCreado',
  FechaDesactivado: 'FechaDesactivado',
  Certificado: 'Certificado',
  PuertoSSL: 'PuertoSSL',
  PuertoNoSSL: 'PuertoNoSSL',
  PuertoMantenimiento: 'PuertoMantenimiento',
  PuertoConexionSC: 'PuertoConexionSC',
  PuertoConexionCC: 'PuertoConexionCC',
  SOAP: 'SOAP',
  Socket: 'Socket',
  API: 'API',
  Sincroniza: 'Sincroniza',
  DireccionAIPV4: 'DireccionAIPV4',
  DireccionBIPv4: 'DireccionBIPv4',
  DireccionAIPV6: 'DireccionAIPV6',
  DireccionBIPv6: 'DireccionBIPv6',
  DireccionPublica1: 'DireccionPublica1',
  DireccionPublica2: 'DireccionPublica2',
  user: 'user',
  password: 'password',
  Serial: 'Serial'
});

exports.Prisma.GruposdispositivosScalarFieldEnum = makeEnum({
  IDGrupoDispositivo: 'IDGrupoDispositivo',
  NombreGrupoDispositivo: 'NombreGrupoDispositivo',
  Identificador: 'Identificador',
  Descripcion: 'Descripcion'
});

exports.Prisma.InventariocatastroScalarFieldEnum = makeEnum({
  IDEntidadInventario: 'IDEntidadInventario',
  IDTipoEntidadInventario: 'IDTipoEntidadInventario',
  IDCategoriaEntidadInventario: 'IDCategoriaEntidadInventario',
  IDGateway: 'IDGateway',
  IDDispositivo: 'IDDispositivo',
  IDMetaEdificio: 'IDMetaEdificio',
  IDEdificio: 'IDEdificio',
  NombreEntidadInventario: 'NombreEntidadInventario',
  Descripcion: 'Descripcion',
  Latitud: 'Latitud',
  Longitud: 'Longitud',
  SerialGPS: 'SerialGPS',
  GeometriaGPS: 'GeometriaGPS',
  FechaAlta: 'FechaAlta',
  FechaBaja: 'FechaBaja'
});

exports.Prisma.LibreriasapisScalarFieldEnum = makeEnum({
  IDLIBAPISDK: 'IDLIBAPISDK',
  Nombre: 'Nombre',
  Tipo: 'Tipo',
  Web: 'Web',
  Subsistema: 'Subsistema',
  Alcance: 'Alcance'
});

exports.Prisma.MetodogrupoScalarFieldEnum = makeEnum({
  IDGrupoMetodo: 'IDGrupoMetodo',
  NombreGrupoMetodo: 'NombreGrupoMetodo',
  Corporacion: 'Corporacion',
  Departamento: 'Departamento',
  Edificio: 'Edificio',
  Itinerario: 'Itinerario',
  Empleado: 'Empleado',
  Modificable: 'Modificable',
  Descripcion: 'Descripcion',
  Tipo: 'Tipo',
  IDGrupoMetodoPadre: 'IDGrupoMetodoPadre',
  Identificador: 'Identificador',
  IdentificadorExterno: 'IdentificadorExterno'
});

exports.Prisma.MetodosScalarFieldEnum = makeEnum({
  IDMetodo: 'IDMetodo',
  Indice: 'Indice',
  IDGrupoMetodo: 'IDGrupoMetodo',
  IDLibreria: 'IDLibreria',
  IDMetodoPadre: 'IDMetodoPadre',
  Clase: 'Clase',
  Tipo: 'Tipo',
  Propagable: 'Propagable',
  BlobsPropagable: 'BlobsPropagable',
  NParametros: 'NParametros',
  NParametrosBinarios: 'NParametrosBinarios',
  Basico: 'Basico',
  Estado: 'Estado',
  Descripcion: 'Descripcion',
  NombreMetodo: 'NombreMetodo',
  NombreFuncion: 'NombreFuncion',
  MetodoTrigger: 'MetodoTrigger',
  EnvioAplicacion: 'EnvioAplicacion',
  EjecucionLibre: 'EjecucionLibre'
});

exports.Prisma.ObjetosplanimetriaScalarFieldEnum = makeEnum({
  Id: 'Id',
  NombreObjeto: 'NombreObjeto',
  URLHost: 'URLHost',
  IpHost: 'IpHost',
  Puerto: 'Puerto',
  Usuario: 'Usuario',
  Clave: 'Clave'
});

exports.Prisma.ReldispositivodispositivoScalarFieldEnum = makeEnum({
  IDRelDisDispositivo: 'IDRelDisDispositivo',
  IDDispositivoPadre: 'IDDispositivoPadre',
  IDDispositivoHijo: 'IDDispositivoHijo'
});

exports.Prisma.ReldispositivogatewayScalarFieldEnum = makeEnum({
  IDRelDisGateway: 'IDRelDisGateway',
  IDDispositivo: 'IDDispositivo',
  IDGateway: 'IDGateway'
});

exports.Prisma.ReldispositivogrupodispositivoScalarFieldEnum = makeEnum({
  IDRelDisGrupoDis: 'IDRelDisGrupoDis',
  IDGrupo: 'IDGrupo',
  IDDispositivo: 'IDDispositivo'
});

exports.Prisma.ReldispositivoperfildispositivoScalarFieldEnum = makeEnum({
  IDRelDisPerfil: 'IDRelDisPerfil',
  IDDispositivo: 'IDDispositivo',
  IDPerfilDispositivo: 'IDPerfilDispositivo'
});

exports.Prisma.ReldispositivoplantillaanalogicaScalarFieldEnum = makeEnum({
  IDRelDisPlantillaAnaloga: 'IDRelDisPlantillaAnaloga',
  IDPlantillaAnalogica: 'IDPlantillaAnalogica',
  IDDispositivo: 'IDDispositivo',
  Formula: 'Formula',
  Version: 'Version'
});

exports.Prisma.ReldispositivopuertaScalarFieldEnum = makeEnum({
  IDRelDisPuerta: 'IDRelDisPuerta',
  IDDispositivo: 'IDDispositivo',
  IDPuerta: 'IDPuerta',
  IDTipoDispositivo: 'IDTipoDispositivo'
});

exports.Prisma.ReldispositivosubsistemaScalarFieldEnum = makeEnum({
  IDRelDisSubsistema: 'IDRelDisSubsistema',
  IDSubsistema: 'IDSubsistema',
  IDDispositivo: 'IDDispositivo'
});

exports.Prisma.ReldispositivotipoeventoScalarFieldEnum = makeEnum({
  IDRelDisTipoEvento: 'IDRelDisTipoEvento',
  IDDispositivo: 'IDDispositivo',
  ClaseEvento: 'ClaseEvento'
});

exports.Prisma.ReldispositivozonaScalarFieldEnum = makeEnum({
  IDRelDisZona: 'IDRelDisZona',
  IDDispositivo: 'IDDispositivo',
  IDZona: 'IDZona'
});

exports.Prisma.ReltipocontroladormetodoScalarFieldEnum = makeEnum({
  IDTipoControlador: 'IDTipoControlador',
  IDMetodo: 'IDMetodo',
  RelTipoControladorMetodo: 'RelTipoControladorMetodo'
});

exports.Prisma.ReltipodispositivoperfildispositivoScalarFieldEnum = makeEnum({
  IDRelTipoDispPerfil: 'IDRelTipoDispPerfil',
  IDTipoDispositivo: 'IDTipoDispositivo',
  IDPerfilDispositivo: 'IDPerfilDispositivo'
});

exports.Prisma.ReltipodispositivoperfileventoScalarFieldEnum = makeEnum({
  IDRelTipoDisPerfilEvento: 'IDRelTipoDisPerfilEvento',
  IDTipoDispositivo: 'IDTipoDispositivo',
  IDPerfilEvento: 'IDPerfilEvento'
});

exports.Prisma.ReltipodispositivotipotecnologiaScalarFieldEnum = makeEnum({
  IDRelTipoDispTipoTec: 'IDRelTipoDispTipoTec',
  IDTipoDispositivo: 'IDTipoDispositivo',
  IDTipoTecnologia: 'IDTipoTecnologia'
});

exports.Prisma.ReltipogatewayperfildispositivoScalarFieldEnum = makeEnum({
  IDRelTipoGatewayPerfil: 'IDRelTipoGatewayPerfil',
  IDTipoGateway: 'IDTipoGateway',
  IDPerfilDispositivo: 'IDPerfilDispositivo'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.SubsistemasScalarFieldEnum = makeEnum({
  IDSubSistema: 'IDSubSistema',
  NombreSubSistema: 'NombreSubSistema',
  DescripcionSubSistema: 'DescripcionSubSistema',
  URLSubSistema: 'URLSubSistema',
  Puerto: 'Puerto'
});

exports.Prisma.TablasinformacionScalarFieldEnum = makeEnum({
  IDTabla: 'IDTabla',
  NombreTabla: 'NombreTabla',
  Tipo: 'Tipo',
  Identidad: 'Identidad',
  CodigoNetsocs: 'CodigoNetsocs'
});

exports.Prisma.TecnologiasnetsocsScalarFieldEnum = makeEnum({
  IDTecnologiaGateway: 'IDTecnologiaGateway',
  NombreTecnologiaGateway: 'NombreTecnologiaGateway'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  controladores: 'controladores',
  dispositivos: 'dispositivos',
  gateway: 'gateway',
  gruposdispositivos: 'gruposdispositivos',
  inventariocatastro: 'inventariocatastro',
  libreriasapis: 'libreriasapis',
  metodogrupo: 'metodogrupo',
  metodos: 'metodos',
  objetosplanimetria: 'objetosplanimetria',
  reldispositivodispositivo: 'reldispositivodispositivo',
  reldispositivogateway: 'reldispositivogateway',
  reldispositivogrupodispositivo: 'reldispositivogrupodispositivo',
  reldispositivoperfildispositivo: 'reldispositivoperfildispositivo',
  reldispositivoplantillaanalogica: 'reldispositivoplantillaanalogica',
  reldispositivopuerta: 'reldispositivopuerta',
  reldispositivosubsistema: 'reldispositivosubsistema',
  reldispositivotipoevento: 'reldispositivotipoevento',
  reldispositivozona: 'reldispositivozona',
  reltipocontroladormetodo: 'reltipocontroladormetodo',
  reltipodispositivoperfildispositivo: 'reltipodispositivoperfildispositivo',
  reltipodispositivoperfilevento: 'reltipodispositivoperfilevento',
  reltipodispositivotipotecnologia: 'reltipodispositivotipotecnologia',
  reltipogatewayperfildispositivo: 'reltipogatewayperfildispositivo',
  subsistemas: 'subsistemas',
  tablasinformacion: 'tablasinformacion',
  tecnologiasnetsocs: 'tecnologiasnetsocs'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
