import { useState } from 'react';
import { Link } from 'react-router-dom';

interface PoptavkaFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  notes: string;
  termsAccepted: boolean;
}

export default function Poptavka() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<PoptavkaFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    notes: '',
    termsAccepted: false,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          <p className="text-gray-600 mb-6">Vaše poptávka byla úspěšně odeslána. Brzy se vám ozveme.</p>
          <Link to="/" className="btn-primary inline-block">Zpět na hlavní stránku</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Link to="/" className="text-secondary hover:text-primary inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zpět
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div
            className="bg-primary rounded-lg p-8 md:p-12 text-white relative overflow-hidden"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Kontaktujte mě</h2>

              {/* Profile Image */}
              <div className="mb-8">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto lg:mx-0">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Alexandr Plachý"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">Alexandr Plachý</h3>
                  <p className="text-gray-300">Realitní makléř</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 mb-1">Telefon</div>
                      <a href="tel:+420608657995" className="text-lg font-medium hover:text-secondary transition-colors">
                        +420 608 657 995
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 mb-1">E-mail</div>
                      <a href="mailto:plachy@j-mreality.cz" className="text-lg font-medium hover:text-secondary transition-colors break-all">
                        plachy@j-mreality.cz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 mb-1">Společnost</div>
                      <a href="https://www.j-mreality.cz" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-secondary transition-colors">
                        J-M reality, finance
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    S více než 15 lety zkušeností v realitním trhu vám pomohu najít
                    ideální nemovitost nebo zajistit její profesionální prodej.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">Zaujala mě vaše služba</h1>
            <p className="text-gray-600 mb-8">
              Vyplňte formulář a já se vám brzy ozvu s dalšími informacemi a odpovím
              na všechny vaše dotazy.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jméno <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Příjmení <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Poznámka
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="Popište vaši situaci nebo dotaz..."
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 text-secondary rounded mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-gray-700">
                    Souhlasím se zpracováním osobních údajů za účelem poskytnutí realitních
                    služeb a komunikace ohledně mé poptávky. <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-lg py-4"
              >
                Odeslat poptávku
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
