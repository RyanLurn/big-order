export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl py-4 md:py-8">
      <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p>Last updated: November 22, 2025</p>
        <p>
          Big Order ("we", "our", or "us") is committed to protecting your
          privacy. This Privacy Policy explains how your personal information is
          collected, used, and disclosed by Big Order.
        </p>
        <h3>1. Information We Collect</h3>
        <p>
          We collect information to provide better services to our users. This
          includes:
        </p>
        <ul>
          <li>
            <strong>Merchant Information:</strong> Name, email address, and
            store details provided during installation.
          </li>
          <li>
            <strong>Order Data:</strong> We process order details required to
            perform edit functions (shipping address, line items). We do not
            store credit card information.
          </li>
        </ul>
        <h3>2. How We Use Your Information</h3>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Operate and maintain our Service.</li>
          <li>Improve, personalize, and expand our Service.</li>
          <li>
            Send you emails, including order confirmations and support
            responses.
          </li>
        </ul>
        <h3>3. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at hello@bigorder.store.
        </p>
      </div>
    </div>
  );
}
