
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.7.1
 * Query Engine version: ca7fcef713137fa11029d519a9780db130cca91d
 */
Prisma.prismaVersion = {
  client: "4.7.1",
  engine: "ca7fcef713137fa11029d519a9780db130cca91d"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "src\\prisma\\generated\\netsocsx",
    "prisma\\generated\\netsocsx",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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
  IDFabricante: 'IDFabricante',
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
  IDManual: 'IDManual',
  Directo: 'Directo'
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
  Serial: 'Serial',
  IDManual: 'IDManual',
  IDZona: 'IDZona'
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

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"controladores\",\"dbName\":null,\"fields\":[{\"name\":\"IDControlador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDEdificio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NombreControlador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDIcono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TipoControlador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Prioridad\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Certificado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PuertoSSL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PuertoNoSSL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PuertoMantenimiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PuertoConexionSC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PuertoConexionCC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SOAP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Socket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"API\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sincroniza\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionAIPV4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionBIPv4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionAIPV6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionBIPv6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionPublica1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionPublica2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Localizacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Latitud\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Longitud\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FechaCreado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FechaDesactivado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"dispositivos\",\"dbName\":null,\"fields\":[{\"name\":\"IDDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDSubsistema\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDTipoFamilia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDFamilia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDFabricante\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDTipoDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDGateway\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDControlador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDModelo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDEdificio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDZona\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDPuerta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NombreDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDIconografia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDMenuPropio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sentidos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ignorado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Enrolamiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Latitud\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Longitud\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionGPS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GeometriaGPS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDTipoEvento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDModeloElemento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FechaCreacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FechaDesactivacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FechaEliminacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Parametros\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Certificado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PuertoSSL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PuertoNoSSL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PuertoMantenimiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PuertoConexionSC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PuertoConexionCC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SOAP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Socket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"API\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sincroniza\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionAIPV4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionBIPv4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionAIPV6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionBIPv6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionPublica1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionPublica2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Serial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDManual\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Directo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"gateway\",\"dbName\":null,\"fields\":[{\"name\":\"IDGateway\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDTipoGateway\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDControlador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDEdificio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDIdentificadorExterno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDTipoEvento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDGrupoMetodo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAbonado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NombreGateway\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDIcono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ValorEstado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Parametros\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EstadoOnOff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Latitud\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Longitud\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SerialGPS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GeometriaGPS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FechaCreado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FechaDesactivado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Certificado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PuertoSSL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PuertoNoSSL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PuertoMantenimiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PuertoConexionSC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PuertoConexionCC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SOAP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Socket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"API\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Sincroniza\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionAIPV4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionBIPv4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionAIPV6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionBIPv6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionPublica1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DireccionPublica2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Serial\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDManual\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDZona\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"gruposdispositivos\",\"dbName\":null,\"fields\":[{\"name\":\"IDGrupoDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NombreGrupoDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Identificador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"inventariocatastro\",\"dbName\":null,\"fields\":[{\"name\":\"IDEntidadInventario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDTipoEntidadInventario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDCategoriaEntidadInventario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDGateway\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDMetaEdificio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDEdificio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NombreEntidadInventario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Latitud\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Longitud\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SerialGPS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GeometriaGPS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FechaAlta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FechaBaja\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"libreriasapis\",\"dbName\":null,\"fields\":[{\"name\":\"IDLIBAPISDK\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Web\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Subsistema\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Alcance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"metodogrupo\",\"dbName\":null,\"fields\":[{\"name\":\"IDGrupoMetodo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NombreGrupoMetodo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Corporacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Departamento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Edificio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Itinerario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Empleado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Modificable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDGrupoMetodoPadre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Identificador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IdentificadorExterno\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"metodos\",\"dbName\":null,\"fields\":[{\"name\":\"IDMetodo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Indice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDGrupoMetodo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDLibreria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDMetodoPadre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Clase\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Propagable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BlobsPropagable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NParametros\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NParametrosBinarios\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Basico\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NombreMetodo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NombreFuncion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MetodoTrigger\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EnvioAplicacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EjecucionLibre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"objetosplanimetria\",\"dbName\":null,\"fields\":[{\"name\":\"Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NombreObjeto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"URLHost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IpHost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Puerto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Clave\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reldispositivodispositivo\",\"dbName\":null,\"fields\":[{\"name\":\"IDRelDisDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDDispositivoPadre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDDispositivoHijo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reldispositivogateway\",\"dbName\":null,\"fields\":[{\"name\":\"IDRelDisGateway\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDGateway\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reldispositivogrupodispositivo\",\"dbName\":null,\"fields\":[{\"name\":\"IDRelDisGrupoDis\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDGrupo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reldispositivoperfildispositivo\",\"dbName\":null,\"fields\":[{\"name\":\"IDRelDisPerfil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDPerfilDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reldispositivoplantillaanalogica\",\"dbName\":null,\"fields\":[{\"name\":\"IDRelDisPlantillaAnaloga\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDPlantillaAnalogica\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Formula\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reldispositivopuerta\",\"dbName\":null,\"fields\":[{\"name\":\"IDRelDisPuerta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDPuerta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDTipoDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reldispositivosubsistema\",\"dbName\":null,\"fields\":[{\"name\":\"IDRelDisSubsistema\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDSubsistema\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reldispositivotipoevento\",\"dbName\":null,\"fields\":[{\"name\":\"IDRelDisTipoEvento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ClaseEvento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reldispositivozona\",\"dbName\":null,\"fields\":[{\"name\":\"IDRelDisZona\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDZona\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reltipocontroladormetodo\",\"dbName\":null,\"fields\":[{\"name\":\"IDTipoControlador\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDMetodo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RelTipoControladorMetodo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reltipodispositivoperfildispositivo\",\"dbName\":null,\"fields\":[{\"name\":\"IDRelTipoDispPerfil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDTipoDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDPerfilDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reltipodispositivoperfilevento\",\"dbName\":null,\"fields\":[{\"name\":\"IDRelTipoDisPerfilEvento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDTipoDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDPerfilEvento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reltipodispositivotipotecnologia\",\"dbName\":null,\"fields\":[{\"name\":\"IDRelTipoDispTipoTec\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDTipoDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDTipoTecnologia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"reltipogatewayperfildispositivo\",\"dbName\":null,\"fields\":[{\"name\":\"IDRelTipoGatewayPerfil\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDTipoGateway\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IDPerfilDispositivo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"subsistemas\",\"dbName\":null,\"fields\":[{\"name\":\"IDSubSistema\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NombreSubSistema\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DescripcionSubSistema\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"URLSubSistema\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Puerto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"tablasinformacion\",\"dbName\":null,\"fields\":[{\"name\":\"IDTabla\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NombreTabla\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Identidad\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CodigoNetsocs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"tecnologiasnetsocs\",\"dbName\":null,\"fields\":[{\"name\":\"IDTecnologiaGateway\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NombreTecnologiaGateway\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"controladores\",\"plural\":\"controladores\",\"findUnique\":\"findUniquecontroladores\",\"findUniqueOrThrow\":\"findUniquecontroladoresOrThrow\",\"findFirst\":\"findFirstcontroladores\",\"findFirstOrThrow\":\"findFirstcontroladoresOrThrow\",\"findMany\":\"findManycontroladores\",\"create\":\"createOnecontroladores\",\"createMany\":\"createManycontroladores\",\"delete\":\"deleteOnecontroladores\",\"update\":\"updateOnecontroladores\",\"deleteMany\":\"deleteManycontroladores\",\"updateMany\":\"updateManycontroladores\",\"upsert\":\"upsertOnecontroladores\",\"aggregate\":\"aggregatecontroladores\",\"groupBy\":\"groupBycontroladores\"},{\"model\":\"dispositivos\",\"plural\":\"dispositivos\",\"findUnique\":\"findUniquedispositivos\",\"findUniqueOrThrow\":\"findUniquedispositivosOrThrow\",\"findFirst\":\"findFirstdispositivos\",\"findFirstOrThrow\":\"findFirstdispositivosOrThrow\",\"findMany\":\"findManydispositivos\",\"create\":\"createOnedispositivos\",\"createMany\":\"createManydispositivos\",\"delete\":\"deleteOnedispositivos\",\"update\":\"updateOnedispositivos\",\"deleteMany\":\"deleteManydispositivos\",\"updateMany\":\"updateManydispositivos\",\"upsert\":\"upsertOnedispositivos\",\"aggregate\":\"aggregatedispositivos\",\"groupBy\":\"groupBydispositivos\"},{\"model\":\"gateway\",\"plural\":\"gateways\",\"findUnique\":\"findUniquegateway\",\"findUniqueOrThrow\":\"findUniquegatewayOrThrow\",\"findFirst\":\"findFirstgateway\",\"findFirstOrThrow\":\"findFirstgatewayOrThrow\",\"findMany\":\"findManygateway\",\"create\":\"createOnegateway\",\"createMany\":\"createManygateway\",\"delete\":\"deleteOnegateway\",\"update\":\"updateOnegateway\",\"deleteMany\":\"deleteManygateway\",\"updateMany\":\"updateManygateway\",\"upsert\":\"upsertOnegateway\",\"aggregate\":\"aggregategateway\",\"groupBy\":\"groupBygateway\"},{\"model\":\"gruposdispositivos\",\"plural\":\"gruposdispositivos\",\"findUnique\":\"findUniquegruposdispositivos\",\"findUniqueOrThrow\":\"findUniquegruposdispositivosOrThrow\",\"findFirst\":\"findFirstgruposdispositivos\",\"findFirstOrThrow\":\"findFirstgruposdispositivosOrThrow\",\"findMany\":\"findManygruposdispositivos\",\"create\":\"createOnegruposdispositivos\",\"createMany\":\"createManygruposdispositivos\",\"delete\":\"deleteOnegruposdispositivos\",\"update\":\"updateOnegruposdispositivos\",\"deleteMany\":\"deleteManygruposdispositivos\",\"updateMany\":\"updateManygruposdispositivos\",\"upsert\":\"upsertOnegruposdispositivos\",\"aggregate\":\"aggregategruposdispositivos\",\"groupBy\":\"groupBygruposdispositivos\"},{\"model\":\"inventariocatastro\",\"plural\":\"inventariocatastros\",\"findUnique\":\"findUniqueinventariocatastro\",\"findUniqueOrThrow\":\"findUniqueinventariocatastroOrThrow\",\"findFirst\":\"findFirstinventariocatastro\",\"findFirstOrThrow\":\"findFirstinventariocatastroOrThrow\",\"findMany\":\"findManyinventariocatastro\",\"create\":\"createOneinventariocatastro\",\"createMany\":\"createManyinventariocatastro\",\"delete\":\"deleteOneinventariocatastro\",\"update\":\"updateOneinventariocatastro\",\"deleteMany\":\"deleteManyinventariocatastro\",\"updateMany\":\"updateManyinventariocatastro\",\"upsert\":\"upsertOneinventariocatastro\",\"aggregate\":\"aggregateinventariocatastro\",\"groupBy\":\"groupByinventariocatastro\"},{\"model\":\"libreriasapis\",\"plural\":\"libreriasapis\",\"findUnique\":\"findUniquelibreriasapis\",\"findUniqueOrThrow\":\"findUniquelibreriasapisOrThrow\",\"findFirst\":\"findFirstlibreriasapis\",\"findFirstOrThrow\":\"findFirstlibreriasapisOrThrow\",\"findMany\":\"findManylibreriasapis\",\"create\":\"createOnelibreriasapis\",\"createMany\":\"createManylibreriasapis\",\"delete\":\"deleteOnelibreriasapis\",\"update\":\"updateOnelibreriasapis\",\"deleteMany\":\"deleteManylibreriasapis\",\"updateMany\":\"updateManylibreriasapis\",\"upsert\":\"upsertOnelibreriasapis\",\"aggregate\":\"aggregatelibreriasapis\",\"groupBy\":\"groupBylibreriasapis\"},{\"model\":\"metodogrupo\",\"plural\":\"metodogrupos\",\"findUnique\":\"findUniquemetodogrupo\",\"findUniqueOrThrow\":\"findUniquemetodogrupoOrThrow\",\"findFirst\":\"findFirstmetodogrupo\",\"findFirstOrThrow\":\"findFirstmetodogrupoOrThrow\",\"findMany\":\"findManymetodogrupo\",\"create\":\"createOnemetodogrupo\",\"createMany\":\"createManymetodogrupo\",\"delete\":\"deleteOnemetodogrupo\",\"update\":\"updateOnemetodogrupo\",\"deleteMany\":\"deleteManymetodogrupo\",\"updateMany\":\"updateManymetodogrupo\",\"upsert\":\"upsertOnemetodogrupo\",\"aggregate\":\"aggregatemetodogrupo\",\"groupBy\":\"groupBymetodogrupo\"},{\"model\":\"metodos\",\"plural\":\"metodos\",\"findUnique\":\"findUniquemetodos\",\"findUniqueOrThrow\":\"findUniquemetodosOrThrow\",\"findFirst\":\"findFirstmetodos\",\"findFirstOrThrow\":\"findFirstmetodosOrThrow\",\"findMany\":\"findManymetodos\",\"create\":\"createOnemetodos\",\"createMany\":\"createManymetodos\",\"delete\":\"deleteOnemetodos\",\"update\":\"updateOnemetodos\",\"deleteMany\":\"deleteManymetodos\",\"updateMany\":\"updateManymetodos\",\"upsert\":\"upsertOnemetodos\",\"aggregate\":\"aggregatemetodos\",\"groupBy\":\"groupBymetodos\"},{\"model\":\"objetosplanimetria\",\"plural\":\"objetosplanimetrias\",\"findUnique\":\"findUniqueobjetosplanimetria\",\"findUniqueOrThrow\":\"findUniqueobjetosplanimetriaOrThrow\",\"findFirst\":\"findFirstobjetosplanimetria\",\"findFirstOrThrow\":\"findFirstobjetosplanimetriaOrThrow\",\"findMany\":\"findManyobjetosplanimetria\",\"create\":\"createOneobjetosplanimetria\",\"createMany\":\"createManyobjetosplanimetria\",\"delete\":\"deleteOneobjetosplanimetria\",\"update\":\"updateOneobjetosplanimetria\",\"deleteMany\":\"deleteManyobjetosplanimetria\",\"updateMany\":\"updateManyobjetosplanimetria\",\"upsert\":\"upsertOneobjetosplanimetria\",\"aggregate\":\"aggregateobjetosplanimetria\",\"groupBy\":\"groupByobjetosplanimetria\"},{\"model\":\"reldispositivodispositivo\",\"plural\":\"reldispositivodispositivos\",\"findUnique\":\"findUniquereldispositivodispositivo\",\"findUniqueOrThrow\":\"findUniquereldispositivodispositivoOrThrow\",\"findFirst\":\"findFirstreldispositivodispositivo\",\"findFirstOrThrow\":\"findFirstreldispositivodispositivoOrThrow\",\"findMany\":\"findManyreldispositivodispositivo\",\"create\":\"createOnereldispositivodispositivo\",\"createMany\":\"createManyreldispositivodispositivo\",\"delete\":\"deleteOnereldispositivodispositivo\",\"update\":\"updateOnereldispositivodispositivo\",\"deleteMany\":\"deleteManyreldispositivodispositivo\",\"updateMany\":\"updateManyreldispositivodispositivo\",\"upsert\":\"upsertOnereldispositivodispositivo\",\"aggregate\":\"aggregatereldispositivodispositivo\",\"groupBy\":\"groupByreldispositivodispositivo\"},{\"model\":\"reldispositivogateway\",\"plural\":\"reldispositivogateways\",\"findUnique\":\"findUniquereldispositivogateway\",\"findUniqueOrThrow\":\"findUniquereldispositivogatewayOrThrow\",\"findFirst\":\"findFirstreldispositivogateway\",\"findFirstOrThrow\":\"findFirstreldispositivogatewayOrThrow\",\"findMany\":\"findManyreldispositivogateway\",\"create\":\"createOnereldispositivogateway\",\"createMany\":\"createManyreldispositivogateway\",\"delete\":\"deleteOnereldispositivogateway\",\"update\":\"updateOnereldispositivogateway\",\"deleteMany\":\"deleteManyreldispositivogateway\",\"updateMany\":\"updateManyreldispositivogateway\",\"upsert\":\"upsertOnereldispositivogateway\",\"aggregate\":\"aggregatereldispositivogateway\",\"groupBy\":\"groupByreldispositivogateway\"},{\"model\":\"reldispositivogrupodispositivo\",\"plural\":\"reldispositivogrupodispositivos\",\"findUnique\":\"findUniquereldispositivogrupodispositivo\",\"findUniqueOrThrow\":\"findUniquereldispositivogrupodispositivoOrThrow\",\"findFirst\":\"findFirstreldispositivogrupodispositivo\",\"findFirstOrThrow\":\"findFirstreldispositivogrupodispositivoOrThrow\",\"findMany\":\"findManyreldispositivogrupodispositivo\",\"create\":\"createOnereldispositivogrupodispositivo\",\"createMany\":\"createManyreldispositivogrupodispositivo\",\"delete\":\"deleteOnereldispositivogrupodispositivo\",\"update\":\"updateOnereldispositivogrupodispositivo\",\"deleteMany\":\"deleteManyreldispositivogrupodispositivo\",\"updateMany\":\"updateManyreldispositivogrupodispositivo\",\"upsert\":\"upsertOnereldispositivogrupodispositivo\",\"aggregate\":\"aggregatereldispositivogrupodispositivo\",\"groupBy\":\"groupByreldispositivogrupodispositivo\"},{\"model\":\"reldispositivoperfildispositivo\",\"plural\":\"reldispositivoperfildispositivos\",\"findUnique\":\"findUniquereldispositivoperfildispositivo\",\"findUniqueOrThrow\":\"findUniquereldispositivoperfildispositivoOrThrow\",\"findFirst\":\"findFirstreldispositivoperfildispositivo\",\"findFirstOrThrow\":\"findFirstreldispositivoperfildispositivoOrThrow\",\"findMany\":\"findManyreldispositivoperfildispositivo\",\"create\":\"createOnereldispositivoperfildispositivo\",\"createMany\":\"createManyreldispositivoperfildispositivo\",\"delete\":\"deleteOnereldispositivoperfildispositivo\",\"update\":\"updateOnereldispositivoperfildispositivo\",\"deleteMany\":\"deleteManyreldispositivoperfildispositivo\",\"updateMany\":\"updateManyreldispositivoperfildispositivo\",\"upsert\":\"upsertOnereldispositivoperfildispositivo\",\"aggregate\":\"aggregatereldispositivoperfildispositivo\",\"groupBy\":\"groupByreldispositivoperfildispositivo\"},{\"model\":\"reldispositivoplantillaanalogica\",\"plural\":\"reldispositivoplantillaanalogicas\",\"findUnique\":\"findUniquereldispositivoplantillaanalogica\",\"findUniqueOrThrow\":\"findUniquereldispositivoplantillaanalogicaOrThrow\",\"findFirst\":\"findFirstreldispositivoplantillaanalogica\",\"findFirstOrThrow\":\"findFirstreldispositivoplantillaanalogicaOrThrow\",\"findMany\":\"findManyreldispositivoplantillaanalogica\",\"create\":\"createOnereldispositivoplantillaanalogica\",\"createMany\":\"createManyreldispositivoplantillaanalogica\",\"delete\":\"deleteOnereldispositivoplantillaanalogica\",\"update\":\"updateOnereldispositivoplantillaanalogica\",\"deleteMany\":\"deleteManyreldispositivoplantillaanalogica\",\"updateMany\":\"updateManyreldispositivoplantillaanalogica\",\"upsert\":\"upsertOnereldispositivoplantillaanalogica\",\"aggregate\":\"aggregatereldispositivoplantillaanalogica\",\"groupBy\":\"groupByreldispositivoplantillaanalogica\"},{\"model\":\"reldispositivopuerta\",\"plural\":\"reldispositivopuertas\",\"findUnique\":\"findUniquereldispositivopuerta\",\"findUniqueOrThrow\":\"findUniquereldispositivopuertaOrThrow\",\"findFirst\":\"findFirstreldispositivopuerta\",\"findFirstOrThrow\":\"findFirstreldispositivopuertaOrThrow\",\"findMany\":\"findManyreldispositivopuerta\",\"create\":\"createOnereldispositivopuerta\",\"createMany\":\"createManyreldispositivopuerta\",\"delete\":\"deleteOnereldispositivopuerta\",\"update\":\"updateOnereldispositivopuerta\",\"deleteMany\":\"deleteManyreldispositivopuerta\",\"updateMany\":\"updateManyreldispositivopuerta\",\"upsert\":\"upsertOnereldispositivopuerta\",\"aggregate\":\"aggregatereldispositivopuerta\",\"groupBy\":\"groupByreldispositivopuerta\"},{\"model\":\"reldispositivosubsistema\",\"plural\":\"reldispositivosubsistemas\",\"findUnique\":\"findUniquereldispositivosubsistema\",\"findUniqueOrThrow\":\"findUniquereldispositivosubsistemaOrThrow\",\"findFirst\":\"findFirstreldispositivosubsistema\",\"findFirstOrThrow\":\"findFirstreldispositivosubsistemaOrThrow\",\"findMany\":\"findManyreldispositivosubsistema\",\"create\":\"createOnereldispositivosubsistema\",\"createMany\":\"createManyreldispositivosubsistema\",\"delete\":\"deleteOnereldispositivosubsistema\",\"update\":\"updateOnereldispositivosubsistema\",\"deleteMany\":\"deleteManyreldispositivosubsistema\",\"updateMany\":\"updateManyreldispositivosubsistema\",\"upsert\":\"upsertOnereldispositivosubsistema\",\"aggregate\":\"aggregatereldispositivosubsistema\",\"groupBy\":\"groupByreldispositivosubsistema\"},{\"model\":\"reldispositivotipoevento\",\"plural\":\"reldispositivotipoeventos\",\"findUnique\":\"findUniquereldispositivotipoevento\",\"findUniqueOrThrow\":\"findUniquereldispositivotipoeventoOrThrow\",\"findFirst\":\"findFirstreldispositivotipoevento\",\"findFirstOrThrow\":\"findFirstreldispositivotipoeventoOrThrow\",\"findMany\":\"findManyreldispositivotipoevento\",\"create\":\"createOnereldispositivotipoevento\",\"createMany\":\"createManyreldispositivotipoevento\",\"delete\":\"deleteOnereldispositivotipoevento\",\"update\":\"updateOnereldispositivotipoevento\",\"deleteMany\":\"deleteManyreldispositivotipoevento\",\"updateMany\":\"updateManyreldispositivotipoevento\",\"upsert\":\"upsertOnereldispositivotipoevento\",\"aggregate\":\"aggregatereldispositivotipoevento\",\"groupBy\":\"groupByreldispositivotipoevento\"},{\"model\":\"reldispositivozona\",\"plural\":\"reldispositivozonas\",\"findUnique\":\"findUniquereldispositivozona\",\"findUniqueOrThrow\":\"findUniquereldispositivozonaOrThrow\",\"findFirst\":\"findFirstreldispositivozona\",\"findFirstOrThrow\":\"findFirstreldispositivozonaOrThrow\",\"findMany\":\"findManyreldispositivozona\",\"create\":\"createOnereldispositivozona\",\"createMany\":\"createManyreldispositivozona\",\"delete\":\"deleteOnereldispositivozona\",\"update\":\"updateOnereldispositivozona\",\"deleteMany\":\"deleteManyreldispositivozona\",\"updateMany\":\"updateManyreldispositivozona\",\"upsert\":\"upsertOnereldispositivozona\",\"aggregate\":\"aggregatereldispositivozona\",\"groupBy\":\"groupByreldispositivozona\"},{\"model\":\"reltipocontroladormetodo\",\"plural\":\"reltipocontroladormetodos\",\"findUnique\":\"findUniquereltipocontroladormetodo\",\"findUniqueOrThrow\":\"findUniquereltipocontroladormetodoOrThrow\",\"findFirst\":\"findFirstreltipocontroladormetodo\",\"findFirstOrThrow\":\"findFirstreltipocontroladormetodoOrThrow\",\"findMany\":\"findManyreltipocontroladormetodo\",\"create\":\"createOnereltipocontroladormetodo\",\"createMany\":\"createManyreltipocontroladormetodo\",\"delete\":\"deleteOnereltipocontroladormetodo\",\"update\":\"updateOnereltipocontroladormetodo\",\"deleteMany\":\"deleteManyreltipocontroladormetodo\",\"updateMany\":\"updateManyreltipocontroladormetodo\",\"upsert\":\"upsertOnereltipocontroladormetodo\",\"aggregate\":\"aggregatereltipocontroladormetodo\",\"groupBy\":\"groupByreltipocontroladormetodo\"},{\"model\":\"reltipodispositivoperfildispositivo\",\"plural\":\"reltipodispositivoperfildispositivos\",\"findUnique\":\"findUniquereltipodispositivoperfildispositivo\",\"findUniqueOrThrow\":\"findUniquereltipodispositivoperfildispositivoOrThrow\",\"findFirst\":\"findFirstreltipodispositivoperfildispositivo\",\"findFirstOrThrow\":\"findFirstreltipodispositivoperfildispositivoOrThrow\",\"findMany\":\"findManyreltipodispositivoperfildispositivo\",\"create\":\"createOnereltipodispositivoperfildispositivo\",\"createMany\":\"createManyreltipodispositivoperfildispositivo\",\"delete\":\"deleteOnereltipodispositivoperfildispositivo\",\"update\":\"updateOnereltipodispositivoperfildispositivo\",\"deleteMany\":\"deleteManyreltipodispositivoperfildispositivo\",\"updateMany\":\"updateManyreltipodispositivoperfildispositivo\",\"upsert\":\"upsertOnereltipodispositivoperfildispositivo\",\"aggregate\":\"aggregatereltipodispositivoperfildispositivo\",\"groupBy\":\"groupByreltipodispositivoperfildispositivo\"},{\"model\":\"reltipodispositivoperfilevento\",\"plural\":\"reltipodispositivoperfileventos\",\"findUnique\":\"findUniquereltipodispositivoperfilevento\",\"findUniqueOrThrow\":\"findUniquereltipodispositivoperfileventoOrThrow\",\"findFirst\":\"findFirstreltipodispositivoperfilevento\",\"findFirstOrThrow\":\"findFirstreltipodispositivoperfileventoOrThrow\",\"findMany\":\"findManyreltipodispositivoperfilevento\",\"create\":\"createOnereltipodispositivoperfilevento\",\"createMany\":\"createManyreltipodispositivoperfilevento\",\"delete\":\"deleteOnereltipodispositivoperfilevento\",\"update\":\"updateOnereltipodispositivoperfilevento\",\"deleteMany\":\"deleteManyreltipodispositivoperfilevento\",\"updateMany\":\"updateManyreltipodispositivoperfilevento\",\"upsert\":\"upsertOnereltipodispositivoperfilevento\",\"aggregate\":\"aggregatereltipodispositivoperfilevento\",\"groupBy\":\"groupByreltipodispositivoperfilevento\"},{\"model\":\"reltipodispositivotipotecnologia\",\"plural\":\"reltipodispositivotipotecnologias\",\"findUnique\":\"findUniquereltipodispositivotipotecnologia\",\"findUniqueOrThrow\":\"findUniquereltipodispositivotipotecnologiaOrThrow\",\"findFirst\":\"findFirstreltipodispositivotipotecnologia\",\"findFirstOrThrow\":\"findFirstreltipodispositivotipotecnologiaOrThrow\",\"findMany\":\"findManyreltipodispositivotipotecnologia\",\"create\":\"createOnereltipodispositivotipotecnologia\",\"createMany\":\"createManyreltipodispositivotipotecnologia\",\"delete\":\"deleteOnereltipodispositivotipotecnologia\",\"update\":\"updateOnereltipodispositivotipotecnologia\",\"deleteMany\":\"deleteManyreltipodispositivotipotecnologia\",\"updateMany\":\"updateManyreltipodispositivotipotecnologia\",\"upsert\":\"upsertOnereltipodispositivotipotecnologia\",\"aggregate\":\"aggregatereltipodispositivotipotecnologia\",\"groupBy\":\"groupByreltipodispositivotipotecnologia\"},{\"model\":\"reltipogatewayperfildispositivo\",\"plural\":\"reltipogatewayperfildispositivos\",\"findUnique\":\"findUniquereltipogatewayperfildispositivo\",\"findUniqueOrThrow\":\"findUniquereltipogatewayperfildispositivoOrThrow\",\"findFirst\":\"findFirstreltipogatewayperfildispositivo\",\"findFirstOrThrow\":\"findFirstreltipogatewayperfildispositivoOrThrow\",\"findMany\":\"findManyreltipogatewayperfildispositivo\",\"create\":\"createOnereltipogatewayperfildispositivo\",\"createMany\":\"createManyreltipogatewayperfildispositivo\",\"delete\":\"deleteOnereltipogatewayperfildispositivo\",\"update\":\"updateOnereltipogatewayperfildispositivo\",\"deleteMany\":\"deleteManyreltipogatewayperfildispositivo\",\"updateMany\":\"updateManyreltipogatewayperfildispositivo\",\"upsert\":\"upsertOnereltipogatewayperfildispositivo\",\"aggregate\":\"aggregatereltipogatewayperfildispositivo\",\"groupBy\":\"groupByreltipogatewayperfildispositivo\"},{\"model\":\"subsistemas\",\"plural\":\"subsistemas\",\"findUnique\":\"findUniquesubsistemas\",\"findUniqueOrThrow\":\"findUniquesubsistemasOrThrow\",\"findFirst\":\"findFirstsubsistemas\",\"findFirstOrThrow\":\"findFirstsubsistemasOrThrow\",\"findMany\":\"findManysubsistemas\",\"create\":\"createOnesubsistemas\",\"createMany\":\"createManysubsistemas\",\"delete\":\"deleteOnesubsistemas\",\"update\":\"updateOnesubsistemas\",\"deleteMany\":\"deleteManysubsistemas\",\"updateMany\":\"updateManysubsistemas\",\"upsert\":\"upsertOnesubsistemas\",\"aggregate\":\"aggregatesubsistemas\",\"groupBy\":\"groupBysubsistemas\"},{\"model\":\"tablasinformacion\",\"plural\":\"tablasinformacions\",\"findUnique\":\"findUniquetablasinformacion\",\"findUniqueOrThrow\":\"findUniquetablasinformacionOrThrow\",\"findFirst\":\"findFirsttablasinformacion\",\"findFirstOrThrow\":\"findFirsttablasinformacionOrThrow\",\"findMany\":\"findManytablasinformacion\",\"create\":\"createOnetablasinformacion\",\"createMany\":\"createManytablasinformacion\",\"delete\":\"deleteOnetablasinformacion\",\"update\":\"updateOnetablasinformacion\",\"deleteMany\":\"deleteManytablasinformacion\",\"updateMany\":\"updateManytablasinformacion\",\"upsert\":\"upsertOnetablasinformacion\",\"aggregate\":\"aggregatetablasinformacion\",\"groupBy\":\"groupBytablasinformacion\"},{\"model\":\"tecnologiasnetsocs\",\"plural\":\"tecnologiasnetsocs\",\"findUnique\":\"findUniquetecnologiasnetsocs\",\"findUniqueOrThrow\":\"findUniquetecnologiasnetsocsOrThrow\",\"findFirst\":\"findFirsttecnologiasnetsocs\",\"findFirstOrThrow\":\"findFirsttecnologiasnetsocsOrThrow\",\"findMany\":\"findManytecnologiasnetsocs\",\"create\":\"createOnetecnologiasnetsocs\",\"createMany\":\"createManytecnologiasnetsocs\",\"delete\":\"deleteOnetecnologiasnetsocs\",\"update\":\"updateOnetecnologiasnetsocs\",\"deleteMany\":\"deleteManytecnologiasnetsocs\",\"updateMany\":\"updateManytecnologiasnetsocs\",\"upsert\":\"upsertOnetecnologiasnetsocs\",\"aggregate\":\"aggregatetecnologiasnetsocs\",\"groupBy\":\"groupBytecnologiasnetsocs\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Gerso\\OneDrive\\Documentos\\Netsocs Software\\Alarma AXPRO\\Driver\\hikvision_alarm_driver\\src\\prisma\\generated\\netsocsx",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\..\\..\\.env",
    "schemaEnvPath": "..\\..\\..\\..\\.env"
  },
  "relativePath": "..\\..",
  "clientVersion": "4.7.1",
  "engineVersion": "ca7fcef713137fa11029d519a9780db130cca91d",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "src\\prisma\\generated\\netsocsx\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src\\prisma\\generated\\netsocsx\\schema.prisma")
