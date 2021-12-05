const Product = require("../../../models/Product");

exports.insertProduct = async (req) => {
    try {
        // if (!req.body.categoryId || !req.body.brandId) {
        //     return "categoryOrBrandEmpty";
        // }
        let photoPath = req.files;
        //console.log(Object.values(pathes));
        let pathArray = Object.values(photoPath).map((a) => a.path);

        const newProduct = new Product({
            name: req.body.name,
            base_price: req.body.base_price,
            temp_price: req.body.temp_price,
            count: req.body.count,
            description: req.body.description,
            avtivityStatus: req.body.avtivityStatus,
            categoryId: req.body.categoryId,
            photo: pathArray,
            tagId: req.body.tagId,
            brandId: req.body.brandId,
        });

        const savedProduct = await newProduct.save();
        return savedProduct;
    } catch (e) {
        console.log(e);
        return "";
    }
};

exports.updateProduct = async (req) => {
    try {
        const productId = req.body.productId;
        const foundProduct = await Product.findByPk(productId);
        if (!foundProduct) {
            return "productNotFound";
        }
        const name = req.body.name ? req.body.name : foundProduct.name;

        const base_price = req.body.base_price
            ? req.body.base_price
            : foundProduct.base_price;

        const temp_price = req.body.temp_price
            ? req.body.temp_price
            : foundProduct.roleId;

        const count = req.body.count ? req.body.count : foundProduct.count;
        const description = req.body.description
            ? req.body.description
            : foundProduct.roleId;

        const photo = req.body.photo ? req.body.photo : foundProduct.photo;

        const activityStatus = req.body.activityStatus
            ? req.body.activityStatus
            : foundProduct.activityStatus;

        const upproduct = await Product.findByPk(productId).then((product) => {
            product.name = name;
            product.base_price = base_price;
            product.temp_price = temp_price;
            product.count = count;
            product.description = description;
            product.photo = photo;
            product.activityStatus = activityStatus;
            return product.save();
        });
        return upproduct;
    } catch (e) {
        console.log(e);
        return "";
    }
};
exports.destroyProduct = async (req) => {
    const productId = req.body.productId;
    // to do :nabayad az order ha pak she
    try {
        const product = await Product.destroy({
            where: {
                id: productId,
            },
        });
        if (product) return true;
        else return false;
    } catch (e) {
        console.log(e);
        return false;
    }
};
