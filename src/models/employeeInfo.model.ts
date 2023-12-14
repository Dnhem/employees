export interface EmployeeInfo {
  dateOfBirth: string;
  dateOfEmployment: string;
  homeAddress: {
    addressLine2: string;
    addressLine1: string;
    ZIPCode: string;
    city: string;
    [key: string]: string;
  };
  phoneNumber: string;
  email: string;
  name: string;
  [key: string]: string | object;
}
