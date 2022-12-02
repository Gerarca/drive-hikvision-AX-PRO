exports.URLEvents = {
    GetEvents:          `/ISAPI/Event/notification/subscribeDeviceMgmt?format=json`,
};

exports.URLDeleteSubscribeEvents = (ID) => (
    `/ISAPI/Event/notification/unSubscribeDeviceMgmt/1/devIndex/${ID}?format=json`
);



