/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Feed URL Check
        it('url is defined', function() {
            for(let feed of allFeeds) {  // loops through feeds
              expect(feed.url).toBeDefined();   // check if url is defined
              expect(feed.url.length).not.toBe(0);    // check if url is empty
            }
        });

        // Feed Name Check
        it('name is defined', function() {
            for(let feed of allFeeds) {  // loops through feeds
              expect(feed.name).toBeDefined();   // check if name is defined
              expect(feed.name.length).not.toBe(0);    // check if name is empty
            }
        });
    });

    // The menu test suite
    describe('The menu', function() {

        // Menu hidden as standard check
        it('menu is hidden', function() {
            const body = document.querySelector('body'); // select body element
            expect(body.classList.contains('menu-hidden')).toBe(true); // check menu is hidden using menu-hidden class
        });

        // Menu toggles when menu icon is clicked
        it('menu display toggles', function() {
            const body = document.querySelector('body'); // select body element
            const menu = document.querySelector('.menu-icon-link'); // select menu element
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false); // check menu toggles on when icon is clicked
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true); // check menu toggles off when icon is clicked again
        });
    });

    // Initial entries test suite
    describe('Initial Entries', function() {

        // Call loadFeed & singnal to Jasmine when done to proceed with test
        beforeEach(function(done) {
          loadFeed(0, done);
        });

        // Feed container contains an entry when loadFeed
        it('loadFeed completes', function() {
            const feed = document.querySelector('.feed'); // select feed
            expect(feed.children.length > 0).toBe(true); // check feed container contains an entry
        });
    });
    
    // New feed selection test suite
    describe('New Feed Selection', function() {
        let firstFeed;    // variable for first feed
        let secondFeed;   // variable for second feed

        // Call feeds & singnal to Jasmine when done to proceed with test
        beforeEach(function(done) {
          loadFeed(0, function(){   // load first feed
              firstFeed = document.querySelector('.feed').innerHTML;    // assign feed inner html to firstFeed variable
          });
          loadFeed(1, function() {    // load second feed
              secondFeed = document.querySelector('.feed').innerHTML;   // assign feed inner html to secondFeed variable
              done();
          });

        });

    // Check feeds are not the same
    it('content changes', function() {
      expect(firstFeed).not.toEqual(secondFeed);    // check variables are different
    });
});

}());
