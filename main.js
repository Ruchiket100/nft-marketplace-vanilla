import './style.css'
import gsap from "gsap";



let h1 = document.querySelector('h1');
let tl = gsap.timeline();
gsap.fromTo(h1, 1, {
  scale: 2
}, {
  scale: 1
})