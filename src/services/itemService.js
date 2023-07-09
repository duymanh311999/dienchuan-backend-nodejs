import db from "../models/index";
import bcrypt from 'bcryptjs';

let checkItemName = (itemName) => {
    return new Promise(async (resolve, reject) => {
        try {
            let items = await db.Items.findOne({
                where: { name: itemName }
            })
            if (items) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e);
        }
    })
}


let getAllIems = (itemId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let items = '';
            if (itemId === 'ALL') {
                items = await db.Items.findAll({   
                    attributes: ['id','name', 'quantity', 'priceBeforeSale', 'priceAfterSale',
                     'image', 'descriptionHTML', 'typeOf'],
                })
            }
            if (itemId && itemId !== 'ALL') {
                items = await db.Items.findOne({
                    where: { id: itemId }
                })
            }

            resolve(items)

        } catch (e) {
            reject(e);
        }
    })
}


let createNewItem = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            //check name is exist ???
            let check = await checkItemName(data.name);
            if (check === true) {
                resolve({
                    errCode: 1,
                    errMessage: 'Sản phẩm này đã có sẵn, vui lòng đặt tên khác'
                })
            } else {    
                await db.Items.create({
                    name: data.name,
                    quantity: data.quantity,
                    priceBeforeSale: data.priceBeforeSale,
                    priceAfterSale: data.priceAfterSale,
                    descriptionHTML: data.descriptionHTML,
                    typeOf: data.typeOf,
                    image: data.avatar,
                })

                resolve({
                    errCode: 0,
                    message: 'OK'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let deleteItems = (itemId) => {
    return new Promise(async (resolve, reject) => {
        let foundItem = await db.Items.findOne({
            where: { id: itemId }
        })
        if (!foundItem) {
            resolve({
                errCode: 2,
                errMessage: `The item isn't exist`
            })
        }

        await db.Items.destroy({
            where: { id: itemId }
        })

        resolve({
            errCode: 0,
            message: `The item is deleted`
        })
    })
}

let updateItemsData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.typeOf) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameters'
                })
            }
            let items = await db.Items.findOne({
                where: { id: data.id },
                raw: false
            })
            if (items) {
                items.name = data.name;
                items.quantity = data.quantity;
                items.priceBeforeSale = data.priceBeforeSale;
                items.priceAfterSale = data.priceAfterSale;
                items.descriptionHTML = data.descriptionHTML;
                items.typeOf = data.typeOf;
                if (data.avatar) {
                    items.image = data.avatar;
                }

                await items.save();

                resolve({
                    errCode: 0,
                    message: 'Update the item succeeds!'
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: `Item's not found!`
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllCodeService = (typeInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!typeInput) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters !'
                })
            } else {
                let res = {};
                let allcode = await db.Allcode.findAll({
                    where: { type: typeInput }
                });
                res.errCode = 0;
                res.data = allcode;
                resolve(res);
            }


        } catch (e) {
            reject(e);
        }
    })
}

let getItemsHome = (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {

            let items = await db.Items.findAll({
                limit: limitInput,
                where: { typeOf: 'Cây lăn' },
                order: [['createdAt', 'DESC']],
                attributes: ['id','name', 'quantity', 'priceBeforeSale', 'priceAfterSale',
                     'image', 'descriptionHTML', 'typeOf'],
                // include: [
                //     { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
                //     { model: db.Allcode, as: 'genderData', attributes: ['valueEn', 'valueVi'] }
                // ],
                raw: true,
                nest: true
            })

            resolve({
                errCode: 0,
                data: items
            })

        } catch (e) {
            reject(e);
        }
    })
}

let getAllItemsName = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let items = await db.Items.findAll({
                attributes: ['id','name'],
            })

            resolve({
                errCode: 0,
                data: items
            })
        } catch (e) {
            reject(e)
        }
    })
}

let postInforItemsName = (inputData) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (!inputData.itemId || !inputData.contentHTML || !inputData.contentMarkdown) {
            resolve({
                errCode: 1,
                errMessage: 'Missing required parameter!'
            })
        }else{
            await db.Markdown.create({
                contentHTML: inputData.contentHTML,
                contentMarkdown: inputData.contentMarkdown,
                itemId: inputData.itemId
            })
            resolve({
                errCode: 0,
                errMessage: 'Save items succeed!'
            })
        }
      }catch(e){
        reject(e)
      }
    })
}



module.exports = {
    getAllCodeService: getAllCodeService,


    createNewItem:createNewItem,
    getAllIems: getAllIems,
    deleteItems: deleteItems,
    getItemsHome: getItemsHome,
    getAllItemsName: getAllItemsName,
    postInforItemsName: postInforItemsName,
    updateItemsData: updateItemsData,
}