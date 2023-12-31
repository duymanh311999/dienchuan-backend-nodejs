import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";
import patientController from '../controllers/patientController';
import specialtyController from '../controllers/spcialtyController';
import clinicController from '../controllers/clinicController';
import itemController  from '../controllers/itemController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser); //restAPI
    router.get('/api/allcode', userController.getAllCode);

    // dien chuan

    router.get('/api/get-all-item', itemController.handleGetAllItem);
    router.post('/api/create-new-item', itemController.handleCreateNewItem);
    router.delete('/api/delete-item', itemController.handleDeleteItems);
    router.put('/api/edit-items', itemController.handleEditItems);
    router.get('/api/allcode-item', itemController.getAllCodeItems);

    router.get('/api/get-items-caylan', itemController.getItemCayLan);
    router.get('/api/get-items-quedo', itemController.getItemQueDo);
    router.get('/api/get-items-thietbi', itemController.getItemThietBi);
    router.get('/api/get-items-sach', itemController.getItemSach);

    router.get('/api/get-all-items-name', itemController.getAllItemsName);
    router.post('/api/save-infor-items-name', itemController.postInforItemsName);
    router.get('/api/get-detail-items-by-id', itemController.getDetailItemsById);


    router.get('/api/top-doctor-home', doctorController.getTopDoctorHome);
    router.get('/api/get-all-doctors', doctorController.getAllDoctors);
    router.post('/api/save-infor-doctors', doctorController.postInforDoctor);
    router.get('/api/get-detail-doctor-by-id', doctorController.getDetailDoctorById);
    router.post('/api/bulk-create-schedule', doctorController.bulkCreateSchedule);
    router.get('/api/get-schedule-doctor-by-date', doctorController.getScheduleByDate);
    router.get('/api/get-extra-infor-doctor-by-id', doctorController.getExraInforDoctorById);
    router.get('/api/get-profile-doctor-by-id', doctorController.getProfileDoctorById);

    router.get('/api/get-list-patient-for-doctor', doctorController.getListPatientForDoctor)
    router.post('/api/send-remedy', doctorController.sendRemedy);


    router.post('/api/patient-book-appointment', patientController.postBookAppointment);
    router.post('/api/verify-book-appointment', patientController.postVerifyBookAppointment);

    router.post('/api/create-new-specialty', specialtyController.createSpecialty);
    router.get('/api/get-specialty', specialtyController.getAllSpecialty);
    router.get('/api/get-detail-specialty-by-id', specialtyController.getDetailSpecialtyById);


    router.post('/api/create-new-clinic', clinicController.createClinic);
    router.get('/api/get-clinic', clinicController.getAllClinic);
    router.get('/api/get-detail-clinic-by-id', clinicController.getDetailClinicById);



    return app.use("/", router);
}

module.exports = initWebRoutes;