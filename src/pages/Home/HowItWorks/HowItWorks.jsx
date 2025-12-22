export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Register Your Account",
      desc: "Sign up as an HR Manager or Employee to get started.",
    },
    {
      step: "2",
      title: "Manage Assets & Team",
      desc: "HR can add assets, track inventory, and manage team members efficiently.",
    },
    {
      step: "3",
      title: "Request & Approve Assets",
      desc: "Employees can request assets, and HR can review and approve requests.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>

      <div className="grid sm:grid-cols-3 gap-8 text-center">
        {steps.map((s, i) => (
          <div key={i} className="p-6 bg-base-100 rounded-xl shadow">
            <div className="text-5xl font-bold text-primary">{s.step}</div>
            <h3 className="text-xl font-bold mt-3">{s.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
