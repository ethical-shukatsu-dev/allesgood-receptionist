// Define the team structure
export type Team = {
  id: string;
  nameEn: string;
  nameJa: string;
  mention?: string;
}

// Define all teams in one place as a single source of truth
export const teams: Team[] = [
  { id: 'engineering', nameEn: 'Engineering', nameJa: 'エンジニアリング', mention: '@engineering' },
  { id: 'product', nameEn: 'Product', nameJa: 'プロダクト', mention: '@product' },
  { id: 'design', nameEn: 'Design', nameJa: 'デザイン', mention: '@design' },
  { id: 'marketing', nameEn: 'Marketing', nameJa: 'マーケティング', mention: '@marketing' },
  { id: 'sales', nameEn: 'Sales', nameJa: '営業', mention: '@sales' },
  { id: 'support', nameEn: 'Support', nameJa: 'サポート', mention: '@support' },
];

// Helper function to get a team by ID
export const getTeamById = (id: string): Team | undefined => {
  return teams.find(team => team.id === id);
};

// Create a map of team IDs to team objects for quick lookup
export const teamMap: Record<string, Team> = teams.reduce((acc, team) => {
  acc[team.id] = team;
  return acc;
}, {} as Record<string, Team>); 