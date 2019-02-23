

var parseString = require('react-native-xml2js').parseString;
class LoginService {

    login(username, password, cb) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', 'https://soastagex.emaar.com/soa-infra/services/sales/IPhoneAuthenticateUserProject/authenticateuserbpelprocess_client_ep', true, 'testuser', 'testuser123');

        // build SOAP request
        let sr = '<?xml version="1.0" encoding="utf-8"?>' +
            '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:aut="http://xmlns.oracle.com/iPhone/IPhoneAuthenticateUserProject/AuthenticateUserBPELProcess"> ' +
            '<soapenv:Header/>' +
            '<soapenv:Body>' +
            '<aut:AuthenticateUserRequest>' +
            ' <aut:userName> ' + username + '</aut:userName>' +
            ' <aut:passWord>' + password + '</aut:passWord>' +
            '<aut:isDetailsReq>Y</aut:isDetailsReq>' +
            '</aut:AuthenticateUserRequest>' +
            '</soapenv:Body>' +
            '</soapenv:Envelope>';

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    parseString(xmlhttp.responseText, function (err, result) {
                        if (err !== null) {
                           // alert("Error while parsing XML");
                           cb("Error while parsing XML");
                        } else {
                           // alert(result["env:Envelope"]["env:Body"][0]['AuthenticateUserResponse'][0]['accountStatus'][0]);
                            cb(result["env:Envelope"]["env:Body"][0]['AuthenticateUserResponse'][0]['accountStatus'][0]);
                        }
                    });
                } else {
                    let response = `<env:Envelope xmlns:env="http://schemas.xmlsoap.org/soap/envelope/" xmlns:wsa="http://www.w3.org/2005/08/addressing">

                                            <env:Header>

                                            <wsa:MessageID>urn:97e58284-3358-11e9-8891-000000000002</wsa:MessageID>

                                            <wsa:ReplyTo>

                                                <wsa:Address>http://www.w3.org/2005/08/addressing/anonymous</wsa:Address>

                                                <wsa:ReferenceParameters>

                                                    <instra:tracking.ecid xmlns:instra="http://xmlns.oracle.com/sca/tracking/1.0">0000KXdv9PpFw00Fzzw0w00001Na00027u</instra:tracking.ecid>

                                                    <instra:tracking.FlowEventId xmlns:instra="http://xmlns.oracle.com/sca/tracking/1.0">190164</instra:tracking.FlowEventId>

                                                    <instra:tracking.FlowId xmlns:instra="http://xmlns.oracle.com/sca/tracking/1.0">150015</instra:tracking.FlowId>

                                                    <instra:tracking.CorrelationFlowId xmlns:instra="http://xmlns.oracle.com/sca/tracking/1.0">0000MZzkTbzFw000jzwkno1SQNA200000I</instra:tracking.CorrelationFlowId>

                                                    <instra:tracking.quiescing.SCAEntityId xmlns:instra="http://xmlns.oracle.com/sca/tracking/1.0">15603</instra:tracking.quiescing.SCAEntityId>

                                                </wsa:ReferenceParameters>

                                            </wsa:ReplyTo>

                                            <wsa:FaultTo>

                                                <wsa:Address>http://www.w3.org/2005/08/addressing/anonymous</wsa:Address>

                                            </wsa:FaultTo>

                                            </env:Header>

                                            <env:Body>

                                            <AuthenticateUserResponse xmlns="http://xmlns.oracle.com/iPhone/IPhoneAuthenticateUserProject/AuthenticateUserBPELProcess">

                                                <accountStatus>Please verify the username/password you have entered !</accountStatus>

                                                <isValidUser>false</isValidUser>

                                                <accountDetails>[]</accountDetails>

                                            </AuthenticateUserResponse>

                                            </env:Body>

                                            </env:Envelope>`;
                    parseString(response, function (err, result) {
                        if (err !== null) {
                            // alert("Error while parsing XML");
                            cb("Error while parsing XML");
                         } else {
                            // alert(result["env:Envelope"]["env:Body"][0]['AuthenticateUserResponse'][0]['accountStatus'][0]);
                             cb(result["env:Envelope"]["env:Body"][0]['AuthenticateUserResponse'][0]['accountStatus'][0]);
                         }
                    });

                }
            }
        }
        // Send the POST request
        xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        xmlhttp.send(sr);
        // send request
        // ...
    }
}
const loginService = new LoginService();
export default loginService;