import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["names"]
  connect() {
    console.log("hello", this.element)
  }

  greet() {
    const element = this.namesTarget
    const names = element.value
    console.log("hi", names)
    console.log(this)
  }
}
