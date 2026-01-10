import { useEffect, useState } from "react";
import { api } from "../services/api";
import Logout from "../src/components/Logout";

export default function AdminDashboard() {
    const [profile, setProfile] = useState<any>(null);
    const [projects, setProjects] = useState<any[]>([]);
    const [editingProject, setEditingProject] = useState<any>(null);

    const emptyProject = {
        title: "",
        description: "",
        techStack: "",
        githubUrl: "",
        liveUrl: "",
    };

    const [projectForm, setProjectForm] = useState(emptyProject);

    useEffect(() => {
        loadAll();
    }, []);

    const loadAll = async () => {
        const p = await api.getProfile();

        const proj = await api.getProjects();

        setProfile(p);
        setProjects(Array.isArray(proj) ? proj : []);

    };


    const saveProfile = async () => {
        try {
            await api.updateProfile(profile);
            alert("Profile saved");
        } catch (err) {
            console.error(err);
            alert("Failed to save profile");
        }
    };


    const submitProject = async () => {
        const payload = {
            ...projectForm,
            techStack: projectForm.techStack.split(",").map((t: string) => t.trim()),
        };

        if (editingProject) {
            await api.updateProject(editingProject._id, payload);
        } else {
            await api.createProject(payload);
        }

        setProjectForm(emptyProject);
        setEditingProject(null);
        loadAll();
    };

    const editProject = (p: any) => {
        setEditingProject(p);
        setProjectForm({
            ...p,
            techStack: p.techStack.join(", "),
        });
    };

    const deleteProject = async (id: string) => {
        if (!confirm("Delete this project?")) return;
        await api.deleteProject(id);
        loadAll();
    };

    if (!profile) return <p className="p-6">Loading…</p>;

    return (
        <div className="mx-auto max-w-6xl space-y-14 p-8">

            {/* HEADER */}
            <header>
                <h1 className="text-3xl font-semibold tracking-tight">Admin Dashboard</h1>
                <p className="text-sm text-neutral-400 mt-1">
                    Manage profile and projects
                </p>
            </header>
            <div className="flex justify-end p-4">
                <Logout />
            </div>

            {/* PROFILE */}
            <section className="card space-y-10">
                <h2 className="section-title">Profile</h2>

                {/* BASIC */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="label">Logo Name</label>
                        <input className="input" value={profile.logoName}
                            onChange={e => setProfile({ ...profile, logoName: e.target.value })} />
                    </div>

                    <div>
                        <label className="label">Full Name</label>
                        <input className="input" value={profile.fullName}
                            onChange={e => setProfile({ ...profile, fullName: e.target.value })} />
                    </div>

                    <div>
                        <label className="label">Role</label>
                        <input className="input" value={profile.role}
                            onChange={e => setProfile({ ...profile, role: e.target.value })} />
                    </div>

                    <div>
                        <label className="label">Phone</label>
                        <input className="input" value={profile.phone || ""}
                            onChange={e => setProfile({ ...profile, phone: e.target.value })} />
                    </div>

                    <div className="md:col-span-2">
                        <label className="label">Email</label>
                        <input className="input" value={profile.email}
                            onChange={e => setProfile({ ...profile, email: e.target.value })} />
                    </div>

                    <div className="md:col-span-2">
                        <label className="label">Location</label>
                        <input className="input" value={profile.location}
                            onChange={e => setProfile({ ...profile, location: e.target.value })} />
                    </div>

                    <div className="md:col-span-2">
                        <label className="label">FooterText</label>
                        <input className="input" value={profile.footerText}
                            onChange={e => setProfile({ ...profile, footerText: e.target.value })} />
                    </div>

                    <div className="md:col-span-2">
                        <label className="label">About</label>
                        <textarea className="input min-h-[120px]"
                            value={profile.about}
                            onChange={e => setProfile({ ...profile, about: e.target.value })} />
                    </div>
                </div>


                {/* SKILLS */}
                <div className="space-y-4">
                    <h3 className="section-title">Skills</h3>

                    <div>
                        <label className="label">Frontend</label>
                        <input
                            className="input"
                            value={profile.skills.frontend.join(", ")}
                            onChange={e =>
                                setProfile({
                                    ...profile,
                                    skills: {
                                        ...profile.skills,
                                        frontend: e.target.value
                                            .split(",")
                                            .map(s => s.trim())
                                            .filter(Boolean),
                                    },
                                })
                            }
                        />

                    </div>

                    <div>
                        <label className="label">Backend</label>
                        <input
                            className="input"
                            value={profile.skills.backend.join(", ")}
                            onChange={e =>
                                setProfile({
                                    ...profile,
                                    skills: {
                                        ...profile.skills,
                                        backend: e.target.value
                                            .split(",")
                                            .map(s => s.trim())
                                            .filter(Boolean),
                                    },
                                })
                            }
                        />
                    </div>

                    <div>
                        <label className="label">Database</label>
                        <input
                            className="input"
                            value={profile.skills.database.join(", ")}
                            onChange={e =>
                                setProfile({
                                    ...profile,
                                    skills: {
                                        ...profile.skills,
                                        database: e.target.value
                                            .split(",")
                                            .map(s => s.trim())
                                            .filter(Boolean),
                                    },
                                })
                            }
                        />
                    </div>

                    <div>
                        <label className="label">Tools</label>
                        <input
                            className="input"
                            value={profile.skills.tools.join(", ")}
                            onChange={e =>
                                setProfile({
                                    ...profile,
                                    skills: {
                                        ...profile.skills,
                                        tools: e.target.value
                                            .split(",")
                                            .map(s => s.trim())
                                            .filter(Boolean),
                                    },
                                })
                            }
                        />
                    </div>
                </div>


                {/* SOCIAL */}
                <div className="space-y-4">
                    <h3 className="section-title">Social</h3>

                    <div>
                        <label className="label">GitHub</label>
                        <input className="input" value={profile.social.github || ""}
                            onChange={e => setProfile({ ...profile, social: { ...profile.social, github: e.target.value } })} />
                    </div>

                    <div>
                        <label className="label">LinkedIn</label>
                        <input className="input" value={profile.social.linkedin || ""}
                            onChange={e => setProfile({ ...profile, social: { ...profile.social, linkedin: e.target.value } })} />
                    </div>

                    <div>
                        <label className="label">Twitter / X</label>
                        <input className="input" value={profile.social.twitter || ""}
                            onChange={e => setProfile({ ...profile, social: { ...profile.social, twitter: e.target.value } })} />
                    </div>
                </div>

                {/* SAVE BUTTON */}
                <div className="pt-4">
                    <button onClick={saveProfile} className="btn-primary">
                        Save Profile
                    </button>
                </div>
            </section>

            {/* PROJECTS */}
            <section className="card space-y-8">
                <h2 className="section-title">Projects</h2>

                {/* ADD / EDIT */}
                <div className="space-y-4">
                    <input className="input" placeholder="Title" value={projectForm.title} onChange={e => setProjectForm({ ...projectForm, title: e.target.value })} />
                    <input className="input" placeholder="GitHub URL" value={projectForm.githubUrl} onChange={e => setProjectForm({ ...projectForm, githubUrl: e.target.value })} />
                    <textarea className="input min-h-[90px]" placeholder="Description" value={projectForm.description} onChange={e => setProjectForm({ ...projectForm, description: e.target.value })} />
                    <input className="input" placeholder="Tech Stack (comma separated)" value={projectForm.techStack} onChange={e => setProjectForm({ ...projectForm, techStack: e.target.value })} />
                    <input className="input" placeholder="Live URL" value={projectForm.liveUrl} onChange={e => setProjectForm({ ...projectForm, liveUrl: e.target.value })} />

                    <div className="flex gap-3">
                        <button onClick={submitProject} className="btn-primary">
                            {editingProject ? "Update Project" : "Add Project"}
                        </button>
                        {editingProject && (
                            <button onClick={() => { setEditingProject(null); setProjectForm(emptyProject); }} className="btn-secondary">
                                Cancel
                            </button>
                        )}
                    </div>
                </div>

                {/* LIST */}
                <div className="space-y-3">
                    {projects.map(p => (
                        <div key={p._id} className="flex items-center justify-between rounded-lg border border-neutral-800 p-4">
                            <div>
                                <h3 className="font-medium">{p.title}</h3>
                                <p className="text-xs text-neutral-400">{p.techStack.join(", ")}</p>
                            </div>

                            <div className="flex gap-4">
                                <button onClick={() => editProject(p)} className="btn-secondary">Edit</button>
                                <button onClick={() => deleteProject(p._id)} className="btn-danger">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
        </div>
    );
}
