// Define the team structure
export type Team = {
  id: string;
  nameEn: string;
  nameJa: string;
  mention?: string; // Slack member ID
}

export const team: Team[] = [
  { id: 'katsumi_kimihiro', nameEn: 'Katsumi Kimihiro', nameJa: '勝見 仁泰', mention: 'U01HQAYRLTT' },
  { id: 'kageyama_yumiko', nameEn: 'Kageyama Yumiko', nameJa: '影山 由美子', mention: 'U06UVF0JFLP' },
  { id: 'hani_shota', nameEn: 'Hani Shota', nameJa: '半井 翔汰', mention: 'U02N8ASKM0X' },
  { id: 'kobashi_ami', nameEn: 'Kobashi Ami', nameJa: '小橋 杏実', mention: 'U02L74RTH2Q' },
  { id: 'katanaka_hiroki', nameEn: 'Katanaka Hiroki', nameJa: '潟中 弘貴', mention: 'U06MJASEP4H' },
  { id: 'ota_mayaka', nameEn: 'Ota Mayaka', nameJa: '大田 麻弥加', mention: 'U07S2AJA094' },
  { id: 'fukaya_koki', nameEn: 'Fukaya Koki', nameJa: '深谷 洸樹', mention: 'U07KWPNH1RP' },
  { id: 'aoyama_kana', nameEn: 'Aoyama Kana', nameJa: '青山 佳菜', mention: 'U0616Q4RUC8' },
  { id: 'hikino_kosuke', nameEn: 'Hikino Kosuke', nameJa: '引野 航介', mention: 'U04NKKUUW9W' },
  { id: 'ohashi_takuya', nameEn: 'Ohashi Takuya', nameJa: '大橋 拓矢', mention: 'U01UTJY8QUC' },
  { id: 'ly_kim', nameEn: 'Kim Ly', nameJa: 'Ly Kim', mention: 'U0512L1AWJC' },
  { id: 'varma_avinash', nameEn: 'Avinash Varma', nameJa: 'Varma Avinash', mention: 'U07AEQTQK2P' },
  // { id: 'iijima_takuto', nameEn: 'Iijima Takuto', nameJa: '飯島 拓人', mention: '@takuto.iijima / 飯島 拓人' },
  // { id: 'kim_jaebeom', nameEn: 'Jaebeom Kim', nameJa: '金 宰範', mention: '@jaebeom.kim/Jay' },
  // { id: 'nakamura_nagisa', nameEn: 'Nakamura Nagisa', nameJa: '中村 奈月', mention: '@nagisa.nakamura' },
  // { id: 'watanabe_shunsuke', nameEn: 'Watanabe Shunsuke', nameJa: '渡邊　俊輔', mention: '@shunsuke watanabe' },
];

// Helper function to get a team by ID
export const getTeamById = (id: string): Team | undefined => {
  return team.find(team => team.id === id);
};

// Create a map of team IDs to team objects for quick lookup
export const teamMap: Record<string, Team> = team.reduce((acc, team) => {
  acc[team.id] = team;
  return acc;
}, {} as Record<string, Team>); 