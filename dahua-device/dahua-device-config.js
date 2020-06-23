module.exports = function (RED) {
    function DahuaDeviceConfigNode(config) {
        RED.nodes.createNode(this, config);

        this.ipaddress = config.ipaddress;
        this.port = config.port;
        this.events = config.events;        
        if (this.credentials) {
            this.username = this.credentials.username;
            this.password = this.credentials.password;
        }
    }

    RED.nodes.registerType("dahua-device-config", DahuaDeviceConfigNode, {
        credentials: {
            username: {type: "text"},
            password: {type: "password"}
        }
    });
};
