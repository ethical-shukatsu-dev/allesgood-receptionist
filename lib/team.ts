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
  { id: 'katanaka_hiroki', nameEn: 'Katanaka Hiroki', nameJa: '潟中 弘貴', mention: 'U06MJASEP4H' },
  { id: 'iijima_takuto', nameEn: 'Iijima Takuto', nameJa: '飯島 拓人', mention: 'D093C7A537E' },
  { id: 'ota_mayaka', nameEn: 'Ota Mayaka', nameJa: '大田 麻弥加', mention: 'U07S2AJA094' },
  { id: 'nakamura_nagisa', nameEn: 'Nakamura Nagisa', nameJa: '中村 なぎさ', mention: 'D08TVC26MQX' },
  { id: 'hirayama_akane', nameEn: 'Hirayama Akane', nameJa: '平山 果音', mention: 'D099XD64YNR' },
  { id: 'kim_jaebeom', nameEn: 'Jaebeom Kim', nameJa: '金 宰範', mention: 'D08LFTP7R9P' },
  { id: 'hani_shota', nameEn: 'Hani Shota', nameJa: '半井 翔汰', mention: 'U02N8ASKM0X' },
  { id: 'varma_avinash', nameEn: 'Avinash Varma', nameJa: 'Varma Avinash', mention: 'U07AEQTQK2P' },
  { id: 'ly_kim', nameEn: 'Kim Ly', nameJa: 'Ly Kim', mention: 'U0512L1AWJC' },
  { id: 'miyazawa_karen', nameEn: 'Miyazawa Karen', nameJa: '宮澤 カレン', mention: 'D093CN8QESK' },
  { id: 'iwamoto_mamiko', nameEn: 'Iwamoto Mamiko', nameJa: '岩本 真美子', mention: 'D090GTDMBPV' },
  // { id: 'tanaka_minato', nameEn: 'Tanaka Minato', nameJa: '田中 港', mention: '@yuki.kobayashi' }
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