const express = require("express");
const router = express.Router();
const rolePermissionController = require("../../../controller/admins/manage/role-permission");
const roleController = require("../../../controller/admins/manage/role");
const { verifyToken } = require("../../../middleware/verification/adminLoginVerify");

router.post("/role", verifyToken, roleController.store);

router.post("/role/addpermission", verifyToken, rolePermissionController.store);
router.get(
    "/role/:id/permissions",
    verifyToken,
    rolePermissionController.readRolePermission
);
router.get("/roles/:size/:page", verifyToken, roleController.index);
router.put("/role/:id", verifyToken, roleController.update);

module.exports = router;
// stor index update destory  show
