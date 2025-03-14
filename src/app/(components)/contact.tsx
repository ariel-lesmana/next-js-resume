"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState<string>("");

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setStatus("Sending...");
		try {
			console.log(formData);

			const response = await axios.post("/api/send-email", formData);

			if (response.status === 200) {
				setStatus("Message sent successfully!");
				setFormData({ name: "", email: "", message: "" });
			} else {
				setStatus("Failed to send message.");
			}
		} catch (error) {
			console.error(error);
			setStatus("An error occurred. Please try again.");
		}
	};

	return (
		<section id="contact" className="py-32 bg-gradient-to-br from-[#0A0F1C] via-[#1A1F3C] to-[#0A0F1C]">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold mb-16 text-center gradient-text">Get in Touch</h2>
				<div className="max-w-xl mx-auto">
					<div className="flex justify-center space-x-12 mb-12">
						<a href="https://github.com/ariel-lesmana" className="contact-icon text-cyan-100">
							<Github size={32} />
						</a>
						<a href="https://www.linkedin.com/in/ariel-p-lesmana/" className="contact-icon text-cyan-100">
							<Linkedin size={32} />
						</a>
						<a href="mailto:ariel.p.lesmana@gmail.com" className="contact-icon text-cyan-100">
							<Mail size={32} />
						</a>
						<a
							href="/ariel-resume-2025.pdf" // Path to the resume file in the public folder
							download="Ariel_Lesmana_Resume.pdf" // Suggests a default filename for the download
							className="contact-icon text-cyan-100"
						>
							<Download size={32} />
						</a>
					</div>
					<div className="glass-card rounded-2xl p-8">
						<form className="space-y-6" onSubmit={handleSubmit}>
							<div>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Your Name"
									className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
									required
								/>
							</div>
							<div>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Your Email"
									className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
									required
								/>
							</div>
							<div>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder="Your Message"
									rows={4}
									className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
									required
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
							>
								Send Message
							</button>
							{status && (
								<p
									className={`mt-4 text-center ${
										status.includes("success") ? "text-green-400" : "text-red-400"
									}`}
								>
									{status}
								</p>
							)}
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
