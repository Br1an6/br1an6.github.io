// Interactive Features & Animations

document.addEventListener('DOMContentLoaded', function () {
  // 1. Mouse-Following Spotlight (Linear / Stripe style)
  var spotlightCards = document.querySelectorAll('.spotlight-card');
  spotlightCards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });
  });

  // 2. Interactive 3D Perspective Tilt (Profile & Action Buttons)
  var tiltElements = document.querySelectorAll('.tilt-element');
  tiltElements.forEach(function (el) {
    el.addEventListener('mousemove', function (e) {
      var rect = el.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      var maxTilt = 8;
      var tiltX = (y / (rect.height / 2)) * -maxTilt;
      var tiltY = (x / (rect.width / 2)) * maxTilt;
      el.style.transform = 'perspective(600px) rotateX(' + tiltX.toFixed(2) + 'deg) rotateY(' + tiltY.toFixed(2) + 'deg) scale3d(1.04, 1.04, 1.04)';
    });

    el.addEventListener('mouseleave', function () {
      el.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  // 3. Tab Switch: Smooth scroll top if user was scrolled past the tabs
  if (typeof $ !== 'undefined') {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      // Natural tab switch handled cleanly by CSS
    });
  }
});