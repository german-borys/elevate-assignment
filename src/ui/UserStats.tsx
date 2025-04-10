import type { UserSkillsSummary } from "@/types";
import { skillsColors } from "@/utils";

export default function UserStats({ skills }: { skills: UserSkillsSummary }) {
  console.log("Uskillser: '", skills);
  return (
    <div className="profile-stats">
      {Object.keys(skills).map((key, idx) => {
        const skillName = key as keyof UserSkillsSummary;
        const skillLevel =
          (skills[skillName].current / skills[skillName].max) * 100 + "%";
        return (
          <div key={idx} className="progress-bar-wrapper">
            <span className="skill-name">{skillName}</span>
            <div
              className="skill-progress"
              style={{
                width: skillLevel,
                backgroundColor: skillsColors[skillName],
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
