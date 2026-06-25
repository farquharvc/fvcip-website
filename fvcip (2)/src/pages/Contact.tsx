import React, { useState } from 'react';
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@fvcip.sg', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('Initiate a Conversation')}</h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            {t('Connect with our executive team to discuss how FVC Innovation Partners can elevate your institutional framework. Precision and confidentiality are guaranteed.')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Form Section */}
            <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-8">{t('Send a Message')}</h2>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-100 text-green-800 p-8 rounded-lg flex flex-col items-center justify-center text-center h-64">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{t('Message Sent Successfully')}</h3>
                  <p className="text-green-700">{t('Thank you for reaching out. Our team will review your inquiry and respond promptly.')}</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-green-600 font-medium hover:text-green-800"
                  >
                    {t('Send another message')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* FormSubmit specific hidden fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  <input type="hidden" name="_template" value="table" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">{t('Full Name')}</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">{t('Company / Organization')}</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">{t('Corporate Email')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">{t('Inquiry Details')}</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all resize-none"
                      placeholder={t("Please detail your structural requirements or advisory needs...")}
                    ></textarea>
                  </div>
                  
                  {error && (
                    <div className="text-red-500 text-sm bg-red-50 p-3 rounded-md">
                      {t(error)}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary-light text-white font-medium px-8 py-4 rounded-md transition-colors flex items-center justify-center gap-2 w-full md:w-auto disabled:opacity-70"
                  >
                    {isSubmitting ? t('Submitting...') : t('Submit Inquiry')} 
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Section */}
            <div className="p-8 lg:p-12 bg-gray-50 flex flex-col">
              <h2 className="text-2xl font-bold text-primary mb-8">{t('Headquarters')}</h2>
              
              <div className="space-y-8 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg text-gold shadow-sm mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">{t('Singapore')}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      FVC Innovation Partners Pte. Ltd.<br />
                      67 Ayer Rajah Crescent<br />
                      #04-09<br />
                      Singapore 139950
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-lg text-gold shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <a href="mailto:info@fvcip.sg" className="text-gray-600 hover:text-gold transition-colors font-medium">
                      info@fvcip.sg
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-lg text-gold shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <a href="tel:+6580832595" className="text-gray-600 hover:text-gold transition-colors font-medium">
                      +65 8083 2595
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 h-64 bg-gray-200 rounded-lg overflow-hidden relative border border-gray-300">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.775836487593!2d103.78553531124451!3d1.2971849986877843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a5a044d0813%3A0xc48c03796b42b821!2s67%20Ayer%20Rajah%20Crescent%2C%20Singapore%20139950!5e0!3m2!1sen!2ssg!4v1716913456789!5m2!1sen!2ssg" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
