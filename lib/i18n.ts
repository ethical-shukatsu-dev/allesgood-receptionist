export type Language = 'ja' | 'en';

import { team } from './team';

// Create team options objects based on the single source of truth
const teamOptionsEn = team.reduce((acc, team) => {
  acc[team.id] = team.nameEn;
  return acc;
}, {} as Record<string, string>);

const teamOptionsJa = team.reduce((acc, team) => {
  acc[team.id] = team.nameJa;
  return acc;
}, {} as Record<string, string>);

export const translations = {
  ja: {
    title: '訪問者登',
    description: 'お越しいただきありがとうございます',
    name: {
      label: '氏名 *',
      placeholder: 'お名前',
      error: '名前は2文字以上で入力してください。',
    },
    company: {
      label: '会社 / 所属',
      placeholder: '会社名',
    },
    team: {
      label: '訪問先 *',
      placeholder: '訪問先を選択',
      error: '訪問先を選択してください。',
    },
    purpose: {
      label: '目的 *',
      placeholder: '目的を選択',
      error: '目的を選択してください。',
    },
    teamOptions: teamOptionsJa,
    purposeOptions: {
      Meeting: '会議',
      Interview: '面接',
      Delivery: '配達',
      Other: 'その他',
    },
    button: {
      submit: 'チームに通知',
      submitting: '通知中...',
    },
    success: {
      title: 'ありがとうございます！',
      message: 'チームに通知しました。しばらくお待ちください。',
      button: '新しい登録',
    },
    error: {
      title: 'エラー',
      message: '通知の送信に失敗しました。もう一度お試しください。',
    },
    langSwitcher: {
      label: 'Language',
      options: {
        en: 'English',
        ja: '日本語',
      }
    },
    homePage: {
      welcome: 'アレスグッドへようこそ！',
      subtitle: 'ご到着をお知らせください'
    }
  },
  en: {
    title: 'Guest Registration',
    description: 'Let us know you\'ve arrived',
    name: {
      label: 'Full Name *',
      placeholder: 'Your name',
      error: 'Name must be at least 2 characters.',
    },
    company: {
      label: 'Company / Affiliation',
      placeholder: 'Company name',
    },
    team: {
      label: 'Person/Team visiting *',
      placeholder: 'Select a team',
      error: 'Please select a team.',
    },
    purpose: {
      label: 'Purpose *',
      placeholder: 'Select a purpose',
      error: 'Please select a purpose.',
    },
    teamOptions: teamOptionsEn,
    purposeOptions: {
      Meeting: 'Meeting',
      Interview: 'Interview',
      Delivery: 'Delivery',
      Other: 'Other',
    },
    button: {
      submit: 'Notify Team',
      submitting: 'Notifying...',
    },
    success: {
      title: 'Thank You!',
      message: 'Your team has been notified and someone will be with you shortly.',
      button: 'Submit Another',
    },
    error: {
      title: 'Error',
      message: 'Failed to send notification. Please try again.',
    },
    langSwitcher: {
      label: 'Language',
      options: {
        en: 'English',
        ja: '日本語',
      }
    },
    homePage: {
      welcome: 'Welcome to Our Office',
      subtitle: 'Please let us know you\'ve arrived'
    }
  }
};

// Maintain backward compatibility with the previous implementation
export const formText = translations.ja; 