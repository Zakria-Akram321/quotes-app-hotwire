import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["slide"];

  initialize() {
    this.index = 0;
    this.showCurrentSlide();
  }

  next() {
    this.index++
    this.showCurrentSlide();
    console.log(this.index)
  }

  prev() {
    this.index--;
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach(element => {
      element.hidden = index !== this.index;
    });
  }
}