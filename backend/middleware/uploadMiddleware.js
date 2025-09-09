const multer = require("multer");

//configuring multer storage

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// file filter
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg"];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only .JPEG, .JPG, .PNG files are allowed"), false);
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;