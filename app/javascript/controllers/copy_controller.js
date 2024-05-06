import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["source"]
  connect() {
    console.log("hello from copy to clipboard")
  }

  async copyToClipboard() {
    const element = this.sourceTarget;
    const source = element.value;
    try {
      await navigator.clipboard.writeText(source);
      console.log("Text copied to clipboard:", source)
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  }
}