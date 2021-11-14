import { Profile } from './profile';
import { Skill } from './skill';

export interface Employee {
    name: string;
    profile: Profile;
    skills: Array<Skill>;
} 