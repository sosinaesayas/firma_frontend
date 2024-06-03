import { postRequest } from "../../../services/api_service";

interface CompanyAuthState {
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  representativeName: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  confirmPassword: string;
  role: string;
  companyName: string;
  businessRegistrationNumber: string;
  businessLicenseNumber: string;
  tinNumber: string;
  vatNumber: string;
  yearOfEstablishment: string;
  servicesProvided: string;
  address: string;
  businessLicenseNo: File | null;
  businessRegisterNo: File | null;
  vatNo: File | null;
  tinNo: File | null;
  logo: File | null;
  legalDocument: File | null;
}

export const signUpCompany = async (data: CompanyAuthState) => {
  const formData = new FormData();
  formData.append("representativeName", data.representativeName);
  formData.append("email", data.email);
  formData.append("phone1", data.phone);
  formData.append("country", data.country);
  formData.append("password", data.password);
  formData.append("confirmPassword", data.confirmPassword);
  formData.append("role", data.role);
  formData.append("companyName", data.companyName);
  formData.append(
    "businessRegistrationNumber",
    data.businessRegistrationNumber
  );
  formData.append("businessLicenseNumber", data.businessLicenseNumber);
  formData.append("tinNumber", data.tinNumber);
  formData.append("vatNumber", data.vatNumber);
  formData.append("dateOfEstablishment", data.yearOfEstablishment);
  formData.append("businessSectors", data.servicesProvided);
  formData.append("address", data.address);
  formData.append("logo", data.logo as File);
  formData.append("legalDocument", data.legalDocument as File);
  formData.append("businessLicenseNo", data.businessLicenseNo as File);
  formData.append("businessRegisterNo", data.businessRegisterNo as File);
  formData.append("vatNo", data.vatNo as File);
  formData.append("tinNo", data.tinNo as File);

  const toBeSent = {
    email: data.email,
    phone1: data.phone,
    country: data.country,
    password: data.password,
    companyName: data.companyName,
    businessRegistrationNumber: data.businessRegistrationNumber,
    businessLicenseNumber: data.businessLicenseNumber,
    tinNumber: data.tinNumber,
    vatNumber: data.vatNumber,
    dateOfEstablishment: data.yearOfEstablishment,
    businessSectors: data.servicesProvided,
    address: data.address,
    coverPhoto: data.logo,
    legalDocument: data.legalDocument,
    businessLicenseNo: data.businessLicenseNo,
    businessRegisterNo: data.businessRegisterNo,
    vatNo: data.vatNo,
    tinNo: data.tinNo,
  };

  try {
    const response = await postRequest(
      "/auth/company-signup",
      toBeSent,
      "multipart/form-data"
    );
    // console.log("Response", response);
    return response;
  } catch (error: any) {
    console.log("oops error", error.response.data);
    return error.response;
  }
};
