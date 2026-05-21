import { useLanguage } from '../i18n/LanguageContext';
import { PolicyDocument } from '../components/PolicyDocument';
import { privacyPolicyContent } from '../data/privacyPolicyContent';

export function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const { title, sections } = privacyPolicyContent[language];

  return <PolicyDocument title={title} sections={sections} />;
}
