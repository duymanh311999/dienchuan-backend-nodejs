import itemService from "../services/itemService";


let handleGetAllItem = async (req, res) => {
    let id = req.query.id; //ALL, id

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            items: []
        })
    }


    let items = await itemService.getAllIems(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        items
    })
}


let handleCreateNewItem = async (req, res) => {
    let message = await itemService.createNewItem(req.body);
    return res.status(200).json(message);
}

let handleDeleteItems = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters!"
        })
    }
    let message = await itemService.deleteItems(req.body.id);
    return res.status(200).json(message);
}


let getAllCode = async (req, res) => {
    try {
        let data = await itemService.getAllCodeService(req.query.type);
        return res.status(200).json(data);
    } catch (e) {
        console.log('Get all code error: ', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let getAllCodeItems = async (req, res) => {
    try {
        let data = await itemService.getAllCodeService(req.query.type);
        return res.status(200).json(data);
    } catch (e) {
        console.log('Get all code error: ', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let getItemCayLan = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        let response = await itemService.getItemsHomeCayLan(+limit);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let getItemQueDo = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        let response = await itemService.getItemsHomeQueDo(+limit);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let getItemThietBi = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        let response = await itemService.getItemsHomeThietBi(+limit);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let getItemSach = async (req, res) => {
    let limit = req.query.limit;
    if (!limit) limit = 10;
    try {
        let response = await itemService.getItemsHomeSach(+limit);
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}


let getAllItemsName = async (req, res) => {
    try {
        let items = await itemService.getAllItemsName();
        return res.status(200).json(items)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let postInforItemsName = async (req, res) => {
    try {
        let items = await itemService.postInforItemsName(req.body);
        return res.status(200).json(items)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let handleEditItems = async (req, res) => {
    let data = req.body;
    let message = await itemService.updateItemsData(data);
    return res.status(200).json(message)
}


let getDetailItemsById = async (req, res) => {
    try {
        let infor = await itemService.getDetailItemsById(req.query.id);
        return res.status(200).json(
            infor
        )

    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}


module.exports = {
    getAllCode: getAllCode,

    handleCreateNewItem:handleCreateNewItem,
    handleGetAllItem: handleGetAllItem,
    handleDeleteItems: handleDeleteItems,
    getAllCodeItems: getAllCodeItems,
    getItemCayLan: getItemCayLan,
    getItemQueDo: getItemQueDo,
    getItemThietBi: getItemThietBi,
    getItemSach: getItemSach,
    getAllItemsName: getAllItemsName,
    postInforItemsName: postInforItemsName,
    handleEditItems: handleEditItems,
    getDetailItemsById: getDetailItemsById,
}