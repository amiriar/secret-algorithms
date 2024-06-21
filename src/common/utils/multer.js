const multer = require("multer");
const path = require("path");
const fs = require("fs");
const createError = require("http-errors");
const moment = require("jalali-moment")
const { v4: uuidv4 } = require('uuid');

function createRoute(req) {
  const date = moment();
  const jalaliDate = date.format('jYYYY/jM/jD');
  const [year, month, day] = jalaliDate.split('/');
  
  // const directory = path.join(
  //   __dirname,
  //   "..",
  //   "..",
  //   "..",
  //   "public",
  //   "uploads",
  //   year,
  //   month,
  //   day
  // );
  const directory = path.join(
    __dirname,
    "..",
    "..",
    "public",
    "uploads",
    year,
    month,
    day
  );
  req.body.fileUploadPath = path.join("assets", "uploads", year, month, day);
  fs.mkdirSync(directory, { recursive: true });
  return directory;
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file?.originalname) {
      const filePath = createRoute(req);
      return cb(null, filePath);
    }
    cb(null, null);
  },
  filename: (req, file, cb) => {
    if (file.originalname) {
      const ext = path.extname(file.originalname);
      const fileName = uuidv4() + ext;
      req.body.filename = fileName;
      return cb(null, fileName);
    }
    cb(null, null);
  },
});
function fileFilter(req, file, cb) {
  const ext = path.extname(file.originalname).toLowerCase();
  const mimetypes = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
  if (mimetypes.includes(ext)) {
    return cb(null, true);
  }
  return cb(createError.BadRequest("فرمت ارسال شده تصویر صحیح نمیباشد"));
}
function ResumeFilter(req, file, cb) {
  const ext = path.extname(file.originalname).toLowerCase();
  const mimetypes = [".pdf", ".docx", ".html", ".jpg", ".jpeg", ".png", ".webp", ".gif"];
  if (mimetypes.includes(ext)) {
    return cb(null, true);
  }
  return cb(createError.BadRequest("فرمت ارسال شده تصویر صحیح نمیباشد"));
}
function videoFilter(req, file, cb) {
  const ext = path.extname(file.originalname).toLowerCase();
  const mimetypes = [".mp4", ".mpg", ".mov", ".avi", ".mkv"];
  if (mimetypes.includes(ext)) {
    return cb(null, true);
  }
  return cb(createError.BadRequest("فرمت ارسال شده ویدیو صحیح نمیباشد"));
}
const pictureMaxSize = 10 * 1000 * 1000;
const videoMaxSize = 50 * 1000 * 1000;
const uploadFile = multer({ storage, fileFilter, limits: { fileSize: pictureMaxSize } }); 
const uploadResume = multer({ storage, ResumeFilter, limits: { fileSize: pictureMaxSize } }); 
const uploadVideo = multer({ storage, videoFilter, limits: { fileSize: videoMaxSize } }); 
module.exports = {
  uploadFile,
  uploadVideo,
  uploadResume
};
