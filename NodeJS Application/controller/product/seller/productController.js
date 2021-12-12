const sellerProductService = require("../../../services/productService/seller/sellerService");
const dict = require("../../../resources/dict");
const Response = require("../../../services/responses/general");
const Can = require("../../../services/can/can");

exports.canAdmin = async (roleId, permissionTitle) => {
    const can = await Can.can(roleId, permissionTitle);
    if (!can) {
        return false;
    }
    return true;
};

exports.store = async (req, res, next) => {
    let response = new Response();
    //to do : check permission
    let permissionResult = false;
    if (req.admin)
        permissionResult = await this.canAdmin(req.admin.roleId, "add product");
    if (!permissionResult) {
        response.setStatus(403).setMessage("fail").setRes("notAllowed");
        return res.status(403).send(response.handler());
    }
    try {
        const insertProductResponse = await sellerProductService.insertProduct(req);
        if (insertProductResponse === "categoryOrBrandEmpty") {
            response.setStatus(400).setMessage("fail").setRes("categoryOrBrandEmpty");
            return res.status(400).send(response.handler());
        }
        if (insertProductResponse != "") {
            response.setStatus(200).setRes(insertProductResponse);
            return res.status(200).send(response.handler());
        }

        response.setStatus(404).setMessage("fail").setRes("failed");
        return res.status(404).send(response.handler());
    } catch (e) {
        return res.status(500).send(e);
    }
};

exports.update = async (req, res, next) => {
    let response = new Response();
    let permissionResult = false;
    if (req.admin)
        permissionResult = await this.canAdmin(req.admin.roleId, "update product");
    if (!permissionResult) {
        response.setStatus(403).setMessage("fail").setRes("notAllowed");
        return res.status(403).send(response.handler());
    }
    try {
        const updatedProductResponse = await sellerProductService.updateProduct(req);
        if (updatedProductResponse === "productNotFound") {
            response.setStatus(403).setMessage("fail").setRes("productNotFound");
            res.status(404).send(response.handler());
        }

        if (updatedProductResponse != "") {
            response.setStatus(200).setRes(updatedProductResponse);
            res.status(200).send(response.handler());
        }
    } catch (e) {
        return res.status(500).send(e);
    }
};
exports.destroy = async (req, res, next) => {
    let response = new Response();
    let permissionResult = false;
    if (req.admin)
        permissionResult = await this.canAdmin(req.admin.roleId, "delete product");
    if (!permissionResult) {
        response.setStatus(403).setMessage("fail").setRes("notAllowed");
        return res.status(403).send(response.handler());
    }
    try {
        const destroyProductResult = await sellerProductService.destroyProduct(req);
        if (destroyProductResult === true) {
            response.setStatus(200).setRes(dict.successfulRemove);
            return res.status(200).send(response.handler());
        } else {
            response.setStatus(403).setMessage("fail").setRes("productNotFound");
            res.status(404).send(response.handler());
        }
    } catch (e) {
        response.setStatus(400).setMessage("fail").setRes(e);
        return res.status(400).send(response.handler());
    }
};

exports.search = async (req, res, next) => {
    let response = new Response();
    let permissionResult = false;
    if (req.admin)
        permissionResult = await this.canAdmin(req.admin.roleId, "read product");
    if (!permissionResult) {
        response.setStatus(403).setMessage("fail").setRes("notAllowed");
        return res.status(403).send(response.handler());
    }
    try {
        const productSearchResponse = await sellerProductService.searchProducts(req);
        if (productSearchResponse != "")
            response.setStatus(200).setRes(productSearchResponse);
        return res.status(200).send(response.handler());
    } catch (e) {
        response.setStatus(400).setMessage("fail").setRes(e);
        return res.status(400).send(response.handler());
    }
};

exports.index = async (req, res, next) => {
    console.log("indexing");
    let response = new Response();
    let permissionResult = false;
    if (req.admin)
        permissionResult = await this.canAdmin(req.admin.roleId, "read product");
    if (!permissionResult) {
        response.setStatus(403).setMessage("fail").setRes("notAllowed");
        return res.status(403).send(response.handler());
    }
    try {
        const productIndexResponse = await sellerProductService.indexProducts(req);
        if (productIndexResponse != "")
            response.setStatus(200).setRes(productIndexResponse);
        return res.status(200).send(response.handler());
    } catch (e) {
        response.setStatus(400).setMessage("fail").setRes(e);
        return res.status(400).send(response.handler());
    }
};

exports.show = async (req, res, next) => {
    let response = new Response();
    let permissionResult = false;
    if (req.admin)
        permissionResult = await this.canAdmin(req.admin.roleId, "read product");
    if (!permissionResult) {
        response.setStatus(403).setMessage("fail").setRes("notAllowed");
        return res.status(403).send(response.handler());
    }
    try {
        const productshowResponse = await sellerProductService.getOneProduct(req);
        if (productshowResponse != "")
            response.setStatus(200).setRes(productshowResponse);
        return res.status(200).send(response.handler());
    } catch (e) {
        response.setStatus(400).setMessage("fail").setRes(e);
        return res.status(400).send(response.handler());
    }
};
