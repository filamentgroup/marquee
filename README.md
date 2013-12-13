Let me stop you right here: if you’re looking for a fast, featured, modern ticker script, check out our <a href="https://github.com/filamentgroup/Heart.js">Heart.js repo</a>. Heart.js works on a system of tiered enhancements: CSS transitions where supported, `requestAnimationFrame` where supported, and so on back to a `setInterval` animating `margin-left`, which we found to be <a href="http://jsperf.com/scrollpos-test">to be more performant in IE 8/9</a>than `scrollLeft`, surprisingly.

But here at Filament Group, we’re not afraid to get a little weird. Heart.js came about in an effort to wring out every drop of cross-browser performance we could. In all our testing while working on Heart.js, we found one markup pattern in particular to be unusually resource-lean across a huge range of outdated mobile devices, browsers, and Internet Explorers 8 and 9 alike—even if it was a little wanting for features.

## The Marquis Marquee

We enhanced the `marquee` element.

This plugin can be invoked as an absolute last-resort fallback for Heart.js, either served via conditional comments or invoked programmatically based on (_incredibly_ basic) “<a href="http://responsivenews.co.uk/post/18948466399/cutting-the-mustard">cuts the mustard</a>” criteria.

### FAQs

**Q:** Seriously?<br>
**A:** Oh yeah.

**Q:** _Seriously?_<br>
**A:** Okay, look: this is an _absolute last resort_ fallback pattern for the <a href="https://github.com/filamentgroup/Heart.js">Heart.js ticker pattern</a>, which itself falls back to simply displaying all your content at once. This script gives you basic controls for a `marquee` tag, in the event that you need a Heart.js ticker to _unfailingly_ fall back to something ticker-like.

**Q:** You know `marquee` is deprecated, right?<br>
**A:** On the contrary: it was <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee?redirectlocale=en-US&redirectslug=HTML%2FElement%2Fmarquee">never a standard in the first place</a>.

**Q:** Do you have any data to back up the performance claims?<br>
**A:** Unfortunately, no. The best profiling tool we had in a place where this shows an appreciable _visual_ difference over Heart.js is the IE8 dev tools’ profiler, which shows no performance information on `marquee`—we can’t dig up any data on whatever arcane majjyks power the `marquee` element, deep within the rendering engine. If you know a way to profile this anywhere, <a href="https://github.com/filamentgroup/marquee/issues">I’d really like to hear from you</a>.

**Q:** Why does the code seem so… “DHTML for Dummies?”<br>
**A:** It _is_ for dummies. Old, old browsers. Older mobile browsers with incredibly poor standards support. Long-abandoned IEs. This is JavaScript at a first-grade parsing level—if it should break, however: you still get a ticker.

**Q:** You’re insane.<br>
**A:** Little bit.

### Contribute

This was actually a lot of fun to work on, in a nostalgic way—give it a try. If you can whip up some crazy alternative controls using the severely limited `marquee` API, I want to see them in the worst way.

If you find uses for this plugin, I’d love to see those too.

If you can find a place where this script/pattern *breaks*—outside of modern grown-up browsers—I’ll buy you a tonic.

For any of the above, feel free to <a href="https://github.com/filamentgroup/marquee/issues">file an issue in the tracker</a>.

XOXO,
Mat <s>Marquis</s> <ins>Marquee</ins>
