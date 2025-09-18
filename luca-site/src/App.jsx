import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function SectionHeading({ kicker, title, subtitle }) {
	return (
		<header className="max-w-5xl mx-auto px-4 text-center md:text-left">
			{Boolean(kicker) && (
				<p className="text-sm font-semibold uppercase tracking-widest text-luca-orange">{kicker}</p>
			)}
			<h2 className="mt-1 text-3xl md:text-5xl font-extrabold leading-tight">
				{title}
			</h2>
			{Boolean(subtitle) && (
				<p className="mt-2 text-base md:text-lg text-slate-600">{subtitle}</p>
			)}
		</header>
	)
}

function CrewCard({ name, role }) {
	return (
		<div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-center">
			<div className="mx-auto h-24 w-24 rounded-full bg-luca-blue/10 flex items-center justify-center text-luca-blue font-bold text-xl">{name.charAt(0)}</div>
			<h4 className="mt-4 font-semibold">{name}</h4>
			<p className="text-sm text-slate-500">{role}</p>
		</div>
	)
}

function VideoCard() {
	return (
		<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
			<div className="aspect-video bg-gradient-to-br from-luca-blue/20 to-luca-orange/20 flex items-center justify-center">
				<span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow ring-1 ring-slate-200">
					<span className="ml-1 h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-luca-blue"></span>
				</span>
			</div>
			<div className="absolute left-4 bottom-4 text-white drop-shadow">
				<p className="text-sm font-medium">Episode 01</p>
				<p className="text-xs opacity-90">Introduction</p>
			</div>
		</div>
	)
}

function ContactForm() {
	return (
		<form className="grid grid-cols-1 md:grid-cols-3 gap-3">
			<input placeholder="Name" className="col-span-1 md:col-span-1 border border-slate-300 rounded-md px-3 py-2" />
			<input placeholder="Email" className="col-span-1 md:col-span-1 border border-slate-300 rounded-md px-3 py-2" />
			<input placeholder="Subject" className="col-span-1 md:col-span-1 border border-slate-300 rounded-md px-3 py-2" />
			<textarea placeholder="Message" rows="4" className="md:col-span-3 border border-slate-300 rounded-md px-3 py-2"></textarea>
			<div className="md:col-span-3">
				<button type="button" className="inline-flex items-center justify-center rounded-md bg-luca-blue px-4 py-2 font-semibold text-white shadow hover:bg-luca-blue/90">Send</button>
			</div>
		</form>
	)
}

function App() {
	return (
		<div className="font-inter">
			{/* Hero */}
			<section className="relative py-16 md:py-24">
				<div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
					<div>
						<p className="text-sm font-semibold uppercase tracking-widest text-luca-orange">Leadership Podcast</p>
						<h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight">Ride the Wave of Leadership with Luca.</h1>
						<p className="mt-4 text-slate-600 max-w-prose">Short leadership lessons with Luca and his crew. Watch quick episodes and explore stories behind the scenes.</p>
						<div className="mt-6 flex flex-wrap gap-3">
							<button className="rounded-full bg-luca-blue text-white px-6 py-3 font-semibold shadow hover:bg-luca-blue/90">Watch Episode 01</button>
							<button className="rounded-full border border-slate-300 px-6 py-3 font-semibold hover:bg-white">Subscribe</button>
						</div>
					</div>
					<div className="h-64 md:h-96 rounded-2xl bg-gradient-to-br from-luca-blue/20 to-luca-orange/20 border border-slate-200" />
				</div>
			</section>

			{/* Crew */}
			<section className="py-14">
				<SectionHeading kicker="Luca & his Crew" title="Meet the Crew" subtitle="The team behind the stories" />
				<div className="mt-8 max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
					<CrewCard name="Luca" role="Host" />
					<CrewCard name="Ray" role="Producer" />
					<CrewCard name="Vasco" role="Director" />
					<CrewCard name="Leslie" role="Guest" />
				</div>
			</section>

			{/* Leadership Minutes */}
			<section className="py-14">
				<SectionHeading kicker="Luca's Leadership Minutes" title="Latest Episode" />
				<div className="mt-8 max-w-5xl mx-auto px-4">
					<VideoCard />
				</div>
			</section>

			{/* Story */}
			<section className="py-14">
				<SectionHeading title="Where Luca's story began" subtitle="Behind the scenes and tools we use" />
				<div className="mt-8 max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6">
					<div className="rounded-2xl border border-slate-200 bg-white p-6">
						<h4 className="font-semibold">The Book</h4>
						<p className="mt-2 text-sm text-slate-600">Cafe Creating Teams – the origin of the series.</p>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-white p-6">
						<h4 className="font-semibold">The Process</h4>
						<p className="mt-2 text-sm text-slate-600">How each episode gets crafted with the crew.</p>
					</div>
				</div>
			</section>

			{/* Contact */}
			<section className="py-16 bg-white/70">
				<SectionHeading title="Got a Question for Luca's Crew?" />
				<div className="mt-8 max-w-4xl mx-auto px-4">
					<ContactForm />
				</div>
			</section>

			{/* Footer */}
			<footer className="py-10 text-center text-sm text-slate-500">
				<p>Luca © {new Date().getFullYear()}</p>
			</footer>
		</div>
	)
}

export default App
