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
              expect(feed.url).toBeDefined();   // url defined check
              expect(feed.url.length).not.toBe(0);    // url empty check
            }
        });

        // Feed Name Check
        it('name is defined', function() {
            for(let feed of allFeeds) {  // loops through feeds
              expect(feed.name).toBeDefined();   // name defined check
              expect(feed.name.length).not.toBe(0);    // name empty check
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
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
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
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
