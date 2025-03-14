import React, { createContext, useContext, useState } from 'react';

interface AccountDetails {
  hasPaymentMethod: boolean;
  businessInfo: {
    businessName: string;
    businessType: string;
    website: string;
    email: string;
    phone: string;
  };
  addressInfo: {
    address: string;
    city: string;
    country: string;
  };
  agreeToTerms: boolean;
}

interface AccountContextType {
  accountDetails: AccountDetails;
  updateAccountDetails: (details: Partial<AccountDetails>) => void;
  updateBusinessInfo: (info: AccountDetails['businessInfo']) => void;
  updateAddressInfo: (info: AccountDetails['addressInfo']) => void;
  updateTermsAgreement: (agreed: boolean) => void;
}

const defaultAccountDetails: AccountDetails = {
  hasPaymentMethod: false,
  businessInfo: {
    businessName: '',
    businessType: '',
    website: '',
    email: '',
    phone: '',
  },
  addressInfo: {
    address: '',
    city: '',
    country: '',
  },
  agreeToTerms: false,
};

const AccountContext = createContext<AccountContextType>({
  accountDetails: defaultAccountDetails,
  updateAccountDetails: () => {},
  updateBusinessInfo: () => {},
  updateAddressInfo: () => {},
  updateTermsAgreement: () => {},
});

export const useAccount = () => useContext(AccountContext);

export const AccountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accountDetails, setAccountDetails] = useState<AccountDetails>(defaultAccountDetails);

  const updateAccountDetails = (details: Partial<AccountDetails>) => {
    setAccountDetails(prev => ({ ...prev, ...details }));
  };

  const updateBusinessInfo = (info: AccountDetails['businessInfo']) => {
    setAccountDetails(prev => ({
      ...prev,
      businessInfo: { ...info },
    }));
  };

  const updateAddressInfo = (info: AccountDetails['addressInfo']) => {
    setAccountDetails(prev => ({
      ...prev,
      addressInfo: { ...info },
    }));
  };

  const updateTermsAgreement = (agreed: boolean) => {
    setAccountDetails(prev => ({
      ...prev,
      agreeToTerms: agreed,
    }));
  };

  return (
    <AccountContext.Provider 
      value={{ 
        accountDetails, 
        updateAccountDetails,
        updateBusinessInfo,
        updateAddressInfo,
        updateTermsAgreement,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};