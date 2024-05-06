import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["slide", "btn", "totalSlides"];
  static values = { index: Number };

  connect() {
    this.updateTotalSlides();
  }

  next() {
    if (this.indexValue < 3) {
      this.indexValue++;
    };
    this.checkButtons();
    this.updateTotalSlides();
  };

  prev() {
    if (this.indexValue > 0) {
      this.indexValue--;
    };
    this.checkButtons();
    this.updateTotalSlides();
  };

  indexValueChanged() {
    this.showCurrentSlide();
  };

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue;
    });
  };

  checkButtons() {
    if (this.indexValue === 0) {
      this.btnTargets[0].disabled = true;
    } else {
      this.btnTargets[0].disabled = false;
    };

    if (this.indexValue === this.slideTargets.length - 1) {
      this.btnTargets[1].disabled = true;
    } else {
      this.btnTargets[1].disabled = false;
    };
  };

  updateTotalSlides() {
    this.totalSlidesTarget.textContent = `${this.indexValue + 1}/${this.slideTargets.length}`
    // console.log("first")
  };
}