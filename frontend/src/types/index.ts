// Shared TypeScript types and interfaces for the application

export interface RentalApplicationFormData {
  name: string;
  birth: string;
  phone: string;
  email: string;
  address: string;
  employer: string;
  employmentType: string;
  partnerName: string;
  partnerBirth: string;
  partnerAddress: string;
  partnerEmployer: string;
  partnerEmploymentType: string;
  hasTaxDebt: boolean;
  hasSocialDebt: boolean;
  hasHealthDebt: boolean;
  hasExecution: boolean;
  hasInsolvency: boolean;
  interest: string;
  movingReason: string;
  moveDate: string;
  numberOfPeople: string;
  rentalDuration: string;
  permanentResidence: string;
  references: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'date' | 'number';
  required?: boolean;
  isSelect?: boolean;
  options?: SelectOption[];
  isTextarea?: boolean;
  isCheckbox?: boolean;
}

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  type: string;
}
