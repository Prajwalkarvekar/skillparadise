import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "919145015655";

  const message = encodeURIComponent(
    "Hello! I'm interested in your courses."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SkillParadise on WhatsApp"
      className="whatsapp-float"
    >
      <span className="whatsapp-glow"></span>

      <span className="whatsapp-button">
        <span className="whatsapp-shine"></span>

        <svg
          viewBox="0 0 32 32"
          className="whatsapp-icon"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M19.11 17.21c-.27-.14-1.59-.78-1.83-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.46-.84-2-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.67 4.13.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.59-.65 1.81-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z"
          />

          <path
            fill="currentColor"
            d="M16.02 4.2c-6.5 0-11.78 5.28-11.78 11.78 0 2.08.54 4.04 1.49 5.74L4.18 27.8l6.22-1.63a11.73 11.73 0 0 0 5.62 1.43h.01c6.49 0 11.77-5.28 11.77-11.78S22.52 4.2 16.02 4.2Zm0 21.35h-.01c-1.75 0-3.47-.47-4.97-1.36l-.36-.21-3.69.97.99-3.6-.23-.37a9.76 9.76 0 1 1 8.27 4.57Zm6.08-7.32c-.33-.16-1.96-.97-2.26-1.08-.3-.11-.52-.16-.74.16-.22.33-.85 1.08-1.04 1.3-.19.22-.38.25-.71.08-.33-.16-1.39-.51-2.65-1.63-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.5.14-.66.14-.14.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.79-1.01-2.45-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.41-.3.33-1.15 1.12-1.15 2.73 0 1.61 1.18 3.17 1.34 3.39.16.22 2.33 3.56 5.65 4.99.79.34 1.41.55 1.89.7.79.25 1.51.21 2.08.13.63-.09 1.96-.8 2.24-1.58.27-.78.27-1.45.19-1.58-.08-.14-.3-.22-.63-.38Z"
          />
        </svg>
      </span>

      <span className="whatsapp-ring whatsapp-ring-one"></span>
      <span className="whatsapp-ring whatsapp-ring-two"></span>

      <span className="whatsapp-tooltip">
        <strong>Chat with us</strong>
        <span>We're here to help</span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
