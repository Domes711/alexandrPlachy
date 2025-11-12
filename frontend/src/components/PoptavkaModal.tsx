import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AgentPhoto from "../assets/photos/agent-2.png";

export type ServiceType =
  | "sale"
  | "rent"
  | "buyout"
  | "legal"
  | "escrow"
  | "financing"
  | "meeting";

const serviceTranslations: Record<ServiceType, string> = {
  sale: "Prodej nemovitosti",
  rent: "Pronájem nemovitosti",
  buyout: "Výkup nemovitosti",
  legal: "Právní služby",
  escrow: "Advokátní úschova",
  financing: "Financování nemovitosti",
  meeting: "Sjednání schůzky",
};

interface PoptavkaModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: ServiceType;
}

interface PoptavkaFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  notes: string;
  termsAccepted: boolean;
}

export default function PoptavkaModal({
  isOpen,
  onClose,
  serviceType,
}: PoptavkaModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    reset,
  } = useForm<PoptavkaFormData>({
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      notes: "",
      termsAccepted: false,
    },
  });

  // Prevent body scroll when modal is open and scroll to top
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Prevent body scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        // Restore body scroll
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";

        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const onSubmit = (data: PoptavkaFormData) => {
    console.log(data);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    reset();
    onClose();
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        ></div>
        <div className="relative bg-white rounded-lg shadow-xl p-8 max-w-md text-center z-10 animate-[fadeIn_0.3s_ease-in-out]">
          <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-primary mb-2">Odesláno!</h2>
          <p className="text-gray-600 mb-6">
            Vaše poptávka byla úspěšně odeslána. Brzy se vám ozveme.
          </p>
          <button onClick={handleClose} className="btn-primary">
            Zavřít
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-6xl rounded-lg shadow-2xl z-10 animate-[fadeIn_0.3s_ease-in-out] max-h-[90vh] overflow-hidden">
        {/* Close Button - Desktop only (absolute) */}
        <button
          onClick={handleClose}
          className="hidden lg:flex absolute top-4 right-4 z-20 w-10 h-10 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid lg:grid-cols-2 lg:h-[90vh]">
          {/* Right Column - Form (First on mobile) */}
          <div className="order-1 lg:order-2 flex flex-col max-h-[90vh] lg:h-[90vh]">
            {/* Fixed Header */}
            <div className="px-6 md:px-8 lg:px-12 pt-4 md:pt-6 lg:pt-12 pb-4 border-b border-gray-200">
              {/* Close Button - Mobile only */}
              <div className="flex justify-end mb-2 lg:hidden">
                <button
                  onClick={handleClose}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                Zaujala mě vaše služba
              </h1>
              <p className="text-gray-600">
                Vyplňte formulář a já se vám brzy ozvu s dalšími informacemi a
                odpovím na všechny vaše dotazy.
              </p>
            </div>

            <form
              onSubmit={handleFormSubmit(onSubmit)}
              className="flex flex-col flex-1 overflow-hidden"
            >
              {/* Scrollable Form Fields */}
              <div className="flex-1 overflow-y-auto px-6 md:px-8 lg:px-12 py-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jméno <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("firstName", {
                        required: "Jméno je povinné",
                        minLength: {
                          value: 2,
                          message: "Jméno musí mít alespoň 2 znaky",
                        },
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Příjmení <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("lastName", {
                        required: "Příjmení je povinné",
                        minLength: {
                          value: 2,
                          message: "Příjmení musí mít alespoň 2 znaky",
                        },
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register("phone", {
                      required: "Telefon je povinný",
                      pattern: {
                        value: /^(\+420)?[0-9]{9}$/,
                        message:
                          "Neplatný formát telefonu (např. +420123456789)",
                      },
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "E-mail je povinný",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Neplatný formát e-mailu",
                      },
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Služba
                  </label>
                  <input
                    type="text"
                    value={serviceTranslations[serviceType]}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Poznámka
                  </label>
                  <textarea
                    {...register("notes")}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Popište vaši situaci nebo dotaz..."
                  />
                </div>

                <div>
                  <div
                    className={`bg-gray-50 p-4 rounded-lg ${
                      errors.termsAccepted ? "border-2 border-red-500" : ""
                    }`}
                  >
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("termsAccepted", {
                          required:
                            "Musíte souhlasit se zpracováním osobních údajů",
                        })}
                        className="w-5 h-5 text-secondary rounded mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-gray-700">
                        Souhlasím se zpracováním osobních údajů za účelem
                        poskytnutí realitních služeb a komunikace ohledně mé
                        poptávky. <span className="text-red-500">*</span>
                      </span>
                    </label>
                  </div>
                  {errors.termsAccepted && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.termsAccepted.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Fixed Footer with Submit Button */}
              <div className="px-6 md:px-8 lg:px-12 py-4 lg:py-6 border-t border-gray-200 bg-white">
                <button
                  type="submit"
                  className="btn-primary w-full text-lg py-4"
                >
                  Odeslat poptávku
                </button>
              </div>
            </form>
          </div>

          {/* Left Column - Contact Info (Second on mobile, compact) */}
          <div
            className="bg-primary p-4 md:p-6 lg:p-12 text-white relative overflow-hidden lg:rounded-l-lg order-2 lg:order-1 lg:overflow-y-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${AgentPhoto})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10 flex flex-col justify-center lg:justify-around h-full">
              <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-8">
                Kontaktujte mě
              </h2>

              {/* Contact Details - Mobile: Compact Card */}
              <div className="lg:hidden bg-white/10 backdrop-blur-sm rounded-lg p-3 space-y-2 border border-white/20">
                <div className="pb-2 border-b border-white/20">
                  <h3 className="text-base font-bold">Alexandr Plachý</h3>
                  <p className="text-gray-300 text-xs">Realitní makléř</p>
                </div>
                <div>
                  <p className="text-xs text-gray-300">Telefon</p>
                  <a
                    href="tel:+420608657995"
                    className="text-sm font-medium hover:text-secondary transition-colors"
                  >
                    +420 608 657 995
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-300">E-mail</p>
                  <a
                    href="mailto:plachy@j-mreality.cz"
                    className="text-sm font-medium hover:text-secondary transition-colors break-all"
                  >
                    plachy@j-mreality.cz
                  </a>
                </div>
              </div>

              {/* Contact Details - Desktop: Full Layout */}
              <div className="hidden lg:block space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">
                    Alexandr Plachý
                  </h3>
                  <p className="text-gray-300 text-base">
                    Realitní makléř
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 mb-1">
                        Telefon
                      </div>
                      <a
                        href="tel:+420608657995"
                        className="text-lg font-medium hover:text-secondary transition-colors"
                      >
                        +420 608 657 995
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 mb-1">
                        E-mail
                      </div>
                      <a
                        href="mailto:plachy@j-mreality.cz"
                        className="text-lg font-medium hover:text-secondary transition-colors break-all"
                      >
                        plachy@j-mreality.cz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-300 mb-1">
                        Společnost
                      </div>
                      <a
                        href="https://www.j-mreality.cz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium hover:text-secondary transition-colors"
                      >
                        J-M reality, finance
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Profesionální realitní služby s osobním přístupem.
                    <div className="text-secondary">
                      Bezpečně • Bezstarostně • Férově
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
