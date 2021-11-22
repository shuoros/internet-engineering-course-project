const loginService = require("../../services/customerService/login_signup");
const Response = require("../../services/response");

exports.login_register = async (req, res, next) => {
    try {
        const loginResponse = await loginService.login_signup(req);

        let response = new Response(200, "success", loginResponse);
        if (loginResponse != "") return res.status(200).send(response.handler());
        //res.status(200).send(res.locals.accessToken);
    } catch (e) {
        return res.status(500).send(e);
    }
};