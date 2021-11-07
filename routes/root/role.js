const express = require("express");
const router = express.Router();
const rolePermissionService = require("../../services/role-permission");
const rolePermissionController = require("../../controller/root/role-permission");
const roleService = require("../../services/role");
const roleController = require("../../controller/root/role");

router.post("/role", roleService.insertRole, roleController.store);

router.post(
    "/role/addPermissiion",
    rolePermissionService.AssignPermission,
    rolePermissionController.store
);

module.exports = router;
// stor index update destory  show