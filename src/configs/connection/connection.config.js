/* eslint-disable no-useless-catch */
const { default: consola } = require("consola");
const database = require("../../models/sequelize.model");
const configs = require("../configs");

// Initialize database connection
module.exports = async () => {
  try {
    await database.sequelize.sync();
    consola.success({
      message: `✅ Database synced successfully (${configs.DATABASE})`,
      badge: true,
    });
  } catch (error) {
    throw error;
  }
};
