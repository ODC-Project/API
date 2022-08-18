const mongoose = require("mongoose");
const CertificateSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId, //not sure
    ref: "User",
    required: false,//true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId, //not sure
    ref: "Course",
    required: false, //true
  },
});
let Certificate = mongoose.model("Certificate", CertificateSchema);
module.exports = Certificate;
