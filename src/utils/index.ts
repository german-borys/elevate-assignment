import {  SkillColors } from "@/types";

export const skillsColors:SkillColors = {
    writing: '#ff989b',
    reading: '#2151a0',
    math: '#4391f2',
    speaking: '#9be3f4',
}

export const getName = (first: string, last:string) => first && last ? `${first} ${last}` : first || last;