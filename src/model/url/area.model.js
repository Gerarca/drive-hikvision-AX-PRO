exports.URLArea = {
    GetListArea:          `/ISAPI/SecurityCP/Configuration/subSys?format=json&devIndex=`,
    GetListZones:         `/ISAPI/SecurityCP/Configuration/zones?format=json&devIndex=`,
};

exports.URLPutNameArea = (id) => (
    `/ISAPI/SecurityCP/Configuration/subSys/${id}?format=json&devIndex=`
)




