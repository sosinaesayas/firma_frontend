import React, { useEffect } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../store/store";
import {
  setField,
  setIsPasswordMatch,
  setIsEmailVerified,
  setIsPhoneVerified,
  setFiles,
} from "../company_auth_slice";
import { signUpCompany } from "../company_auth_api";

const SignUpForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const signup = useSelector((state: RootState) => state.form);

  const { getRootProps: getRootProps1, getInputProps: getInputProps1 } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        dispatch(setFiles({ field: "legalDocument", file: acceptedFiles[0] }));
      },
    });

  const { getRootProps: getRootProps2, getInputProps: getInputProps2 } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        dispatch(setFiles({ field: "logo", file: acceptedFiles[0] }));
      },
    });


  const handlePasswordMatch = () => {
    dispatch(setIsPasswordMatch());
  };

  useEffect(() => {
    handlePasswordMatch();
  }, [signup.confirmPassword]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signup.password !== signup.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await signUpCompany(signup);
      console.log(response);
    } catch (err) {
      console.log(err);
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

  return (
    <>
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
                  onChange={handleInputChange("representativeName")}
                  className="w-1/2 p-2 border rounded-full bg-white"
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="w-1/3">E-mail Address</label>
                <div className="flex w-2/3">
                  <input
                    type="email"
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

              <div className="mb-4 flex items-center">
                <label className="w-1/3">Phone Number</label>
                <div className="flex w-2/3">
                  <input
                    type="tel"
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

              <div className="mb-4 flex items-center">
                <label className="w-1/3">Country</label>
                <select
                  className="w-1/2 mt-1 p-2 border rounded-full bg-white"
                  onChange={handleInputChange("country")}
                >
                  <option>Ethiopia</option>
                  <option>Kenya</option>
                </select>
              </div>

              <div className="mb-4 flex items-center">
                <label className="w-1/3">Password</label>
                <input
                  type="password"
                  onChange={handleInputChange("password")}
                  className="w-1/2 mt-1 p-2 border rounded-full bg-white"
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="w-1/3">Confirm Password</label>
                <input
                  type="password"
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

              <label className="w-1/3">Legal Representation</label>
              <div className="mb-4 mt-2 flex items-center">
                <div
                  {...getRootProps1()}
                  className=" mb-4 flex items-center border-2 w-[300px] h-[140px]   border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center cursor-pointer transition-colors bg-white"
                >
                  <input {...getInputProps1()} />
                  <FaCloudUploadAlt className="h-12 w-12 text-gray-400  " />
                  <p className="text-gray-600 text-xl font-bold pl-2">Upload</p>
                </div>
              </div>
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
                  onChange={handleInputChange("companyName")}
                  className="w-2/3 mt-1 p-2 border rounded-full bg-white"
                />
              </div>
              <div className="mb-4 flex items-center">
                <label className="w-1/3">Business Registration Number</label>
                <div className="flex w-2/3">
                  <input
                    type="text"
                    onChange={handleInputChange("businessRegistrationNumber")}
                    className="w-full p-2 border rounded-l-full bg-white"
                  />
                  <div className="relative bg-[#3328a8] text-white px-4 rounded-r-full cursor-pointer">
                    <span>Upload Certificate</span>
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleInputChange("businessRegisterNo")}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4 flex items-center">
                <label className="w-1/3">Business License Number</label>
                <div className="flex w-2/3">
                  <input
                    type="text"
                    onChange={handleInputChange("businessLicenseNumber")}
                    className="w-full p-2 border rounded-l-full bg-white"
                  />
                  <div className="relative bg-[#3328a8] text-white px-4 rounded-r-full cursor-pointer">
                    <span>Upload Certificate</span>
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleInputChange("businessLicenseNo")}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4 flex items-center">
                <label className="w-1/3">TIN No.</label>
                <div className="flex w-2/3">
                  <input
                    type="text"
                    onChange={handleInputChange("tinNumber")}
                    className="w-full p-2 border rounded-l-full bg-white"
                  />
                  <div className="relative bg-[#3328a8] text-white px-4 rounded-r-full cursor-pointer">
                    <span>Upload Certificate</span>
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleInputChange("tinNo")}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4 flex items-center">
                <label className="w-1/3">VAT No.</label>
                <div className="flex w-2/3">
                  <input
                    type="text"
                    onChange={handleInputChange("vatNumber")}
                    className="w-full  p-2 border rounded-l-full bg-white"
                  />
                  <div className="relative bg-[#3328a8] text-white px-4 rounded-r-full cursor-pointer">
                    <span>Upload Certificate</span>
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleInputChange("vatNo")}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4 flex items-center">
                <label className="w-1/3">Year of Establishment</label>
                <input
                  type="text"
                  onChange={handleInputChange("yearOfEstablishment")}
                  className="w-2/3 mt-1 p-2 border rounded-full bg-white"
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="w-1/3">Products/Service Provided</label>
                <input
                  type="text"
                  onChange={handleInputChange("servicesProvided")}
                  className="w-2/3 mt-1 p-2 border rounded-full bg-white"
                />
              </div>

              <div className="mb-4 flex items-center">
                <label className="w-1/3">Address</label>
                <input
                  type="text"
                  onChange={handleInputChange("address")}
                  className="w-2/3 mt-1 p-8 border rounded-full bg-white"
                />
              </div>

              <label className="w-1/3">Upload Your Logo</label>
              <div className="mb-4 flex items-center">
                <div
                  {...getRootProps2()}
                  className=" mb-4 mt-2 flex items-center border-2 w-[300px] h-[140px]  border-dashed border-gray-400 rounded-lg p-4 flex items-center justify-center cursor-pointer transition-colors bg-white"
                >
                  <input {...getInputProps2()} />
                  <FaCloudUploadAlt className="h-12 w-12 text-gray-400 " />
                  <p className="text-gray-600 text-xl font-bold pl-2">Upload</p>
                </div>
              </div>
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
