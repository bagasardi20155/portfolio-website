import { ExternalLink, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PortfolioPage() {
  const experiences = [
    {
      company: "PT. Erhanesia Digima Mukitama (Erdigma)",
      role: "Backend Developer",
      period: "Feb 2025 – present",
      description: "Building scalable internal FMCG systems with Spring Boot, supporting 500+ daily active users.",
      highlights: ["60%–80% faster query execution", "Processed 270k+ monthly transactions"],
    },
    {
      company: "PT. Powerhouze Baraya Teknologi",
      role: "Backend Developer (Freelance)",
      period: "April 2024 – present",
      description: "Delivering backend APIs using Spring Boot and clean architecture.",
      highlights: ["API optimization", "Performance tuning"],
    },
    {
      company: "PT Perangkat Guna Karya",
      role: "Project Manager",
      period: "May 2024 – Dec 2024",
      description:
        "Led end-to-end development of client projects, coordinating cross-functional teams and managing technical roadmaps.",
      highlights: ["JAIA Establishment", "PK237-LPDP", "Point-Of-Sales System"],
    },
    {
      company: "PT Perangkat Guna Karya",
      role: "Fullstack Developer",
      period: "Nov 2022 – May 2024",
      description:
        "Developed and maintained full-stack applications using Laravel and React, focusing on performance and user experience.",
      highlights: ["Admin Dashboard Design", "API Integrations"],
    },
    {
      company: "Dinas Pendidikan Dan Kebudayaan Purbalingga",
      role: "Software Engineer (Internship)",
      period: "June 2021 – Aug 2021",
      description:
        "Designed and implemented an internal attendance and payroll management system for local government staff.",
      highlights: ["Attendance System", "Payroll Module"],
    },
  ]

  const skills = [
    "Java",
    "PHP",
    "Kotlin",
    "Javascript",
    "Spring Boot",
    "Laravel",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "AWS",
    "CI/CD",
  ]

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 lg:px-8">
          <div className="flex flex-col">
            <span className="font-bold tracking-tight">BAGAS ARDIANSYAH</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Software Developer</span>
          </div>
          <div className="hidden gap-8 text-sm font-medium sm:flex">
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href="mailto:bagasardi20155@gmail.com">Hire Me</a>
          </Button>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24 lg:px-8">
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl text-balance">
              Building scalable systems with code and precision.
            </h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed text-pretty">
              I specialize in building scalable RESTful APIs and internal systems. Based in Purbalingga, Central Java, I
              focus on technical optimization and cross-functional collaboration to deliver high-impact solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="#experience">View Experience</Link>
              </Button>
              <Button variant="ghost" className="gap-2" asChild>
                <a href="https://github.com/bagasardi20155" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" /> Github
                </a>
              </Button>
              <Button variant="ghost" className="gap-2" asChild>
                <a href="https://linkedin.com/in/bagas-ardiansyah/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Grid */}
        <section id="experience" className="mb-32">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Professional Experience</h2>
            <div className="h-px flex-1 bg-border mx-8 hidden sm:block"></div>
          </div>
          <div className="grid gap-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr]">
                <div className="text-sm font-medium text-muted-foreground">{exp.period}</div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
                    {exp.company}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="mb-6 text-muted-foreground leading-relaxed max-w-2xl">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h, i) => (
                      <Badge key={i} variant="secondary" className="rounded-full px-3">
                        {h}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Technical Skills</h2>
            <div className="h-px flex-1 bg-border mx-8 hidden sm:block"></div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-center rounded-xl border bg-card p-6 text-center font-medium hover:border-primary hover:bg-accent transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="rounded-3xl border bg-card p-8 sm:p-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight">Let's work together.</h2>
              <p className="text-muted-foreground text-lg mb-8">
                I'm always open to discussing new projects or opportunities. Feel free to reach out.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5" />
                  <span>bagasardi20155@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>Purbalingga, Central Java</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end gap-4 lg:items-end">
              <Button size="lg" className="w-fit px-8" asChild>
                <a href="mailto:bagasardi20155@gmail.com">Send Message</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Bagas Ardiansyah.</p>
        </div>
      </footer>
    </div>
  )
}
