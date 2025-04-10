export type User = {
    id: string;
    first_name: string;
    last_name: string;
    image: string;
    stats: UserStats;
}

type UserStats = {
    current_streak_in_days: number;
    skills: UserSkillsSummary;
    total_sessions_played: number;
}

export type UserSkillsSummary = {
    math: UserSkills;
    reading: UserSkills;
    speaking: UserSkills;
    writing: UserSkills;
}



export type UserSkills = {
    current: number;
    level: number;
    max: number;
}

export type SkillColors = {
    writing: string;
    reading: string;
    math: string;
    speaking: string;
  };

