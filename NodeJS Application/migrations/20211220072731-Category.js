"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */ queryInterface.createTable("categories", {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
                trim: true,
                unique: true,
            },
            photo: {
                type: Sequelize.STRING,
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return queryInterface.dropTable("categories");
    },
};