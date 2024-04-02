import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-wolfatron-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wolfatron-title.component.html',
  styleUrl: './wolfatron-title.component.scss',
})
export class WolfatronTitleComponent implements OnInit {

  ngOnInit(): void {

    // SET GSAP START VARS
    // gsap.set("#a_txt",{ y:2000, autoAlpha:0 })

    // TITLE ANIMATION TIMELINE
    var title_tl = gsap.timeline();
    title_tl.from("#a_txt", { y:2000, autoAlpha:0, duration:.8, ease: "back.out"});

    title_tl.from("#wolf_txt", { x:-1000, autoAlpha:0, duration:.6, ease:"expo.out" }, "-=.4");
    title_tl.from("#tron_txt", { x:1000, autoAlpha:0, duration:.6, ease:"expo.out" }, "-=.6");

  }


}
