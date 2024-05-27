import { postRequest } from "../../../services/api_service";

interface CompanyAuthState {
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isPasswordMatch: boolean;
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
  formData.append("phone", data.phone);
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
  formData.append("yearOfEstablishment", data.yearOfEstablishment);
  formData.append("servicesProvided", data.servicesProvided);
  formData.append("address", data.address);
  formData.append("logo", data.logo as Blob);
  formData.append("legalDocument", data.legalDocument as Blob);
  formData.append("businessLicenseNo", data.businessLicenseNo as Blob);
  formData.append("businessRegisterNo", data.businessRegisterNo as Blob);
  formData.append("vatNo", data.vatNo as Blob);
  formData.append("tinNo", data.tinNo as Blob);

  const toBeSent = {
    email: formData.get("email"),
    phone1: formData.get("phone"),
    country: formData.get("country"),
    password: formData.get("password"),
    companyName: formData.get("companyName"),
    businessRegistrationNumber: formData.get("businessRegistrationNumber"),
    businessLicenseNumber: formData.get("businessLicenseNumber"),
    tinNumber: formData.get("tinNumber"),
    vatNumber: formData.get("vatNumber"),
    dateOfEstablishment: formData.get("yearOfEstablishment"),
    businessSectors: formData.get("servicesProvided"),
    address: formData.get("address"),
    coverPhoto: formData.get("logo"),
    legalDocument: formData.get("legalDocument"),
    businessLicenseNo: formData.get("businessLicenseNo"),
    businessRegisterNo: formData.get("businessRegisterNo"),
    vatNo: formData.get("vatNo"),
    tinNo: formData.get("tinNo"),
  };

  console.log("To be sent", toBeSent);

  try {
    const response = await postRequest("/auth/company-signup", toBeSent);
    console.log("Response", response);
    return response.data;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
