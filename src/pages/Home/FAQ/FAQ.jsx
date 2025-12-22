export default function FAQ() {
  const faqs = [
    {
      q: "Is AssetVerse free to use?",
      a: "Yes, AssetVerse offers a free Basic plan suitable for small teams with up to 5 employees.",
    },
    {
      q: "Can I upgrade or change my subscription later?",
      a: "Absolutely. HR managers can upgrade, downgrade, or change the subscription plan at any time.",
    },
    {
      q: "How secure is our company and employee data?",
      a: "Your data is fully encrypted, securely stored, and protected with role-based access control.",
    },
    {
      q: "Do employees need separate accounts?",
      a: "Yes. Employees receive secure invitations from HR to access and manage their assigned assets.",
    },
    {
      q: "Can AssetVerse track asset history and usage?",
      a: "Yes. AssetVerse maintains complete asset history including assignments, returns, and usage records.",
    },
    {
      q: "Is AssetVerse suitable for large organizations?",
      a: "Definitely. AssetVerse is scalable and designed to support both small teams and large enterprises.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-6">FAQ</h2>

      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details
            key={i}
            className="collapse collapse-arrow bg-base-100 shadow"
          >
            <summary className="collapse-title text-lg font-semibold">
              {f.q}
            </summary>
            <div className="collapse-content">
              <p className="text-gray-600">{f.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
