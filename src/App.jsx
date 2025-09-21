import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    website: '',
    email: '',
    address: '',
    phone: '',
    services: '',
    paymentTerms: '',
    refundPolicy: '',
    userRights: '',
    dataCollection: false,
    cookies: false,
    thirdPartyServices: false,
    ageRestriction: false
  });

  const [generatedTerms, setGeneratedTerms] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const generateTerms = () => {
    setIsGenerating(true);
    
    // Simulate generation process
    setTimeout(() => {
      const currentDate = new Date().toLocaleDateString();
      
      const terms = `TERMS OF SERVICE

Company: ${formData.companyName}
Last Updated: ${currentDate}

1. ACCEPTANCE OF TERMS

By accessing and using the services provided by ${formData.companyName} ("Company", "we", "us", or "our"), you ("User", "you", or "your") agree to be bound by these Terms of Service ("Terms"). These Terms constitute a legally binding agreement between you and ${formData.companyName}, a business operating in the Federal Republic of Nigeria.

2. DESCRIPTION OF SERVICES

${formData.companyName} provides ${formData.services || 'various business services'} through our platform${formData.website ? ` located at ${formData.website}` : ''}. Our services are subject to Nigerian laws and regulations, including but not limited to the Companies and Allied Matters Act (CAMA) 2020 and relevant consumer protection laws.

3. USER ELIGIBILITY AND REGISTRATION

${formData.ageRestriction ? 
'You must be at least 18 years old to use our services. By using our services, you represent and warrant that you are of legal age and have the legal capacity to enter into these Terms.' : 
'Our services are available to users who have reached the age of majority in Nigeria. By using our services, you represent and warrant that you have the legal capacity to enter into these Terms.'
}

Users may be required to create an account and provide accurate, complete information during registration. You are responsible for maintaining the confidentiality of your account credentials.

4. PAYMENT TERMS AND BILLING

${formData.paymentTerms || 
'Payment terms will be clearly communicated at the point of purchase. All payments are processed in Nigerian Naira (NGN) unless otherwise specified. We accept various payment methods including bank transfers, card payments, and mobile money transfers as available.'
}

All fees are exclusive of applicable taxes unless otherwise stated. Users are responsible for any bank charges, transaction fees, or taxes associated with payments.

5. REFUND AND CANCELLATION POLICY

${formData.refundPolicy || 
'Refund requests will be handled in accordance with Nigerian consumer protection laws and our internal policies. Generally, refund requests must be submitted within 7-14 days of purchase, depending on the nature of the service. Refunds may be subject to processing fees and will be processed within 14-21 business days upon approval.'
}

6. USER RIGHTS AND RESPONSIBILITIES

Users have the right to:
- Access services as purchased and described
- Fair treatment in accordance with Nigerian consumer protection laws
- Privacy protection as outlined in our Privacy Policy
- Request account deletion and data removal subject to legal requirements

${formData.userRights ? `Additional rights specific to our services: ${formData.userRights}` : ''}

User responsibilities include:
- Providing accurate information
- Using services in compliance with applicable laws
- Respecting intellectual property rights
- Not engaging in fraudulent or harmful activities

7. DATA PROTECTION AND PRIVACY

${formData.dataCollection ? 
'We collect and process personal data in accordance with the Nigeria Data Protection Regulation (NDPR) 2019 and other applicable data protection laws. The types of data we collect, how we use it, and your rights regarding your personal data are detailed in our Privacy Policy.' : 
'We are committed to protecting your privacy and comply with the Nigeria Data Protection Regulation (NDPR) 2019 and other applicable Nigerian data protection laws. Any personal data collected will be processed lawfully, fairly, and transparently.'
}

${formData.cookies ? 
`
8. COOKIES AND TRACKING TECHNOLOGIES

We use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and improve our services. By using our website, you consent to our use of cookies in accordance with our Cookie Policy. You may disable cookies through your browser settings, though this may affect website functionality.` : ''
}

${formData.thirdPartyServices ? 
`
9. THIRD-PARTY SERVICES

We may integrate with third-party services to provide enhanced functionality. These services are governed by their own terms and privacy policies. We are not responsible for the practices of third-party service providers, though we strive to work only with reputable partners.` : ''
}

${formData.cookies || formData.thirdPartyServices ? '10' : '8'}. INTELLECTUAL PROPERTY RIGHTS

All content, features, and functionality of our services, including but not limited to text, graphics, logos, images, and software, are owned by ${formData.companyName} or our licensors and are protected by Nigerian and international copyright, trademark, and other intellectual property laws.

${formData.cookies || formData.thirdPartyServices ? '11' : '9'}. SERVICE AVAILABILITY AND MODIFICATIONS

We strive to maintain service availability but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue services with reasonable notice to users. Scheduled maintenance will be communicated in advance where possible.

${formData.cookies || formData.thirdPartyServices ? '12' : '10'}. LIMITATION OF LIABILITY

To the maximum extent permitted by Nigerian law, ${formData.companyName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.

This limitation does not affect liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded under Nigerian law.

${formData.cookies || formData.thirdPartyServices ? '13' : '11'}. INDEMNIFICATION

You agree to indemnify and hold harmless ${formData.companyName}, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising out of your use of our services, violation of these Terms, or infringement of any rights of another party.

${formData.cookies || formData.thirdPartyServices ? '14' : '12'}. DISPUTE RESOLUTION

Any disputes arising under these Terms shall be resolved through the following process:
1. Initial resolution through direct negotiation
2. Mediation through a recognized Nigerian mediation center
3. Final resolution through the courts of competent jurisdiction in Nigeria

Alternative Dispute Resolution mechanisms are encouraged before resorting to litigation.

${formData.cookies || formData.thirdPartyServices ? '15' : '13'}. GOVERNING LAW AND JURISDICTION

These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. The Nigerian courts shall have exclusive jurisdiction over any disputes arising from these Terms, without prejudice to our right to seek injunctive relief in any jurisdiction.

${formData.cookies || formData.thirdPartyServices ? '16' : '14'}. TERMINATION

Either party may terminate this agreement with appropriate notice. Upon termination:
- Your right to use our services ceases immediately
- Outstanding payment obligations remain in effect
- Clauses intended to survive termination (including liability limitations) remain valid

${formData.cookies || formData.thirdPartyServices ? '17' : '15'}. FORCE MAJEURE

We shall not be liable for any delay or failure to perform our obligations due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, epidemics, government actions, or infrastructure failures.

${formData.cookies || formData.thirdPartyServices ? '18' : '16'}. SEVERABILITY

If any provision of these Terms is found to be unenforceable or invalid under Nigerian law, such provision shall be deemed severed, and the remainder of the Terms shall remain in full force and effect.

${formData.cookies || formData.thirdPartyServices ? '19' : '17'}. ENTIRE AGREEMENT

These Terms, together with our Privacy Policy and any additional terms specific to particular services, constitute the entire agreement between you and ${formData.companyName} regarding the use of our services.

${formData.cookies || formData.thirdPartyServices ? '20' : '18'}. MODIFICATIONS TO TERMS

We reserve the right to modify these Terms at any time. Material changes will be communicated to users via email notification or prominent website notice at least 30 days before the changes take effect. Continued use of our services after the effective date constitutes acceptance of the modified Terms.

${formData.cookies || formData.thirdPartyServices ? '21' : '19'}. CONTACT INFORMATION

For questions, concerns, or notices regarding these Terms of Service, please contact us at:

${formData.companyName}
Email: ${formData.email || 'legal@company.com'}
${formData.address ? `Address: ${formData.address}` : 'Address: [Company Address], Nigeria'}
${formData.phone ? `Phone: ${formData.phone}` : 'Phone: +234-XXX-XXX-XXXX'}

ACKNOWLEDGMENT

By continuing to use our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These Terms are effective as of ${currentDate}.

---

DISCLAIMER: This Terms of Service document is generated using a template system and should be reviewed by a qualified Nigerian lawyer to ensure it meets your specific business needs and complies with current laws and regulations. Laws and regulations may change, and this document may require updates accordingly.`;

      setGeneratedTerms(terms);
      setIsGenerating(false);
      setCurrentStep(3);
    }, 2000);
  };

  const downloadTerms = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedTerms], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${formData.companyName || 'Company'}_Terms_of_Service.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedTerms).then(() => {
      alert('Terms of Service copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy. Please try selecting and copying manually.');
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-brand-navy">TermsNG</h1>
                <p className="text-sm text-gray-600">Nigerian Business Legal Documents</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                NDPR Compliant
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-brand-gold rounded-full mr-2"></span>
                Nigerian Laws
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        {currentStep === 1 && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Generate Professional Terms of Service
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Create legally compliant Terms of Service documents tailored for Nigerian businesses. 
              Save time, protect your business, and ensure compliance with local laws.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">NDPR Compliant</h3>
                <p className="text-sm text-gray-600">Built to comply with Nigerian Data Protection Regulation</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Quick Generation</h3>
                <p className="text-sm text-gray-600">Generate professional documents in minutes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Legal Protection</h3>
                <p className="text-sm text-gray-600">Protect your business with proper legal documentation</p>
              </div>
            </div>
            <button 
              onClick={() => setCurrentStep(2)}
              className="bg-brand-navy hover:bg-brand-navy-dark text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Creating Your Terms →
            </button>
          </div>
        )}

        {/* Form Section */}
        {currentStep === 2 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Business Information</h2>
              <p className="text-gray-600">Fill in your business details to generate customized terms of service.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                  placeholder="Your Company Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type
                </label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                >
                  <option value="">Select Business Type</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="saas">Software/SaaS</option>
                  <option value="consulting">Consulting</option>
                  <option value="fintech">Fintech</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="logistics">Logistics</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                  placeholder="contact@yourcompany.com"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                  placeholder="Your business address in Nigeria"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                  placeholder="+234-XXX-XXX-XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Services Offered *
                </label>
                <textarea
                  name="services"
                  value={formData.services}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                  placeholder="Describe the services your business offers"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Terms
                </label>
                <textarea
                  name="paymentTerms"
                  value={formData.paymentTerms}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                  placeholder="Specify your payment terms, billing cycles, accepted payment methods, etc."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Refund Policy
                </label>
                <textarea
                  name="refundPolicy"
                  value={formData.refundPolicy}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                  placeholder="Describe your refund policy and conditions"
                />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Clauses</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="dataCollection"
                    checked={formData.dataCollection}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-brand-navy focus:ring-brand-navy"
                  />
                  <span className="ml-2 text-sm text-gray-700">We collect personal data from users</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="cookies"
                    checked={formData.cookies}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-brand-navy focus:ring-brand-navy"
                  />
                  <span className="ml-2 text-sm text-gray-700">We use cookies on our website</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="thirdPartyServices"
                    checked={formData.thirdPartyServices}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-brand-navy focus:ring-brand-navy"
                  />
                  <span className="ml-2 text-sm text-gray-700">We use third-party services (analytics, payments, etc.)</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="ageRestriction"
                    checked={formData.ageRestriction}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-brand-navy focus:ring-brand-navy"
                  />
                  <span className="ml-2 text-sm text-gray-700">Services restricted to users 18+ years</span>
                </label>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                ← Back
              </button>
              <button
                onClick={generateTerms}
                disabled={!formData.companyName || !formData.email || !formData.services || isGenerating}
                className="bg-brand-navy hover:bg-brand-navy-dark text-white px-8 py-2 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? 'Generating...' : 'Generate Terms of Service'}
              </button>
            </div>
          </div>
        )}

        {/* Generated Terms Section */}
        {currentStep === 3 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Terms of Service</h2>
                <p className="text-gray-600">Generated for {formData.companyName}</p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </button>
                <button
                  onClick={downloadTerms}
                  className="bg-brand-navy hover:bg-brand-navy-dark text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 max-h-96 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
                {generatedTerms}
              </pre>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-blue-800">
                  <p className="font-medium">Important Legal Notice</p>
                  <p className="mt-1">This generated document is a starting point. We recommend having it reviewed by a qualified Nigerian lawyer to ensure it meets all your specific business needs and complies with current regulations.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => {
                  setCurrentStep(2);
                  setGeneratedTerms('');
                }}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                ← Edit Information
              </button>
              <button
                onClick={() => {
                  setCurrentStep(1);
                  setFormData({
                    companyName: '',
                    businessType: '',
                    website: '',
                    email: '',
                    address: '',
                    phone: '',
                    services: '',
                    paymentTerms: '',
                    refundPolicy: '',
                    userRights: '',
                    dataCollection: false,
                    cookies: false,
                    thirdPartyServices: false,
                    ageRestriction: false
                  });
                  setGeneratedTerms('');
                }}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
              >
                Create Another Document
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-brand-navy rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-xl font-bold text-brand-navy">TermsNG</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Empowering Nigerian businesses with professional legal documents
            </p>
            <p className="text-xs text-gray-500">
              © 2024 TermsNG. This tool generates a baseline Terms of Service document for informational purposes only. It does not constitute legal advice.

You should consult with a qualified legal professional to ensure your TOS is complete and compliant with all applicable laws for your specific business.
              </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
