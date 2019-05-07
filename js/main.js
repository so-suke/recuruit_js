const $window = $(window);
const $body = $('body');
const $headerNavToggle = $('#headerNavToggle');
const $headerNav = $('#headerNav');
// const $headerNavItemLinks = $('.header__navItem > a');
const $headerNavItemLinks = $('.header__navItem:has(.childNavList) > a');
const $childNavList = $('.childNavList');
let enterTimer = null;
const $navOverlay = $('#navOverlay');
const $navLink = $(".header__navItem > a");
//あとで消す
const $entireBackgroud = $('#entireBackgroud');
const $entireBackgroudItem = {
  large: $entireBackgroud.find('.large'),
  medium: $entireBackgroud.find('.medium'),
  small: $entireBackgroud.find('.small'),
}
const $visual = $("#visual");
const $visualPositions = $visual.find('.position');
const $visualImg = {
  back: $visualPositions.filter('[data-position="back"]').find('img'),
  middle: $visualPositions.filter('[data-position="middle"]').find('img'),
  front: $visualPositions.filter('[data-position="front"]').find('img'),
}
const $visualBg = $('#visualBg');
const $visualLogoTitle = $('#visualLogoTitle');
const $concept = $("#concept");
const $column = $('.column');
const $columnCulture = $("#columnCulture");
const $columnSkill = $("#columnSkill");
const offset = {
  concept: $concept.offset().top,
}
//あとで消す
let scTop = $window.scrollTop();
let animaEndTimer = null;
const BREAKPOINT_MEDIUM = 767;
const MEDIA_QUERIES = {
  LARGE: 'MEDIA_QUERIES_LARGE',
  MEDIUM: 'MEDIA_QUERIES_MEDIUM',
}
let mediaQueries = null;

const resetMediaQueries = () => {
  const windowSize = $window.width();
  windowSize > BREAKPOINT_MEDIUM ? mediaQueries = MEDIA_QUERIES.LARGE : mediaQueries = MEDIA_QUERIES.MEDIUM;
}

$window.on('load resize', () => {
  resetMediaQueries();
});

// const animaEnd = () => {
//   clearTimeout(animaEndTimer);
//   animaEndTimer = setTimeout(() => {
//     $headerNav.removeClass("anima");
//   }, 1000);
// }

$headerNavToggle.click(() => {
  if ($body.hasClass('navOpen')) {
    $navOverlay.css('transform', 'scale(1)');

  } else {
    $navOverlay.css('transform', 'scale(38.35)');
  }
  $body.toggleClass("navOpen");
  $headerNav.addClass("anima");
  animaEnd();
});

$navLink.click((event) => {
  if (mediaQueries === MEDIA_QUERIES.MEDIUM) {
    event.preventDefault();
    const $currentTarget = $(event.currentTarget);
    const $childnavList = $($currentTarget.next());
    if ($currentTarget.hasClass('show')) {
      $currentTarget.removeClass('show');
      $childnavList.slideUp(600);
    } else {
      $currentTarget.addClass('show');
      $childnavList.slideDown(600);
    }
  }
});

const doneAnimation = {
  visual: () => {
    $visual.addClass("active");
    setTimeout(() => {
      $visual.addClass("fix");
    }, 3000);
  },
  concept: () => {
    $concept.addClass("active");
    setTimeout(() => {
      $concept.addClass("fix");
    }, 3000);
  },
  column: ({ $element }) => {
    $element.addClass("active");
    setTimeout(() => {
      $element.addClass("fix");
    }, 3000);
  },
  columnCulture: () => $columnCulture.addClass("active"),
  columnSkill: () => $columnSkill.addClass("active"),
}

doneAnimation.visual();
window.addEventListener("scroll", function () {
  scTop = $window.scrollTop();
  const pxNum = {
    visualBg: Math.floor(scTop / 12),
    visualImgBack: Math.floor(scTop / 11),
    visualImgMiddle: Math.floor(scTop / 8),
    visualImgFront: Math.floor(scTop / 7),
    visualTitle: Math.floor(scTop / 4),
    bgLarge: Math.floor(scTop / -3),
    bgMedium: Math.floor(scTop / -6),
    bgSmall: Math.floor(scTop / -8),
  }
  $visualBg.css('transform', `translateY(${pxNum.visualBg}px)`);
  $visualImg.back.css('transform', `translateY(${pxNum.visualImgBack}px)`);
  $visualImg.middle.css('transform', `translateY(${pxNum.visualImgMiddle}px)`);
  $visualImg.front.css('transform', `translateY(${pxNum.visualImgFront}px)`);
  $visualLogoTitle.css('transform', `translateY(${pxNum.visualTitle}px)`);
  $entireBackgroudItem.large.css('transform', `translateY(${pxNum.bgLarge}px)`);
  $entireBackgroudItem.medium.css('transform', `translateY(${pxNum.bgMedium}px)`);
  $entireBackgroudItem.small.css('transform', `translateY(${pxNum.bgSmall}px)`);

  if (scTop + $window.height() > offset.concept) {
    doneAnimation.concept();
  }

  $column.each((idx, element) => {
    const $element = $(element);
    const pointer = $element.offset().top;
    if (scTop + $window.height() > pointer) {
      doneAnimation.column({ $element });
    }
  });
});

const animaEnd = (element) => {
  const $currentTarget = $(element.currentTarget);
  $currentTarget.removeClass('anima');
}

const subNavLeave = (element) => {
  const $currentTarget = $(element.currentTarget);
  clearTimeout(enterTimer);
  $currentTarget.removeClass("active").addClass("anima");
}

$childNavList.on('transitionend', animaEnd).on('mouseleave', subNavLeave);

$headerNavItemLinks.mouseenter((event) => {
  const $currentTarget = $(event.currentTarget);
  const $childnavList = $currentTarget.next();
  clearTimeout(enterTimer);
  enterTimer = setTimeout(() => {
    $childnavList.addClass('active anima');
  }, 200);
});
$headerNavItemLinks.mouseleave((event) => {
  const $currentTarget = $(event.currentTarget);
  const $childnavList = $currentTarget.next();
  var btmLine = $currentTarget.offset().top + $currentTarget.outerHeight();
  if (event.clientY + scTop < btmLine) {
    leaveTimer = setTimeout(() => {
      $childnavList.removeClass('active').addClass('anima');
    }, 200);
  }
  clearTimeout(enterTimer);
});
