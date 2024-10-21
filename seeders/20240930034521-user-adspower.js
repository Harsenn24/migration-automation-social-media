'use strict';
const fs = require('fs');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const files = JSON.parse(fs.readFileSync("./jsonfile/user.json"))

    let userFile = files.map((el) => {
      el.running = 1
      el.detail = "-"
      el.createdAt = Math.floor(new Date().getTime() / 1000)
      el.updatedAt = Math.floor(new Date().getTime() / 1000)
      el.active = 1
      return el
    })

    await queryInterface.bulkInsert('users', userFile, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
