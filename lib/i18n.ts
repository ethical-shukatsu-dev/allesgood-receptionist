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
    title: 'ゲスト登録',
    description: 'ご来社ありがとうございます',
    name: {
      label: 'お名前 *',
      placeholder: 'お名前をご入力ください',
      error: 'お名前は2文字以上でご入力ください',
    },
    company: {
      label: '会社名・所属',
      placeholder: '会社名をご入力ください',
    },
    team: {
      label: '面会希望のメンバー *',
      placeholder: 'メンバーをお選びください',
      error: '面会希望のメンバーを選択してください',
    },
    purpose: {
      label: '訪問目的 *',
      placeholder: '目的をお選びください',
      error: '訪問目的を選択してください',
    },
    teamOptions: teamOptionsJa,
    purposeOptions: {
      Meeting: '打ち合わせ',
      Interview: '面接',
      Delivery: '配達',
      Other: 'その他',
    },
    button: {
      submit: '受付を完了する',
      submitting: '送信中...',
    },
    success: {
      title: '受付完了',
      message: '担当者に連絡いたしましたので、少々お待ちください',
      button: '戻る',
    },
    error: {
      title: 'エラー',
      message: '送信に失敗しました。お手数ですが、もう一度お試しください',
    },
    langSwitcher: {
      label: '言語',
      options: {
        en: 'English',
        ja: '日本語',
      }
    },
    homePage: {
      welcome: 'アレスグッドへようこそ',
      subtitle: 'ゲスト情報をご入力ください'
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
      button: 'back to start',
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