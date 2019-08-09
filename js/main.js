// Initiate highlight.js
hljs.initHighlightingOnLoad();

$(document).ready(function() {
    // Initiate fullpage.js
    $('#fullpage').fullpage({
        sectionSelector: '.vertical-scrolling',
        navigation: true,
        css3: true,
        controlArrows: true,
        menu: '#myNavbar',
        touchSensitivity: 15,
        anchors: ['Welcome', 'Overview', 'Week_1', 'Week_1_Challenges', 'Weeks_2-6', 'Weeks_2-6_continued', 'Weeks_2-6_Challenges', 'Week_7', 'Week_7_Challenges', 'Weeks_8-10', 'Weeks_8-10_continued', 'Weeks_8-10_Challenges', 'Retrospect'],
        navigationTooltips: ['Welcome', 'Overview', 'Week 1', 'Week 1: Challenges', 'Weeks 2-6', 'Weeks 2-6 (continued)', 'Weeks 2-6: Challenges', 'Week 7', 'Week 7: Challenges', 'Weeks 8-10', 'Weeks 8-10 (continued)', 'Weeks 8-10: Challenges', 'Retrospect']
    });
})