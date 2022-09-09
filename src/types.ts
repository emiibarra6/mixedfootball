export interface TeamsEntry {
  team_id: number
  players_quantity: number
  matches: number
  team_name: string
}

export type NonSensitiveTeamsEntry = Omit<TeamsEntry, 'team_id'>
export type NewTeamsEntry = Omit<TeamsEntry, 'team_id'>
