import { Github, GraduationCap, Mail, MapPin, Phone, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { socialIconButtonVariants } from "@/components/ui/SocialIconButton";
import CopyField from "@/components/resume/CopyField";
import { resumeEducation, resumeProfile, resumeSkills } from "@/data/resume";
import { socialLinks } from "@/lib/social-links";

export const cardBase = "rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5";

function ProfileCard() {
  return (
    <section className={cardBase}>
      <div className="flex items-center gap-2 text-base font-semibold text-zinc-900">
        <MapPin size={16} className="text-zinc-700" />
        Profile
      </div>
      <div className="mt-3 space-y-2 text-sm text-zinc-500">
        {resumeProfile.location ? (
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-zinc-400" />
            <span>{resumeProfile.location}</span>
          </div>
        ) : null}
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-zinc-400" />
          <CopyField value={resumeProfile.email} />
        </div>
        {resumeProfile.phone ? (
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-zinc-400" />
            <CopyField value={resumeProfile.phone} />
          </div>
        ) : null}
        {resumeProfile.handle ? (
          <div className="flex items-center gap-2">
            <Github size={16} className="text-zinc-400" />
            <a
              href={`https://github.com/${resumeProfile.handle}`}
              className="hover:text-zinc-700"
              target="_blank"
              rel="noreferrer"
            >
              {resumeProfile.handle}
            </a>
          </div>
        ) : null}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
            className={socialIconButtonVariants({ size: "sm" })}
          >
            <Icon size={16} strokeWidth={1.75} />
          </a>
        ))}
      </div>
    </section>
  );
}

function SkillsCard() {
  return (
    <section className={cardBase}>
      <div className="flex items-center gap-2 text-base font-semibold text-zinc-900">
        <Sparkles size={16} className="text-zinc-700" />
        Skills
      </div>
      <div className="mt-3 space-y-3">
        {resumeSkills.map((group) => (
          <div key={group.title} className="space-y-2">
            <p className="text-sm font-semibold text-zinc-700">
              {group.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill} variant="muted">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationCard() {
  return (
    <section className={cardBase}>
      <div className="flex items-center gap-2 text-base font-semibold text-zinc-900">
        <GraduationCap size={16} className="text-zinc-700" />
        Education
      </div>
      <div className="mt-3 space-y-3">
        {resumeEducation.map((education) => (
          <div key={education.school} className="space-y-2">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-zinc-800">
                {education.school}
              </p>
              <p className="text-xs text-zinc-500">{education.degree}</p>
              <p className="text-xs text-zinc-400">{education.period}</p>
            </div>
            {education.highlights.length > 0 ? (
              <ul className="list-disc space-y-2 pl-5 text-xs leading-6 text-zinc-500">
                {education.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function InfoCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ProfileCard />
      <SkillsCard />
      <EducationCard />
    </div>
  );
}
