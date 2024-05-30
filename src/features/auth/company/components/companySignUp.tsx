import React, { useEffect, useState } from "react";
import { FaCloudUploadAlt, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RootState, AppDispatch } from "../../../../store/store";
import {
  setField,
  setIsEmailVerified,
  setIsPhoneVerified,
  setFiles,
} from "../company_auth_slice";
import { signUpCompany } from "../company_auth_api";
import { setResponseMessage, clearResponseMessage } from "../responseSlice";

const SignUpForm: React.FC = () => {
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [logoUploaded, setLogoUploaded] = useState(false);
  const [legalDocumentUploaded, setLegalDocumentUploaded] = useState(false);
  const [businessRegisterUploaded, setBusinessRegisterUploaded] =
    useState(false);
  const [businessLicenseNoUploaded, setBusinessLicenseNoUploaded] =
    useState(false);
  const [vatNoUploaded, setVatNoUploaded] = useState(false);
  const [tinNoUploaded, setTinNoUploaded] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch: AppDispatch = useDispatch();
  const signup = useSelector((state: RootState) => state.form);
  const responseMessage = useSelector((state: RootState) => state.response);

  const { getRootProps: getRootProps1, getInputProps: getInputProps1 } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        dispatch(setFiles({ field: "legalDocument", file: acceptedFiles[0] }));
        console.log(acceptedFiles[0]);
        setLegalDocumentUploaded(true);
      },
    });

  const { getRootProps: getRootProps2, getInputProps: getInputProps2 } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        dispatch(setFiles({ field: "logo", file: acceptedFiles[0] }));
        setLogoUploaded(true);
      },
    });

  const handleFileChange =
    (field: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        console.log(e.target.files[0]);
        dispatch(setFiles({ field, file: e.target.files[0] }));

        if (field === "businessRegisterNo") {
          setBusinessRegisterUploaded(true);
        } else if (field === "businessLicenseNo") {
          setBusinessLicenseNoUploaded(true);
        } else if (field === "vatNo") {
          setVatNoUploaded(true);
        } else if (field === "tinNo") {
          setTinNoUploaded(true);
        }
      }
    };

  const handlePasswordMatch = () => {
    setIsPasswordMatch(signup.password === signup.confirmPassword);
  };

  useEffect(() => {
    handlePasswordMatch();
  }, [signup.confirmPassword]);

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};

    if (!signup.representativeName)
      newErrors.representativeName = "Representative Name is required.";
    if (!signup.email) newErrors.email = "Email is required.";
    if (!signup.phone) newErrors.phone = "Phone Number is required.";
    if (!signup.country) newErrors.country = "Country is required.";
    if (!signup.password) newErrors.password = "Password is required.";
    if (!signup.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required.";
    if (!signup.role) newErrors.role = "Role is required.";
    if (!legalDocumentUploaded)
      newErrors.legalDocument = "Legal Document is required.";
    if (!signup.companyName)
      newErrors.companyName = "Company Name is required.";
    if (!signup.businessRegistrationNumber)
      newErrors.businessRegistrationNumber =
        "Business Registration Number is required.";
    if (!businessRegisterUploaded)
      newErrors.businessRegisterNo =
        "Business Registration Certificate is required.";
    if (!signup.businessLicenseNumber)
      newErrors.businessLicenseNumber = "Business License Number is required.";
    if (!businessLicenseNoUploaded)
      newErrors.businessLicenseNo = "Business License Certificate is required.";
    if (!signup.tinNumber) newErrors.tinNumber = "TIN Number is required.";
    if (!tinNoUploaded) newErrors.tinNo = "TIN Certificate is required.";
    if (!signup.vatNumber) newErrors.vatNumber = "VAT Number is required.";
    if (!vatNoUploaded) newErrors.vatNo = "VAT Certificate is required.";
    if (!signup.yearOfEstablishment)
      newErrors.yearOfEstablishment = "Year of Establishment is required.";
    if (!signup.servicesProvided)
      newErrors.servicesProvided = "Services Provided is required.";
    if (!signup.address) newErrors.address = "Address is required.";
    if (!logoUploaded) newErrors.logo = "Company Logo is required.";

    return newErrors;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (Object.keys(newErrors).length !== 0) {
      try {
        const response = await signUpCompany(signup);

        if (response.status === 200) {
          dispatch(
            setResponseMessage({
              message: "Registration successful!",
              type: "success",
            })
          );
        } else {
          dispatch(
            setResponseMessage({
              message: `Registration failed. ${response.data}`,
              type: "error",
            })
          );
        }
        console.log(response);
      } catch (err) {
        console.log("Error:", err);
        dispatch(
          setResponseMessage({
            message: `Registration failed. "${err}`,
            type: "error",
          })
        );
      }

      // Hide the message after 3 seconds
      setTimeout(() => {
        dispatch(clearResponseMessage());
      }, 3000);
    } else {
      console.log("Validation failed");
    }
  };

  const verifyEmail = () => {
    // Implement email verification
    dispatch(setIsEmailVerified(true));
  };

  const verifyPhone = () => {
    // Implement phone verification
    dispatch(setIsPhoneVerified(true));
  };

  const handleInputChange =
    (field: any) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      dispatch(setField({ field, value: e.target.value }));
    };

  const handleChange = (date: Date | null) => {
    if (date) {
      dispatch(
        setField({ field: "yearOfEstablishment", value: date.toString() })
      );
    }
  };

  return (
    <>
      {responseMessage.message && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-md text-white ${
            responseMessage.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {responseMessage.message}
        </div>
      )}
      <div className="min-h-screen  flex items-center justify-center bg-[#fafdff]">
        <div className="p-8 m-2  w-full max-w-6xl">
          <h1 className="text-4xl text-[#3328a8] font-bold mb-6 ml-14 text-left">
            Register on Ethiopost's e-Procurement System
          </h1>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            name="info"
            id="info"
            onSubmit={onSubmit}
          >
            {/* Representative Information */}
            <div>
              <h3 className="font-semibold mb-4 text-[#3328a8]">
                Representative Information
              </h3>
              <div className="mb-4 flex items-center">
                <label className="w-1/3">Representative Name</label>
                <input
                  type="text"
                  required={true}
                  onChange={handleInputChange("representativeName")}
                  className="w-1/2 p-2 border rounded-full bg-white"
                />
              </div>
              {errors.representativeName && (
                <p className="text-red-500 text-sm">
                  {errors.representativeName}
                </p>
              )}
              <div className="mb-4 flex items-center">
                <label className="w-1/3">E-mail Address</label>
                <div className="flex w-2/3">
                  <input
                    type="email"
                    required={true}
                    onChange={handleInputChange("email")}
                    className="w-1/2 p-2 border rounded-l-full bg-white"
                  />
                  <button
                    className="bg-[#3328a8] text-white px-3 rounded-r-full"
                    onClick={verifyEmail}
                  >
                    Verify
                  </button>
                </div>
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
              <div className="mb-4 flex items-center">
                <label className="w-1/3">Phone Number</label>
                <div className="flex w-2/3">
                  <input
                    type="tel"
                    required={true}
                    onChange={handleInputChange("phone")}
                    className="w-full p-2 border rounded-l-full w-1/2 bg-white"
                  />
                  <button
                    className="bg-[#3328a8] text-white px-3 rounded-r-full"
                    onClick={verifyPhone}
                  >
                    Verify
                  </button>
                </div>
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
              <div className="mb-4 flex items-center">
                <label className="w-1/3">Country</label>
                <select
                  className="w-1/2 mt-1 p-2 border rounded-full bg-white"
                  onChange={handleInputChange("country")}
                  defaultValue={signup.country}
                >
                  <option>Ethiopia</option>
                  <option>Kenya</option>
                </select>
              </div>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
              <div className="mb-4 flex items-center">
                <label className="w-1/3">Password</label>
                <input
                  type="password"
                  required={true}
                  onChange={handleInputChange("password")}
                  className="w-1/2 mt-1 p-2 border rounded-full bg-white"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}{" "}
              <div className="mb-4 flex items-center">
                <label className="w-1/3">Confirm Password</label>
                <input
                  type="password"
                  required={true}
                  onChange={(e) =>
                    dispatch(
                      setField({
                        field: "confirmPassword",
                        value: e.target.value,
                      })
                    )
                  }
                  className="w-1/2 mt-1 p-2 border rounded-full bg-white"
                />
              </div>
              {isPasswordMatch ? null : (
                <p className="text-red-500 text-sm">Passwords do not match</p>
              )}
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
              <div className="mb-4 flex items-center">
                <label className="w-1/3">Role</label>
                <select
                  className="w-1/2 mt-1 p-2 border rounded-full bg-white"
                  onChange={handleInputChange("role")}
                >
                  <option>Business Development Manager</option>
                  <option>Procurement Officer</option>
                  <option>CEO</option>
                  <option>IT Manager</option>
                  <option>Finance Manager</option>
                  {/* Add more roles as needed */}
                </select>
              </div>
              {errors.role && (
                <p className="text-red-500 text-sm">{errors.role}</p>
              )}
              <label className="w-1/3">Legal Representation</label>
              <div className="mb-4 mt-2 flex items-center">
                <div
                  {...getRootProps1()}
                  className=" mb-4 flex items-center border-2 w-[300px] h-[140px]   border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center cursor-pointer transition-colors bg-white"
                >
                  <input {...getInputProps1()} required={true} />
                  {!legalDocumentUploaded ? (
                    <>
                      <FaCloudUploadAlt className="h-12 w-12 text-gray-400" />
                      <p className="text-gray-600 text-xl font-bold pl-2">
                        Upload
                      </p>
                    </>
                  ) : (
                    <div className="flex items-center">
                      <FaCheckCircle className="h-12 w-12 text-green-500" />
                      <p className="text-gray-600 text-xl font-bold pl-2">
                        File Uploaded
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {errors.legalDocument && (
                <p className="text-red-500 text-sm">{errors.legalDocument}</p>
              )}
            </div>

            {/* Company Information */}
            <div>
              <h3 className="font-semibold mb-4 text-[#3328a8]">
                Company Information
              </h3>

              <div className="mb-4 flex items-center">
                <label className="w-1/3">Company Name</label>
                <input
                  type="text"
                  required={true}
                  onChange={handleInputChange("companyName")}
                  className="w-2/3 mt-1 p-2 border rounded-full bg-white"
                />
              </div>
              {errors.companyName && (
                <p className="text-red-500 text-sm">{errors.companyName}</p>
              )}
              <div className="mb-4 flex items-center">
                <label className="w-1/3">Business Registration Number</label>
                <div className="flex w-2/3">
                  <input
                    type="text"
                    required={true}
                    onChange={handleInputChange("businessRegistrationNumber")}
                    className="w-full p-2 border rounded-l-full bg-white"
                  />

                  <div
                    className={`relative text-white px-4  rounded-r-full cursor-pointer ${
                      businessRegisterUploaded
                        ? "bg-green-500 py-2"
                        : "bg-[#3328a8]"
                    }
                        text-white px-4 rounded-r-full cursor-pointer ${
                          errors.businessRegisterNo ? "bg-red-500" : ""
                        }`}
                  >
                    <span>
                      {""}
                      {businessRegisterUploaded
                        ? "Uploaded"
                        : "Upload Certificate"}
                    </span>
                    <input
                      type="file"
                      required={true}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleFileChange("businessRegisterNo")}
                    />
                  </div>
                </div>
              </div>
              {errors.businessRegistrationNumber && (
                <p className="text-red-500 text-sm">
                  {errors.businessRegistrationNumber}
                </p>
              )}

              <div className="mb-4 flex items-center">
                <label className="w-1/3">Business License Number</label>
                <div className="flex w-2/3">
                  <input
                    type="text"
                    required={true}
                    onChange={handleInputChange("businessLicenseNumber")}
                    className="w-full p-2 border rounded-l-full bg-white"
                  />
                  <div
                    className={`relative ${
                      businessLicenseNoUploaded
                        ? "bg-green-500 py-2"
                        : "bg-[#3328a8]"
                    } text-white px-4 rounded-r-full cursor-pointer ${
                      errors.businessLicenseNo ? "bg-red-500" : ""
                    }`}
                  >
                    <span>
                      {" "}
                      {businessLicenseNoUploaded
                        ? "Uploaded"
                        : "Upload Certificate"}
                    </span>
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleFileChange("businessLicenseNo")}
                    />
                  </div>
                </div>
              </div>
              {errors.businessLicenseNumber && (
                <p className="text-red-500 text-sm">
                  {errors.businessLicenseNumber}
                </p>
              )}

              <div className="mb-4 flex items-center">
                <label className="w-1/3">TIN No.</label>
                <div className="flex w-2/3">
                  <input
                    type="text"
                    required={true}
                    onChange={handleInputChange("tinNumber")}
                    className="w-full p-2 border rounded-l-full bg-white"
                  />
                  <div
                    className={`relative ${
                      tinNoUploaded ? "bg-green-500 py-2" : "bg-[#3328a8]"
                    } text-white px-4 rounded-r-full cursor-pointer ${
                      errors.tinNo ? "bg-red-500" : ""
                    }`}
                  >
                    <span>
                      {""}
                      {tinNoUploaded ? "Uploaded" : "Upload Certificate"}
                    </span>
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleFileChange("tinNo")}
                    />
                  </div>
                </div>
              </div>
              {errors.tinNumber && (
                <p className="text-red-500 text-sm">{errors.tinNumber}</p>
              )}

              <div className="mb-4 flex items-center">
                <label className="w-1/3">VAT No.</label>
                <div className="flex w-2/3">
                  <input
                    type="text"
                    required={true}
                    onChange={handleInputChange("vatNumber")}
                    className="w-full  p-2 border rounded-l-full bg-white"
                  />
                  <div
                    className={`relative ${
                      vatNoUploaded ? "bg-green-500 py-2" : "bg-[#3328a8]"
                    } text-white px-4 rounded-r-full cursor-pointer${
                      errors.vatNo ? "bg-red-500" : ""
                    }`}
                  >
                    <span>
                      {""}
                      {vatNoUploaded ? "Uploaded" : "Upload Certificate"}
                    </span>
                    <input
                      type="file"
                      required={true}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleFileChange("vatNo")}
                    />
                  </div>
                </div>
              </div>
              {errors.vatNumber && (
                <p className="text-red-500 text-sm">{errors.vatNumber}</p>
              )}
              <div className="mb-4 flex items-center">
                <label className="w-1/3">Year of Establishment</label>
                <div className="relative w-2/3">
                  <DatePicker
                    selected={
                      signup.yearOfEstablishment
                        ? new Date(signup.yearOfEstablishment)
                        : null
                    }
                    onChange={handleChange}
                    dateFormat="yyyy-MM-dd"
                    required={true}
                    id="date-of-establishment"
                    className="w-full text-xl mt-1 pr-10 p-2 border rounded-full bg-white"
                  />
                  <FaCalendarAlt className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400" />
                </div>
              </div>

              {errors.yearOfEstablishment && (
                <p className="text-red-500 text-sm">
                  {errors.yearOfEstablishment}
                </p>
              )}

              <div className="mb-4 flex items-center">
                <label className="w-1/3">Products/Service Provided</label>
                <input
                  type="text"
                  required={true}
                  onChange={handleInputChange("servicesProvided")}
                  className="w-2/3 mt-1 p-2 border rounded-full bg-white"
                />
              </div>
              {errors.servicesProvided && (
                <p className="text-red-500 text-sm">
                  {errors.servicesProvided}
                </p>
              )}

              <div className="mb-4 flex items-center">
                <label className="w-1/3">Address</label>
                <input
                  type="text"
                  required={true}
                  onChange={handleInputChange("address")}
                  className="w-2/3 mt-1 p-2 border rounded-full bg-white"
                />
              </div>
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}

              <label className="w-1/3">Upload Your Logo</label>
              <div className="mb-4 flex items-center">
                <div
                  {...getRootProps2()}
                  className=" mb-4 mt-2 flex items-center border-2 w-[300px] h-[140px]  border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center cursor-pointer transition-colors bg-white"
                >
                  <input {...getInputProps2()} required={true} />
                  {!logoUploaded ? (
                    <>
                      <FaCloudUploadAlt className="h-12 w-12 text-gray-400" />
                      <p className="text-gray-600 text-xl font-bold pl-2">
                        Upload
                      </p>
                    </>
                  ) : (
                    <div className="flex items-center">
                      <FaCheckCircle className="h-12 w-12 text-green-500" />
                      <p className="text-gray-600 text-xl font-bold pl-2">
                        File Uploaded
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {errors.logo && (
                <p className="text-red-500 text-sm">{errors.logo}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 flex flex-col items-center mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Email/SMS my password
              </label>
              <div className="flex justify-center gap-4 mt-2">
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="font-bold bg-[#3328a8] text-lg text-white px-14 w-[300px] py-2 cursor-pointer rounded-full hover:bg-[#3328a8]/90"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
