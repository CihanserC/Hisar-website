import type { Language } from '../i18n/languages';
import { privacyPolicyDE } from './privacyPolicyContent.de';
import { privacyPolicyEN } from './privacyPolicyContent.en';

export const privacyPolicyContent = {
  DE: privacyPolicyDE,
  EN: privacyPolicyEN,
} satisfies Record<Language, { title: string; sections: typeof privacyPolicyDE.sections }>;
