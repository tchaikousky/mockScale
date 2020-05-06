const db = require('./conn');

class Scale {
    constructor(id, userId, productId, startWeight, currentWeight, price) {
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.startWeight = startWeight;
        this.currentWeight = currentWeight;
        this.price = price;
    }

    static async getItems(userId) {
        try {
            const response = await db.any(`SELECT * FROM inventory WHERE userid = ${userId}`);
            return response;
        } catch (err) {
            console.error(err);
            return err;
        }
    }

    static async update(id, currentWeight) {
        try {
            const itemToUpdate = await db.any(`UPDATE inventory SET currentWeight = ${currentWeight} WHERE id = ${id} RETURNING id`);
            console.log(itemToUpdate)
            return itemToUpdate;     
        } catch (error) {
            console.error(error);
            return error;
        };
    };
}

module.exports = Scale;