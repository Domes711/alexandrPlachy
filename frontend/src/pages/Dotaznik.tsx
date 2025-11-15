import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { RentalApplicationFormData, FormFieldProps, SelectOption } from '../types';

export default function Dotaznik() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<RentalApplicationFormData>({
    name: '',
    birth: '',
    phone: '',
    email: '',
    address: '',
    employer: '',
    employmentType: '',
    partnerName: '',
    partnerBirth: '',
    partnerAddress: '',
    partnerEmployer: '',
    partnerEmploymentType: '',
    hasTaxDebt: false,
    hasSocialDebt: false,
    hasHealthDebt: false,
    hasExecution: false,
    hasInsolvency: false,
    interest: '',
    movingReason: '',
    moveDate: '',
    numberOfPeople: '',
    rentalDuration: '',
    permanentResidence: '',
    references: ''
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    const checked = (event.target as HTMLInputElement).checked;

    setFormData(previousData => ({
      ...previousData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md text-center">
          <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-primary mb-2">Odesláno!</h2>
          <p className="text-gray-600 mb-6">Váš dotazník byl úspěšně odeslán.</p>
          <Link to="/" className="btn-primary inline-block">Zpět na hlavní stránku</Link>
        </div>
      </div>
    );
  }

  const FormField = ({
    label,
    name,
    type = 'text',
    required,
    isSelect,
    options,
    isTextarea,
    isCheckbox
  }: FormFieldProps) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {isCheckbox ? (
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            name={name}
            checked={formData[name as keyof RentalApplicationFormData] as boolean}
            onChange={handleChange}
            className="w-5 h-5 text-secondary rounded"
          />
          <span>{label}</span>
        </label>
      ) : isTextarea ? (
        <textarea
          name={name}
          value={formData[name as keyof RentalApplicationFormData] as string}
          onChange={handleChange}
          rows={3}
          required={required}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
        />
      ) : isSelect ? (
        <select
          name={name}
          value={formData[name as keyof RentalApplicationFormData] as string}
          onChange={handleChange}
          required={required}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
        >
          <option value="">Vyberte...</option>
          {options?.map((option: SelectOption) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name as keyof RentalApplicationFormData] as string}
          onChange={handleChange}
          required={required}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary"
        />
      )}
    </div>
  );

  const employmentTypeOptions: SelectOption[] = [
    { value: 'neurcito', label: 'Smlouva na dobu neurčitou' },
    { value: 'urcito', label: 'Smlouva na dobu určitou' },
    { value: 'dpp', label: 'Dohoda o provedení práce' },
    { value: 'dpc', label: 'Dohoda o pracovní činnosti' }
  ];

  const rentalDurationOptions: SelectOption[] = [
    { value: '1', label: '1 rok' },
    { value: '1-2', label: '1 až 2 roky' },
    { value: '3', label: '3 roky' }
  ];

  const permanentResidenceOptions: SelectOption[] = [
    { value: 'ano', label: 'Ano' },
    { value: 'ne', label: 'Ne' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="text-secondary hover:text-primary inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zpět
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Dotazník zájemce o nájem</h1>
          <p className="text-gray-600 mb-8">Vyplněním všech údajů pomůžete pronajímateli v rozhodování.</p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-secondary">
                Údaje o zájemci
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Jméno a příjmení" name="name" required />
                <FormField label="Datum narození" name="birth" type="date" required />
                <FormField label="Telefon" name="phone" type="tel" required />
                <FormField label="Email" name="email" type="email" required />
                <div className="md:col-span-2">
                  <FormField label="Trvalé bydliště" name="address" required />
                </div>
                <FormField label="Zaměstnavatel" name="employer" />
                <FormField
                  label="Typ zaměstnání"
                  name="employmentType"
                  isSelect
                  options={employmentTypeOptions}
                />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-secondary">
                Údaje o partnerovi (nepovinné)
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Jméno a příjmení" name="partnerName" />
                <FormField label="Datum narození" name="partnerBirth" type="date" />
                <div className="md:col-span-2">
                  <FormField label="Trvalé bydliště" name="partnerAddress" />
                </div>
                <FormField label="Zaměstnavatel" name="partnerEmployer" />
                <FormField
                  label="Typ zaměstnání"
                  name="partnerEmploymentType"
                  isSelect
                  options={employmentTypeOptions}
                />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-secondary">
                Informace o dluzích
              </h2>
              <div className="space-y-3">
                <FormField label="Dluh vůči finančnímu úřadu" name="hasTaxDebt" isCheckbox />
                <FormField label="Dluh vůči sociálnímu pojištění" name="hasSocialDebt" isCheckbox />
                <FormField label="Dluh vůči zdravotnímu pojištění" name="hasHealthDebt" isCheckbox />
                <FormField label="Exekuce" name="hasExecution" isCheckbox />
                <FormField label="Insolvence (probíhající nebo ukončená)" name="hasInsolvency" isCheckbox />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-secondary">
                Další informace
              </h2>
              <div className="space-y-6">
                <FormField
                  label="Z jakého důvodu máte zájem o tento byt?"
                  name="interest"
                  isTextarea
                  required
                />
                <FormField label="Důvod stěhování" name="movingReason" isTextarea required />
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField label="Termín stěhování" name="moveDate" type="date" required />
                  <FormField label="Počet osob" name="numberOfPeople" type="number" required />
                  <FormField
                    label="Délka nájmu"
                    name="rentalDuration"
                    isSelect
                    required
                    options={rentalDurationOptions}
                  />
                  <FormField
                    label="Trvalý pobyt"
                    name="permanentResidence"
                    isSelect
                    required
                    options={permanentResidenceOptions}
                  />
                </div>
                <FormField
                  label="Reference (bývalý pronajímatel, zaměstnavatel)"
                  name="references"
                  isTextarea
                />
              </div>
            </section>

            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-sm text-gray-600">
                Údaje mohou být použity pro ověření bonity zájemce ve veřejných rejstřících.
              </p>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="btn-primary text-lg px-8">
                Odeslat dotazník
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
