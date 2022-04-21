const COOKIE_CONSENT_KEY = "cookie-consent";

class CoockieHandler {
  constructor(selectorName) {
    this.cookieHTML = document.querySelector(selectorName);
    const cookieAllowed = localStorage.getItem(COOKIE_CONSENT_KEY) === "true";
    if (cookieAllowed) {
      this.cookieHTML.classList.add("hide");
    } else {
      this.consentBtn = this.cookieHTML.querySelector(
        ".cookie-consent__button"
      );
      this.consentBtn?.addEventListener("click", this.onConsentClick.bind(this));
    }
  }
  
  onConsentClick() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    this.cookieHTML.classList.add("hide");
    this.consentBtn.removeEventListener(
      "click",
      this.onConsentClick.bind(this)
    );
  }
}

export default CoockieHandler;