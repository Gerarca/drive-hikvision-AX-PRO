exports.URLUsers = {
    GetListUSers:            `/ISAPI/Security/users?security=1&iv=42c91b1d96b41d033ae4ca1bd6d3c8d1?devIndex=`,
};

exports.RegisterUser = (id) => {
    `/ISAPI/Security/UserPermission/${id}&devIndex=`
}